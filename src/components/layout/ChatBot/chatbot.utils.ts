import { CHAT_INTENTS, CHATBOT_CONFIG } from "./chatbot.data";

export function normalizeText(value: string): string {
    return value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function matchesKeyword(
    normalizedMessage: string,
    keyword: string
): boolean {
    const normalizedKeyword = normalizeText(keyword);

    if (!normalizedKeyword) return false;

    return ` ${normalizedMessage} `.includes(
        ` ${normalizedKeyword} `
    );
}

export function getChatbotResponse(message: string): string {
    const normalizedMessage = normalizeText(message);

    if (!normalizedMessage) {
        return "Digite sua pergunta para que eu possa ajudar.";
    }

    const rankedIntents = CHAT_INTENTS.map((intent) => {
        const matchedKeywords = intent.keywords.filter((keyword) =>
            matchesKeyword(normalizedMessage, keyword)
        );

        return {
            intent,
            score: matchedKeywords.length * 10 + (intent.priority ?? 0),
            matched: matchedKeywords.length > 0,
        };
    })
        .filter((result) => result.matched)
        .sort((a, b) => b.score - a.score);

    if (rankedIntents.length > 0) {
        return rankedIntents[0].intent.response;
    }

    return CHATBOT_CONFIG.fallback;
}
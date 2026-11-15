export type ChatMessage = {
    id: string;
    role: "assistant" | "user";
    content: string;
    timestamp: Date;
};

export type ChatIntent = {
    id: string;
    keywords: string[];
    response: string;
    priority?: number;
};

export type QuickQuestion = {
    id: string;
    label: string;
    question: string;
};
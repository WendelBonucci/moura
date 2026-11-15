import type { ChatIntent, QuickQuestion } from "./chatbot.types";

export const CHATBOT_CONFIG = {
    name: "Assistente Moura",
    welcome:
        "Olá! Seja bem-vindo à Moura Urbanismo. Como posso ajudar você hoje?",
    fallback:
        "Não encontrei uma resposta específica para sua pergunta. Posso ajudar com informações sobre empreendimentos, localização, atendimento e contato com nossa equipe.",
};

export const QUICK_QUESTIONS: QuickQuestion[] = [
    {
        id: "empreendimentos",
        label: "Empreendimentos",
        question: "Quais são os empreendimentos da Moura?",
    },
    {
        id: "localizacao",
        label: "Localização",
        question: "Onde ficam os empreendimentos?",
    },
    {
        id: "pagamento",
        label: "Pagamento",
        question: "Quais são as condições de pagamento?",
    },
    {
        id: "atendimento",
        label: "Atendimento",
        question: "Como posso falar com um atendente?",
    },
];

export const CHAT_INTENTS: ChatIntent[] = [
    {
        id: "saudacao",
        keywords: [
            "oi",
            "ola",
            "bom dia",
            "boa tarde",
            "boa noite",
            "tudo bem",
        ],
        response:
            "Olá! É um prazer receber você. Posso ajudar com informações sobre a Moura Urbanismo e seus empreendimentos.",
        priority: 1,
    },
    {
        id: "empreendimentos",
        keywords: [
            "empreendimento",
            "empreendimentos",
            "loteamento",
            "loteamentos",
            "terreno",
            "terrenos",
            "lote",
            "lotes",
        ],
        response:
            "A Moura Urbanismo possui empreendimentos imobiliários planejados. Você pode conhecer as opções disponíveis na seção Empreendimentos do nosso site.",
        priority: 3,
    },
    {
        id: "localizacao",
        keywords: [
            "localizacao",
            "localizado",
            "localizados",
            "onde fica",
            "onde ficam",
            "endereco",
            "cidade",
            "regiao",
        ],
        response:
            "Você pode consultar a localização de cada loteamento na página do respectivo empreendimento. Para informações mais específicas, nossa equipe de atendimento poderá ajudar.",
        priority: 4,
    },
    {
        id: "pagamento",
        keywords: [
            "pagamento",
            "parcelamento",
            "parcela",
            "parcelas",
            "financiamento",
            "entrada",
            "preco",
            "valor",
            "quanto custa",
        ],
        response:
            "As condições comerciais podem variar conforme o empreendimento e a disponibilidade. Para receber valores e condições atualizados, recomendamos entrar em contato com nossa equipe.",
        priority: 4,
    },
    {
        id: "boleto",
        keywords: [
            "boleto",
            "segunda via",
            "2 via",
            "vencimento",
            "fatura",
        ],
        response:
            "Para assuntos relacionados a boletos, vencimentos ou segunda via, recomendamos procurar os canais oficiais de atendimento da Moura Urbanismo. Por segurança, não envie dados bancários ou documentos pessoais neste chat.",
        priority: 5,
    },
    {
        id: "contato",
        keywords: [
            "contato",
            "atendente",
            "atendimento",
            "whatsapp",
            "telefone",
            "sac",
            "falar com alguem",
            "falar com pessoa",
        ],
        response:
            "Nossa equipe está disponível pelos canais oficiais de atendimento. Acesse a seção Contato do site para encontrar a melhor forma de falar conosco.",
        priority: 4,
    },
    {
        id: "empresa",
        keywords: [
            "sobre a moura",
            "quem e a moura",
            "sobre voces",
            "historia",
            "empresa",
        ],
        response:
            "A Moura Urbanismo atua no desenvolvimento de empreendimentos imobiliários e loteamentos planejados. Você pode conhecer mais sobre nossa trajetória na seção Sobre Nós.",
        priority: 3,
    },
    {
        id: "agradecimento",
        keywords: [
            "obrigado",
            "obrigada",
            "valeu",
            "agradeco",
        ],
        response:
            "Por nada! Foi um prazer ajudar. Sempre que precisar, estarei por aqui.",
        priority: 2,
    },
];
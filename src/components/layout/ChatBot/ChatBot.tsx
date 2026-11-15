"use client";

import { ArrowDown, ArrowUp, Bot, MessageCircle, RotateCcw, Sparkles, X, } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent, } from "react";

import { CHATBOT_CONFIG, QUICK_QUESTIONS, } from "./chatbot.data";
import { getChatbotResponse } from "./chatbot.utils";
import type { ChatMessage } from "./chatbot.types";

const INITIAL_MESSAGE: ChatMessage = {
    id: "welcome",
    role: "assistant",
    content: CHATBOT_CONFIG.welcome,
    timestamp: new Date(),
};

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<ChatMessage[]>([
        INITIAL_MESSAGE,
    ]);
    const [isTyping, setIsTyping] = useState(false);

    const scrollRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const responseTimer = useRef<ReturnType<typeof setTimeout> | null>(
        null
    );

    useEffect(() => {
        if (!isOpen) return;

        scrollRef.current?.scrollTo({
            top: scrollRef.current.scrollHeight,
            behavior: "smooth",
        });
    }, [messages, isTyping, isOpen]);

    useEffect(() => { if (isOpen) { inputRef.current?.focus(); } }, [isOpen]);

    useEffect(() => {
        return () => {
            if (responseTimer.current) {
                clearTimeout(responseTimer.current);
            }
        };
    }, []);

    function sendMessage(value: string) {
        const content = value.trim();

        if (!content || isTyping) return;

        const userMessage: ChatMessage = {
            id: crypto.randomUUID(),
            role: "user",
            content,
            timestamp: new Date(),
        };

        setMessages((current) => [...current, userMessage]);
        setInput("");
        setIsTyping(true);

        responseTimer.current = setTimeout(() => {
            const response = getChatbotResponse(content);

            const assistantMessage: ChatMessage = {
                id: crypto.randomUUID(),
                role: "assistant",
                content: response,
                timestamp: new Date(),
            };

            setMessages((current) => [
                ...current,
                assistantMessage,
            ]);

            setIsTyping(false);
            responseTimer.current = null;
        }, 650);
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        sendMessage(input);
    }

    function resetChat() {
        if (responseTimer.current) {
            clearTimeout(responseTimer.current);
            responseTimer.current = null;
        }

        setMessages([
            {
                ...INITIAL_MESSAGE,
                timestamp: new Date(),
            },
        ]);
        setInput("");
        setIsTyping(false);
    }

    return (
        <div className="fixed right-4 bottom-4 z-50 sm:right-6 sm:bottom-6">
            {isOpen && (
                <section aria-label="Chat de atendimento Moura Urbanismo" className="mb-4 flex h-[min(620px,calc(100dvh-110px))] w-[calc(100vw-32px)] flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl sm:w-97.5">

                    <header className="flex items-center justify-between bg-[#0F0F0F] px-5 py-4 text-white">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                                <Bot size={21} strokeWidth={1.7} />
                            </div>

                            <div>
                                <h2 className="text-sm font-semibold tracking-wide">
                                    {CHATBOT_CONFIG.name}
                                </h2>

                                <p className="mt-0.5 text-xs text-white/60">
                                    Atendimento virtual
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-1">
                            <button
                                type="button"
                                onClick={resetChat}
                                aria-label="Reiniciar conversa"
                                title="Reiniciar conversa"
                                className="rounded-lg p-2 text-white/70 transition hover:bg-white/10 hover:text-white">
                                <RotateCcw size={17} />
                            </button>

                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                aria-label="Fechar atendimento"
                                className="rounded-lg p-2 text-white/70 transition hover:bg-white/10 hover:text-white">
                                <X size={19} />
                            </button>
                        </div>
                    </header>

                    <div
                        ref={scrollRef}
                        role="log"
                        aria-label="Mensagens da conversa"
                        aria-live="polite"
                        className="flex-1 space-y-5 overflow-y-auto bg-[#F7F7F5] px-4 py-5">
                        {messages.map((message) => {
                            const isAssistant = message.role === "assistant";

                            return (
                                <div key={message.id} className={`flex ${isAssistant ? "justify-start" : "justify-end"}`}>
                                    <div
                                        className={`max-w-[88%] rounded-2xl px-4 py-3 text-[13px] leading-relaxed ${isAssistant
                                            ? "rounded-tl-sm border border-black/5 bg-white text-[#252525]"
                                            : "rounded-tr-sm bg-[#0F0F0F] text-white"
                                            }`}>
                                        <p className="whitespace-pre-wrap">
                                            {message.content}
                                        </p>

                                        <p className={`mt-2 text-right text-[10px] ${isAssistant ? "text-black/35" : "text-white/45"}`}>
                                            {message.timestamp.toLocaleTimeString("pt-BR",
                                                { hour: "2-digit", minute: "2-digit", })}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}

                        {isTyping && (
                            <div className="flex items-center gap-2 text-xs text-black/45">
                                <span className="flex gap-1 rounded-xl bg-white px-4 py-3">
                                    {[0, 1, 2].map((index) => (
                                        <span
                                            key={index}
                                            className="h-1.5 w-1.5 animate-pulse rounded-full bg-black/40"
                                            style={{ animationDelay: `${index * 150}ms`, }} />
                                    ))}
                                </span>
                                Digitando...
                            </div>
                        )}

                        {messages.length === 1 && (
                            <div className="pt-2">
                                <p className="mb-3 text-xs font-medium text-black/50">
                                    Como posso ajudar?
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {QUICK_QUESTIONS.map((item) => (
                                        <button
                                            key={item.id}
                                            type="button"
                                            onClick={() => sendMessage(item.question)}
                                            className="rounded-full border border-black/10 bg-white px-3 py-2 text-xs text-black/75 transition hover:border-black/30 hover:text-black"
                                        >
                                            {item.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <form onSubmit={handleSubmit} className="border-t border-black/5 bg-white p-3">
                        <div className="flex items-center gap-2 rounded-xl border border-black/10 bg-[#FAFAFA] p-1.5 focus-within:border-black/30">
                            <input
                                ref={inputRef}
                                value={input}
                                onChange={(event) => setInput(event.target.value)}
                                maxLength={500}
                                placeholder="Escreva sua mensagem..."
                                aria-label="Escreva sua mensagem"
                                className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-black outline-none placeholder:text-black/35" />

                            <button
                                type="submit"
                                disabled={!input.trim() || isTyping}
                                aria-label="Enviar mensagem"
                                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0F0F0F] text-white transition hover:bg-black/80 disabled:cursor-not-allowed disabled:opacity-30">
                                <ArrowUp size={18} />
                            </button>
                        </div>

                        <div className="mt-2 flex items-center justify-center gap-1.5">
                            <Sparkles size={11} className="text-black/30" />
                            <span className="text-[10px] text-black/40">
                                Assistente virtual Moura Urbanismo
                            </span>
                        </div>
                    </form>
                </section>
            )}

            <div className="flex justify-end">
                <button
                    type="button"
                    onClick={() => setIsOpen((current) => !current)}
                    aria-label={isOpen ? "Fechar chatbot" : "Abrir atendimento virtual"}
                    aria-expanded={isOpen}
                    className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#0F0F0F] text-white shadow-xl transition duration-300 hover:scale-105 hover:bg-[#252525] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
                >
                    {isOpen ? (
                        <ArrowDown size={23} strokeWidth={1.7} />
                    ) : (
                        <MessageCircle
                            size={25}
                            strokeWidth={1.7}
                            className="transition-transform group-hover:scale-110"
                        />
                    )}
                </button>
            </div>
        </div>
    );
}
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, Building2, CalendarDays, CheckCircle2, Clock3, MapPin, X, } from "lucide-react";

type Development = {
    id: number;
    name: string;
    image: string;
    description: string;
    location?: string;
    category: string;
    installments?: string;
    badge?: string;
};

const developments: Development[] = [
    {
        id: 1,
        name: "Caminhos da Praia",
        image: "/images/caminhodaPraia.png",
        description:
            "Um empreendimento planejado para quem busca tranquilidade, qualidade de vida e novas possibilidades perto do litoral.",
        location: "Majorlândia - CE",
        category: "Loteamento aberto",
        badge: "Conheça o empreendimento",
    },
    {
        id: 2,
        name: "Canoa Residence",
        image: "/images/canoaResidence.png",
        description:
            "Um espaço pensado para unir conforto, localização e a experiência de viver próximo às belezas do litoral cearense.",
        location: "Canoa Quebrada - CE",
        category: "Loteamento aberto",
        badge: "Oportunidade",
    },
    {
        id: 3,
        name: "Recanto da Serra",
        image: "/images/recantodaSerra.png",
        description:
            "Um empreendimento que valoriza o contato com a natureza e oferece novas oportunidades para construir o seu futuro.",
        category: "Empreendimento imobiliário",
        badge: "Conheça o empreendimento",
    },
];

export default function CardsDevelopment() {
    const [selectedDevelopment, setSelectedDevelopment] =
        useState<Development | null>(null);

    const reduceMotion = useReducedMotion();
    const closeButtonRef = useRef<HTMLButtonElement>(null);
    const previousFocusRef = useRef<HTMLElement | null>(null);

    const closeModal = () => setSelectedDevelopment(null);

    const openModal = (development: Development) => {
        previousFocusRef.current =
            document.activeElement instanceof HTMLElement
                ? document.activeElement
                : null;

        setSelectedDevelopment(development);
    };

    useEffect(() => {
        if (!selectedDevelopment) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const frame = requestAnimationFrame(() => {
            closeButtonRef.current?.focus();
        });

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setSelectedDevelopment(null);
                return;
            }

            if (event.key === "Tab") {
                // O modal contém apenas o botão de fechar.
                // Mantém a navegação por teclado dentro dele.
                event.preventDefault();
                closeButtonRef.current?.focus();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            cancelAnimationFrame(frame);
            document.body.style.overflow = previousOverflow;
            document.removeEventListener("keydown", handleKeyDown);
            previousFocusRef.current?.focus();
        };
    }, [selectedDevelopment]);

    return (
        <section
            id="empreendimentos"
            aria-labelledby="developments-title"
            className="scroll-mt-24 bg-[#F6F9F6] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
            <div className="mx-auto w-full max-w-360">

                <motion.div
                    initial={{ opacity: 0, y: reduceMotion ? 0 : 25, }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: reduceMotion ? 0 : 0.65 }}
                    className="mb-12 flex flex-col gap-5 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-2xl">
                        <span className="mb-5 inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] text-[#348B4C] uppercase sm:text-sm">
                            <span className="h-2 w-2 rounded-full bg-[#0BDA51]" />
                            Nossas oportunidades
                        </span>

                        <h2 id="developments-title" className="text-3xl font-bold tracking-tight text-[#0F1F17] sm:text-4xl lg:text-5xl">
                            Encontre o lugar ideal para
                            <span className="block text-[#348B4C]">
                                construir sua história.
                            </span>
                        </h2>

                        <p className="mt-5 max-w-xl text-base leading-8 text-[#647168]">
                            Conheça nossos empreendimentos e descubra oportunidades
                            planejadas para diferentes estilos de vida, com o
                            compromisso e a experiência da Moura Urbanismo.
                        </p>
                    </div>

                    <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#D8E8DB] bg-white px-4 py-2.5 text-xs font-semibold text-[#348B4C]">
                        <Building2 size={16} aria-hidden="true" />
                        {developments.length} empreendimentos em destaque
                    </div>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {developments.map((development, index) => (
                        <motion.article
                            key={development.id}
                            initial={{ opacity: 0, y: reduceMotion ? 0 : 30, }}
                            whileInView={{ opacity: 1, y: 0, }}
                            viewport={{ once: true, amount: 0.12 }}
                            transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : index * 0.1, ease: "easeOut", }}
                            whileHover={reduceMotion ? undefined : { y: -6 }}
                            className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#DFE8E0] bg-white shadow-[0_8px_35px_rgba(15,31,23,0.035)] transition-colors duration-300 hover:border-[#B8D7BE]">

                            <div className="relative h-60 overflow-hidden sm:h-65">
                                <Image
                                    src={development.image}
                                    alt={`Imagem do empreendimento ${development.name}`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transform-none" />

                                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#0F1F17]/55 via-transparent to-transparent" />

                                <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/95 px-4 py-2 text-xs font-semibold text-[#1E3A2E] shadow-sm backdrop-blur-md">
                                    {development.category}
                                </span>

                                {development.badge && (
                                    <span className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#0F1F17]/70 px-3.5 py-2 text-xs font-medium text-white backdrop-blur-md">
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#0BDA51]" />
                                        {development.badge}
                                    </span>
                                )}
                            </div>

                            <div className="flex flex-1 flex-col p-6 sm:p-7">
                                <div className="flex items-start justify-between gap-3">
                                    <h3 className="text-2xl font-bold tracking-tight text-[#0F1F17]">
                                        {development.name}
                                    </h3>

                                    <ArrowRight size={21} aria-hidden="true" className="mt-1 shrink-0 -rotate-45 text-[#348B4C] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </div>

                                <p className="mt-4 min-h-21 text-sm leading-7 text-[#647168]">
                                    {development.description}
                                </p>

                                <div className="mt-6 flex flex-col gap-3 border-t border-[#E8EEE9] pt-5">
                                    {development.location && (
                                        <div className="flex items-center gap-2.5 text-sm text-[#53675A]">
                                            <MapPin size={17} className="shrink-0 text-[#348B4C]" aria-hidden="true" />
                                            {development.location}
                                        </div>
                                    )}

                                    <div className="flex items-center gap-2.5 text-sm text-[#53675A]">
                                        <CheckCircle2
                                            size={17}
                                            className="shrink-0 text-[#348B4C]"
                                            aria-hidden="true"
                                        />
                                        Conheça mais sobre este projeto
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => openModal(development)}
                                    className="group/button mt-7 inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-3 rounded-xl bg-[#1E3A2E] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#2E7D45] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#348B4C]"  >
                                    Saiba mais
                                    <ArrowRight size={18} aria-hidden="true" className="transition-transform duration-300 group-hover/button:translate-x-1" />
                                </button>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: reduceMotion ? 0 : 20, }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: reduceMotion ? 0 : 0.6 }}
                    className="mt-12 flex flex-col items-center gap-3 text-center">
                    <p className="text-sm leading-7 text-[#647168]">
                        Estamos preparando novas experiências para apresentar
                        cada empreendimento com ainda mais detalhes.
                    </p>
                </motion.div>
            </div>

            <AnimatePresence>
                {selectedDevelopment && (
                    <div className="fixed inset-0 z-100 flex items-center justify-center px-4 py-6">
                        <motion.button
                            type="button"
                            aria-label="Fechar aviso"
                            tabIndex={-1}
                            onClick={closeModal}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: reduceMotion ? 0 : 0.2 }}
                            className="absolute inset-0 h-full w-full cursor-default bg-[#0F1F17]/70 backdrop-blur-sm" />

                        <motion.div
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="development-modal-title"
                            aria-describedby="development-modal-description"
                            initial={{ opacity: 0, y: reduceMotion ? 0 : 20, scale: reduceMotion ? 1 : 0.96, }}
                            animate={{ opacity: 1, y: 0, scale: 1, }}
                            exit={{ opacity: 0, y: reduceMotion ? 0 : 12, scale: reduceMotion ? 1 : 0.97, }}
                            transition={{ duration: reduceMotion ? 0 : 0.3, ease: "easeOut", }}
                            className="relative z-10 w-full max-w-115 overflow-hidden rounded-3xl bg-white p-7 text-center shadow-2xl sm:p-9">

                            <button
                                ref={closeButtonRef}
                                type="button"
                                onClick={closeModal}
                                aria-label="Fechar janela"
                                className="absolute right-4 top-4 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#F1F5F1] text-[#53675A] transition-colors hover:bg-[#E4EEE6]">
                                <X size={19} aria-hidden="true" />
                            </button>

                            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#EAF6ED] text-[#348B4C]">
                                <Clock3 size={36} strokeWidth={1.6} aria-hidden="true" />
                            </div>

                            <span className="inline-flex items-center gap-2 rounded-full bg-[#F1F7F2] px-4 py-2 text-xs font-semibold text-[#348B4C]">
                                <CalendarDays size={15} aria-hidden="true" />
                                Em desenvolvimento
                            </span>

                            <h2 id="development-modal-title" className="mt-6 text-2xl font-bold tracking-tight text-[#0F1F17] sm:text-3xl">
                                Estamos preparando novidades!
                            </h2>

                            <p id="development-modal-description" className="mt-4 text-sm leading-7 text-[#647168] sm:text-base">
                                A página do empreendimento{" "}
                                <strong className="font-semibold text-[#1E3A2E]">
                                    {selectedDevelopment.name}
                                </strong>{" "}
                                ainda está em desenvolvimento.
                                Em breve, você poderá conhecer todos os detalhes,
                                características e informações do projeto.
                            </p>

                            <div className="mt-7 rounded-xl border border-[#DDE9DF] bg-[#F7FAF7] px-4 py-3">
                                <p className="text-xs leading-6 text-[#647168]">
                                    Agradecemos seu interesse e sua compreensão.
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={closeModal}
                                className="mt-7 inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#1E3A2E] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2E7D45]" >
                                Entendi, obrigado!
                                <CheckCircle2 size={18} aria-hidden="true" />
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
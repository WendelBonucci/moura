"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowUpRight, MapPin, Quote, Home, type LucideIcon, } from "lucide-react";

type ItemCard = {
    id: number;
    client: string;
    text: string;
    local: string;
    icon: LucideIcon;
};

const cards: ItemCard[] = [
    {
        id: 1,
        client: "João Sobreira",
        text: "Facilidade na hora de escolher e financiar. Quando vi já estava construindo a casa da minha família.",
        local: "Cascavel, CE",
        icon: MapPin,
    },
    {
        id: 2,
        client: "Maria de Lourdes",
        text: "Foi muito mais fácil com a Moura garantir o meu lote para realizar o sonho da casa própria.",
        local: "Crateús, CE",
        icon: MapPin,
    },
    {
        id: 3,
        client: "Fernando Queiroz",
        text: "Comprei alguns lotes no local onde sempre quis abrir minha empresa, ficou mais fácil com as condições da Moura.",
        local: "Santa Quitéria, CE",
        icon: MapPin,
    },
];

export default function Comments() {
    const reduceMotion = useReducedMotion();

    const fadeUp = {
        hidden: { opacity: 0, y: reduceMotion ? 0 : 30 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section id="depoimentos" className="relative w-full overflow-hidden bg-[#F8FAF8] py-20 sm:py-24 lg:py-32">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeUp}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
                    <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#2F713A]/15 bg-[#2F713A]/5 px-4 py-2 text-xs font-semibold text-[#2F713A] sm:text-sm">
                        <span className="h-2 w-2 rounded-full bg-[#0BDA51]" />
                        Histórias que nos inspiram
                    </span>

                    <h2 className="text-3xl leading-tight font-bold tracking-tight text-[#0F0F0F] sm:text-4xl lg:text-5xl">
                        Sonhos realizados,{" "}
                        <span className="text-[#2F713A]">
                            histórias compartilhadas.
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#6B726D] sm:text-lg">
                        Conheça algumas experiências de quem escolheu a Moura
                        para dar o próximo passo em seus projetos de vida.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                    {cards.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.article
                                key={item.id}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.15 }}
                                variants={fadeUp}
                                transition={{
                                    duration: 0.55,
                                    delay: reduceMotion ? 0 : index * 0.12,
                                    ease: "easeOut",
                                }}
                                whileHover={reduceMotion ? undefined : { y: -6 }}
                                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#1E3A2E]/10 bg-white p-7 transition-[border-color,box-shadow] duration-300 hover:border-[#2F713A]/25 hover:shadow-[0_20px_55px_-25px_rgba(15,31,23,0.22)] sm:p-8">

                                <div className="mb-7 flex items-center justify-between">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E7F3E9] text-[#2F713A] transition-colors duration-300 group-hover:bg-[#1E3A2E] group-hover:text-white">
                                        <Quote size={23} strokeWidth={1.7} aria-hidden="true" />
                                    </div>

                                    <span className="text-xs font-semibold tracking-widest text-[#A4B6A7]">
                                        0{item.id}
                                    </span>
                                </div>

                                <blockquote className="mb-9 flex-1 text-base leading-8 text-[#4B554D]">
                                    “{item.text}”
                                </blockquote>

                                <div className="flex items-center gap-3 border-t border-[#1E3A2E]/10 pt-6">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E7F3E9] text-sm font-bold text-[#2F713A]">
                                        {item.client
                                            .split(" ")
                                            .slice(0, 2)
                                            .map((name) => name[0])
                                            .join("")}
                                    </div>

                                    <div className="min-w-0">
                                        <h3 className="text-sm font-semibold text-[#0F0F0F]">
                                            {item.client}
                                        </h3>

                                        <p className="mt-1 flex items-center gap-1.5 text-xs text-[#7A847C]">
                                            <Icon size={13} aria-hidden="true" />
                                            {item.local}
                                        </p>
                                    </div>
                                </div>

                                <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-[#2F713A] transition-transform duration-500 group-hover:scale-x-100" />
                            </motion.article>
                        );
                    })}
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeUp}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="relative mt-14 overflow-hidden rounded-[28px] bg-[#1E3A2E] px-6 py-12 text-white sm:mt-16 sm:px-10 sm:py-14 lg:px-14 lg:py-16">

                    <div className="pointer-events-none absolute -top-32 -right-24 h-80 w-80 rounded-full border border-white/10" />
                    <div className="pointer-events-none absolute -top-20 -right-10 h-60 w-60 rounded-full border border-white/10" />
                    <div className="pointer-events-none absolute right-0 bottom-0 h-64 w-64 rounded-full bg-[#0BDA51]/10 blur-3xl" />

                    <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center lg:gap-12">

                        <div className="max-w-2xl">
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-[#BDE8C5]">
                                <Home size={15} aria-hidden="true" />
                                Seu futuro começa aqui
                            </div>

                            <h2 className="text-3xl leading-tight font-bold tracking-tight sm:text-4xl lg:text-[2.65rem]">
                                O próximo sonho realizado{" "}
                                <span className="text-[#7DE49A]">
                                    pode ser o seu.
                                </span>
                            </h2>

                            <p className="mt-5 max-w-xl text-base leading-8 text-white/75">
                                Encontre o lote ideal para construir sua casa ou
                                investir no seu futuro. Conheça nossos empreendimentos
                                e descubra as condições disponíveis.
                            </p>
                        </div>

                        <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto">
                            <Link
                                href="/empreendimentos"
                                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#0BDA51] px-7 py-3.5 text-sm font-bold whitespace-nowrap text-[#0F1F17] transition-all duration-300 hover:bg-neongreen hover:shadow-lg hover:shadow-[#0BDA51]/15">
                                Quero conquistar meu lote
                                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>

                            <Link
                                href="/contato"
                                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/15">
                                Falar com um consultor
                                <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
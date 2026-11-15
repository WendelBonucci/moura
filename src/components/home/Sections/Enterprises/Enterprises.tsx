"use client";

import { motion, useReducedMotion } from "motion/react";
import { MapPin, ArrowUpRight } from "lucide-react";

type ItemEnterprise = {
    id: number;
    title: string;
};

const cards: ItemEnterprise[] = [
    { id: 1, title: "Cascavel - CE" },
    { id: 2, title: "Aracati - CE" },
    { id: 3, title: "Aquiraz - CE" },
    { id: 4, title: "Pacatuba - CE" },
    { id: 5, title: "Pacajus - CE" },
    { id: 6, title: "Horizonte - CE" },
    { id: 7, title: "Nova Russas - CE" },
];

export default function Enterprises() {
    const reduceMotion = useReducedMotion();

    return (
        <section aria-labelledby="enterprises-title" className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24">

            <div className="mx-auto mb-12 max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: reduceMotion ? 0 : 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}>
                    <span className="mb-4 inline-block text-xs font-semibold tracking-[0.2em] text-[#2F713A] uppercase">
                        Onde estamos presentes
                    </span>

                    <h2
                        id="enterprises-title"
                        className="text-3xl font-bold tracking-tight text-[#0F0F0F] sm:text-4xl lg:text-5xl">
                        Construindo sonhos{" "}
                        <span className="text-[#2F713A]">
                            por todo o Ceará.
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#6B726D] sm:text-lg">
                        Nossa presença em diferentes municípios representa
                        o compromisso com o desenvolvimento e a realização
                        de novos sonhos.
                    </p>
                </motion.div>
            </div>

            <div className="group relative w-full overflow-hidden">

                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-linear-to-r from-white to-transparent sm:w-28 lg:w-40" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-linear-to-l from-white to-transparent sm:w-28 lg:w-40" />

                <div className={`flex w-max items-center ${reduceMotion
                    ? "flex-wrap"
                    : "animate-[enterprises-scroll_35s_linear_infinite] group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]"
                    }`}>
                    {[0, 1].map((copy) => (
                        <div
                            key={copy}
                            aria-hidden={copy === 1}
                            className="flex shrink-0 items-center">
                            {cards.map((item) => (
                                <div
                                    key={`${copy}-${item.id}`}
                                    className="flex shrink-0 items-center gap-3 px-5 py-3 sm:px-8">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E7F3E9] text-[#2F713A] transition-colors duration-300 hover:bg-[#1E3A2E] hover:text-white">
                                        <MapPin size={23} strokeWidth={1.7} aria-hidden="true" />
                                    </div>

                                    <span className="whitespace-nowrap text-xl font-semibold tracking-tight text-[#1E3A2E] sm:text-2xl">
                                        {item.title}
                                    </span>

                                    <ArrowUpRight
                                        size={18}
                                        strokeWidth={1.5}
                                        aria-hidden="true"
                                        className="ml-1 text-[#A3B3A6]"
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className="mx-auto mt-12 h-px w-24 bg-[#2F713A]/20" />
        </section>
    );
}
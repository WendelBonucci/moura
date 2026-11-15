"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowDownRight, Building2, Hand, MapPin, Mouse, ShieldCheck, } from "lucide-react";

const highlights = [
    {
        id: 1,
        icon: Building2,
        title: "Empreendimentos",
        description: "Planejados para você",
    },
    {
        id: 2,
        icon: MapPin,
        title: "Localizações",
        description: "Em diversas regiões do Ceará",
    },
    {
        id: 3,
        icon: ShieldCheck,
        title: "Credibilidade",
        description: "Mais de 20 anos de experiência",
    },
];

export default function HeroDevelopment() {
    const reduceMotion = useReducedMotion();

    const scrollToDevelopments = () => {
        document.getElementById("empreendimentos")?.scrollIntoView({ behavior: reduceMotion ? "instant" : "smooth", block: "start", });
    };

    return (
        <section aria-label="Conheça nossos empreendimentos" className="relative isolate w-full overflow-hidden bg-[#0F1F17]">

            <div className="relative h-67.5 w-full overflow-hidden sm:h-87.5 md:h-105 lg:h-117.5 xl:h-127.5 2xl:h-140">
                <motion.div
                    initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.04, }}
                    animate={{ opacity: 1, scale: 1, }}
                    transition={{ duration: reduceMotion ? 0 : 1.1, ease: "easeOut", }}
                    className="absolute inset-0">
                    <Image
                        src="/images/image.png"
                        alt="Moura Empreendimentos — planejamento, estrutura e valorização imobiliária"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-center" />
                </motion.div>
                =
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#0F1F17]/80 via-transparent to-transparent" />

                <motion.div
                    initial={{ opacity: 0, y: reduceMotion ? 0 : 18, }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.3, }}
                    className="absolute bottom-6 left-4 z-10 sm:bottom-8 sm:left-6 lg:bottom-10 lg:left-10 xl:left-12">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#0F1F17]/55 px-4 py-2 text-xs font-semibold tracking-[0.12em] text-white backdrop-blur-md sm:text-sm">
                        <span className="h-2 w-2 rounded-full bg-[#0BDA51]" />
                        NOSSOS EMPREENDIMENTOS
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: reduceMotion ? 0 : 15, }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.45, }}
                    className="absolute right-4 bottom-6 z-10 hidden sm:block sm:right-6 sm:bottom-8 lg:right-10 lg:bottom-10 xl:right-12">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md">
                        <ArrowDownRight size={21} strokeWidth={1.7} />
                    </div>
                </motion.div>
            </div>

            <div className="relative border-b border-white/10 bg-[#0F1F17]">
                <div className="mx-auto grid w-full max-w-360 gap-5 px-4 py-7 sm:grid-cols-3 sm:gap-6 sm:px-6 sm:py-8 lg:px-10 xl:px-12">
                    {highlights.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: reduceMotion ? 0 : 15, }}
                                whileInView={{ opacity: 1, y: 0, }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : index * 0.1, }}
                                className="flex items-center gap-4 sm:justify-center" >
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#0BDA51]/20 bg-[#0BDA51]/10 text-[#7DE49A]">
                                    <Icon size={21} strokeWidth={1.7} aria-hidden="true" />
                                </div>

                                <div className="min-w-0">
                                    <p className="text-sm font-semibold text-white">
                                        {item.title}
                                    </p>

                                    <p className="mt-1 text-xs leading-5 text-white/55">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: reduceMotion ? 0 : 15, }}
                whileInView={{ opacity: 1, y: 0, }}
                viewport={{ once: true }}
                transition={{ duration: reduceMotion ? 0 : 0.6, }}
                className="relative flex flex-col items-center justify-center px-4 py-8 text-center sm:py-10" >
                <span className="mb-4 h-px w-10 bg-[#0BDA51]/50" />

                <p className="text-xs font-semibold tracking-[0.16em] text-white/60 uppercase sm:text-sm"> Explore nossas oportunidades  </p>

                <button
                    type="button"
                    onClick={scrollToDevelopments}
                    aria-label="Descer até a seção de empreendimentos"
                    className="group mt-4 flex cursor-pointer flex-col items-center gap-3 rounded-xl px-5 py-2 text-white transition-colors duration-300 hover:text-[#7DE49A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0BDA51]" >
                    <span className="flex items-center gap-2 text-sm font-medium sm:hidden">
                        <Hand size={18} strokeWidth={1.7} aria-hidden="true" />
                        Deslize para baixo e descubra
                    </span>

                    <span className="hidden items-center gap-2 text-sm font-medium sm:flex">
                        <Mouse size={18} strokeWidth={1.7} aria-hidden="true" />
                        Role para baixo e descubra
                    </span>

                    <motion.span
                        animate={reduceMotion ? undefined : { y: [0, 7, 0] }}
                        transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut", }}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0BDA51]/30 bg-[#0BDA51]/10 text-[#7DE49A] transition-colors duration-300 group-hover:bg-[#0BDA51]/20">
                        <ArrowDown size={19} aria-hidden="true" />
                    </motion.span>
                </button>
            </motion.div>

            <div className="h-px w-full bg-linear-to-r from-transparent via-[#0BDA51]/30 to-transparent" />
        </section>
    );
}

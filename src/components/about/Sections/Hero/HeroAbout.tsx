"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowUpRight, Building2 } from "lucide-react";

export default function HeroAbout() {
    const reduceMotion = useReducedMotion();

    return (
        <section className="relative isolate w-full overflow-hidden bg-[#0F1F17] pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28">
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-40 -right-40 h-150 w-150 rounded-full bg-[#0BDA51]/10 blur-[120px]" />
                <div className="absolute -bottom-60 -left-40 h-125 w-125 rounded-full bg-[#3E5A3F]/20 blur-[100px]" />
            </div>

            <div className="mx-auto grid w-full max-w-360 items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-10 xl:gap-20 xl:px-12">

                <motion.div
                    initial={{ opacity: 0, y: reduceMotion ? 0 : 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.75, ease: "easeOut" }}
                    className="flex min-w-0 flex-col items-start">

                    <span className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#0BDA51]/20 bg-[#0BDA51]/10 px-4 py-2 text-xs font-semibold tracking-wide text-[#A5E8B7] sm:text-sm">
                        <Building2 size={15} aria-hidden="true" />
                        Nossa história, nosso compromisso
                    </span>

                    <h1 className="max-w-2xl text-4xl leading-[1.12] font-bold tracking-tight text-white sm:text-5xl lg:text-[3.5rem] xl:text-6xl">
                        Conheça a{" "}
                        <span className="text-[#7DE49A]">
                            Moura Empreendimentos.
                        </span>
                    </h1>

                    <p className="mt-7 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
                        Há mais de duas décadas, transformamos espaços em
                        oportunidades e sonhos em realidade. Nossa trajetória
                        é construída com compromisso, credibilidade e dedicação
                        ao desenvolvimento de novos empreendimentos no Ceará.
                    </p>

                    <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5 border-t border-white/15 pt-7">
                        <div className="flex flex-col gap-1">
                            <span className="text-3xl font-bold tracking-tight text-[#7DE49A] sm:text-4xl">+20</span>
                            <span className="text-xs font-medium text-white/60 sm:text-sm">Anos de experiência</span>
                        </div>

                        <div className="h-12 w-px bg-white/15" />

                        <div className="flex flex-col gap-1">
                            <span className="text-lg font-semibold text-white sm:text-xl">Ceará</span>
                            <span className="text-xs font-medium text-white/60 sm:text-sm">Nossa região de atuação</span>
                        </div>
                    </div>

                    <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                        <Link href="/empreendimentos"
                            className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#0BDA51] px-7 py-3.5 text-sm font-semibold text-[#0F1F17] transition-all duration-300 hover:bg-[#7DE49A] hover:shadow-lg hover:shadow-[#0BDA51]/15">
                            Nossos empreendimentos
                            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>

                        <Link href="/contato"
                            className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10">
                            Entre em contato
                            <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.92, x: reduceMotion ? 0 : 35 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.9, delay: reduceMotion ? 0 : 0.15, ease: "easeOut" }}
                    className="relative flex min-h-75 w-full items-center justify-center sm:min-h-100 lg:min-h-120">

                    <div className="pointer-events-none absolute h-70 w-70 rounded-full border border-[#7DE49A]/10 sm:h-95 sm:w-95 lg:h-112.5 lg:w-112.5" />
                    <div className="pointer-events-none absolute h-55 w-55 rounded-full border border-[#7DE49A]/15 sm:h-75 sm:w-75 lg:h-87.5 lg:w-87.5" />
                    <div className="pointer-events-none absolute h-45 w-45 rounded-full bg-[#0BDA51]/10 blur-[70px] sm:h-65 sm:w-65" />

                    <div className="relative z-10 flex w-full max-w-125 items-center justify-center">
                        <Image
                            src="/images/LogotipPremium.png"
                            alt="Logotipo premium da Moura Empreendimentos"
                            width={600}
                            height={600}
                            priority
                            sizes="(max-width: 640px) 85vw, (max-width: 1024px) 500px, 40vw"
                            className="h-auto w-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.25)]" />
                    </div>

                    <div className="absolute bottom-0 left-1/2 h-px w-32 -translate-x-1/2 bg-linear-to-r from-transparent via-[#7DE49A]/40 to-transparent" />
                </motion.div>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-[#7DE49A]/20 to-transparent" />
        </section>
    );
}
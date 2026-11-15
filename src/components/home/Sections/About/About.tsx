"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, CheckCircle2, Leaf } from "lucide-react";

export default function About() {
    const reduceMotion = useReducedMotion();

    const fadeLeft = {
        hidden: { opacity: 0, x: reduceMotion ? 0 : -40 },
        visible: { opacity: 1, x: 0 },
    };

    const fadeRight = {
        hidden: { opacity: 0, x: reduceMotion ? 0 : 40 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <section id="sobre" className="relative isolate w-full overflow-hidden bg-background py-20 sm:py-24 lg:py-32">
            <div className="pointer-events-none absolute -right-40 -bottom-40 -z-10 h-125 w-125 rounded-full bg-[#0BDA51]/5 blur-3xl" />

            <div className="mx-auto grid w-full max-w-360 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-10 xl:gap-20 xl:px-12">

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeLeft}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="flex min-w-0 flex-col items-start">

                    <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#2F713A]/15 bg-[#2F713A]/5 px-4 py-2 text-xs font-semibold tracking-wide text-[#2F713A] sm:text-sm">
                        <span className="h-2 w-2 rounded-full bg-[#0BDA51]" />
                        Sobre nossa empresa
                    </span>

                    <h2 className="max-w-xl text-3xl leading-[1.15] font-bold tracking-tight text-[#0F0F0F] sm:text-4xl lg:text-[2.75rem] xl:text-5xl">
                        Há mais de duas décadas{" "}
                        <span className="text-[#2F713A]">
                            transformando sonhos em realidade.
                        </span>
                    </h2>

                    <div className="mt-7 h-1 w-16 rounded-full bg-[#2F713A]" />

                    <div className="mt-7 flex max-w-xl flex-col gap-5 text-base leading-8 text-[#5B625C]">
                        <p>
                            A <strong className="font-semibold text-[#1E3A2E]">Moura Empreendimentos</strong> atua
                            no mercado imobiliário há mais de 20 anos, destacando-se
                            pela credibilidade, pelo crescimento e pelo compromisso
                            com a realização de sonhos.
                        </p>

                        <p>
                            Com presença em diferentes regiões do Ceará, investimos
                            em projetos que contribuem para o desenvolvimento dos
                            municípios, criando oportunidades para famílias que
                            desejam conquistar seu próprio espaço.
                        </p>

                        <p>
                            Nossa missão é desenvolver empreendimentos imobiliários
                            diferenciados, superando expectativas e respeitando
                            o meio ambiente.
                        </p>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-x-7 gap-y-4">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={19} className="text-[#2F713A]" />
                            <span className="text-sm font-medium text-[#1E3A2E]">
                                Compromisso com qualidade
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Leaf size={19} className="text-[#2F713A]" />
                            <span className="text-sm font-medium text-[#1E3A2E]">
                                Respeito ao meio ambiente
                            </span>
                        </div>
                    </div>

                    <Link
                        href="/sobre"
                        className="group mt-10 inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#1E3A2E] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#2F713A] hover:shadow-lg hover:shadow-green-900/15">
                        Conheça nossa história
                        <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </Link>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeRight}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
                    className="relative min-w-0 w-full">
                    <div className="group relative aspect-[4/4.2] w-full overflow-hidden rounded-[28px] bg-[#DDE7DF] shadow-[0_25px_70px_-30px_rgba(15,31,23,0.3)] sm:aspect-[5/4] lg:aspect-4/5 xl:aspect-5/4">
                        <Image
                            src="/images/imageAbout.png"
                            alt="Vista aérea ilustrativa de um empreendimento residencial planejado"
                            fill
                            sizes="(max-width: 1023px) 100vw, 50vw"
                            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transform-none"/>

                        <div className="absolute inset-0 bg-linear-to-t from-[#0F1F17]/45 via-transparent to-transparent" />

                        <div className="absolute right-6 bottom-6 left-6 sm:right-8 sm:bottom-8 sm:left-8">
                            <p className="text-xs font-semibold tracking-[0.2em] text-white/85 uppercase">
                                Moura Urbanismo
                            </p>

                            <p className="mt-2 max-w-sm text-xl font-semibold text-white sm:text-2xl">
                                Planejando espaços. Construindo futuros.
                            </p>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-[#1E3A2E]/10 bg-white px-5 py-4 shadow-xl sm:-bottom-6 sm:-left-6 sm:px-6">
                        <span className="text-3xl font-bold tracking-tight text-[#2F713A] sm:text-4xl">
                            +20
                        </span>

                        <span className="text-xs leading-5 font-medium text-[#5B625C] sm:text-sm">
                            Anos de
                            <br />
                            experiência
                        </span>
                    </motion.div>

                    <div className="pointer-events-none absolute -top-4 -right-4 -z-10 h-36 w-36 rounded-[28px] border-2 border-[#2F713A]/20" />
                </motion.div>
            </div>
        </section>
    );
}
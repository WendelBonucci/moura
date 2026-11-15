import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, CheckCircle2 } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative isolate w-full overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24">

            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-1/4 -right-40 h-150 w-150 rounded-full bg-[#0BDA51]/5 blur-3xl" />
                <div className="absolute -bottom-40 -left-40 h-125 w-125 rounded-full bg-green/5 blur-3xl" />
            </div>

            <div className="mx-auto grid w-full max-w-360 items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-10 xl:gap-16 xl:px-12">

                <div className="flex min-w-0 flex-col items-start">
                    <div className="mb-7 inline-flex max-w-full items-center gap-2 rounded-full border border-[#0BDA51]/20 bg-[#0BDA51]/10 px-4 py-2">
                        <span className="h-2 w-2 shrink-0 rounded-full bg-[#0BDA51]" />
                        <span className="text-xs font-semibold tracking-wide text-[#1E3A2E] sm:text-sm">
                            Há mais de 20 anos realizando sonhos no Ceará
                        </span>
                    </div>

                    <h1 className="max-w-2xl text-4xl leading-[1.12] font-bold tracking-tight text-[#0F0F0F] sm:text-5xl lg:text-[3.25rem] xl:text-6xl">
                        O cenário perfeito para{" "}
                        <span className="text-[#2F713A]">
                            realizar seus sonhos.
                        </span>
                    </h1>

                    <p className="mt-6 max-w-xl text-base leading-8 text-[#5B625C] sm:text-lg">
                        Conquiste seu lote com infraestrutura completa e localização
                        privilegiada. Aproveite nosso financiamento próprio, sem
                        burocracia e sem consulta ao SPC/Serasa.
                    </p>

                    <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
                        <Link
                            href="/empreendimentos"
                            className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#1E3A2E] px-6 py-3.5 text-sm font-semibold whitespace-nowrap text-white transition-all duration-300 hover:bg-[#2F713A] hover:shadow-lg hover:shadow-green-900/15">
                            Conhecer empreendimentos
                            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>

                        <Link
                            href="/contato"
                            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#1E3A2E]/15 bg-white px-6 py-3.5 text-sm font-semibold whitespace-nowrap text-[#1E3A2E] transition-all duration-300 hover:border-[#1E3A2E]/40 hover:bg-[#E8EFE9]">
                            Fale com um consultor
                        </Link>
                    </div>

                    <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#1E3A2E]/10 pt-6">
                        <span className="inline-flex items-center gap-2 text-xs font-medium text-[#5B625C] sm:text-sm">
                            <CheckCircle2 size={17} className="text-[#2F713A]" />
                            Financiamento próprio
                        </span>

                        <span className="inline-flex items-center gap-2 text-xs font-medium text-[#5B625C] sm:text-sm">
                            <MapPin size={17} className="text-[#2F713A]" />
                            Empreendimentos no Ceará
                        </span>
                    </div>
                </div>

                <div className="relative min-w-0 w-full">
                    <div className="relative aspect-4/3 w-full overflow-hidden rounded-[28px] bg-[#DDE7DF] shadow-[0_24px_70px_-30px_rgba(15,31,23,0.35)] sm:aspect-16/10
                    lg:aspect-5/4 xl:aspect-4/3">
                        <Image
                            src="/images/imageHero.png"
                            alt="Ilustração aérea de um empreendimento urbanístico próximo ao litoral cearense"
                            fill
                            priority
                            sizes="(max-width: 1023px) 100vw, (max-width: 1440px) 55vw, 760px"
                            className="object-cover object-center" />

                        <div className="absolute inset-0 bg-linear-to-t from-[#0F1F17]/65 via-transparent to-transparent" />

                        <div className="absolute right-5 bottom-5 left-5 sm:right-8 sm:bottom-8 sm:left-8">
                            <div className="flex items-end justify-between gap-4">
                                <div>
                                    <span className="mb-2 block text-xs font-medium tracking-[0.2em] text-white/75 uppercase">
                                        Moura Urbanismo
                                    </span>

                                    <p className="max-w-xs text-xl leading-snug font-semibold text-white sm:text-2xl">
                                        Seu futuro começa com uma boa escolha.
                                    </p>
                                </div>

                                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-md sm:flex">
                                    <ArrowRight size={21} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pointer-events-none absolute -right-3 -bottom-3 -z-10 h-36 w-36 rounded-[28px] border-2 border-[#2F713A]/20 sm:-right-5 sm:-bottom-5" />
                </div>
            </div>
        </section>
    );
}
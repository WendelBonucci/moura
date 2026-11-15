"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
    ArrowRight, ArrowUpRight, Award, BadgeCheck, Building2, ChartNoAxesCombined, Handshake, HeartHandshake, Leaf, Lightbulb, ShieldCheck, Target, TrendingUp, Users, type LucideIcon,
} from "lucide-react";

type ValueItem = {
    id: number;
    title: string;
    description: string;
    icon: LucideIcon;
};

const values: ValueItem[] = [
    {
        id: 1,
        title: "Integridade",
        description: "Agimos com ética, transparência e responsabilidade, cultivando relações baseadas na confiança e no respeito.",
        icon: ShieldCheck,
    },
    {
        id: 2,
        title: "Comprometimento",
        description: "Assumimos cada projeto com dedicação, seriedade e responsabilidade, valorizando os compromissos que construímos.",
        icon: Handshake,
    },
    {
        id: 3,
        title: "Valorização Humana",
        description: "Reconhecemos que as pessoas são essenciais para o nosso crescimento, promovendo respeito, colaboração e desenvolvimento.",
        icon: Users,
    },
    {
        id: 4,
        title: "Superação de Resultados",
        description: "Buscamos superar desafios e alcançar resultados cada vez melhores, com planejamento, eficiência e determinação.",
        icon: TrendingUp,
    },
    {
        id: 5,
        title: "Melhoria Contínua",
        description: "Aprimoramos constantemente nossos processos, serviços e práticas para entregar experiências cada vez melhores.",
        icon: ChartNoAxesCombined,
    },
    {
        id: 6,
        title: "Inovação",
        description: "Valorizamos novas ideias e soluções inteligentes que contribuam para a evolução dos nossos empreendimentos.",
        icon: Lightbulb,
    },
    {
        id: 7,
        title: "Sustentabilidade",
        description: "Buscamos conciliar desenvolvimento urbano, responsabilidade ambiental e respeito às futuras gerações.",
        icon: Leaf,
    },
];

const pillars = [
    {
        id: 1,
        number: "01",
        title: "Experiência que transforma",
        description: "Com mais de duas décadas de atuação no mercado imobiliário, reunimos conhecimento e experiência para identificar oportunidades, planejar empreendimentos e contribuir para o crescimento das cidades onde estamos presentes.",
        icon: Award,
    },
    {
        id: 2,
        number: "02",
        title: "Solidez construída ao longo do tempo",
        description: "Nossa trajetória é marcada pela expansão de empreendimentos em diferentes regiões do Ceará. Uma presença que reflete nossa capacidade de planejamento, visão de mercado e compromisso com o desenvolvimento regional.",
        icon: Building2,
    },
    {
        id: 3,
        number: "03",
        title: "Seriedade em cada compromisso",
        description: "Trabalhamos para oferecer oportunidades imobiliárias com responsabilidade, gestão criteriosa de recursos e atenção à sustentabilidade, fortalecendo relações duradouras com clientes, parceiros e investidores.",
        icon: BadgeCheck,
    },
];

export default function AboutUs() {
    const reduceMotion = useReducedMotion();

    const reveal = {
        hidden: { opacity: 0, y: reduceMotion ? 0 : 28, },
        visible: { opacity: 1, y: 0, },
    };

    const transition = {
        duration: reduceMotion ? 0 : 0.65,
        ease: "easeOut" as const,
    };

    return (
        <section
            id="sobre-a-moura"
            aria-labelledby="about-us-title"
            className="w-full overflow-hidden bg-white text-[#0F1F17]">

            <div className="mx-auto w-full max-w-360 px-4 pt-20 pb-20 sm:px-6 sm:pt-24 sm:pb-24 lg:px-10 lg:pt-32 lg:pb-28 xl:px-12">
                <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={reveal}
                        transition={transition}
                        className="lg:sticky lg:top-32">
                        <span className="mb-6 inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] text-[#348B4C] uppercase sm:text-sm">
                            <span className="h-2 w-2 rounded-full bg-[#0BDA51]" />
                            Quem somos
                        </span>

                        <h2 id="about-us-title" className="max-w-xl text-4xl leading-[1.13] font-bold tracking-tight sm:text-5xl lg:text-[3.4rem]">
                            Uma história de
                            <span className="block text-[#348B4C]">
                                confiança e desenvolvimento.
                            </span>
                        </h2>

                        <p className="mt-7 max-w-lg text-base leading-8 text-[#647168] sm:text-lg">
                            Mais do que desenvolver empreendimentos imobiliários,
                            acreditamos no potencial de transformar espaços em
                            oportunidades e contribuir para o futuro das cidades.
                        </p>

                        <div className="mt-9 flex items-center gap-4 border-l-[3px] border-[#0BDA51] pl-5">
                            <div>
                                <p className="text-base font-bold text-[#0F1F17]">Moura Empreendimentos</p>
                                <p className="mt-1 text-sm text-[#647168]">Compromisso que se constrói com confiança.</p>
                            </div>
                        </div>

                        <Link href="/empreendimentos"
                            className="group mt-10 inline-flex min-h-12 items-center gap-3 rounded-xl bg-[#0F1F17] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#1E3A2E]">
                            Conheça nossos empreendimentos
                            <ArrowRight
                                size={18}
                                aria-hidden="true"
                                className="transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
                        variants={reveal}
                        transition={{ ...transition, delay: reduceMotion ? 0 : 0.1, }}
                        className="space-y-6 text-[15px] leading-8 text-[#59675D] sm:text-base">
                        <p>
                            A{" "}
                            <strong className="font-semibold text-[#1E3A2E]">
                                Moura Empreendimentos e Negócios Imobiliários
                            </strong>{" "}
                            construiu sua trajetória sobre fundamentos que permanecem
                            essenciais ao longo de sua história: experiência,
                            credibilidade e compromisso com o desenvolvimento
                            das regiões onde atua.
                        </p>

                        <p>
                            Com mais de duas décadas de presença no mercado imobiliário,
                            a empresa se destaca pela expansão de seus negócios,
                            pela realização de projetos e pela busca constante
                            por oportunidades capazes de transformar o cenário
                            urbano e econômico dos municípios cearenses.
                        </p>

                        <p>
                            Nossa atuação alcança diferentes regiões do Ceará,
                            incluindo municípios como{" "}
                            <strong className="font-semibold text-[#1E3A2E]">
                                Quixadá, Redenção, Acaraú, Ibiapina e Ipu
                            </strong>
                            , além de localidades da capital e da Região
                            Metropolitana de Fortaleza.
                        </p>

                        <p>
                            Ao longo dessa jornada, consolidamos um portfólio
                            de empreendimentos que representa nossa dedicação
                            ao planejamento, à valorização imobiliária e à
                            criação de novas possibilidades para famílias,
                            comunidades e investidores.
                        </p>

                        <p>
                            Acreditamos que cada novo empreendimento representa
                            mais do que um investimento em infraestrutura:
                            é uma oportunidade de contribuir para o crescimento
                            de uma região, incentivar seu desenvolvimento
                            e participar da construção de novas histórias.
                        </p>

                        <div className="mt-9 rounded-2xl border border-[#DDE9DF] bg-[#F5FAF6] p-6 sm:p-8">
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E2F2E5] text-[#348B4C]">
                                    <HeartHandshake size={24} aria-hidden="true" />
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-[#1E3A2E]">Nosso compromisso vai além de construir.</h3>

                                    <p className="mt-3 text-sm leading-7 text-[#647168] sm:text-base">
                                        Trabalhamos para desenvolver oportunidades,
                                        fortalecer relações de confiança e contribuir
                                        de maneira responsável para o crescimento
                                        das comunidades onde estamos presentes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="mt-24 grid gap-5 md:grid-cols-3 lg:mt-32">
                    {pillars.map((pillar, index) => {
                        const Icon = pillar.icon;

                        return (
                            <motion.article
                                key={pillar.id}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.15 }}
                                variants={reveal}
                                transition={{ ...transition, delay: reduceMotion ? 0 : index * 0.1, }}
                                whileHover={reduceMotion ? undefined : { y: -5 }}
                                className="group rounded-2xl border border-[#E3EBE4] bg-[#FAFCFA] p-7 transition-colors duration-300 hover:border-[#A9D5B2] hover:bg-[#F3FAF4] sm:p-8">
                                <div className="mb-8 flex items-start justify-between">
                                    <div className="flex h-13 w-13 items-center justify-center rounded-xl bg-[#E6F3E8] text-[#348B4C] transition-colors duration-300 group-hover:bg-[#D8EFDD]">
                                        <Icon size={25} strokeWidth={1.7} aria-hidden="true" />
                                    </div>

                                    <span className="text-sm font-semibold text-[#A4B6A8]">
                                        {pillar.number}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold tracking-tight text-[#1E3A2E]">
                                    {pillar.title}
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-[#647168]">
                                    {pillar.description}
                                </p>
                            </motion.article>
                        );
                    })}
                </div>
            </div>

            <div className="bg-[#F2F7F3]">
                <div className="mx-auto w-full max-w-360 px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28 xl:px-12">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={reveal}
                        transition={transition}
                        className="mb-12 max-w-2xl">
                        <span className="mb-5 block text-xs font-bold tracking-[0.18em] text-[#348B4C] uppercase sm:text-sm">
                            Nossa essência
                        </span>

                        <h2 className="text-3xl font-bold tracking-tight text-[#0F1F17] sm:text-4xl lg:text-5xl">
                            Os princípios que orientam
                            <span className="block text-[#348B4C]">
                                nosso caminho.
                            </span>
                        </h2>

                        <p className="mt-5 text-base leading-8 text-[#647168]">
                            Nossa missão e visão expressam o propósito que
                            direciona nossas decisões e a maneira como
                            queremos construir o futuro.
                        </p>
                    </motion.div>

                    <div className="grid gap-5 lg:grid-cols-2 lg:gap-7">

                        <motion.article
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={reveal}
                            transition={transition}
                            className="group relative overflow-hidden rounded-3xl bg-[#0F1F17] p-8 text-white sm:p-10 lg:p-12">
                            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#0BDA51]/10 blur-3xl" />

                            <div className="relative">
                                <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-[#7DE49A]">
                                    <Target size={28} strokeWidth={1.7} aria-hidden="true" />
                                </div>

                                <span className="text-xs font-semibold tracking-[0.16em] text-[#7DE49A] uppercase">
                                    Nosso propósito
                                </span>

                                <h3 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                                    Missão
                                </h3>

                                <p className="mt-6 max-w-lg text-base leading-8 text-white/75 sm:text-lg">
                                    Desenvolver empreendimentos imobiliários
                                    diferenciados, capazes de superar as expectativas
                                    dos nossos clientes, oferecendo oportunidades
                                    que unam qualidade, confiança e valorização,
                                    sempre com respeito ao meio ambiente
                                    e compromisso com o desenvolvimento responsável.
                                </p>

                                <div className="mt-10 h-1 w-16 rounded-full bg-[#0BDA51]" />
                            </div>
                        </motion.article>

                        <motion.article
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={reveal}
                            transition={{ ...transition, delay: reduceMotion ? 0 : 0.1, }}
                            className="group relative overflow-hidden rounded-3xl border border-[#DCE9DE] bg-white p-8 sm:p-10 lg:p-12">
                            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#0BDA51]/5 blur-3xl" />

                            <div className="relative">
                                <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E6F3E8] text-[#348B4C]">
                                    <Award size={28} strokeWidth={1.7} aria-hidden="true" />
                                </div>

                                <span className="text-xs font-semibold tracking-[0.16em] text-[#348B4C] uppercase"> Onde queremos chegar</span>
                                <h3 className="mt-3 text-3xl font-bold tracking-tight text-[#0F1F17] sm:text-4xl"> Visão </h3>

                                <p className="mt-6 max-w-lg text-base leading-8 text-[#647168] sm:text-lg">
                                    Ser referência no setor imobiliário,
                                    reconhecida por clientes, colaboradores,
                                    comunidades, fornecedores e investidores
                                    como uma empresa de excelência, destacando-se
                                    pela qualidade de seus empreendimentos,
                                    pela confiança em seus relacionamentos
                                    e pela contribuição ao desenvolvimento
                                    das regiões onde atua.
                                </p>

                                <div className="mt-10 h-1 w-16 rounded-full bg-[#348B4C]" />
                            </div>
                        </motion.article>
                    </div>
                </div>
            </div>

            <div className="mx-auto w-full max-w-360 px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32 xl:px-12">

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={reveal}
                    transition={transition}
                    className="mx-auto mb-14 max-w-3xl text-center">
                    <span className="mb-5 block text-xs font-bold tracking-[0.18em] text-[#348B4C] uppercase sm:text-sm">O que acreditamos </span>

                    <h2 className="text-3xl font-bold tracking-tight text-[#0F1F17] sm:text-4xl lg:text-5xl">
                        Valores que fazem parte
                        <span className="block text-[#348B4C]">
                            da nossa identidade.
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#647168]">
                        Nossos valores são a base das nossas escolhas,
                        orientam nossas relações e refletem o compromisso
                        que assumimos com cada projeto e cada pessoa.
                    </p>
                </motion.div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {values.map((value, index) => {
                        const Icon = value.icon;

                        return (
                            <motion.article
                                key={value.id}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.15 }}
                                variants={reveal}
                                transition={{ ...transition, delay: reduceMotion ? 0 : (index % 3) * 0.08 }}
                                whileHover={reduceMotion ? undefined : { y: -5 }}
                                className="group rounded-2xl border border-[#E3EBE4] bg-white p-7 transition-all duration-300 hover:border-[#B7DDBF] hover:bg-[#FAFDFA] hover:shadow-[0_15px_40px_rgba(15,31,23,0.05)] sm:p-8">
                                <div className="mb-7 flex h-13 w-13 items-center justify-center rounded-xl bg-[#EAF5EC] text-[#348B4C] transition-colors duration-300 group-hover:bg-[#D9F0DE]">
                                    <Icon size={25} strokeWidth={1.7} aria-hidden="true" />
                                </div>

                                <h3 className="text-lg font-bold text-[#1E3A2E]">{value.title}</h3>
                                <p className="mt-3 text-sm leading-7 text-[#647168]">{value.description}</p>
                            </motion.article>
                        );
                    })}
                    
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        variants={reveal}
                        transition={transition}
                        className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-[#1E3A2E] p-7 text-white sm:p-8 lg:col-span-2">
                        <div className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-[#0BDA51]/10 blur-3xl" />

                        <div className="relative">
                            <span className="text-xs font-semibold tracking-[0.16em] text-[#7DE49A] uppercase">Nosso compromisso</span>
                            <h3 className="mt-4 max-w-md text-2xl font-bold leading-snug sm:text-3xl">Construir oportunidades é também construir confiança.</h3>

                            <p className="mt-4 max-w-xl text-sm leading-7 text-white/70">
                                Cada empreendimento representa uma nova
                                possibilidade de crescimento, desenvolvimento
                                e realização.
                            </p>
                        </div>

                        <Link href="/contato"
                            className="group relative mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#7DE49A] transition-colors hover:text-white">
                            Fale com nossa equipe
                            <ArrowUpRight size={18} aria-hidden="true"
                                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
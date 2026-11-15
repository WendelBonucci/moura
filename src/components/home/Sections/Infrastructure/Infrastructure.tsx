"use client";
import { motion, useReducedMotion } from "motion/react";
import { Route, Droplets, Zap, Lightbulb, MapPin, HandCoins, ArrowUpRight, type LucideIcon, } from "lucide-react";

type ItemCard = {
    id: number;
    title: string;
    text: string;
    icon: LucideIcon;
};

const cards: ItemCard[] = [
    {
        id: 1,
        title: "Pavimentação",
        text: "Ruas e avenidas pavimentadas, planejadas para oferecer conforto, mobilidade e durabilidade.",
        icon: Route,
    },
    {
        id: 2,
        title: "Água Encanada",
        text: "Rede de distribuição de água planejada para atender às necessidades dos nossos empreendimentos.",
        icon: Droplets,
    },
    {
        id: 3,
        title: "Energia Elétrica",
        text: "Infraestrutura elétrica projetada para oferecer praticidade e segurança na construção do seu futuro.",
        icon: Zap,
    },
    {
        id: 4,
        title: "Iluminação Pública",
        text: "Ruas e avenidas com iluminação planejada para proporcionar mais conforto e segurança.",
        icon: Lightbulb,
    },
    {
        id: 5,
        title: "Localização Privilegiada",
        text: "Empreendimentos em regiões estratégicas, com acesso facilitado e potencial de valorização.",
        icon: MapPin,
    },
    {
        id: 6,
        title: "Financiamento Próprio",
        text: "Condições facilitadas de pagamento, com financiamento próprio e menos burocracia.",
        icon: HandCoins,
    },
];

export default function Infrastructure() {
    const reduceMotion = useReducedMotion();

    const fadeUp = {
        hidden: { opacity: 0, y: reduceMotion ? 0 : 35 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section id="infraestrutura" className="relative w-full overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    variants={fadeUp}
                    className="mx-auto mb-14 flex max-w-3xl flex-col items-center text-center sm:mb-16">
                    <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#2F713A]/15 bg-[#2F713A]/5 px-4 py-2 text-xs font-semibold tracking-wide text-[#2F713A] sm:text-sm">
                        <span className="h-2 w-2 rounded-full bg-[#0BDA51]" />
                        Por que escolher a Moura Urbanismo?
                    </span>

                    <h2 className="max-w-2xl text-3xl leading-tight font-bold tracking-tight text-[#0F0F0F] sm:text-4xl lg:text-5xl">
                        Infraestrutura que valoriza{" "}
                        <span className="text-[#2F713A]">
                            o seu patrimônio.
                        </span>
                    </h2>

                    <p className="mt-5 max-w-2xl text-base leading-8 text-[#6B726D] sm:text-lg">
                        Empreendimentos planejados para oferecer infraestrutura,
                        qualidade de vida e a tranquilidade que sua família merece.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
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
                                    delay: reduceMotion ? 0 : (index % 3) * 0.1,
                                    ease: "easeOut",
                                }}
                                whileHover={reduceMotion ? undefined : { y: -6 }}
                                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#1E3A2E]/10 bg-[#FAFBFA] p-7 transition-[border-color,box-shadow] duration-300 hover:border-[#2F713A]/25 hover:shadow-[0_18px_50px_-20px_rgba(15,31,23,0.18)] sm:p-8">

                                <div className="mb-7 flex items-start justify-between">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E7F3E9] text-[#2F713A] transition-colors duration-300 group-hover:bg-[#1E3A2E] group-hover:text-white">
                                        <Icon size={26} strokeWidth={1.7} aria-hidden="true" />
                                    </div>

                                    <ArrowUpRight size={20} strokeWidth={1.5} aria-hidden="true" className="text-[#A3B3A6] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#2F713A]" />
                                </div>

                                <div className="flex flex-1 flex-col">
                                    <h3 className="mb-3 text-xl font-semibold tracking-tight text-[#0F0F0F]">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm leading-7 text-[#6B726D] sm:text-[15px]">
                                        {item.text}
                                    </p>
                                </div>

                                <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-[#2F713A] transition-transform duration-500 group-hover:scale-x-100" />
                            </motion.article>
                        );
                    })}
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mt-12 flex flex-col items-center justify-center gap-2 text-center sm:mt-16">
                    <span className="h-px w-12 bg-[#2F713A]/30" />

                    <p className="mt-4 max-w-xl text-sm leading-7 text-[#6B726D]">
                        Cada detalhe é pensado para transformar espaços em oportunidades
                        e proporcionar um futuro melhor.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
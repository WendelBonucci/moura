"use client";

import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import { motion, useReducedMotion } from "motion/react";

import { ArrowUpRight, MapPin, Mail, ArrowUp, } from "lucide-react";
import { FaInstagram, FaFacebookF, FaWhatsapp, } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

type FooterLink = {
    id: number;
    title: string;
    href: string;
};

type SocialLink = {
    id: number;
    title: string;
    href: string;
    icon: IconType;
};
const institutionalLinks: FooterLink[] = [
    { id: 1, title: "Sobre Nós", href: "/about" },
    { id: 2, title: "Empreendimentos", href: "/empreendimentos" },
    { id: 3, title: "Onde nos encontrar", href: "/localizacao" },
    { id: 4, title: "Trabalhe Conosco", href: "/trabalhe-conosco" },
];

const supportLinks: FooterLink[] = [
    { id: 1, title: "Contato", href: "/contato" },
    { id: 2, title: "Política de Privacidade de Dados", href: "/politica-de-privacidade" },
    { id: 3, title: "Termos de Uso", href: "/termos-de-uso" },
    { id: 4, title: "Perguntas Frequentes", href: "/faq" },
];

const socialLinks: SocialLink[] = [
    {
        id: 1,
        title: "Instagram",
        href: "https://www.instagram.com/moura.urbanismo",
        icon: FaInstagram,
    },
    {
        id: 2,
        title: "Facebook",
        href: "https://www.facebook.com/mouraurbanismo",
        icon: FaFacebookF,
    },
    {
        id: 3,
        title: "LinkedIn",
        href: "https://www.youtube.com/@mouraurbanismo",
        icon: FaYoutube,
    },
    {
        id: 4,
        title: "WhatsApp",
        href: "https://web.whatsapp.com/send?phone=558534675705&text=",
        icon: FaWhatsapp,
    },
];

export default function Footer() {
    const reduceMotion = useReducedMotion();

    const fadeUp = {
        hidden: { opacity: 0, y: reduceMotion ? 0 : 25, },
        visible: { opacity: 1, y: 0, },
    };

    return (
        <footer className="relative w-full overflow-hidden bg-[#0F1F17] text-white">
            <div className="pointer-events-none absolute -right-40 -top-40 h-125] w-125 rounded-full bg-[#0BDA51]/5 blur-3xl" />

            <div className="relative mx-auto w-full max-w-360 px-4 pt-16 pb-10 sm:px-6 sm:pt-20 lg:px-10 lg:pt-24 xl:px-12">

                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1fr_1.2fr_1fr] lg:gap-14">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeUp}
                        transition={{ duration: 0.6, ease: "easeOut" }}>
                        <h2 className="mb-7 text-sm font-semibold tracking-[0.12em] text-white uppercase">
                            Institucional
                        </h2>

                        <ul className="flex flex-col gap-4">
                            {institutionalLinks.map((item) => (
                                <li key={item.id}>
                                    <Link
                                        href={item.href}
                                        className="group inline-flex items-center gap-2 text-sm text-white/60 transition-colors duration-300 hover:text-[#0BDA51]">
                                        {item.title}

                                        <ArrowUpRight
                                            size={14}
                                            aria-hidden="true"
                                            className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeUp}
                        transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.1, ease: "easeOut", }}>
                        <h2 className="mb-7 text-sm font-semibold tracking-[0.12em] text-white uppercase">
                            Atendimento e Informações
                        </h2>

                        <ul className="flex flex-col gap-4">
                            {supportLinks.map((item) => (
                                <li key={item.id}>
                                    <Link
                                        href={item.href}
                                        className="group inline-flex items-center gap-2 text-sm text-white/60 transition-colors duration-300 hover:text-[#0BDA51]">
                                        {item.title}

                                        <ArrowUpRight
                                            size={14}
                                            aria-hidden="true"
                                            className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeUp}
                        transition={{ duration: 0.7, delay: reduceMotion ? 0 : 0.2, ease: "easeOut", }}
                        className="flex flex-col items-start lg:items-end lg:text-right">
                        <Link
                            href="/"
                            aria-label="Moura Urbanismo - Página inicial"
                            className="inline-flex">
                            <Image
                                src="/images/LogotipoMoura.png"
                                alt="Moura Urbanismo"
                                width={230}
                                height={85}
                                sizes="230px"
                                className="h-auto w-50 object-contain brightness-0 invert sm:w-57.5" />
                        </Link>

                        <p className="mt-6 max-w-xs text-sm leading-7 text-white/60">
                            Planejando espaços, construindo futuros e
                            transformando sonhos em realidade.
                        </p>
                        =
                        <div className="mt-7 flex items-center gap-3">
                            {socialLinks.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <a
                                        key={item.id}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={item.title}
                                        title={item.title}
                                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/75 transition-all duration-300 hover:-translate-y-1 hover:border-[#0BDA51]/50 hover:bg-[#0BDA51] hover:text-[#0F1F17] motion-reduce:transform-none">
                                        <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
                                    </a>
                                );
                            })}
                        </div>

                        <div className="mt-8 flex flex-col gap-3 text-sm text-white/50 lg:items-end">
                            <span className="inline-flex items-center gap-2">
                                <MapPin size={16} className="text-[#0BDA51]" />
                                Ceará, Brasil
                            </span>

                            <Link
                                href="/contato"
                                className="inline-flex items-center gap-2 transition-colors hover:text-[#0BDA51]">
                                <Mail size={16} className="text-[#0BDA51]" />
                                Entre em contato
                            </Link>
                        </div>
                    </motion.div>
                </div>
                <div className="mt-16 h-px w-full bg-white/10 sm:mt-20" />

                <div className="flex flex-col items-center justify-between gap-5 pt-7 text-center sm:flex-row sm:text-left">

                    <p className="text-xs leading-6 text-white/50 sm:text-sm">
                        Copyright © 2026 — Todos os direitos reservados.
                        <span className="ml-1 font-semibold text-white/80">
                            Moura Urbanismo.
                        </span>
                    </p>

                    <button
                        type="button"
                        onClick={() => { window.scrollTo({ top: 0, behavior: reduceMotion ? "instant" : "smooth", }); }}
                        aria-label="Voltar ao topo da página"
                        className="group inline-flex cursor-pointer items-center gap-2 text-xs font-medium text-white/60 transition-colors duration-300 hover:text-[#0BDA51] sm:text-sm"
                    >
                        Voltar ao topo

                        <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#0BDA51]/40 group-hover:bg-[#0BDA51]/10 motion-reduce:transform-none">
                            <ArrowUp size={17} aria-hidden="true" />
                        </span>
                    </button>
                </div>
            </div>
        </footer>
    );
}
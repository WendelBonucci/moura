"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { ArrowRight, Building2, House, Info, LogIn, Menu, Newspaper, Phone, X, type LucideIcon, } from "lucide-react";

import LoginModal from "../Buttons/LoginModal/LoginModal";

type ItemLink = {
    id: number;
    texto: string;
    href: string;
    icon: LucideIcon;
};

const links: ItemLink[] = [
    { id: 1, texto: "Início", href: "/", icon: House },
    { id: 2, texto: "Sobre Nós", href: "/about", icon: Info },
    { id: 3, texto: "Empreendimentos", href: "/empreendimentos", icon: Building2 },
    { id: 4, texto: "Blog", href: "/blog", icon: Newspaper },
];

export default function SideBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    const pathname = usePathname();
    const reduceMotion = useReducedMotion();

    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const panelRef = useRef<HTMLDivElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);

    const closeMenu = () => setIsOpen(false);

    useEffect(() => {
        const frame = requestAnimationFrame(() => setIsMounted(true));

        return () => cancelAnimationFrame(frame);
    }, []);

    useEffect(() => {
        if (!isOpen) return;

        const previousOverflow = document.body.style.overflow;
        const previousFocus = document.activeElement;

        document.body.style.overflow = "hidden";

        const frame = requestAnimationFrame(() => {
            closeButtonRef.current?.focus();
        });

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
                return;
            }

            if (event.key !== "Tab" || !panelRef.current) return;

            const elements = Array.from(
                panelRef.current.querySelectorAll<HTMLElement>(
                    'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
                )
            );

            const first = elements[0];
            const last = elements[elements.length - 1];

            if (!first || !last) {
                event.preventDefault();
                return;
            }

            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        };

        const handleResize = () => {
            if (window.innerWidth >= 1280) {
                setIsOpen(false);
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(frame);
            document.body.style.overflow = previousOverflow;
            document.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("resize", handleResize);

            if (previousFocus instanceof HTMLElement) {
                previousFocus.focus();
            }
        };
    }, [isOpen]);

    const openLogin = () => {
        setIsOpen(false);
        setIsLoginOpen(true);
    };

    return (
        <>
            <button
                ref={menuButtonRef}
                type="button"
                aria-label="Abrir menu de navegação"
                aria-expanded={isOpen}
                aria-controls="moura-mobile-menu"
                onClick={() => setIsOpen(true)}
                className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-[#1E3A2E]/10 bg-white text-[#1E3A2E] transition-colors duration-300 hover:bg-[#E7F3E9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F713A] xl:hidden">
                <Menu size={23} strokeWidth={1.8} />
            </button>

            {isMounted &&
                createPortal(
                    <AnimatePresence>
                        {isOpen && (
                            <div className="fixed inset-0 z-90 xl:hidden">

                                <motion.button
                                    type="button"
                                    aria-label="Fechar menu de navegação"
                                    tabIndex={-1}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: reduceMotion ? 0 : 0.25 }}
                                    onClick={closeMenu}
                                    className="absolute inset-0 h-full w-full cursor-default bg-[#0F1F17]/60 backdrop-blur-sm" />

                                <motion.div
                                    id="moura-mobile-menu"
                                    ref={panelRef}
                                    role="dialog"
                                    aria-modal="true"
                                    aria-label="Menu de navegação"
                                    initial={{
                                        x: reduceMotion ? 0 : "100%",
                                        opacity: reduceMotion ? 1 : 0,
                                    }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{
                                        x: reduceMotion ? 0 : "100%",
                                        opacity: reduceMotion ? 1 : 0,
                                    }}
                                    transition={{
                                        duration: reduceMotion ? 0 : 0.35,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="absolute inset-y-0 right-0 flex h-full w-[min(88vw,390px)] flex-col overflow-y-auto bg-[#F8FAF8] shadow-2xl">

                                    <div className="flex items-center justify-between gap-4 border-b border-[#1E3A2E]/10 px-5 py-6 sm:px-7">
                                        <Link
                                            href="/"
                                            onClick={closeMenu}
                                            aria-label="Moura Urbanismo - Página inicial">
                                            <Image
                                                src="/images/LogotipoMoura.png"
                                                alt="Moura Urbanismo"
                                                width={165}
                                                height={55}
                                                className="h-auto w-37.5 object-contain" />
                                        </Link>

                                        <button
                                            ref={closeButtonRef}
                                            type="button"
                                            onClick={closeMenu}
                                            aria-label="Fechar menu"
                                            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-[#E7F3E9] text-[#1E3A2E] transition-colors hover:bg-[#D4E9D8]">
                                            <X size={21} />
                                        </button>
                                    </div>

                                    <nav aria-label="Navegação mobile" className="flex-1 px-5 py-8 sm:px-7">
                                        <span className="mb-5 block text-xs font-semibold tracking-[0.18em] text-[#829287] uppercase">
                                            Navegação
                                        </span>

                                        <ul className="flex flex-col gap-2">
                                            {links.map((item, index) => {
                                                const Icon = item.icon;

                                                const isActive =
                                                    item.href === "/"
                                                        ? pathname === "/"
                                                        : pathname === item.href ||
                                                        pathname.startsWith(`${item.href}/`);

                                                return (
                                                    <motion.li
                                                        key={item.id}
                                                        initial={{ opacity: 0, x: reduceMotion ? 0 : 15, }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ duration: reduceMotion ? 0 : 0.3, delay: reduceMotion ? 0 : 0.08 + index * 0.05, }}>
                                                        <Link
                                                            href={item.href}
                                                            onClick={closeMenu}
                                                            aria-current={isActive ? "page" : undefined}
                                                            className={`group flex min-h-12 items-center gap-4 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300 ${isActive
                                                                ? "bg-[#E2F2E5] text-[#2F713A]"
                                                                : "text-[#4B554D] hover:bg-[#EAF2EB] hover:text-[#1E3A2E]"
                                                                }`}>
                                                            <Icon size={20} strokeWidth={1.7} aria-hidden="true" />

                                                            <span className="flex-1">{item.texto}</span>

                                                            <ArrowRight
                                                                size={17}
                                                                className={`transition-all duration-300 group-hover:translate-x-1 ${isActive
                                                                    ? "opacity-100"
                                                                    : "opacity-0 group-hover:opacity-100"
                                                                    }`}
                                                            />
                                                        </Link>
                                                    </motion.li>
                                                );
                                            })}
                                        </ul>
                                    </nav>

                                    <div className="border-t border-[#1E3A2E]/10 bg-white px-5 py-6 sm:px-7">
                                        <div className="flex flex-col gap-3">

                                            <button
                                                type="button"
                                                onClick={openLogin}
                                                className="flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-xl border border-[#1E3A2E]/15 bg-white px-5 py-3 text-sm font-semibold text-[#1E3A2E] transition-colors duration-300 hover:bg-[#F2F6F2]">
                                                <LogIn size={18} />
                                                Entrar na minha conta
                                            </button>

                                            <Link
                                                href="/contato"
                                                onClick={closeMenu}
                                                className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#0BDA51] px-5 py-3 text-sm font-bold text-[#0F1F17] transition-all duration-300 hover:bg-[#09C947]">
                                                <Phone size={18} />
                                                Fale com um consultor
                                                <ArrowRight size={17} />
                                            </Link>
                                        </div>

                                        <p className="mt-6 text-center text-xs text-[#8B978E]">
                                            © {new Date().getFullYear()} Moura Urbanismo
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        )}
                    </AnimatePresence>,
                    document.body
                )}
            <LoginModal
                isOpen={isLoginOpen}
                onClose={() => setIsLoginOpen(false)}
            />
        </>
    );
}
"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

type LoginModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);
    const closeRef = useRef<HTMLButtonElement>(null);
    const onCloseRef = useRef(onClose);

    useEffect(() => {
        onCloseRef.current = onClose;
    }, [onClose]);

    useEffect(() => {
        if (!isOpen) return;

        const previousOverflow = document.body.style.overflow;
        const previousFocus = document.activeElement;

        document.body.style.overflow = "hidden";
        closeRef.current?.focus();

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onCloseRef.current();
                return;
            }

            if (event.key === "Tab" && modalRef.current) {
                const elements = Array.from(
                    modalRef.current.querySelectorAll<HTMLElement>(
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
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener("keydown", handleKeyDown);

            if (previousFocus instanceof HTMLElement) {
                previousFocus.focus();
            }
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-100 flex items-center justify-center overflow-y-auto px-4 py-6">

            <button
                type="button"
                aria-label="Fechar janela de login"
                onClick={onClose}
                tabIndex={-1}
                className="fixed inset-0 cursor-default bg-black/60 backdrop-blur-sm" />

            <div
                ref={modalRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="login-title"
                aria-describedby="login-description"
                className="relative z-10 my-auto w-full max-w-[420px] rounded-2xl bg-white p-6 shadow-2xl sm:p-9">

                <button
                    ref={closeRef}
                    type="button"
                    onClick={onClose}
                    aria-label="Fechar janela"
                    className="absolute right-4 top-4 cursor-pointer rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900">
                    <X size={20} />
                </button>

                <div className="mb-8 text-center">
                    <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0BDA51]/10">
                        <span className="text-3xl font-bold text-[#0BDA51]">
                            M
                        </span>
                    </div>

                    <h2 id="login-title" className="text-2xl font-bold tracking-tight text-[#0F0F0F]">
                        Bem-vindo à Moura
                    </h2>

                    <p id="login-description" className="mt-3 text-sm leading-relaxed text-gray-500">
                        Acesse sua conta para acompanhar suas informações e explorar nossos serviços.
                    </p>
                </div>

                <button
                    type="button"
                    disabled
                    title="Autenticação disponível em breve"
                    className="flex w-full cursor-not-allowed items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm font-semibold text-gray-500 opacity-70">
                    <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true">
                        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 5.38 6.51 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5Z" />
                        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.27 5.48-4.8 7.18l7.73 6C44.38 38.03 46.98 31.88 46.98 24.55Z" />
                        <path fill="#FBBC05" d="M10.53 28.59A14.41 14.41 0 0 1 9.75 24c0-1.59.27-3.13.76-4.59l-7.98-6.2A23.89 23.89 0 0 0 0 24c0 3.87.93 7.52 2.56 10.78l7.97-6.19Z" />
                        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.91-5.8l-7.73-6c-2.14 1.44-4.89 2.3-8.18 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48Z" />
                    </svg>
                    Continuar com Google
                </button>

                <p className="mt-4 text-center text-xs font-medium text-gray-400">
                    Autenticação disponível em breve
                </p>

                <div className="mt-8 border-t border-gray-100 pt-5">
                    <p className="text-center text-xs leading-relaxed text-gray-400">
                        Ao continuar, você concorda com nossos Termos de Uso e Política de Privacidade.
                    </p>
                </div>
            </div>
        </div>,
        document.body
    );
}
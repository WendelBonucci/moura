"use client";
import { motion } from "motion/react";

export default function Loanding() {
    return (
        <motion.output
            aria-label="Carregando Moura Urbanismo"
            aria-live="polite"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-9999 flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-background">

            <div className="flex flex-col items-center px-6 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], }}
                    className="flex flex-col items-center">
                    <h1 className="text-4xl font-semibold tracking-[0.22em] text-[#0F0F0F] sm:text-5xl">
                        MOURA
                    </h1>

                    <span className="mt-2 text-[10px] font-medium tracking-[0.5em] text-[#0F0F0F]/55 sm:text-xs">
                        URBANISMO
                    </span>
                </motion.div>

                <div className="mt-12 h-px w-40 overflow-hidden bg-black/10 sm:w-52">
                    <motion.div
                        className="h-full w-1/3 bg-[#0F0F0F]"
                        animate={{ x: ["-100%", "400%"], }}
                        transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, }} />
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mt-5 text-[10px] font-medium tracking-[0.2em] text-black/40 uppercase">
                    Preparando sua experiência
                </motion.p>
            </div>

            <div className="absolute right-0 bottom-8 left-0 text-center">
                <p className="text-[10px] tracking-[0.16em] text-black/35">MOURA URBANISMO</p>
            </div>
        </motion.output>
    );
}
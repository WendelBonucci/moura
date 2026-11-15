"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import Logo from "./Sections/Logo/Logo";
import Navigation from "./Sections/Navigation/Navigation";
import Buttons from "./Sections/Buttons/Buttons";
import SideBar from "./Sections/SideBar/SideBar";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    const pathname = usePathname();
    const isHome = pathname === "/";

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);

        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 w-full bg-white/95 backdrop-blur-md transition-all duration-300 ${scrolled ? "shadow-sm" : "border-b border-black/5"
                }`}
        >
            <div className="mx-auto flex min-h-16 w-full max-w-7xl items-center gap-4 px-4 sm:min-h-18 sm:px-6 lg:min-h-20 lg:px-8">
                <div className="flex shrink-0 items-center">
                    <Logo />
                </div>
                <div className="ml-auto hidden min-w-0 items-center gap-6 xl:flex xl:gap-10">
                    <Navigation />
                    <Buttons />
                </div>

                <div className="ml-auto flex shrink-0 items-center xl:hidden">
                    <SideBar />
                </div>
            </div>
        </header>
    );
}
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type ItemLink = {
    id: number;
    texto: string;
    href: string;
};

const links: ItemLink[] = [
    { id: 1, texto: "Início", href: "/" },
    { id: 2, texto: "Sobre Nós", href: "/about" },
    { id: 3, texto: "Empreendimentos", href: "/empreendimentos" },
    { id: 4, texto: "Blog", href: "/blog" },
];

export default function Navigation() {
    const pathname = usePathname();

    return (
        <nav aria-label="Navegação principal" className="flex items-center">
            <ul className="flex items-center gap-5 xl:gap-7">
                {links.map((item) => {
                    const isActive =
                        item.href === "/"
                            ? pathname === "/"
                            : pathname === item.href ||
                            pathname.startsWith(`${item.href}/`);

                    return (
                        <li key={item.id} className="list-none">
                            <Link
                                href={item.href}
                                aria-current={isActive ? "page" : undefined}
                                className={`group relative inline-flex items-center py-2 text-sm font-medium whitespace-nowrap transition-colors duration-300 ${isActive
                                    ? "text-[#0BDA51]"
                                    : "text-[#0F0F0F] hover:text-[#0BDA51]"}`}>
                                {item.texto}

                                <span
                                    className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-[#0BDA51] transition-all duration-300 ${isActive
                                        ? "w-full"
                                        : "w-0 group-hover:w-full"}`} />
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
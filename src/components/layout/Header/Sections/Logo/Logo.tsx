import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <Link
            href="/"
            aria-label="Moura Urbanismo - Página inicial"
            className="inline-flex shrink-0 items-center transition-opacity duration-300 hover:opacity-80">
            <Image
                src="/images/LogotipoMoura.png"
                alt="Moura Urbanismo"
                width={220}
                height={70}
                priority
                sizes="(max-width: 640px) 150px, (max-width: 1024px) 180px, 220px"
                className="h-auto w-37.5 object-contain sm:w-45 xl:w-55" />
        </Link>
    );
}
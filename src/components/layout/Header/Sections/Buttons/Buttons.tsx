
"use client";

import { useState } from "react";
import Link from "next/link";
import LoginModal from "./LoginModal/LoginModal";

export default function Buttons() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setIsLoginOpen(true)}
          className="cursor-pointer rounded-lg px-5 py-2.5 text-sm font-semibold text-[#0F0F0F] transition-all duration-300 hover:bg-black/5 hover:text-[#0BDA51] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0BDA51]"
        >
          Entrar
        </button>

        <Link
          href="/contato"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-lg bg-[#0BDA51] px-6 py-2.5 text-sm font-semibold text-[#0F0F0F] transition-all duration-300 hover:bg-[#09bd46] hover:shadow-lg hover:shadow-green-500/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0BDA51]"
        >
          Contato
        </Link>
      </div>

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />
    </>
  );
}

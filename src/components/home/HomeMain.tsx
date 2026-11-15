"use client";
import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";

import Hero from "./Sections/Hero/Hero";
import Infrastructure from "./Sections/Infrastructure/Infrastructure";
import About from "./Sections/About/About";
import Enterprises from "./Sections/Enterprises/Enterprises";
import Comments from "./Sections/Comments/Comments";
import Loanding from "../layout/Loanding/Loanding";

export default function HomeMain() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Tempo de apresentação do Loading
        const timer = window.setTimeout(() => { setIsLoading(false); }, 1200);

        return () => window.clearTimeout(timer);
    }, []);

    return (
        <>
            <main>
                <Hero />
                <Infrastructure />
                <About />
                <Enterprises />
                <Comments />
            </main>

            <AnimatePresence>
                {isLoading && <Loanding />}
            </AnimatePresence>
        </>
    );
}
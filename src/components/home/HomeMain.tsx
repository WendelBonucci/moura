import Hero from "./Sections/Hero/Hero"
import Infrastructure from "./Sections/Infrastructure/Infrastructure"
import About from "./Sections/About/About"
import Enterprises from "./Sections/Enterprises/Enterprises"

export default function HomeMain() {
    return (
        <main className="">
            <Hero />
            <Infrastructure />
            <About />
            <Enterprises />
        </main>
    )
}

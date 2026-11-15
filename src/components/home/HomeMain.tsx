import Hero from "./Sections/Hero/Hero"
import Infrastructure from "./Sections/Infrastructure/Infrastructure"
import About from "./Sections/About/About"
import Enterprises from "./Sections/Enterprises/Enterprises"
import Comments from "./Sections/Comments/Comments"

export default function HomeMain() {
    return (
        <main className="">
            <Hero />
            <Infrastructure />
            <About />
            <Enterprises />
            <Comments />
        </main>
    )
}

import Hero from './hero'
import About from './about'
import Projects from './projects'

function HomePage() {
    return (
        <div className='bg-[var(--color-background-1)]'>
            <Hero />
            <About />
            <Projects />
        </div>
    )
}

export default HomePage

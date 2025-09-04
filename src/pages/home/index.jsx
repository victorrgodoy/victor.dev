import Hero from './hero';
import About from './about';
import Projects from './projects';
import SkillSlider from '../../components/ui/SkillSlider';

function HomePage() {
  return (
    <div className="bg-[var(--color-background-1)]">
      <Hero />
      <SkillSlider />
      <About />
      <Projects />
    </div>
  );
}

export default HomePage;

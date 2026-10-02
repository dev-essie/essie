import Brand from './components/Brand';
import FeaturedProjects from './components/FeaturedProjects';
import Link from 'next/link';
import {FiArrowRight, FiChevronDown, FiFileText} from 'react-icons/fi';
export default function Home(){
  return <>
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-inner">
        <p className="hello">Hey, I’m</p>
        <h1 id="hero-title"><span className="hero-mark"><Brand/></span></h1>
        <p className="role">A software developer</p>
        <div className="hero-links">
          <Link href="/certifications"><FiArrowRight aria-hidden="true"/><span>Certifications</span></Link>
          <a href="/Essie-Resume.pdf?v=privacy-20261001" target="_blank" rel="noreferrer"><FiFileText aria-hidden="true"/><span>Resume</span></a>
        </div>
      </div>
      <a className="scroll-cue" href="#featured" aria-label="Scroll to selected work"><span>Selected work</span><FiChevronDown aria-hidden="true"/></a>
    </section>
    <FeaturedProjects/>
  </>;
}

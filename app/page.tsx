import Brand from './components/Brand';
import FeaturedProjects from './components/FeaturedProjects';
import Link from 'next/link';
import {FiArrowRight, FiFileText} from 'react-icons/fi';
export default function Home(){
  return <>
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-inner">
        <p className="hello">Hey, I’m</p>
        <h1 id="hero-title"><Brand/></h1>
        <p className="role">A software developer</p>
        <p className="hero-tagline">Full-stack developer building web platforms, automations, and AI/data tools for clients. I ship the whole thing: front end, API, deployment.</p>
        <div className="hero-links">
          <Link href="/certifications"><FiArrowRight aria-hidden="true"/><span>Certifications</span></Link>
          <a href="/Essie-Resume.pdf" target="_blank" rel="noreferrer"><FiFileText aria-hidden="true"/><span>Resume</span></a>
        </div>
      </div>
    </section>
    <FeaturedProjects/>
  </>;
}

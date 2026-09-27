import Image from 'next/image';
import Link from 'next/link';
import {FiArrowRight, FiExternalLink, FiGithub} from 'react-icons/fi';
import {featured} from '../data/projects';
import {TechChips} from './techIcons';

export default function FeaturedProjects() {
  return <section className="featured" aria-labelledby="featured-title">
    <div className="featured-head">
      <h2 id="featured-title">Selected work</h2>
      <Link href="/projects"><span>All projects</span><FiArrowRight aria-hidden="true"/></Link>
    </div>
    <div className="featured-grid">
      {featured.map(project => {
        const primary = project.live ?? project.repo;
        return <article className="feature-card" key={project.slug}>
          <a className="feature-media" href={primary} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}>
            {project.image ? <Image unoptimized src={project.image} alt={`${project.name} screenshot`} width={600} height={450}/> : <div className="slide-placeholder"><strong>{project.name}</strong></div>}
          </a>
          <span className="slide-cat">{project.category}</span>
          <h3>{project.name}</h3>
          <p>{project.impact}</p>
          <TechChips tech={project.tech}/>
          <div className="feature-links">
            {project.live ? <a href={project.live} target="_blank" rel="noreferrer">Live site <FiExternalLink aria-hidden="true"/></a> : null}
            {project.repo ? <a href={project.repo} target="_blank" rel="noreferrer">Source <FiGithub aria-hidden="true"/></a> : null}
          </div>
        </article>;
      })}
    </div>
  </section>;
}

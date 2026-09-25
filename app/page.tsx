'use client';

import { useState } from 'react';

const projects = [
  { id: '01', name: 'Gofame 360', kind: 'Website development', category: 'Websites', description: 'Built the Gofame 360 website, bringing the brand online with a dedicated web experience.', url: 'https://gofame360.com', label: 'Visit website', visual: 'gofame', tags: ['Client work', 'Web development'] },
  { id: '02', name: 'Emmanuel Onoja', kind: 'Newsletter & custom plugin', category: 'Automation', description: 'Worked on a WordPress newsletter experience and built a custom Resend integration for email subscription confirmation and an automated first newsletter.', url: 'https://emmanuel-onoja.com/newsletter/', label: 'View newsletter', visual: 'newsletter', tags: ['WordPress', 'Resend', 'Email automation'] },
  { id: '03', name: 'Algo Trading with Ighodalo', kind: 'Trading platform', category: 'Websites', description: 'A web platform for distributing and managing MetaTrader 5 Expert Advisors, including selling and licensing trading tools.', url: 'https://github.com/ESTIE-CREATOR/Algo-Trading-With-Ighodalo-Gold-', label: 'View repository', visual: 'trading', tags: ['TypeScript', 'Web application'] },
  { id: '04', name: 'Foodie Fetch', kind: 'Recipe discovery', category: 'Websites', description: 'A recipe discovery app that turns an ingredient into ideas for your next meal. Built with HTML, CSS, and vanilla JavaScript.', url: 'https://github.com/ESTIE-CREATOR/Foodie-Fetch-App', label: 'View repository', visual: 'food', tags: ['JavaScript', 'HTML', 'CSS'] },
];

export default function Home() {
  const [dark, setDark] = useState(false);
  const [filter, setFilter] = useState('All work');
  return (
    <div className={`portfolio${dark ? ' dark' : ''}`}>
      <a href="#main" className="skip">Skip to content</a>
      <header className="header">
        <a className="logo" href="#home" aria-label="Essie home">e<span>✳</span></a>
        <nav aria-label="Main navigation"><a href="#projects">Projects</a><a href="#about">About</a><a href="#contact">Contact <span>↗</span></a><button className="theme" onClick={() => setDark(!dark)} aria-label={`Switch to ${dark ? 'light' : 'dark'} theme`}>{dark ? '☀' : '◐'}</button></nav>
      </header>
      <main id="main">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-content"><p className="eyebrow hello">Hey, I'm</p><h1 id="hero-title">ESSIE<span className="name-dot">.</span></h1><div className="hero-role"><span className="short-line" />A software developer</div><div className="hero-links"><a href="#projects">↘ <span>View projects</span></a><a href="https://github.com/ESTIE-CREATOR" target="_blank" rel="noreferrer"><span>Explore my GitHub</span> ↗</a></div></div>
          <div className="hero-bottom"><span>Thoughtful code. Useful things.</span><a href="#projects">Scroll to explore <span>↓</span></a><span className="edition">Portfolio / 2026</span></div>
        </section>
        <section className="work section" id="projects" aria-labelledby="work-title">
          <div className="section-top"><p className="eyebrow">01 / Selected work</p><span className="muted">From an idea to something real.</span></div>
          <div className="work-heading"><h2 id="work-title">Things I've built<span>.</span></h2><div className="filters" aria-label="Filter projects">{['All work', 'Websites', 'Automation'].map(item => <button key={item} onClick={() => setFilter(item)} aria-pressed={filter === item} className={filter === item ? 'active' : ''}>{item}</button>)}</div></div>
          <div className="project-grid">{projects.filter(p => filter === 'All work' || p.category === filter).map(project => <article className="project" key={project.id}><a className={`project-art ${project.visual}`} href={project.url} target="_blank" rel="noreferrer" aria-label={`${project.label}: ${project.name}`}><span className="art-type">{project.kind}</span>{project.visual === 'gofame' ? <div className="gofame-mark">GOFAME<span>360<span className="small-star">✳</span></span></div> : project.visual === 'newsletter' ? <div className="mail-art"><span className="mail-tag">THE NEWSLETTER</span><strong>A little insight.<br />A lasting impact.</strong><div className="mail-rule" /><span className="mail-sign">Emmanuel Onoja</span><div className="mail-confirm">✓ &nbsp; Subscription confirmed</div></div> : project.visual === 'trading' ? <div className="trading-art"><span className="trading-title">ALGO / IGHODALO</span><div className="chart">{[22,38,31,48,42,62,53,74,66,88,78,100].map((v,i)=><i key={i} style={{height:`${v}%`}} />)}</div><span className="chart-caption">PRECISION. STRATEGY. AUTOMATION.</span></div> : <div className="food-art"><span className="food-spark">✳</span><strong>foodie<br /><em>fetch.</em></strong><span className="food-note">One ingredient. So many possibilities.</span></div>}<span className="art-arrow" aria-hidden="true">↗</span></a><div className="project-title"><h3><a href={project.url} target="_blank" rel="noreferrer">{project.name}</a></h3><span>{project.id}</span></div><p className="project-description">{project.description}</p><div className="tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div></article>)}</div>
          <a className="text-link all-projects" href="https://github.com/ESTIE-CREATOR?tab=repositories" target="_blank" rel="noreferrer">More experiments on GitHub <span>↗</span></a>
        </section>
        <section className="about section" id="about" aria-labelledby="about-title"><p className="eyebrow">02 / A bit about me</p><div className="about-grid"><h2 id="about-title">Curious by nature.<br />A builder by choice<span>.</span></h2><div className="about-copy"><p>I'm Esther — you can call me Essie. I build websites, practical tools, and automations that make everyday work a little easier.</p><p>My work spans web development, custom WordPress integrations, and scientific computing. With a background in biochemistry, I bring the same curiosity to understanding a problem as I do to writing the code that solves it.</p><div className="skills"><span>JavaScript</span><span>TypeScript</span><span>React</span><span>WordPress</span><span>Python</span><span>Automation</span></div><a className="text-link" href="https://github.com/ESTIE-CREATOR" target="_blank" rel="noreferrer">Meet the developer behind the code ↗</a></div></div></section>
        <section className="contact section" id="contact" aria-labelledby="contact-title"><p className="eyebrow">03 / What's next?</p><div className="contact-layout"><h2 id="contact-title">Let's make<br />something <em>matter.</em></h2><div><p>A website, a custom integration,<br />or an idea worth exploring.</p><a className="contact-button" href="https://github.com/ESTIE-CREATOR" target="_blank" rel="noreferrer">Find me on GitHub <span>↗</span></a></div></div></section>
      </main>
      <footer className="footer"><a href="#home" className="footer-brand">essie<span>✳</span></a><span>Made with care. Built by Essie.</span><a href="#home">Back to top ↑</a></footer>
    </div>
  );
}

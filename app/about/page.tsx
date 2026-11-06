import type {Metadata} from 'next';
import Link from 'next/link';
import {FiArrowRight} from 'react-icons/fi';
import {SiGit, SiJavascript, SiNextdotjs, SiPython, SiReact, SiResend, SiScikitlearn, SiStreamlit, SiTailwindcss, SiTypescript, SiWordpress} from 'react-icons/si';
export const metadata:Metadata={title:'About'};
const skills=[['TypeScript',SiTypescript],['JavaScript',SiJavascript],['React',SiReact],['Next.js',SiNextdotjs],['Tailwind CSS',SiTailwindcss],['WordPress',SiWordpress],['Resend',SiResend],['Python',SiPython],['Streamlit',SiStreamlit],['scikit-learn',SiScikitlearn],['Git',SiGit]] as const;
export default function About(){
  return <section className="page about-page">
    <h1>ABOUT</h1>
    <p className="lede">Hi, I’m Esther. Call me Essie. I’m a full-stack developer who builds web platforms, automations, and AI/data tools for clients, and ships them end to end.</p>
    <div className="about-body">
      <p>Recent work includes <strong>Algo Trading with Ighodalo</strong> (April 2025 – October 2026), where I was sole developer: licensing API, payment flow, user accounts, and the company site at <a href="https://algotradingwithighodalo.xyz/" target="_blank" rel="noreferrer">algotradingwithighodalo.xyz</a>; <strong>Paycrest</strong> (Software Engineer Intern, October 2026 – December 2026) — contributions across open-source repos (documentation; dashboard in Remix and TypeScript; settlement aggregator in Go) for a stablecoin-to-fiat protocol serving Africa; the MyPropGuard waitlist; sites for Gofame 360, MarvelTech Hub, and Haven Word Church; a WordPress newsletter plugin on Resend for Emmanuel Onoja; and a Telegram bot that writes meeting reports to Google Sheets.</p>
      <p>I came to code through science: <strong>First Class Honours in Biochemistry</strong> (UNIMED, 2024). I build data tools the same way — GeneLens is an RNA-seq analysis app with machine learning and AI interpretation, applied to <strong>public GEO</strong> data with clear reporting on methods and leakage checks; the T2DM repo is a <strong>synthetic workflow case study</strong> (not a second real-patient validation). More detail is on the <Link href="/research">Research</Link> page.</p>
    </div>
    <h2>Things I work with</h2>
    <ul className="skills">{skills.map(([label,Icon])=><li key={label}><Icon aria-hidden="true"/><span>{label}</span></li>)}</ul>
    <div className="page-links"><Link href="/research"><span>Research</span><FiArrowRight aria-hidden="true"/></Link><Link href="/projects"><span>View projects</span><FiArrowRight aria-hidden="true"/></Link><Link href="/contact"><span>Get in touch</span><FiArrowRight aria-hidden="true"/></Link></div>
  </section>;
}

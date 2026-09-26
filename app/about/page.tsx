import type {Metadata} from 'next';
import Link from 'next/link';
import {FiArrowRight} from 'react-icons/fi';
import {SiGit, SiJavascript, SiNextdotjs, SiPython, SiReact, SiResend, SiScikitlearn, SiStreamlit, SiTailwindcss, SiTypescript, SiWordpress} from 'react-icons/si';
export const metadata:Metadata={title:'About'};
const skills=[['TypeScript',SiTypescript],['JavaScript',SiJavascript],['React',SiReact],['Next.js',SiNextdotjs],['Tailwind CSS',SiTailwindcss],['WordPress',SiWordpress],['Resend',SiResend],['Python',SiPython],['Streamlit',SiStreamlit],['scikit-learn',SiScikitlearn],['Git',SiGit]] as const;
export default function About(){
  return <section className="page about-page">
    <h1>ABOUT</h1>
    <p className="lede">Hi, I’m Esther. Call me Essie. I build websites, custom integrations, and automations that make everyday work a little easier.</p>
    <div className="about-body">
      <p>On the web side, that means projects like Algo Trading with Ighodalo, a platform for licensing MetaTrader 5 trading tools, Haven Word Church, Gofame 360, and MyPropGuard. For Emmanuel Onoja’s WordPress newsletter, I built a custom Resend plugin that confirms subscriptions by email and sends the first newsletter automatically.</p>
      <p>My background is in biochemistry, where I graduated with First Class Honours. That curiosity carries into GeneLens, an RNA-seq analysis pipeline with pathway enrichment, machine learning, and AI interpretation, and into a computational study of Type 2 Diabetes liver transcriptomics.</p>
    </div>
    <h2>Things I work with</h2>
    <ul className="skills">{skills.map(([label,Icon])=><li key={label}><Icon aria-hidden="true"/><span>{label}</span></li>)}</ul>
    <div className="page-links"><Link href="/projects"><FiArrowRight aria-hidden="true"/><span>View projects</span></Link><Link href="/contact"><span>Get in touch</span><FiArrowRight aria-hidden="true"/></Link></div>
  </section>;
}

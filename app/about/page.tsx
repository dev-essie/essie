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
      <p>Recent work includes Algo Trading with Ighodalo, where I built the licensing API, payment flow, and user accounts for a MetaTrader 5 marketplace as sole developer; the MyPropGuard waitlist launch; websites for Gofame 360, MarvelTech Hub, and Haven Word Church; a custom WordPress plugin on the Resend API for Emmanuel Onoja’s newsletter; and a Telegram bot that turns meeting reports into Google Sheets rows.</p>
      <p>I came to code through science. I graduated with First Class Honours in Biochemistry, and I use the same engineering to build data tools: GeneLens, an RNA-seq analysis app with machine learning and AI interpretation, and a published computational study built on it. It means I’m comfortable with data, statistics, and the kind of careful validation that makes software trustworthy.</p>
    </div>
    <h2>Things I work with</h2>
    <ul className="skills">{skills.map(([label,Icon])=><li key={label}><Icon aria-hidden="true"/><span>{label}</span></li>)}</ul>
    <div className="page-links"><Link href="/projects"><FiArrowRight aria-hidden="true"/><span>View projects</span></Link><Link href="/contact"><span>Get in touch</span><FiArrowRight aria-hidden="true"/></Link></div>
  </section>;
}

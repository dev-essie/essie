import type {Metadata} from 'next';
import {FiCopy, FiExternalLink, FiGithub, FiLinkedin, FiMail} from 'react-icons/fi';
import EmailLink, {EMAIL} from '../components/EmailLink';
export const metadata:Metadata={title:'Contact'};
export default function Contact(){
  return <section className="page contact-page">
    <h1>CONTACT</h1>
    <p className="lede">Feel free to reach out via email, LinkedIn, or GitHub. I’ll get back to you as soon as possible.</p>
    <div className="contact-cards">
      <a className="contact-card" href="https://linkedin.com/in/alabi-esther-essie" target="_blank" rel="noreferrer"><FiLinkedin aria-hidden="true"/><h2>LinkedIn</h2><p>Connect with me <FiExternalLink aria-hidden="true"/></p></a>
      <a className="contact-card" href="https://github.com/dev-essie" target="_blank" rel="noreferrer"><FiGithub aria-hidden="true"/><h2>GitHub</h2><p>@dev-essie <FiExternalLink aria-hidden="true"/></p></a>
      <EmailLink className="contact-card" title="Click to copy the address"><FiMail aria-hidden="true"/><h2>Email</h2><p>{EMAIL} <FiCopy aria-hidden="true"/></p></EmailLink>
    </div>
  </section>;
}

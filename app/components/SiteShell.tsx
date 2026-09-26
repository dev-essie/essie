'use client';
import Link from 'next/link';
import {usePathname, useRouter} from 'next/navigation';
import {useCallback, useEffect, useState} from 'react';
import {FiGithub, FiLinkedin, FiMail, FiMenu, FiMoon, FiSun, FiX} from 'react-icons/fi';
import Brand from './Brand';
import {useClickBurst} from './ClickBurst';
import Intro from './Intro';

const socials = [
  {href: 'https://github.com/dev-essie', label: 'GitHub', Icon: FiGithub},
  {href: 'https://linkedin.com/in/alabi-esther-essie', label: 'LinkedIn', Icon: FiLinkedin},
  {href: 'mailto:admin@devessie.xyz', label: 'Email', Icon: FiMail},
];

const navLinks = [['/projects','Projects'],['/about','About'],['/certifications','Certifications'],['/contact','Contact']];

export default function SiteShell({children}: {children: React.ReactNode}) {
  const [dark, setDark] = useState(false);
  const [menu, setMenu] = useState(false);
  const path = usePathname();
  const [intro, setIntro] = useState(path === '/');
  const router = useRouter();
  const {fire, layer} = useClickBurst();
  useEffect(() => { document.documentElement.classList.toggle('dark', dark); }, [dark]);
  useEffect(() => { setMenu(false); }, [path]);
  useEffect(() => { document.body.classList.toggle('menu-open', menu); return () => document.body.classList.remove('menu-open'); }, [menu]);
  function toggleTheme() { setDark(value => !value); }
  const endIntro = useCallback(() => setIntro(false), []);
  function replayIntro(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    setMenu(false);
    setIntro(true);
    if (path !== '/') router.push('/');
  }
  const links = navLinks.map(([href,label]) => <Link key={href} href={href} aria-current={path===href?'page':undefined} onClick={() => setMenu(false)}>{label}</Link>);
  const socialLinks = socials.map(({href,label,Icon}) => <a key={href} href={href} target={href.startsWith('mailto:') ? undefined : '_blank'} rel="noreferrer" aria-label={label}><Icon/></a>);
  return <>
    <a href="#main" className="skip">Skip to content</a>
    {intro ? <Intro onDone={endIntro}/> : null}
    {layer}
    <nav className="nav" aria-label="Main navigation" onClickCapture={event => { if ((event.target as HTMLElement).closest('a,button')) fire(event); }}>
      <Link className="nav-logo" href="/" aria-label="Essie home" onClick={replayIntro}><Brand/></Link>
      <div className="nav-links">
        {links}
        <button className="theme" onClick={toggleTheme} aria-label={`Switch to ${dark?'light':'dark'} theme`}>{dark ? <FiSun/> : <FiMoon/>}</button>
      </div>
      <div className="nav-mobile">
        <button className="theme" onClick={toggleTheme} aria-label={`Switch to ${dark?'light':'dark'} theme`}>{dark ? <FiSun/> : <FiMoon/>}</button>
        <button className="theme nav-toggle" onClick={() => setMenu(value => !value)} aria-expanded={menu} aria-controls="mobile-menu" aria-label={menu ? 'Close menu' : 'Open menu'}>{menu ? <FiX/> : <FiMenu/>}</button>
      </div>
    </nav>
    <div id="mobile-menu" className={`nav-menu${menu ? ' open' : ''}`} aria-hidden={!menu} onClickCapture={event => { if ((event.target as HTMLElement).closest('a')) fire(event); }}>
      <div className="nav-menu-links">{links}</div>
      <div className="nav-menu-socials">{socialLinks}</div>
    </div>
    <aside className="social-rail" aria-label="Social links">
      <span className="rail-line" aria-hidden="true"/>
      {socialLinks}
    </aside>
    <main id="main">{children}</main>
  </>;
}

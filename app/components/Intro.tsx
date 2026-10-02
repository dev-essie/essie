'use client';
import {useEffect} from 'react';

/**
 * Home-page intro: a cover over everything but the hero wordmark, which a sage scanner line lights up.
 * The wordmark is the real hero text (main.intro-on lifts it above the cover), so nothing moves when the cover fades.
 */
export default function Intro({onDone}: {onDone: () => void}) {
  useEffect(() => {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timer = setTimeout(onDone, reduced ? 300 : 3600);
    return () => clearTimeout(timer);
  }, [onDone]);
  // The wordmark is only in view at the top of the page, so hold the scroll there while the cover is up.
  useEffect(() => {
    const toTop = () => { if (window.scrollY) window.scrollTo({top: 0, behavior: 'instant'}); };
    toTop();
    window.addEventListener('scroll', toTop);
    return () => window.removeEventListener('scroll', toTop);
  }, []);
  return <div className="intro" role="status" aria-label="Loading">
    <button type="button" className="intro-skip" onClick={onDone}>Skip intro</button>
  </div>;
}

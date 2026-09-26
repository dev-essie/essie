'use client';
import {useEffect} from 'react';
import Brand from './Brand';

/** Home-page intro: the essie logo sits dimmed while a sage scanner line sweeps across and lights it up. */
export default function Intro({onDone}: {onDone: () => void}) {
  useEffect(() => {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timer = setTimeout(onDone, reduced ? 300 : 3600);
    return () => clearTimeout(timer);
  }, [onDone]);
  return <div className="intro" role="status" aria-label="Loading">
    <div className="intro-logo" aria-hidden="true">
      <span className="intro-dim"><Brand/></span>
      <span className="intro-lit"><Brand/></span>
      <span className="intro-scan"/>
    </div>
    <button type="button" className="intro-skip" onClick={onDone}>Skip intro</button>
  </div>;
}

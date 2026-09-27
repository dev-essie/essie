'use client';
import {useEffect, useState} from 'react';

export const EMAIL = 'admin@devessie.xyz';

/**
 * A mailto link that also copies the address. mailto: does nothing in browsers without a
 * configured mail app, so the copy gives the visitor something that always works.
 */
export default function EmailLink({children, className, ...rest}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2200);
    return () => clearTimeout(timer);
  }, [copied]);
  async function onClick() {
    try { await navigator.clipboard.writeText(EMAIL); setCopied(true); } catch { /* clipboard unavailable, mailto still fires */ }
  }
  return <>
    <a href={`mailto:${EMAIL}`} className={className} onClick={onClick} {...rest}>{children}</a>
    {copied ? <span className="toast" role="status">Email copied: {EMAIL}</span> : null}
  </>;
}

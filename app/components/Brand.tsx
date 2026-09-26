export default function Brand({className = ''}: {className?: string}) {
  return <span className={`brand ${className}`.trim()} role="img" aria-label="essie."><span aria-hidden="true">ess<span className="brand-i">ı</span>e</span><span className="brand-dot" aria-hidden="true"/></span>;
}

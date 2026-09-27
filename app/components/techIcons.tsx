import type {IconType} from 'react-icons';
import {FiCpu} from 'react-icons/fi';
import {SiAnthropic, SiCss, SiGooglesheets, SiHtml5, SiJavascript, SiNextdotjs, SiPlotly, SiPostgresql, SiPython, SiReact, SiResend, SiScikitlearn, SiStreamlit, SiSupabase, SiTailwindcss, SiTelegram, SiTypescript, SiVite, SiWordpress} from 'react-icons/si';
import type {Tech} from '../data/projects';

export const techIcons: Record<Tech, {Icon: IconType; label: string}> = {
  typescript:{Icon:SiTypescript,label:'TypeScript'}, javascript:{Icon:SiJavascript,label:'JavaScript'}, react:{Icon:SiReact,label:'React'},
  nextjs:{Icon:SiNextdotjs,label:'Next.js'}, tailwind:{Icon:SiTailwindcss,label:'Tailwind'}, vite:{Icon:SiVite,label:'Vite'},
  python:{Icon:SiPython,label:'Python'}, wordpress:{Icon:SiWordpress,label:'WordPress'}, streamlit:{Icon:SiStreamlit,label:'Streamlit'},
  html:{Icon:SiHtml5,label:'HTML'}, css:{Icon:SiCss,label:'CSS'}, telegram:{Icon:SiTelegram,label:'Telegram API'},
  sklearn:{Icon:SiScikitlearn,label:'scikit-learn'}, resend:{Icon:SiResend,label:'Resend'}, anthropic:{Icon:SiAnthropic,label:'Claude API'}, openai:{Icon:FiCpu,label:'OpenAI API'},
  supabase:{Icon:SiSupabase,label:'Supabase'}, postgres:{Icon:SiPostgresql,label:'Postgres'}, googlesheets:{Icon:SiGooglesheets,label:'Google Sheets'}, plotly:{Icon:SiPlotly,label:'Plotly'},
};

export function TechChips({tech, className = ''}: {tech: Tech[]; className?: string}) {
  return <ul className={`chips ${className}`.trim()} aria-label="Built with">
    {tech.map(key => { const {Icon, label} = techIcons[key]; return <li key={key}><Icon aria-hidden="true"/>{label}</li>; })}
  </ul>;
}

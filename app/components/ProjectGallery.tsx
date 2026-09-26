'use client';
import type {CSSProperties} from 'react';
import Image from 'next/image';
import type {IconType} from 'react-icons';
import {Swiper, SwiperSlide} from 'swiper/react';
import {A11y, EffectCoverflow, Keyboard, Mousewheel, Navigation, Pagination} from 'swiper/modules';
import {FiCpu, FiExternalLink, FiGithub} from 'react-icons/fi';
import {SiAnthropic, SiCss, SiHtml5, SiJavascript, SiNextdotjs, SiPython, SiReact, SiResend, SiScikitlearn, SiStreamlit, SiTailwindcss, SiTelegram, SiTypescript, SiVite, SiWordpress} from 'react-icons/si';
import {projects, type Tech} from '../data/projects';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const techIcons: Record<Tech, {Icon: IconType; label: string}> = {
  typescript:{Icon:SiTypescript,label:'TypeScript'}, javascript:{Icon:SiJavascript,label:'JavaScript'}, react:{Icon:SiReact,label:'React'},
  nextjs:{Icon:SiNextdotjs,label:'Next.js'}, tailwind:{Icon:SiTailwindcss,label:'Tailwind CSS'}, vite:{Icon:SiVite,label:'Vite'},
  python:{Icon:SiPython,label:'Python'}, wordpress:{Icon:SiWordpress,label:'WordPress'}, streamlit:{Icon:SiStreamlit,label:'Streamlit'},
  html:{Icon:SiHtml5,label:'HTML'}, css:{Icon:SiCss,label:'CSS'}, telegram:{Icon:SiTelegram,label:'Telegram Bot API'},
  sklearn:{Icon:SiScikitlearn,label:'scikit-learn'}, resend:{Icon:SiResend,label:'Resend'}, anthropic:{Icon:SiAnthropic,label:'Claude API'}, openai:{Icon:FiCpu,label:'OpenAI API'},
};

export default function ProjectGallery(){
  return <Swiper
    modules={[EffectCoverflow, Navigation, Pagination, Keyboard, Mousewheel, A11y]}
    effect="coverflow" grabCursor centeredSlides slidesPerView="auto" initialSlide={0}
    coverflowEffect={{rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: false}}
    navigation pagination={{clickable: true, dynamicBullets: true}} keyboard={{enabled: true}} mousewheel={{forceToAxis: true}}
    className="project-swiper" style={{'--swiper-navigation-size': '25px'} as CSSProperties}
    a11y={{prevSlideMessage: 'Previous project', nextSlideMessage: 'Next project'}}>
    {projects.map((project, index) => {
      const primary = project.live ?? project.repo;
      return <SwiperSlide key={project.slug}>
        <article className="slide-card" aria-label={project.name}>
          <a className="slide-media" href={primary} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}>
            {project.image
              ? <Image unoptimized src={project.image} alt={`${project.name} screenshot`} width={575} height={575} loading={index < 2 ? 'eager' : 'lazy'} decoding="async" draggable={false}/>
              : <div className="slide-placeholder"><span>{project.category}</span><strong>{project.name}</strong></div>}
            <span className="slide-dim" aria-hidden="true"/>
          </a>
          <div className="slide-overlay">
            <div className="slide-panel">
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <div className="slide-icons">
                {project.tech.map(key => { const {Icon,label} = techIcons[key]; return <span key={key} title={label} aria-label={label} role="img"><Icon/></span>; })}
                {project.tech.length > 0 && (project.live || project.repo) ? <span className="icon-sep" aria-hidden="true"/> : null}
                {project.live ? <a href={project.live} target="_blank" rel="noreferrer" title="Live site" aria-label={`Visit ${project.name}`}><FiExternalLink/></a> : null}
                {project.repo ? <a href={project.repo} target="_blank" rel="noreferrer" title="Source code" aria-label={`${project.name} source on GitHub`}><FiGithub/></a> : null}
              </div>
            </div>
          </div>
        </article>
      </SwiperSlide>;
    })}
  </Swiper>;
}

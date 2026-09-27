'use client';
import type {CSSProperties} from 'react';
import {useState} from 'react';
import Image from 'next/image';
import {Swiper, SwiperSlide} from 'swiper/react';
import {A11y, EffectCoverflow, Keyboard, Mousewheel, Navigation, Pagination} from 'swiper/modules';
import {FiExternalLink, FiGithub} from 'react-icons/fi';
import {categories, projects, type Category} from '../data/projects';
import {TechChips} from './techIcons';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Tab = 'All' | Category;
const tabs: Tab[] = ['All', ...categories];

export default function ProjectGallery(){
  const [tab, setTab] = useState<Tab>('All');
  const shown = tab === 'All' ? projects : projects.filter(p => p.category === tab);
  return <>
    <div className="gallery-tabs" role="tablist" aria-label="Project groups">
      {tabs.map(item => <button key={item} role="tab" aria-selected={tab === item} className={tab === item ? 'active' : ''} onClick={() => setTab(item)}>
        {item}<span className="tab-count">{item === 'All' ? projects.length : projects.filter(p => p.category === item).length}</span>
      </button>)}
    </div>
    <Swiper key={tab}
      modules={[EffectCoverflow, Navigation, Pagination, Keyboard, Mousewheel, A11y]}
      effect="coverflow" grabCursor centeredSlides slidesPerView="auto" initialSlide={0}
      coverflowEffect={{rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: false}}
      navigation pagination={{clickable: true, dynamicBullets: true}} keyboard={{enabled: true}} mousewheel={{forceToAxis: true}}
      className="project-swiper" style={{'--swiper-navigation-size': '25px'} as CSSProperties}
      a11y={{prevSlideMessage: 'Previous project', nextSlideMessage: 'Next project'}}>
      {shown.map((project, index) => {
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
                <span className="slide-cat">{project.category}</span>
                <h2>{project.name}</h2>
                <p>{project.impact}</p>
                <div className="slide-foot">
                  <TechChips tech={project.tech}/>
                  <div className="slide-icons">
                    {project.live ? <a href={project.live} target="_blank" rel="noreferrer" title="Live site" aria-label={`Visit ${project.name}`}><FiExternalLink/></a> : null}
                    {project.repo ? <a href={project.repo} target="_blank" rel="noreferrer" title="Source code" aria-label={`${project.name} source on GitHub`}><FiGithub/></a> : null}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </SwiperSlide>;
      })}
    </Swiper>
  </>;
}

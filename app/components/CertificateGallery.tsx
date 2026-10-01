'use client';
import type {CSSProperties} from 'react';
import {useCallback, useEffect, useRef, useState} from 'react';
import Image from 'next/image';
import {Swiper, SwiperSlide} from 'swiper/react';
import {A11y, EffectCoverflow, Keyboard, Mousewheel, Navigation, Pagination} from 'swiper/modules';
import {FiChevronLeft, FiChevronRight, FiExternalLink, FiX} from 'react-icons/fi';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export type Certificate = {title: string; issuer: string; date: string; image: string; width: number; height: number; file?: string};

export default function CertificateGallery({certificates}: {certificates: Certificate[]}) {
  const [current, setCurrent] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const open = (index: number) => { setCurrent(index); dialog.current?.showModal(); };
  const close = () => dialog.current?.close();
  const step = useCallback((delta: number) => setCurrent(i => i === null ? i : (i + delta + certificates.length) % certificates.length), [certificates.length]);
  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (!dialog.current?.open) return;
      if (event.key === 'ArrowRight') step(1);
      if (event.key === 'ArrowLeft') step(-1);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [step]);
  const active = current === null ? null : certificates[current];

  return <>
    <Swiper
      modules={[EffectCoverflow, Navigation, Pagination, Keyboard, Mousewheel, A11y]}
      effect="coverflow" grabCursor centeredSlides slidesPerView="auto"
      coverflowEffect={{rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: false}}
      navigation pagination={{clickable: true, dynamicBullets: true}} keyboard={{enabled: true}} mousewheel={{forceToAxis: true}}
      className="project-swiper cert-swiper" style={{'--swiper-navigation-size': '25px'} as CSSProperties}
      a11y={{prevSlideMessage: 'Previous certificate', nextSlideMessage: 'Next certificate'}}>
      {certificates.map((cert, index) => <SwiperSlide key={cert.title}>
        <article className="slide-card cert-slide" aria-label={cert.title}>
          <button type="button" className="slide-media cert-open" onClick={() => open(index)} aria-label={`View ${cert.title}`}>
            <Image unoptimized src={cert.image} alt={`${cert.title} certificate`} width={cert.width} height={cert.height} loading={index < 2 ? 'eager' : 'lazy'} draggable={false}/>
            <span className="slide-dim" aria-hidden="true"/>
          </button>
          <div className="slide-overlay">
            <div className="slide-panel">
              <h2>{cert.issuer}</h2>
              <p>{cert.title}</p>
              <span className="cert-date">{cert.date}</span>
            </div>
          </div>
        </article>
      </SwiperSlide>)}
    </Swiper>

    <dialog ref={dialog} className="cert-dialog" aria-label="Certificate viewer" onClick={event => { if (event.target === dialog.current) close(); }} onClose={() => setCurrent(null)}>
      {active ? <div className="cert-dialog-inner">
        <div className="cert-dialog-bar">
          <div><span className="cert-dialog-issuer">{active.issuer}</span><h2>{active.title}</h2></div>
          <div className="cert-dialog-actions">
            {active.file ? <a href={active.file} target="_blank" rel="noreferrer">PDF <FiExternalLink aria-hidden="true"/></a> : null}
            <button type="button" className="cert-nav" onClick={() => step(-1)} aria-label="Previous certificate"><FiChevronLeft/></button>
            <button type="button" className="cert-nav" onClick={() => step(1)} aria-label="Next certificate"><FiChevronRight/></button>
            <button type="button" className="cert-nav cert-close" onClick={close} aria-label="Close viewer"><FiX/></button>
          </div>
        </div>
        <div className="cert-stage">
          <Image unoptimized src={active.image} alt={`${active.title} certificate`} width={active.width} height={active.height}/>
        </div>
        <p className="cert-dialog-foot">{active.date} · {current! + 1} of {certificates.length} | Public copy: sensitive details redacted</p>
      </div> : null}
    </dialog>
  </>;
}

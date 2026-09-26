'use client';
import {useCallback, useState} from 'react';

type Burst = {id: number; x: number; y: number};

/** Sage stroke burst at the pointer, like the reference nav click. Returns the burst layer and a handler to attach to a container. */
export function useClickBurst() {
  const [bursts, setBursts] = useState<Burst[]>([]);
  const fire = useCallback((event: React.MouseEvent) => {
    if (event.clientX === 0 && event.clientY === 0) return; // keyboard activation
    const id = Date.now() + Math.random();
    setBursts(list => [...list, {id, x: event.clientX, y: event.clientY}]);
    setTimeout(() => setBursts(list => list.filter(b => b.id !== id)), 600);
  }, []);
  const layer = <div className="burst-layer" aria-hidden="true">
    {bursts.map(b => <span key={b.id} className="burst" style={{left: b.x, top: b.y}}>
      {Array.from({length: 6}, (_, i) => <i key={i} style={{transform: `rotate(${i * 60 - 90}deg)`}}/>)}
    </span>)}
  </div>;
  return {fire, layer};
}

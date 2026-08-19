'use client';

import { useState } from 'react';

const VIDEO_SRC =
  'https://res.cloudinary.com/sqlym0db/video/upload/f_auto,q_auto:eco,w_960,c_scale/v1787092872/video_overlay.mp4';

const IMAGE_SRC =
  'https://res.cloudinary.com/sqlym0db/image/upload/f_auto,q_auto/v1787150108/Screenshot_2026-08-19_at_10.34.01_AM.png';

function isSlowConnection() {
  if (typeof navigator === 'undefined') return false;
  const connection = (navigator as any).connection;
  if (!connection) return false;
  return (
    connection.saveData ||
    ['slow-2g', '2g', '3g'].includes(connection.effectiveType)
  );
}

export function HeroSection() {
  const [showVideo, setShowVideo] = useState(() => !isSlowConnection());

  const scrollToJourney = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section
      className="relative h-screen min-h-[640px] overflow-hidden"
      style={{
        background:
          'repeating-linear-gradient(135deg, #ece5d8, #ece5d8 14px, #e2d9c8 14px, #e2d9c8 28px)',
      }}
    >
      {showVideo ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={VIDEO_SRC}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={IMAGE_SRC}
          alt=""
        />
      )}
      <div
        className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-9 pb-[88px]"
        style={{
          background:
            'linear-gradient(to top, rgba(33,29,25,0.28), rgba(33,29,25,0) 55%)',
        }}
      >
        <h1 className="m-0 text-center font-display text-[clamp(56px,9vw,116px)] font-semibold leading-[0.95] tracking-[-0.02em] text-white">
          Endless Summer
        </h1>
        <button
          onClick={scrollToJourney}
          className="rounded-[2px] bg-accent px-10 py-[17px] text-[12px] font-semibold tracking-[0.14em] text-white transition-colors hover:bg-accent-hover"
        >
          START THE JOURNEY
        </button>
      </div>
    </section>
  );
}

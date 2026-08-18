"use client";

export function HeroSection() {
  const scrollToJourney = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section
      className="relative h-screen min-h-[640px] overflow-hidden"
      style={{
        background:
          "repeating-linear-gradient(135deg, #ece5d8, #ece5d8 14px, #e2d9c8 14px, #e2d9c8 28px)",
      }}
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="https://res.cloudinary.com/sqlym0db/video/upload/v1787092872/video_overlay.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div
        className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-9 pb-[88px]"
        style={{
          background: "linear-gradient(to top, rgba(33,29,25,0.28), rgba(33,29,25,0) 55%)",
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

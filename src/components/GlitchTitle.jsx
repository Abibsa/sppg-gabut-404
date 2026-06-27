import { siteConfig } from "../config/siteConfig";

export default function GlitchTitle() {
  return (
    <div className="text-center z-10 relative mt-16 mb-12">
      <h1 className="font-['Orbitron'] font-black text-4xl sm:text-5xl md:text-6xl text-[var(--accent-primary)] tracking-[0.15em] leading-none glow-title glitch-anim flicker-anim">
        {siteConfig.name}
      </h1>
      <p className="font-['Rajdhani'] font-semibold text-[var(--text-muted)] tracking-[0.2em] italic text-xl mt-4 glow-subtitle">
        {siteConfig.yayasan}
      </p>
    </div>
  );
}

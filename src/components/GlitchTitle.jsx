import { siteConfig } from "../config/siteConfig";

export default function GlitchTitle() {
  return (
    <div className="text-center z-10 relative mt-16 mb-12">
      <h1 className="font-['Orbitron'] font-black text-[clamp(2rem,6vw,5rem)] text-[#00e5ff] tracking-[0.15em] glow-title glitch-anim flicker-anim">
        {siteConfig.name}
      </h1>
      <p className="font-['Rajdhani'] font-semibold text-[#f5c518] tracking-[0.2em] italic text-xl mt-2 glow-subtitle">
        {siteConfig.yayasan}
      </p>
    </div>
  );
}

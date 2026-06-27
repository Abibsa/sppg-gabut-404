import { siteConfig } from "../config/siteConfig";

export default function Footer() {
  return (
    <footer className="relative z-10 py-8 border-t border-[#00e5ff]/10 bg-[#050d0a]/50 backdrop-blur-sm mt-auto">
      <div className="max-w-6xl mx-auto px-4 text-center space-y-2">
        <p className="text-[#556b6b] text-sm font-['Rajdhani']">
          &copy; {siteConfig.year} <span className="text-[#00e5ff] font-bold">{siteConfig.name}</span>. All Rights Reserved. Powered by {siteConfig.yayasan}.
        </p>
        <p className="font-['Share_Tech_Mono'] text-[rgba(0,229,255,0.3)] text-xs">
          Dibuat oleh <span className="text-[#00e5ff] drop-shadow-[0_0_5px_rgba(0,229,255,0.8)]">Abib</span> &middot; karena gabut
        </p>
      </div>
    </footer>
  );
}

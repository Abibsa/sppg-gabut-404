import { siteConfig } from "../config/siteConfig";

export default function Footer() {
  return (
    <footer className="relative z-10 py-8 border-t border-[var(--border-glow)] bg-[var(--bg-main)]/50 backdrop-blur-sm mt-auto">
      <div className="max-w-6xl mx-auto px-4 text-center space-y-2">
        <p className="text-[var(--text-muted)] text-sm font-['Rajdhani']">
          &copy; {siteConfig.year} <span className="text-[var(--accent-primary)] font-bold">{siteConfig.name}</span>. All Rights Reserved. Powered by {siteConfig.yayasan}.
        </p>
        <p className="font-['Share_Tech_Mono'] text-[var(--text-muted)] text-xs">
          Dibuat oleh <span className="text-[var(--accent-primary)] drop-shadow-[0_0_5px_var(--border-glow)]">Abib</span> &middot; karena gabut
        </p>
      </div>
    </footer>
  );
}

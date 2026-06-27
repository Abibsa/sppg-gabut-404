import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { playHoverSound, playClickSound } from "../utils/SoundEffects";
import { Link } from "react-router-dom";

export default function MenuButton({ label, link, external }) {
  const item = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  const className = "btn-glow relative block w-full p-4 border border-[var(--border-glow)] bg-[var(--bg-main)]/90 rounded text-[var(--accent-primary)] font-['Orbitron'] uppercase tracking-[0.1em] font-bold transition-all duration-300 overflow-hidden group";

  const content = (
    <>
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[var(--accent-primary)] opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[var(--accent-primary)] opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[var(--accent-primary)] opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[var(--accent-primary)] opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="flex items-center justify-center gap-2 relative z-10">
        <ChevronRight size={20} className="group-hover:text-[var(--text-main)] transition-colors shrink-0" />
        <span className="group-hover:text-[var(--text-main)] transition-colors text-center leading-tight">{label}</span>
      </div>
    </>
  );

  if (external) {
    return (
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        variants={item}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onMouseEnter={playHoverSound}
        onClick={playClickSound}
        className={className}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div
      variants={item}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onMouseEnter={playHoverSound}
      onClick={playClickSound}
    >
      <Link to={link} className={className}>
        {content}
      </Link>
    </motion.div>
  );
}

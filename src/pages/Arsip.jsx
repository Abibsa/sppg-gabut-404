import { motion } from "framer-motion";

export default function Arsip() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex-grow flex flex-col items-center justify-center w-full px-4 pt-24 pb-10 z-10"
    >
      <div className="w-full max-w-4xl border border-[var(--border-glow)] bg-[var(--bg-main)]/60 backdrop-blur-md rounded-xl p-8 shadow-[0_0_30px_var(--btn-bg)] relative overflow-hidden text-center h-64 flex flex-col items-center justify-center">
        {/* Decorative corner pieces for the card */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[var(--border-glow)]" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[var(--border-glow)]" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[var(--border-glow)]" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[var(--border-glow)]" />
        
        <h2 className="font-['Orbitron'] text-3xl text-[var(--accent-primary)] glow-title mb-4">DATA ARSIP</h2>
        <p className="font-['Share_Tech_Mono'] text-[var(--text-muted)]">Fitur ini masih dalam tahap pengembangan...</p>
      </div>
    </motion.div>
  );
}

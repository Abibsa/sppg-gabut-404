import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onComplete }) {
  const [text, setText] = useState("");
  const fullText = "INITIALIZING SYSTEM...";
  const [visible, setVisible] = useState(true);
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, i + 1));
      i++;
      if (i === fullText.length) {
        clearInterval(interval);
      }
    }, 50);
    
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 500); // wait for exit animation
    }, 1500);
    
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[99999] bg-[#050d0a] flex flex-col items-center justify-center font-['Share_Tech_Mono']"
        >
          <div className="w-80 max-w-[80vw]">
            <div className="text-[#00e5ff] mb-4 text-lg">
              {text}
              <span className="animate-pulse">_</span>
            </div>
            <div className="w-full bg-gray-900 h-2 rounded overflow-hidden relative">
              <motion.div 
                className="absolute left-0 top-0 h-full progress-bar"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "linear" }}
              />
            </div>
            <div className="text-right text-[#00e5ff] mt-2 text-sm">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                100%
              </motion.span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

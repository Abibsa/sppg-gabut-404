import { useState, useEffect } from 'react';

export default function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let animationFrameId;
    
    const updateTime = () => {
      setTime(new Date());
      animationFrameId = requestAnimationFrame(updateTime);
    };
    
    animationFrameId = requestAnimationFrame(updateTime);
    
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const pad = (num, digits = 2) => num.toString().padStart(digits, '0');
  
  return (
    <div className="font-['Share_Tech_Mono'] text-[var(--accent-primary)] text-sm md:text-base flex items-center gap-2 border border-[var(--border-glow)] px-3 py-1 rounded bg-[var(--btn-bg)] shadow-[0_0_10px_var(--btn-bg)]">
      <span>{pad(time.getHours())}:{pad(time.getMinutes())}:{pad(time.getSeconds())}</span>
      <span className="text-[var(--text-muted)] text-xs hidden sm:inline">.{pad(time.getMilliseconds(), 3)}</span>
    </div>
  );
}

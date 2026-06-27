import { useState, useEffect } from 'react';

export default function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    return () => clearInterval(intervalId);
  }, []);

  const pad = (num, digits = 2) => num.toString().padStart(digits, '0');
  
  return (
    <div className="font-['Share_Tech_Mono'] text-[var(--accent-primary)] text-sm md:text-base flex items-center gap-2 border border-[var(--border-glow)] px-3 py-1 rounded bg-[var(--btn-bg)] shadow-[0_0_10px_var(--btn-bg)] tracking-widest">
      <span>{pad(time.getHours())}:{pad(time.getMinutes())}</span>
    </div>
  );
}

import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { playClickSound, playHoverSound } from '../utils/SoundEffects';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const handleToggle = () => {
    playClickSound();
    toggleTheme();
  };

  return (
    <button
      onClick={handleToggle}
      onMouseEnter={playHoverSound}
      className="p-2 rounded border border-[var(--border-glow)] bg-[var(--btn-bg)] text-[var(--accent-primary)] hover:bg-[var(--accent-primary)] hover:text-[var(--bg-main)] transition-colors duration-300 shadow-[0_0_10px_var(--btn-bg)] cursor-pointer"
      title="Toggle Theme"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

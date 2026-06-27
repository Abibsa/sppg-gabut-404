import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { playClickSound, playHoverSound } from '../utils/SoundEffects';
import { motion } from 'framer-motion';

export default function Login() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    playClickSound();
    if (login(password)) {
      navigate('/');
    } else {
      setError('ACCESS DENIED. INVALID CODE.');
      setPassword('');
    }
  };

  return (
    <div className="flex-grow flex items-center justify-center relative z-10 px-4 pt-24 pb-10">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-md border border-[var(--border-glow)] bg-[var(--bg-main)]/95 backdrop-blur-md rounded-xl p-8 shadow-[0_0_15px_var(--btn-bg)] relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[var(--border-glow)]" />
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[var(--border-glow)]" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[var(--border-glow)]" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[var(--border-glow)]" />
        
        <div className="text-center mb-8">
          <h2 className="font-['Orbitron'] text-3xl text-[var(--accent-primary)] glow-title mb-2">RESTRICTED AREA</h2>
          <p className="font-['Share_Tech_Mono'] text-[var(--text-muted)]">ENTER ACCESS CODE TO CONTINUE</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[var(--bg-secondary)] border border-[var(--border-glow)] text-[var(--text-main)] font-['Share_Tech_Mono'] px-4 py-3 focus:outline-none focus:shadow-[0_0_15px_var(--btn-bg)] transition-all"
              placeholder="____"
              autoFocus
            />
            {error && (
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="text-red-500 font-['Share_Tech_Mono'] mt-2 text-sm drop-shadow-[0_0_5px_rgba(239,68,68,0.8)]"
              >
                {error}
              </motion.p>
            )}
          </div>
          
          <button 
            type="submit"
            onMouseEnter={playHoverSound}
            className="w-full btn-glow relative p-4 border border-[var(--border-glow)] bg-gradient-to-br from-[var(--btn-bg)] to-transparent text-[var(--accent-primary)] font-['Orbitron'] uppercase tracking-[0.1em] font-bold transition-all duration-300"
          >
            AUTHORIZE
          </button>
        </form>
      </motion.div>
    </div>
  );
}

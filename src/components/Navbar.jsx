import { Zap } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { Link, useLocation } from "react-router-dom";
import DigitalClock from "./DigitalClock";
import ThemeToggle from "./ThemeToggle";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();
  
  if (!isAuthenticated) return null;
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-main)]/80 backdrop-blur-[20px] border-b border-[var(--grid-line)] shadow-[0_4px_30px_var(--btn-bg)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="text-[var(--accent-primary)] hover:rotate-180 transition-transform duration-700 ease-in-out">
              <Zap />
            </div>
            <span className="font-['Orbitron'] font-bold text-[var(--accent-primary)] tracking-wider hidden sm:block">
              {siteConfig.name}
            </span>
          </div>
          
          <div className="hidden md:flex flex-1 justify-center">
            <DigitalClock />
          </div>

          <div className="flex items-center space-x-4 md:space-x-6 font-['Share_Tech_Mono']">
            <Link 
              to="/" 
              className={`${location.pathname === '/' ? 'text-[var(--text-main)] font-bold' : 'text-[var(--accent-primary)]'} hover:text-[var(--text-main)] transition-colors`}
            >
              HOME
            </Link>
            <Link 
              to="/arsip" 
              className={`${location.pathname === '/arsip' ? 'text-[var(--text-main)] font-bold' : 'text-[var(--accent-primary)]/70'} hover:text-[var(--accent-primary)] transition-colors`}
            >
              ARSIP
            </Link>
            <ThemeToggle />
            <button 
              onClick={logout} 
              className="text-red-500 hover:text-red-400 text-sm hidden sm:block transition-colors font-bold"
            >
              LOGOUT
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

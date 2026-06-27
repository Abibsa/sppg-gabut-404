import { motion } from "framer-motion";
import GlitchTitle from "../components/GlitchTitle";
import MenuButton from "../components/MenuButton";
import TerminalLog from "../components/TerminalLog";
import DashboardChart from "../components/DashboardChart";
import { menuItems } from "../config/menuConfig";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex-grow flex flex-col items-center justify-center w-full px-4 pt-24 pb-10 z-10"
    >
      <div className="w-full max-w-5xl space-y-8">
        <div className="border border-[var(--border-glow)] bg-[var(--bg-main)]/95 backdrop-blur-md rounded-xl p-6 md:p-8 shadow-[0_0_15px_var(--btn-bg)] relative overflow-hidden">
          {/* Decorative corner pieces for the card */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[var(--border-glow)]" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[var(--border-glow)]" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[var(--border-glow)]" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[var(--border-glow)]" />
          
          <GlitchTitle />

          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          >
            {menuItems.map((item, index) => (
              <MenuButton 
                key={item.id}
                label={item.label}
                link={item.link}
                external={item.external}
                index={index}
              />
            ))}
          </motion.div>
        </div>

        {/* New Features Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <DashboardChart />
          </div>
          <div>
            <TerminalLog />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

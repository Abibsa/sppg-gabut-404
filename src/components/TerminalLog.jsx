import { useState, useEffect, useRef } from 'react';

const LOG_MESSAGES = [
  "SYSTEM INITIALIZED",
  "CONNECTING TO DATABASE...",
  "SECURE CONNECTION ESTABLISHED",
  "FETCHING SPREADSHEET DATA",
  "SYNCING MODULES",
  "MONITORING TRAFFIC",
  "ALL SYSTEMS NOMINAL",
  "AWAITING COMMAND"
];

export default function TerminalLog() {
  const [logs, setLogs] = useState([]);
  const bottomRef = useRef(null);

  useEffect(() => {
    // Initial logs
    setLogs([
      { time: new Date().toLocaleTimeString(), text: "BOOT SEQUENCE INITIATED..." }
    ]);
    
    let msgIndex = 0;
    const interval = setInterval(() => {
      if (msgIndex < LOG_MESSAGES.length) {
        setLogs(prev => [...prev, { time: new Date().toLocaleTimeString(), text: LOG_MESSAGES[msgIndex] }]);
        msgIndex++;
      } else {
        // Randomly add some "heartbeat" logs
        if (Math.random() > 0.7) {
          setLogs(prev => [...prev.slice(-15), { time: new Date().toLocaleTimeString(), text: "HEARTBEAT: OK" }]);
        }
      }
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  return (
    <div className="border border-[var(--border-glow)] bg-[var(--bg-main)]/80 backdrop-blur-md rounded p-4 h-64 overflow-hidden flex flex-col font-['Share_Tech_Mono'] text-sm shadow-[0_0_15px_var(--btn-bg)] relative">
      <div className="text-[var(--text-muted)] border-b border-[var(--grid-line)] pb-2 mb-2 font-bold tracking-wider">
        TERMINAL LOG
      </div>
      <div className="flex-1 overflow-y-auto space-y-1 pr-2">
        {logs.map((log, i) => (
          <div key={i} className="flex gap-2">
            <span className="text-[var(--text-muted)]">[{log.time}]</span>
            <span className="text-[var(--accent-primary)]">{log.text}</span>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const dummyData = [
  { name: 'Week 1', orders: 400 },
  { name: 'Week 2', orders: 300 },
  { name: 'Week 3', orders: 550 },
  { name: 'Week 4', orders: 450 },
  { name: 'Week 5', orders: 700 },
];

export default function DashboardChart() {
  return (
    <div className="border border-[var(--border-glow)] bg-[var(--bg-main)]/80 backdrop-blur-md rounded p-4 h-64 flex flex-col shadow-[0_0_15px_var(--btn-bg)]">
      <div className="text-[var(--text-muted)] font-['Share_Tech_Mono'] font-bold tracking-wider mb-4">
        ORDER STATISTICS (DUMMY DATA)
      </div>
      <div className="flex-1 w-full h-full text-[var(--text-muted)] font-['Share_Tech_Mono'] text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={dummyData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--accent-primary)" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="var(--accent-primary)" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--grid-line)" />
            <XAxis dataKey="name" stroke="currentColor" tickLine={false} axisLine={false} />
            <YAxis stroke="currentColor" tickLine={false} axisLine={false} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'var(--bg-main)', 
                borderColor: 'var(--border-glow)',
                color: 'var(--text-main)',
                fontFamily: 'Share Tech Mono'
              }} 
            />
            <Area type="monotone" dataKey="orders" stroke="var(--accent-primary)" fillOpacity={1} fill="url(#colorOrders)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

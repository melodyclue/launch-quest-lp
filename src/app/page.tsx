'use client'
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from 'recharts'
import dynamic from 'next/dynamic'

const features = [
  {
    title: 'Easy Setup',
    description:
      'Get started in minutes with our intuitive setup process. No technical knowledge required.',
    icon: 'i-tabler-settings',
    color: 'text-indigo-500',
  },
  {
    title: 'Launch Update',
    description:
      'Keep your audience engaged with automated launch updates and milestone notifications.',
    icon: 'i-tabler-bell',
    color: 'text-blue-500',
  },
  {
    title: 'Analytics',
    description:
      'Track signups, engagement, and growth with detailed analytics and insights.',
    icon: 'i-tabler-chart-bar',
    color: 'text-cyan-500',
  },
]

const data = [
  { date: '1月', users: 400 },
  { date: '2月', users: 800 },
  { date: '3月', users: 1000 },
  { date: '4月', users: 1500 },
  { date: '5月', users: 2000 },
  { date: '6月', users: 2400 },
]

const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#f97316" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="date" hide={true} />
        <YAxis hide={true} />
        <Area
          type="monotone"
          dataKey="users"
          stroke="#f97316"
          strokeWidth={2}
          fill="url(#colorUsers)"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center">
        <div className="py-6">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-zinc-100">
            Launch Your Product{' '}
            <span className="text-orange-500">with Confidence</span>
          </h1>

          <p className="text-base md:text-lg text-zinc-300 mb-6 text-center">
            Create your waitlist in minutes and notify them the moment you
            launch
          </p>

          <div className="flex justify-center mb-12">
            <div className="px-8 py-3 bg-orange-600 text-white font-semibold rounded ">
              Coming Soon
            </div>
          </div>

          <div className="border border-zinc-800 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-zinc-100">Craftree</h3>
                <p className="text-zinc-400 text-sm">Launching in Q2 2024</p>
              </div>
              <span className="px-3 py-1 bg-orange-600/10 text-orange-500 rounded-full text-sm">
                1.2k Waitlist
              </span>
            </div>

            <p className="text-zinc-300 text-sm leading-relaxed mb-6">
              Craftree is a platform that helps you create your waitlist in
              minutes and notify them the moment you launch
            </p>

            {/* グラフエリア */}
            <div className="h-32 mb-6">
              <div className="w-full h-full bg-zinc-800/50 rounded-lg p-3">
                <Chart />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {[...Array(10)].map((_, i) => (
                <div
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  key={i}
                  className="w-10 h-10 rounded-full bg-zinc-800 overflow-hidden ring-2 ring-zinc-700 hover:ring-orange-500 transition-all duration-300 flex items-center justify-center"
                >
                  <i className="i-tabler-user text-xl text-zinc-400" />
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <span className="text-sm text-orange-500 hover:text-orange-400 transition-colors">
                + 1.2k more waiting
              </span>
            </div>
          </div>
        </div>
        {/* 機能セクション */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {features.map((feature) => (
            <div
              className="group p-8 rounded-2xl hover:-translate-y-1 transition-all duration-300 bg-zinc-900/50  hover:border-zinc-700"
              key={feature.title}
            >
              <div className="mb-6 inline-block">
                <i className={`${feature.icon} text-2xl text-orange-600`} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-zinc-100">
                {feature.title}
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

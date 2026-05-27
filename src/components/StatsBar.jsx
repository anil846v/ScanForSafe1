import React from 'react'
import {
  ShieldCheck,
  Activity,
  Clock3,
  Star,
  ScanLine,
  BadgeCheck,
  Globe,
  LockKeyhole,
} from 'lucide-react'

const STATS = [
  {
    value: '5,000+',
    label: 'Items Protected',
    icon: <ShieldCheck size={30} />,
  },
  {
    value: '98%',
    label: 'Recovery Rate',
    icon: <Activity size={30} />,
  },
  {
    value: '< 2 min',
    label: 'Alert Response',
    icon: <Clock3 size={30} />,
  },
  {
    value: '4.9 ★',
    label: 'Customer Rating',
    icon: <Star size={30} />,
  },
]

const TRUST = [
  {
    title: '24/7',
    text: 'Active Monitoring',
    icon: <ScanLine size={20} />,
  },
  {
    title: '50K+',
    text: 'Daily QR Scans',
    icon: <BadgeCheck size={20} />,
  },
  {
    title: 'ISO 27001',
    text: 'Security Certified',
    icon: <LockKeyhole size={20} />,
  },
  {
    title: '99.9%',
    text: 'System Uptime',
    icon: <Globe size={20} />,
  },
]

export default function StatsBar() {
  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-b from-[#f8fafc] via-[#f0fbf2] to-white">

      {/* BACKGROUND */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-[#2ebd3a]/10 blur-[140px]" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'radial-gradient(#2ebd3a 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* BADGE */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-[#e8f8eb] shadow-[0_10px_40px_rgba(46,189,58,0.08)]">

            <div className="relative flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-[#2ebd3a] animate-pulse" />
              <div className="absolute w-3 h-3 rounded-full bg-[#2ebd3a] animate-ping opacity-30" />
            </div>

            <span className="text-xs sm:text-sm font-black tracking-[0.25em] uppercase text-slate-700">
              Live Protection Metrics
            </span>
          </div>
        </div>

        {/* STATS CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {STATS.map(({ value, label, icon }, index) => (
            <div
              key={label}
              className="group relative overflow-hidden rounded-[34px] border border-[#e8f8eb] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-3 hover:border-[#2ebd3a] hover:bg-[#e8f8eb]/30 active:scale-[0.98] active:border-[#0B2545] cursor-pointer hover:shadow-[0_25px_80px_rgba(46,189,58,0.18)]"
            >

              {/* CARD GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#2ebd3a]/15 via-transparent to-[#0B2545]/10" />

              {/* INNER BORDER */}
              <div className="absolute inset-[1px] rounded-[33px] border border-white/70 pointer-events-none" />

              {/* TOP LIGHT */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#2ebd3a] to-transparent" />

              {/* FLOAT GLOW */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#2ebd3a]/10 blur-3xl rounded-full" />

              {/* NUMBER DECORATION */}
              <div className="absolute bottom-2 right-4 text-[85px] font-black text-slate-100 leading-none select-none">
                0{index + 1}
              </div>

              {/* ICON */}
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2ebd3a] to-[#1b7a21] text-white flex items-center justify-center shadow-lg shadow-[#2ebd3a]/30 mb-6 group-hover:scale-110 transition-transform duration-500">
                {icon}
              </div>

              {/* VALUE */}
              <h3 className="relative z-10 text-4xl font-black tracking-tight text-[#0B2545] leading-none mb-3">
                {value}
              </h3>

              {/* LABEL */}
              <p className="relative z-10 text-slate-500 text-base font-medium leading-relaxed">
                {label}
              </p>

              {/* LINE */}
              <div className="relative z-10 mt-7 h-[4px] w-14 rounded-full bg-gradient-to-r from-[#2ebd3a] to-[#4bd557] group-hover:w-24 transition-all duration-500" />

            </div>
          ))}

        </div>

        {/* TRUST STRIP */}
        <div className="mt-14 relative overflow-hidden rounded-[36px] border border-[#e8f8eb] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.04)]">

          {/* BORDER */}
          <div className="absolute inset-[1px] rounded-[35px] border border-white/80 pointer-events-none" />

          {/* GLOW */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[120px] bg-[#2ebd3a]/10 blur-[80px]" />

          {/* LIGHT */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#2ebd3a] to-transparent" />

          <div className="relative grid grid-cols-2 md:grid-cols-4">

            {TRUST.map((item, i) => (
              <div
                key={item.title}
                className={`group relative px-8 py-10 text-center transition-all duration-300 hover:bg-[#e8f8eb]/40 cursor-pointer ${
                  i !== TRUST.length - 1
                    ? 'border-b md:border-b-0 md:border-r border-[#e8f8eb]'
                    : ''
                }`}
              >

                {/* ICON */}
                <div className="mx-auto mb-4 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2ebd3a] to-[#1b7a21] text-white flex items-center justify-center shadow-lg shadow-[#2ebd3a]/20 group-hover:scale-110 transition duration-500">
                  {item.icon}
                </div>

                {/* TITLE */}
                <h4 className="text-4xl font-black tracking-tight text-[#0B2545]">
                  {item.title}
                </h4>

                {/* LABEL */}
                <p className="mt-2 text-sm sm:text-base text-slate-500 font-medium">
                  {item.text}
                </p>

                {/* LINE */}
                <div className="mx-auto mt-5 h-[3px] w-10 rounded-full bg-gradient-to-r from-[#2ebd3a] to-[#4bd557] group-hover:w-20 transition-all duration-500" />

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}
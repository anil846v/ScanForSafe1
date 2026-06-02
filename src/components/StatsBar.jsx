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
    icon: <ShieldCheck size={22} />,
  },
  {
    value: '98%',
    label: 'Recovery Rate',
    icon: <Activity size={22} />,
  },
  {
    value: '< 2 min',
    label: 'Alert Response',
    icon: <Clock3 size={22} />,
  },
  {
    value: '4.9 ★',
    label: 'Customer Rating',
    icon: <Star size={22} />,
  },
]

const TRUST = [
  {
    title: '24/7',
    text: 'Active Monitoring',
    icon: <ScanLine size={16} />,
  },
  {
    title: '50K+',
    text: 'Daily QR Scans',
    icon: <BadgeCheck size={16} />,
  },
  {
    title: 'ISO 27001',
    text: 'Security Certified',
    icon: <LockKeyhole size={16} />,
  },
  {
    title: '99.9%',
    text: 'System Uptime',
    icon: <Globe size={16} />,
  },
]

export default function StatsBar() {
  return (
    <section className="relative overflow-hidden py-12 bg-gradient-to-b from-[#f8fafc] via-[#f0fbf2] to-white">

      {/* BACKGROUND */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[220px] bg-[#2ebd3a]/10 blur-[100px]" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'radial-gradient(#2ebd3a 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* BADGE */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#e8f8eb] shadow-[0_8px_30px_rgba(46,189,58,0.08)]">

            <div className="relative flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#2ebd3a] animate-pulse" />
              <div className="absolute w-2.5 h-2.5 rounded-full bg-[#2ebd3a] animate-ping opacity-30" />
            </div>

            <span className="text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase text-slate-700">
              Live Protection Metrics
            </span>
          </div>
        </div>

        {/* TRUST STRIP */}
        <div className="mt-10 relative overflow-hidden rounded-[26px] border border-[#e8f8eb] bg-white shadow-[0_12px_40px_rgba(0,0,0,0.04)]">

          {/* BORDER */}
          <div className="absolute inset-[1px] rounded-[25px] border border-white/80 pointer-events-none" />

          {/* GLOW */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[320px] h-[90px] bg-[#2ebd3a]/10 blur-[60px]" />

          {/* LIGHT */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#2ebd3a] to-transparent" />

          <div className="relative grid grid-cols-2 md:grid-cols-4">

            {TRUST.map((item, i) => (
              <div
                key={item.title}
                className={`group relative px-5 py-7 text-center transition-all duration-300 hover:bg-[#e8f8eb]/40 cursor-pointer ${
                  i !== TRUST.length - 1
                    ? 'border-b md:border-b-0 md:border-r border-[#e8f8eb]'
                    : ''
                }`}
              >

                {/* ICON */}
                <div className="mx-auto mb-3 w-10 h-10 rounded-xl bg-gradient-to-br from-[#2ebd3a] to-[#1b7a21] text-white flex items-center justify-center shadow-md shadow-[#2ebd3a]/20 group-hover:scale-110 transition duration-500">
                  {item.icon}
                </div>

                {/* TITLE */}
                <h4 className="text-2xl sm:text-3xl font-black tracking-tight text-[#0B2545]">
                  {item.title}
                </h4>

                {/* LABEL */}
                <p className="mt-1 text-xs sm:text-sm text-slate-500 font-medium">
                  {item.text}
                </p>

                {/* LINE */}
                <div className="mx-auto mt-4 h-[2px] w-8 rounded-full bg-gradient-to-r from-[#2ebd3a] to-[#4bd557] group-hover:w-14 transition-all duration-500" />

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}
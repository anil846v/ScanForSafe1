import {
  Star,
  Quote,
  Shield,
  Car,
  Baby,
  Bike,
  Briefcase,
  Laptop,
} from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Priya Sharma',
    role: 'Pet Owner',
    city: 'Mumbai',
    initial: 'P',
    color: '#0057b8',
    bg: 'rgba(0,87,184,0.10)',
    rating: 5,
    Icon: Shield,
    text: 'My dog slipped out one evening. Within 20 minutes, a kind stranger scanned his collar and I got a WhatsApp alert with their location. We reunited so fast! ScanForSafe is absolutely worth every rupee.',
  },
  {
    name: 'Rajesh Kumar',
    role: 'Car Owner',
    city: 'Delhi',
    initial: 'R',
    color: '#2ca02c',
    bg: 'rgba(44,160,44,0.10)',
    rating: 5,
    Icon: Car,
    text: 'Parking in crowded areas always made me anxious about blocking someone. Now with the QR on my car, people contact me directly without needing my number visible.',
  },
  {
    name: 'Anita Verma',
    role: 'Parent',
    city: 'Bengaluru',
    initial: 'A',
    color: '#1a7fd4',
    bg: 'rgba(26,127,212,0.10)',
    rating: 5,
    Icon: Baby,
    text: "I put a ScanForSafe tag on my son's school bag. The peace of mind knowing someone can reach me immediately in an emergency is priceless.",
  },
  {
    name: 'Mohammed Farhan',
    role: 'Bike Owner',
    city: 'Hyderabad',
    initial: 'M',
    color: '#00509e',
    bg: 'rgba(0,80,158,0.10)',
    rating: 5,
    Icon: Bike,
    text: 'My bike was towed once and I had no idea where it went. After getting ScanForSafe, I feel so much more in control.',
  },
  {
    name: 'Sneha Reddy',
    role: 'Frequent Traveller',
    city: 'Chennai',
    initial: 'S',
    color: '#1d8a1d',
    bg: 'rgba(29,138,29,0.10)',
    rating: 5,
    Icon: Briefcase,
    text: 'Lost my suitcase at the airport once — never again. I tag every bag now.',
  },
  {
    name: 'Vikram Nair',
    role: 'Laptop Owner',
    city: 'Pune',
    initial: 'V',
    color: '#0057b8',
    bg: 'rgba(0,87,184,0.10)',
    rating: 5,
    Icon: Laptop,
    text: 'Left my laptop at a café once and it was gone for 2 hours. ScanForSafe helped me recover it quickly.',
  },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="w-3.5 h-3.5 text-amber-400 fill-amber-400"
        />
      ))}
    </div>
  )
}

function TestimonialCard({ t }) {
  const { Icon } = t

  return (
    <div
      className="relative rounded-2xl p-5 border border-slate-100 bg-white"
      style={{
        boxShadow: '0 2px 16px rgba(0,43,91,0.07)',
      }}
    >
      {/* Top */}
      <div className="flex items-start justify-between mb-3">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: t.bg }}
        >
          <Icon
            style={{
              width: '18px',
              height: '18px',
              color: t.color,
            }}
          />
        </div>

        <StarRating count={t.rating} />
      </div>

      {/* Quote */}
      <Quote
        className="absolute top-4 right-14 w-6 h-6"
        style={{ color: 'rgba(0,87,184,0.08)' }}
      />

      {/* Text */}
      <p className="text-slate-600 text-sm leading-relaxed mb-4">
        "{t.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm"
          style={{ background: t.color }}
        >
          {t.initial}
        </div>

        <div>
          <p
            className="font-bold text-sm"
            style={{ color: '#002b5b' }}
          >
            {t.name}
          </p>

          <p className="text-xs text-slate-400">
            {t.role} · {t.city}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20"
      style={{ background: '#f4f7fb', padding: '120pX' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="flex justify-center mb-4">
            <span className="badge">Customer Stories</span>
          </div>

          <h2 className="section-heading">
            Real People, Real Protection Stories
          </h2>

          <p className="section-sub">
            Join thousands of happy customers across India who
            trust ScanForSafe every day.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
            {[
              { value: '10,000+', label: 'Happy Users' },
              { value: '4.9 ★', label: 'Average Rating' },
              { value: '98%', label: 'Reunion Rate' },
              { value: '50+ Cities', label: 'Across India' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p
                  className="text-2xl font-black"
                  style={{ color: '#0057b8' }}
                >
                  {s.value}
                </p>

                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Static Grid Instead of Scrolling */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>

        {/* CTA button hidden per requirements */}
      </div>
    </section>
  )
}
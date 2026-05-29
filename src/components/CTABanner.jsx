import { ArrowRight, ShieldCheck, Phone, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CTABanner() {
  return (
    <section className="relative py-24 overflow-hidden bg-white">

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">

        {/* Gradient Glow */}
        <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] rounded-full bg-green-400/20 blur-3xl animate-pulse" />

        <div className="absolute bottom-[-150px] right-[-120px] w-[340px] h-[340px] rounded-full bg-emerald-500/20 blur-3xl animate-pulse" />

        {/* Floating circles */}
        <div className="absolute top-20 left-20 w-6 h-6 rounded-full bg-green-400/30 animate-bounce" />
        <div className="absolute top-40 right-32 w-4 h-4 rounded-full bg-white/30 animate-ping" />
        <div className="absolute bottom-20 left-1/3 w-5 h-5 rounded-full bg-green-300/30 animate-bounce" />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        <div className="
          relative
          rounded-[36px]
          overflow-hidden
          border border-white/10
          bg-gradient-to-br from-[#0B2545] via-[#12345d] to-[#2ebd3a]
          p-10 md:p-16
          shadow-[0_20px_80px_rgba(0,0,0,0.25)]
        ">

          {/* Shine Animation */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="
              absolute
              top-0
              left-[-120%]
              h-full
              w-[60%]
              bg-gradient-to-r
              from-transparent
              via-white/10
              to-transparent
              skew-x-[-20deg]
              animate-[shine_6s_linear_infinite]
            " />
          </div>

          {/* Decorative Blobs */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-green-300/10 rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative z-10 text-center">

            {/* Animated Icon */}
            <div className="relative inline-flex mb-6">

              <div className="absolute inset-0 rounded-full bg-green-400 blur-xl opacity-50 animate-pulse" />

              <div className="
                relative
                w-20 h-20
                rounded-full
                bg-white/10
                backdrop-blur-md
                border border-white/20
                flex items-center justify-center
                animate-[float_3s_ease-in-out_infinite]
              ">
                <ShieldCheck className="w-10 h-10 text-primary-green" />
              </div>

              {/* Spark */}
              <div className="absolute -top-1 -right-1">
                <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
              </div>
            </div>

            {/* Heading */}
            <h2 className="
              font-black
              text-4xl
              md:text-6xl
              leading-tight
              text-white
              mb-5
            ">
              Ready to Protect
              <br />

              <span className="text-primary-green">
                What Matters Most?
              </span>
            </h2>

            {/* Description */}
            <p className="
              text-blue-100/90
              text-lg
              md:text-xl
              max-w-2xl
              mx-auto
              leading-relaxed
              mb-5
            ">
              Join <span className="font-bold text-white">5,000+ Indians</span>
              {" "}
              who trust ScanForSafe.
              One simple QR tag —
              unlimited peace of mind.
            </p>

            {/* Price */}
            <div className="mb-10">

              <div className="
                inline-flex
                items-center
                gap-3
                px-6
                py-3
                rounded-full
                bg-white/10
                backdrop-blur-md
                border border-white/10
              ">

                <span className="text-white text-lg font-semibold">
                  Starting at
                </span>

                <span className="text-primary-green text-4xl font-black">
                  ₹499
                </span>

                <span className="line-through text-blue-200 text-lg">
                  ₹999
                </span>

                <span className="
                  bg-primary-green
                  text-white
                  text-xs
                  font-bold
                  px-3
                  py-1
                  rounded-full
                  animate-pulse
                ">
                  50% OFF
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-5">

              {/* Primary CTA */}
              <a
                href="#products"
                onClick={(e) => {
                  e.preventDefault()
                  document
                    .getElementById('products')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  inline-flex
                  items-center
                  gap-3
                  px-8
                  py-4
                  rounded-full
                  bg-primary-green
                  text-white
                  font-bold
                  text-lg
                  shadow-[0_10px_30px_rgba(46,189,58,0.4)]
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >

                <span className="relative z-10">
                  Get Started Now
                </span>

                <ArrowRight className="
                  w-5 h-5
                  relative z-10
                  group-hover:translate-x-1
                  transition-transform
                " />

                {/* Hover Glow */}
                <div className="
                  absolute inset-0
                  bg-white/10
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                " />
              </a>

              {/* Secondary CTA */}
              <Link
                to="/contact"
                className="
                  inline-flex
                  items-center
                  gap-3
                  px-8
                  py-4
                  rounded-full
                  border border-white/20
                  bg-white/10
                  backdrop-blur-md
                  text-white
                  font-semibold
                  text-lg
                  hover:bg-white/20
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                <Phone className="w-5 h-5" />
                Contact Sales
              </Link>

            </div>

            {/* Bottom Trust Pills */}
            <div className="
              flex
              flex-wrap
              justify-center
              gap-4
              mt-12
            ">

              {[
                'Instant WhatsApp Alerts',
                'Made in India',
                '24/7 Protection',
                'Fast Delivery',
              ].map((item) => (
                <div
                  key={item}
                  className="
                    px-4
                    py-2
                    rounded-full
                    bg-white/10
                    border border-white/10
                    text-sm
                    text-white/90
                    backdrop-blur-md
                  "
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes shine {
          0% {
            left: -120%;
          }
          100% {
            left: 120%;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  )
}
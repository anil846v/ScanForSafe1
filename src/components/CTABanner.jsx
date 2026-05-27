import { ArrowRight, ShieldCheck, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CTABanner() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="pricing-highlight rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white opacity-5 -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white opacity-5 translate-y-1/3 -translate-x-1/3" />

          <div className="relative z-10">
            <ShieldCheck className="w-14 h-14 text-primary-green mx-auto mb-4" />
            <h2 className="font-display font-extrabold text-3xl md:text-5xl mb-4">
              Ready to Protect What Matters Most?
            </h2>
            <p className="text-blue-200 text-lg max-w-xl mx-auto mb-3">
              Join 5,000+ Indians who trust ScanForSafe. One simple QR tag — unlimited peace of mind.
            </p>
            <p className="text-white font-bold text-xl mb-8">
              Starting at just <span className="text-primary-green text-2xl">₹499</span>
              <span className="line-through text-blue-300 text-base ml-2">₹999</span>
              <span className="ml-2 bg-primary-green text-white text-xs font-bold px-2 py-0.5 rounded-full align-middle">50% OFF</span>
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#products"
                onClick={(e) => { e.preventDefault(); document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-green shadow-lg shadow-green-900/30"
              >
                Get Started Now <ArrowRight className="w-4 h-4" />
              </a>
              <Link to="/contact" className="bg-white/10 border border-white/30 text-white font-semibold px-7 py-3 rounded-full hover:bg-white/20 transition-all duration-300 inline-flex items-center gap-2">
                <Phone className="w-4 h-4" /> Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * Subpage wrappers
 * Each file renders its section standalone so it can be
 * accessed at /features, /products, /use-cases, etc.
 * Add these routes to your router alongside <Home /> which
 * still renders ALL sections in a single scrolling page.
 *
 * Usage in react-router-dom v6:
 *
 *   import {
 *     FeaturesPage, ProductsPage, UseCasesPage,
 *     HowItWorksPage, TestimonialsPage
 *   } from './subpages'
 *
 *   <Route path="/features"      element={<FeaturesPage />} />
 *   <Route path="/products"      element={<ProductsPage />} />
 *   <Route path="/use-cases"     element={<UseCasesPage />} />
 *   <Route path="/how-it-works"  element={<HowItWorksPage />} />
 *   <Route path="/testimonials"  element={<TestimonialsPage />} />
 */

import Features    from '../components/Features'
import Products    from '../components/Products'
import UseCases    from '../components/UseCases'
import HowItWorks  from '../components/HowItWorks'
import Testimonials from '../components/Testimonials'
import Navbar      from '../components/Navbar'
import CTABanner   from '../components/CTABanner'

/* ─── shared wrapper ─── */
function SubpageLayout({ children, title, subtitle }) {
  return (
    <>
      <Navbar />
      {/* Page hero strip */}
      <div className="pt-28 pb-8 px-6 text-center bg-[#f8fbff] border-b border-slate-200/60">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight">{title}</h1>
        {subtitle && (
          <p className="text-slate-500 text-base mt-2 max-w-xl mx-auto font-medium">{subtitle}</p>
        )}
      </div>
      {children}
      <CTABanner />
    </>
  )
}

export function FeaturesPage() {
  return (
    <SubpageLayout
      title="Features"
      subtitle="Everything you need to keep your valuables safe, smart, and always reachable."
    >
      <Features />
    </SubpageLayout>
  )
}

export function ProductsPage() {
  return (
    <SubpageLayout
      title="Our Products"
      subtitle="QR tags designed for every item — bikes, pets, luggage, and more."
    >
      <Products />
    </SubpageLayout>
  )
}

export function UseCasesPage() {
  return (
    <SubpageLayout
      title="Use Cases"
      subtitle="See how QRSecure keeps real people's belongings protected every day."
    >
      <UseCases />
    </SubpageLayout>
  )
}

export function HowItWorksPage() {
  return (
    <SubpageLayout
      title="How It Works"
      subtitle="Three simple steps to activate lifetime protection for any item."
    >
      <HowItWorks />
    </SubpageLayout>
  )
}

export function TestimonialsPage() {
  return (
    <SubpageLayout
      title="What People Say"
      subtitle="Real stories from people who got their lost items back with QRSecure."
    >
      <Testimonials />
    </SubpageLayout>
  )
}
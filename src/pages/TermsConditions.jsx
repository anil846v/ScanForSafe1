export default function TermsConditions() {
  return (
    <div className="pt-20 min-h-screen bg-light-bg">
      <div className="hero-gradient py-16 text-white text-center">
        <h1 className="font-display font-extrabold text-4xl mb-4">Terms & Conditions</h1>
        <p className="text-blue-200">Last updated: January 2025</p>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 space-y-8">
          {[
            {
              title: '1. Acceptance of Terms',
              content: 'By purchasing and using any ScanForSafe product or service, you agree to these Terms and Conditions. If you do not agree to these terms, please do not use our products or services.',
            },
            {
              title: '2. Product Usage',
              content: 'ScanForSafe QR tags are intended for legitimate personal use — protecting your own pets, vehicles, and personal belongings. You must not use our products to track individuals without their knowledge or consent, or for any unlawful purpose.',
            },
            {
              title: '3. Account Responsibility',
              content: "You are responsible for maintaining the accuracy of your profile information and keeping your account credentials secure. You are responsible for all activity that occurs under your account and must notify us immediately of any unauthorised access.",
            },
            {
              title: '4. Service Availability',
              content: 'While we strive to maintain 24/7 availability, ScanForSafe does not guarantee uninterrupted service. Planned maintenance, unforeseen technical issues, or force majeure events may temporarily affect service availability.',
            },
            {
              title: '5. Refund Policy',
              content: 'We offer a 30-day satisfaction guarantee on all physical QR tag products. If you are unsatisfied with your purchase, contact us within 30 days of delivery for a full refund. Digital activation services are non-refundable once activated.',
            },
            {
              title: '6. Limitation of Liability',
              content: 'ScanForSafe provides tools to improve the chances of item recovery and emergency contact. We do not guarantee recovery of any lost item or animal, and shall not be liable for any direct, indirect, or consequential loss arising from use or inability to use our service.',
            },
            {
              title: '7. Changes to Terms',
              content: 'We reserve the right to update these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms. We will notify registered users of material changes by email.',
            },
            {
              title: '8. Contact',
              content: 'For any questions regarding these Terms and Conditions, please contact us at hello@scanforsafe.in.',
            },
          ].map(({ title, content }) => (
            <div key={title}>
              <h2 className="font-display font-bold text-lg text-dark-blue mb-2">{title}</h2>
              <p className="text-slate-600 text-sm leading-relaxed">{content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

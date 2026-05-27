export default function PrivacyPolicy() {
  return (
    <div className="pt-20 min-h-screen bg-light-bg">
      <div className="hero-gradient py-16 text-white text-center">
        <h1 className="font-display font-extrabold text-4xl mb-4">Privacy Policy</h1>
        <p className="text-blue-200">Last updated: January 2025</p>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 space-y-8">
          {[
            {
              title: '1. Information We Collect',
              content: 'We collect information you provide directly to us when registering your QR tag, such as your name, phone number, email address, emergency contact details, and any additional information you choose to include in your QR profile. We also collect scan data including time, date, and approximate GPS location whenever your QR tag is scanned.',
            },
            {
              title: '2. How We Use Your Information',
              content: 'Your personal information is used solely to operate the ScanForSafe service — enabling finders to contact you and sending you real-time notifications. We do not sell, rent, or share your personal data with third parties for marketing purposes.',
            },
            {
              title: '3. Data Shared When QR is Scanned',
              content: 'When someone scans your QR code, they see only the information you have chosen to make visible in your profile settings. Your full phone number, email, and private details are protected by default — finders interact through our secure relay system.',
            },
            {
              title: '4. Data Security',
              content: 'We use industry-standard encryption (SSL/TLS) to protect your data in transit and at rest. Access to personal data is restricted to authorised team members only, and we conduct regular security audits of our systems.',
            },
            {
              title: '5. Data Retention',
              content: 'We retain your personal data for as long as your account is active. You may request deletion of your account and associated data at any time by contacting us at hello@scanforsafe.in. Scan logs are retained for 12 months for your reference.',
            },
            {
              title: '6. Your Rights',
              content: 'You have the right to access, correct, or delete your personal information at any time through your account dashboard or by contacting our support team. You may also opt out of non-essential communications at any time.',
            },
            {
              title: '7. Contact Us',
              content: 'If you have questions about this Privacy Policy or how we handle your data, please contact us at hello@scanforsafe.in or reach us on WhatsApp.',
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

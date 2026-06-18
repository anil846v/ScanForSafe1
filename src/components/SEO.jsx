import { Helmet } from 'react-helmet-async'

function SEO({ title, description, keywords, image, url }) {
  const siteName = 'ScanForSafe'

  const fullTitle = title
    ? `${title} | ${siteName}`
    : 'ScanForSafe | Smart QR & NFC Safety Tags India'

  const defaultDescription =
    "ScanForSafe - India's smart shield QR & NFC safety tags for children, senior citizens, pets, vehicles & luggage. Scan to call emergency contact instantly, no app required."

  const defaultKeywords =
    'QR safety tag India, smart shield tag, NFC safety tag India, scan connect protect, child safety QR tag, senior citizen safety band, pet ID tag India, vehicle NFC sticker India, smart luggage tag India, special needs ID tag India'

  const metaDescription = description || defaultDescription
  const metaKeywords = keywords || defaultKeywords
  const metaImage = image || 'https://www.scanforsafe.com/logo.png'
  const canonicalUrl = url || (typeof window !== 'undefined' ? window.location.href : 'https://www.scanforsafe.com/')

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  )
}

export default SEO
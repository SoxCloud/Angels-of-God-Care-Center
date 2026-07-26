import { Helmet } from 'react-helmet-async'
import { SITE } from '../../config/seo'

interface SEOProps {
  title: string
  description?: string
  canonical?: string
  image?: string
  noIndex?: boolean
}

export default function SEO({ title, description, canonical, image, noIndex }: SEOProps) {
  const pageTitle = `${title} | ${SITE.name}`
  const desc = description || SITE.description
  const url = canonical ? `${SITE.url}${canonical}` : SITE.url
  const img = image || `${SITE.url}/favicon.jpg`

  return (
    <Helmet>
      <html lang="en" />
      <title>{pageTitle}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content={SITE.keywords} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}

      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta property="og:locale" content={SITE.locale} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={img} />

      <meta name="geo.region" content="ZA-GP" />
      <meta name="geo.placename" content="Palmridge" />
      <meta name="geo.position" content={`${SITE.geo.latitude};${SITE.geo.longitude}`} />
      <meta name="ICBM" content={`${SITE.geo.latitude}, ${SITE.geo.longitude}`} />
    </Helmet>
  )
}

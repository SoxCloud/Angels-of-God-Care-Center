import { Helmet } from 'react-helmet-async'
import { SITE } from '../../config/seo'

export default function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['Preschool', 'DayCare', 'EducationalOrganization'],
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    foundingDate: '2012',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.suburb,
      addressRegion: 'Gauteng',
      postalCode: SITE.address.postal,
      addressCountry: 'ZA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '06:30',
      closes: '16:00',
    },
    areaServed: 'Palmridge, Ekurhuleni, Gauteng',
    priceRange: 'Contact for pricing',
    image: `${SITE.url}/favicon.jpg`,
    sameAs: [
      `https://wa.me/27838460529`,
      `mailto:${SITE.email}`,
    ],
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Fizora",
    url: "https://fizora.com",
    logo: "https://fizora.com/logo.png",
    image: "https://fizora.com/og-image.jpg",
    description:
      "Jasa pembuatan landing page dan website profesional untuk UMKM, kuliner, coffee shop, dan bisnis lokal. Desain modern, cepat, dan terbukti tingkatkan konversi.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jakarta",
      addressCountry: "ID",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "52",
    },
    priceRange: "Rp300.000 - Rp2.500.000",
    telephone: "+6281234567890",
    email: "hello@fizora.com",
    sameAs: [
      "https://www.instagram.com/fizoraaa/",
      "https://twitter.com/beast2838",
      "https://github.com/Fizora",
      "https://www.linkedin.com/in/moch-choirul-faiz/",
      "https://www.tiktok.com/@fizoraaa",
    ],
    serviceType: "Web Development",
    areaServed: "Indonesia",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

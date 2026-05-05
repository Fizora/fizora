export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Fizora",
    url: "https://fizora.vercel.app",
    logo: "https://fizora.vercel.app/Fizorra.png",
    image: "https://fizora.vercel.app/og-image.jpg",
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

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Fizora",
    url: "https://fizora.vercel.app",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://fizora.vercel.app/projects?search={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Beranda",
        item: "https://fizora.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Proyek",
        item: "https://fizora.vercel.app/projects",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "CV",
        item: "https://fizora.vercel.app/my-cv",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Testimoni",
        item: "https://fizora.vercel.app/testimony",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

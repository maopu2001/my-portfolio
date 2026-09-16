import { getCdnUrl } from "@/lib/cdn";
import { profile, publications } from "@/lib/content";
import type { Project } from "@/lib/content/types";

export function RootStructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://maopu.com.bd/#person",
    name: profile.name,
    alternateName: [profile.shortName, "Aktaruzzaman Opu", "M. Aktaruzzaman Opu"],
    url: "https://maopu.com.bd",
    image: "https://maopu.com.bd/opengraph-image",
    jobTitle: "Software Engineer & Computer Science Researcher",
    description: profile.intro,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: profile.education.institution,
      sameAs: "https://rmstu.ac.bd",
    },
    sameAs: [
      profile.socialLinks.github,
      profile.socialLinks.linkedin,
      profile.socialLinks.facebook,
    ].filter(Boolean),
    knowsAbout: [
      "Computer Science",
      "Software Engineering",
      "Computer Vision",
      "Vision Transformers",
      "DINOv2",
      "Machine Learning",
      "Next.js",
      "React",
      "TypeScript",
      "Web Development",
    ],
    award: [
      "UGC Merit Scholarship 2025",
      "1st Merit Standing (Rank 1) - RMSTU CSE",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://maopu.com.bd/#website",
    url: "https://maopu.com.bd",
    name: `${profile.name} — Portfolio`,
    description: profile.headline,
    publisher: {
      "@id": "https://maopu.com.bd/#person",
    },
    inLanguage: "en-US",
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": "https://maopu.com.bd/#profilepage",
    url: "https://maopu.com.bd",
    name: `${profile.name} — Personal Portfolio`,
    mainEntity: {
      "@id": "https://maopu.com.bd/#person",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
    </>
  );
}

export function ResearchStructuredData() {
  const scholarlyArticles = publications.map((pub) => ({
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: pub.title,
    name: pub.title,
    author: pub.authors.map((name) => ({
      "@type": "Person",
      name,
    })),
    publisher: {
      "@type": "Organization",
      name: pub.publisher,
    },
    datePublished: `${pub.year}`,
    url: pub.ieeeXploreUrl || pub.doiUrl,
    sameAs: pub.doiUrl,
    description: pub.abstract,
    publication: {
      "@type": "PublicationEvent",
      name: pub.venue,
      location: pub.location,
    },
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(scholarlyArticles) }}
    />
  );
}

export function ProjectStructuredData({ project }: { project: Project }) {
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    headline: project.tagline,
    description: project.description,
    applicationCategory: project.categoryLabel,
    operatingSystem: "Web, Cross-platform",
    url: `https://maopu.com.bd/projects/${project.slug}`,
    image: project.image ? getCdnUrl(project.image) : undefined,
    author: {
      "@type": "Person",
      name: profile.name,
      url: "https://maopu.com.bd",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://maopu.com.bd",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: "https://maopu.com.bd/projects",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `https://maopu.com.bd/projects/${project.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

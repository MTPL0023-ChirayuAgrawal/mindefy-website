import { LazyAgileRapid } from "../utils/lazyLoadService";
import StructuredData, { createServiceData, createBreadcrumbData } from "../components/StructuredData";

export const metadata = {
  title: "Agile & Rapid Development Services",
  description: "Accelerate your product development with agile and rapid development methodologies by Mindefy Technologies. Fast, iterative, and flexible development approach.",
  keywords: ["agile development", "rapid development", "scrum methodology", "agile software development", "iterative development", "fast development"],
  openGraph: {
    title: "Agile & Rapid Development Services - Mindefy Technologies",
    description: "Accelerate your product development with agile and rapid development methodologies by Mindefy Technologies. Fast, iterative, and flexible development approach.",
    url: "https://mindefy.tech/agile-rapid-development",
  },
  twitter: {
    title: "Agile & Rapid Development Services - Mindefy Technologies",
    description: "Accelerate your product development with agile and rapid development methodologies by Mindefy Technologies. Fast, iterative, and flexible development approach.",
  },
  alternates: {
    canonical: "https://mindefy.tech/agile-rapid-development",
  },
};

export default function AgileRapidDevelopmentPage() {
  const serviceData = createServiceData({
    name: "Agile & Rapid Development Services",
    description: "Accelerate your product development with agile and rapid development methodologies by Mindefy Technologies. Fast, iterative, and flexible development approach.",
    serviceType: "Agile Development",
    url: "https://mindefy.tech/agile-rapid-development"
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Services", url: "https://mindefy.tech/#services" },
    { name: "Agile & Rapid Development", url: "https://mindefy.tech/agile-rapid-development" }
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <LazyAgileRapid />
    </>
  );
}

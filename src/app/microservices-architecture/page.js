import { LazyMicroservices } from "../utils/lazyLoadService";
import StructuredData, { createServiceData, createBreadcrumbData } from "../components/StructuredData";

export const metadata = {
  title: "Microservices Architecture Development",
  description: "Design and develop scalable microservices architecture by Mindefy Technologies for modern, distributed applications with enhanced performance and reliability.",
  keywords: ["microservices architecture", "distributed systems", "scalable applications", "api development", "cloud native", "microservices design"],
  openGraph: {
    title: "Microservices Architecture Development - Mindefy Technologies",
    description: "Design and develop scalable microservices architecture by Mindefy Technologies for modern, distributed applications with enhanced performance and reliability.",
    url: "https://mindefy.tech/microservices-architecture",
  },
  twitter: {
    title: "Microservices Architecture Development - Mindefy Technologies",
    description: "Design and develop scalable microservices architecture by Mindefy Technologies for modern, distributed applications with enhanced performance and reliability.",
  },
  alternates: {
    canonical: "https://mindefy.tech/microservices-architecture",
  },
};

export default function MicroservicesArchitecturePage() {
  const serviceData = createServiceData({
    name: "Microservices Architecture Development",
    description: "Design and develop scalable microservices architecture by Mindefy Technologies for modern, distributed applications with enhanced performance and reliability.",
    serviceType: "Architecture Development",
    url: "https://mindefy.tech/microservices-architecture"
  });

  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.tech" },
    { name: "Services", url: "https://mindefy.tech/#services" },
    { name: "Microservices Architecture", url: "https://mindefy.tech/microservices-architecture" }
  ]);

  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <LazyMicroservices />
    </>
  );
}

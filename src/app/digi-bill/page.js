import DigiBill from "../components/projects/DigiBill";
import StructuredData, { createBreadcrumbData } from "../components/StructuredData";

export const metadata = {
  title: "Digi Bill - Digital Billing Solution",
  description: "Digi Bill is a comprehensive digital billing solution developed by Mindefy Technologies. Streamline your billing processes with our innovative platform.",
  keywords: ["digi bill", "digital billing", "billing software", "invoice management", "billing solution", "fintech"],
  openGraph: {
    title: "Digi Bill - Digital Billing Solution - Mindefy Technologies",
    description: "Digi Bill is a comprehensive digital billing solution developed by Mindefy Technologies. Streamline your billing processes with our innovative platform.",
    url: "https://mindefy.com/digi-bill",
  },
  twitter: {
    title: "Digi Bill - Digital Billing Solution - Mindefy Technologies",
    description: "Digi Bill is a comprehensive digital billing solution developed by Mindefy Technologies. Streamline your billing processes with our innovative platform.",
  },
  alternates: {
    canonical: "https://mindefy.com/digi-bill",
  },
};

export default function DigiBillPage() {
  const breadcrumbData = createBreadcrumbData([
    { name: "Home", url: "https://mindefy.com" },
    { name: "Projects", url: "https://mindefy.com/projects" },
    { name: "Digi Bill", url: "https://mindefy.com/digi-bill" }
  ]);

  return (
    <>
      <StructuredData data={breadcrumbData} />
      <DigiBill />
    </>
  );
}

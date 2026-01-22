"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AdminLeadershipSection from "../components/administrationleadership/adminleadershipsection";

export default function Page() {
  const pathname = usePathname();

  useEffect(() => {
    const breadcrumbData = {
      pathname: pathname,
      heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/contact-us/contact-us-banner.webp",
      pageTitle: "Leadership",
      customBreadcrumbs: [
        { label: 'Home', href: '/' },
        { label: 'Leadership', href: '/leadership' }
      ]
    };
    
    if (typeof window !== "undefined") {
      window.__breadcrumbData = breadcrumbData;
    }
    
    return () => {
      if (typeof window !== "undefined" && window.__breadcrumbData?.pathname === pathname) {
        delete window.__breadcrumbData;
      }
    };
  }, [pathname]);
  return (
    <>
      <AdminLeadershipSection />
    </>
  );
}
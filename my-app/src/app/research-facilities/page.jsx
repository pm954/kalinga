"use client";
import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import ResearchGrid from '../components/research-facilities/research-grid'
import AdmissionCareer from '../components/general/admission_cta'
import ResearchLab from '../components/research-facilities/research-lab'
import ResearchFacilitiesIntro from '../components/research-facilities/research-intro'

const page = () => {
  const pathname = usePathname();

  useEffect(() => {
    const breadcrumbData = {
      pathname: pathname,
      heroImage:
        "https://kalinga-university.s3.ap-south-1.amazonaws.com/research-facilities/researchfaciities-introimg2.webp",
      pageTitle: "Research Facilities",
      customBreadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Research Facilities", href: "/research-facilities" },
      ],
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
            <ResearchFacilitiesIntro />
            <ResearchGrid />
            <ResearchLab />
            <AdmissionCareer />
        </>
    )
}

export default page
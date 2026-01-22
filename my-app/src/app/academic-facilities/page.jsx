"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Academicmainintro from "@/app/components/academic-facilities/academicmainintro";
import Academiccards from "@/app/components/academic-facilities/academiccards";
import AdmissionCareer from "@/app/components/general/admission_cta";
import Academicvideo from "../components/academic-facilities/academicvideo";

export default function AcademicFacilities() {
    const pathname = usePathname();

    useEffect(() => {
        const breadcrumbData = {
            pathname: pathname,
            heroImage:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/academics/academics-banner.webp",
            pageTitle: "Academic Facilities",
            customBreadcrumbs: [
                { label: "Home", href: "/" },
                { label: "Academic Facilities", href: "/academic-facilities" },
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
            <style jsx global>{`
  .absolute.inset-0 > img {
    object-position: center 60% !important;
  }

  @media (max-width: 768px) {
    .absolute.inset-0 > img {
      object-position: center 5% !important;
    }
  }
`}</style>
            <Academicmainintro />
            <Academiccards />
            <Academicvideo />
            <AdmissionCareer />
        </>
    );
}

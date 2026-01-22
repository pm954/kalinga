"use client";

import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Campusfacilitymainintro from '@/app/components/campus-facilities/campusfacilitymainintro'
import AdmissionCareer from '../components/general/admission_cta'
import Campusfacilitiescard from '../components/campus-facilities/campusfacilitiescard';
import Campusfacilityvideo from '../components/campus-facilities/campusfacilityvideo';

function CampusFacilities() {
    const pathname = usePathname();

    useEffect(() => {
        const breadcrumbData = {
            pathname: pathname,
            heroImage:
                "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/campus-life-intro-1.webp",
            pageTitle: "Campus Facilities",
            customBreadcrumbs: [
                { label: "Home", href: "/" },
                { label: "Campus Facilities", href: "/campus-facilities" },
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
    object-position: center 15% !important;
  }

  @media (max-width: 768px) {
    .absolute.inset-0 > img {
      object-position: center 5% !important;
    }
  }
`}</style>

            <Campusfacilitymainintro />
            <Campusfacilityvideo />
            <Campusfacilitiescard />
            <AdmissionCareer />
        </>
    )
}

export default CampusFacilities

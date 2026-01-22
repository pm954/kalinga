"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import MainIntro from "@/app/components/about/main_intro";
import Gallery from "@/app/components/general/gallery";

const RadioGallery =[
  {
    id: 1,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Radio/Radio-1.webp",
    alt: "Gallery-1",
    href: "https://play.google.com/store/apps/details?id=kalingradio.online.radions&pli=1"
  },
  {
    id: 2,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Radio/Radio-2.webp",
    alt: "Gallery-2",
    href: "https://play.google.com/store/apps/details?id=kalingradio.online.radions&pli=1"
  },
  {
    id: 3,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Radio/Radio-3.webp",
    alt: "Gallery-3",
    href: "https://play.google.com/store/apps/details?id=kalingradio.online.radions&pli=1"
  },
  {
    id: 4,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Radio/Radio-4.webp",
    alt: "Gallery-4",
    href: "https://play.google.com/store/apps/details?id=kalingradio.online.radions&pli=1"
  },
  {
    id: 5,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Radio/Radio-5.webp",
    alt: "Gallery-5",
    href: "https://play.google.com/store/apps/details?id=kalingradio.online.radions&pli=1"
  },
  {
    id: 6,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Radio/Radio-6.webp",
    alt: "Gallery-6",
    href: "https://play.google.com/store/apps/details?id=kalingradio.online.radions&pli=1"
  },
  {
    id: 7,
    image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Radio/Radio-7.webp",
    alt: "Gallery-7",
    href: "https://play.google.com/store/apps/details?id=kalingradio.online.radions&pli=1"
  },
]

export default function Radio() {
  const pathname = usePathname();

  useEffect(() => {
    const breadcrumbData = {
      pathname: pathname, // Add pathname to validate data belongs to this page
      heroImage:
        "https://kalinga-university.s3.ap-south-1.amazonaws.com/contact-us/contact-us-banner.webp",
      pageTitle: "Kalinga Radio",
      customBreadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Kalinga Radio", href: "/radio" },
      ],
    };
    
    // Set breadcrumb data in useEffect to ensure it's set after render
    if (typeof window !== "undefined") {
      window.__breadcrumbData = breadcrumbData;
    }
    
    // Cleanup: remove data when component unmounts or pathname changes
    return () => {
      if (typeof window !== "undefined" && window.__breadcrumbData?.pathname === pathname) {
        delete window.__breadcrumbData;
      }
    };
  }, [pathname]);
  return (
    <div>
      <MainIntro
        title="Kalinga Radio"
        subtitle="An Initiative By Kalinga University"
        description={[<strong key="radio-intro">Tune in to Kalinga Radio & never miss a moment!</strong>,
            "From college happenings, trending news, live shows, and important information on examinations or on upcoming events and activities, Kalinga Radio will always keep you connected and stay updated. It offers students a great platform where they can conduct shows, host interviews, and hear inspiring stories from alumni, faculty members, and special guests. Be a part of the campus conversation - anytime, anywhere.", 
]}
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/kalinga-radio.webp"
        imageAlt="Kalinga University Radio"
        showKnowMore={true}
        knowMoreHref="https://play.google.com/store/apps/details?id=kalingradio.online.radions&pli=1"
        knowMoreLabel="Download Now"
        initialVisibleParagraphs={2}
        disableClipPath={false}
        />
      <Gallery images={RadioGallery} title="Kalinga Radio Highlights" paddingClassName="py-20" forceSlider={true} />
    </div>
  );
}

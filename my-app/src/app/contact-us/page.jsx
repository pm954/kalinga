"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import ContactForm from "@/app/components/forms/ContactForm";
import AdmissionCareer from "@/app/components/general/admission_cta";
import FollowUs from "@/app/components/contact_us/follow_us";
import Map from "@/app/components/contact_us/map_section";

const ContactUs = () => {
  const pathname = usePathname();

  useEffect(() => {
    const breadcrumbData = {
      pathname: pathname,
      heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/contact-us/contact-us-banner.webp",
      pageTitle: "Contact Us",
      customBreadcrumbs: [
        { label: 'Home', href: '/' },
        { label: 'Contact Us', href: '/contact-us' }
      ]
    };
    
    if (typeof window !== 'undefined') {
      window.__breadcrumbData = breadcrumbData;
    }
    
    return () => {
      if (typeof window !== 'undefined' && window.__breadcrumbData?.pathname === pathname) {
        delete window.__breadcrumbData;
      }
    };
  }, [pathname]);
  return (
    <>
      <ContactForm />
      <FollowUs />
      <Map />
      <AdmissionCareer />
    </>
  );
};

export default ContactUs;
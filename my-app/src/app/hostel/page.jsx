"use client"
import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Hostelmainintro from '../components/hostel/hostelmainintro'
import Hostelgrid from '../components/hostel/hostelgrid';
import Hostelfacilities from '../components/hostel/hostelfacilities';
import Hostelwarden from '../components/hostel/hostelwarden';
import AdmissionCareer from '../components/general/admission_cta';
import HostelFeeTabs from '../components/hostel/hosteltabs';
import Hostelrules from '../components/hostel/hostelrules';
import Hostelvideo from '../components/hostel/hostelvideo';
import Specialization from '../components/department/specialization';

function Hostel() {
  const pathname = usePathname();

  useEffect(() => {
    const breadcrumbData = {
      pathname: pathname,
      heroImage:
        "https://kalinga-university.s3.ap-south-1.amazonaws.com/facilities/hostel.webp",
      pageTitle: "Hostel",
      customBreadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Hostel", href: "/hostel" },
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
  const specializationItems = [
    {
      id: 1,
      title: "B.Com. Hons. in Banking & Finance (Includes Taxation & GST)",
      duration: "3 Year (6 Semesters)",
      fees: "NR 35,000/- (Per Semester)",
      careerOpportunities: [
        "Accounts Assistant",
        "Bank Clerk",
        "Tax Assistant",
        "MIS Executive",
        "Accounts Payable Executive",
        "KYC Executive",
        "Financial Helpdesk Executive",
        "Income Tax Assistant",
        "GST Reconciliation Executive",
        "GST Practitioner",
        "Statutory Filing Coordinator",
        "GST Helpline Support Executive",
        "E-Way Bill Generation Executive",
        "Advance Tax Assistant",
        "GST Filing Support Officer",
        "Digital Tax Consultant"
      ],
    },
    {
      id: 2,
      title: "Cybersecurity",
      description: "Protect digital assets and secure information systems in an increasingly connected world. Learn ethical hacking, network security, cryptography, and risk management to defend against cyber threats and become a cybersecurity expert.",
    },
  ]
  return (
    <div>
      <style jsx global>{`
  .absolute.inset-0 > img {
    object-position: center 25% !important;
  }

  @media (max-width: 768px) {
    .absolute.inset-0 > img {
      object-position: center 5% !important;
    }
  }
`}</style>
      <Hostelmainintro />
      <Hostelgrid />
      <Hostelvideo />
      <Hostelfacilities />
      <Hostelwarden />
      <HostelFeeTabs />
      <Hostelrules />
      {/* <Specialization
        items={specializationItems}
        title="Specializations"
        description=""
        useWindowScroll={true}
      /> */}
      <AdmissionCareer />
    </div>
  )
}

export default Hostel
"use client";

import React from "react";
import DataTable from "../components/general/data-table";
import SectionHeading from "../components/general/SectionHeading";


const breadcrumbData = {
  heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/contact-us/contact-us-banner.webp",
  pageTitle: "National Council For Teacher Education",
  customBreadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'National Council For Teacher Education', href: '/national-council-teacher-education' }
  ]
};

// Register breadcrumb data globally
if (typeof window !== "undefined") {
    window.__breadcrumbData = breadcrumbData;
  }


  // const buttons = [
  //   {
  //     id: 1,
  //     text: "National Council for Teacher Education",
  //     href: "https://ncte.gov.in/Website/Index.aspx",
  //   },
  //   {
  //     id: 2,
  //     text: "Hyperlink of Council’s",
  //     href: "https://ncte.gov.in/Website/regulation.aspx",
  //   },
  //   {
  //     id: 3,
  //     text: "Details of Sanctioned Programme along with Annual Intake",
  //     href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/national-council/List+of+Programmes+Running+in+KU.pdf",
  //   },
  //   {
  //     id: 4,
  //     text: "Details of Faculty",
  //     href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/national-council/List+of+Teaching+Staff+of+Faculty+of+Education.pdf",
  //   },
  //   {
  //     id: 5,
  //     text: "Details of Students",
  //     href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/national-council/List+of+Students+(Education+Deptt.)+2024-2026+%26+2023-2025.pdf",
  //   },
  //   {
  //     id: 6,
  //     text: "Details of Available Infrastructure Facilities",
  //     href: "#",
  //   },
  //   {
  //     id: 7,
  //     text: "Fees Details",
  //     href: "/ku-fees",
  //   },
  //   {
  //     id: 8,
  //     text: "Facilities Added During the Last Quarter",
  //     href: "#",
  //   },
  //   {
  //     id: 9,
  //     text: "Number of Books in the Library, Referred Journals Subscribed to, and Addition, if any, in the Last Quarter",
  //     href: "/library",
  //   },
  //   {
  //     id: 10,
  //     text: "Details of Instructional Facilities, such as the Laboratory and Library",
  //     href: "/laboratories",
  //   },
  //   {
  //     id: 11,
  //     text: "Balance Sheet as on the Last Date of the Last Financial Year",
  //     href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/national-council/K.+Balance+Sheet.pdf",
  //   },
  //   {
  //     id: 12,
  //     text: "Income and Expenditure Account for the Last Financial Year",
  //     href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/national-council/L.+Income+%26+Expenditure.pdf",
  //   },
  //   {
  //     id: 13,
  //     text: "Receipt and Payment Account for the Last Financial Year",
  //     href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/national-council/M.+Receipt+%26+Payments.pdf",
  //   },
  //   {
  //     id: 14,
  //     text: "Details of biometric data",
  //     href: "#",
  //   },
    
  // ];  

  const tableColumns = [
    { key: "slNo", label: "Sl. No", width: "w-20" },
    { key: "title", label: "Name", width: "flex-1" },
    { key: "action", label: "Link", width: "w-32" }
  ];

  const tableData = [
    { 
      slNo: 1, 
      title: "National Council for Teacher Education", 
      action: (
        <a 
          href="https://ncte.gov.in/Website/Index.aspx" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[var(--button-red)] hover:underline"
        >
          Know More
        </a>
      )
    },
    { 
      slNo: 2, 
      title: "Hyperlink of council’s", 
      action: (
        <a 
          href="https://ncte.gov.in/ncte_new/page/ncte-regulations" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[var(--button-red)] hover:underline"
        >
          Know More
        </a>
      )
    },
    { 
      slNo: 3, 
      title: "Details of sanctioned programme along with annual intake", 
      action: (
        <a 
          href="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/national-council/List+of+Programmes+Running+in+KU.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[var(--button-red)] hover:underline"
        >
          View PDF
        </a>
      )
    },
    { 
      slNo: 4, 
      title: "Details of faculty", 
      action: (
        <a 
          href="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/national-council/List+of+Teaching+Staff+of+Faculty+of+Education.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[var(--button-red)] hover:underline"
        >
          View PDF
        </a>
      )
    },
    { 
      slNo: 5, 
      title: "Details of students", 
      action: (
        <a 
          href="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/national-council/List+of+Students+(Education+Deptt.)+2024-2026+%26+2023-2025.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[var(--button-red)] hover:underline"
        >
          View PDF
        </a>
      )
    },
    { 
      slNo: 6, 
      title: "Details of available infrastructure facilities", 
      action: (
        <a 
          href="" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[var(--button-red)] hover:underline"
        >
          Know More
        </a>
      )
    },
    { 
      slNo: 7, 
      title: "Fees Details", 
      action: (
        <a 
          href="/ku-fees" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[var(--button-red)] hover:underline"
        >
          Know More
        </a>
      )
    },
    { 
      slNo: 8, 
      title: "Facilities added during the last quarter", 
      action: (
        <a 
          href="" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[var(--button-red)] hover:underline"
        >
          Know More
        </a>
      )
    },
    { 
      slNo: 9, 
      title: "Number of books in the library, referred Journals subscribed to, and addition, if any, in the last quarter", 
      action: (
        <a 
          href="/library" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[var(--button-red)] hover:underline"
        >
          Know More
        </a>
      )
    },
    { 
      slNo: 10, 
      title: "Details of instructional facilities such as laboratory and library", 
      action: (
        <a 
          href="/laboratories" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[var(--button-red)] hover:underline"
        >
          Know More
        </a>
      )
    },
    { 
      slNo: 11, 
      title: "Balance sheet as on the last date of the last financial year", 
      action: (
        <a 
          href="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/national-council/K.+Balance+Sheet.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[var(--button-red)] hover:underline"
        >
          View PDF
        </a>
      )
    },
    { 
      slNo: 12, 
      title: "Income and expenditure account for the last financial year", 
      action: (
        <a 
          href="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/national-council/L.+Income+%26+Expenditure.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[var(--button-red)] hover:underline"
        >
          View PDF
        </a>
      )
    },
    { 
      slNo: 13, 
      title: "Receipt and payment account for the last financial year", 
      action: (
        <a 
          href="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/national-council/M.+Receipt+%26+Payments.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[var(--button-red)] hover:underline"
        >
          View PDF
        </a>
      )
    },
    { 
      slNo: 14, 
      title: "Resolution NCTE ITEP", 
      action: (
        <a 
          href="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/national-council/Resolution+NCTE+ITEP.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[var(--button-red)] hover:underline"
        >
          View PDF
        </a>
      )
    },
    { 
      slNo: 15, 
      title: "Affidavit for NCTE ITEP", 
      action: (
        <a 
          href="" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[var(--button-red)] hover:underline"
        >
          Know More
        </a>
      )
    },
  ];
  export default function KalingaBuzz() {
    return (
      <>  
       
        {/* <ResearchSixGridButtons buttons={buttons} /> */}
        <SectionHeading 
            title="National Council Teacher Education"
            subtitle=""
            titleClassName="text-center mt-10 mb-10"
            subtitleClassName=""
            
          />
        <DataTable
         columns={tableColumns} data={tableData}
        />
      </>
    );
  }
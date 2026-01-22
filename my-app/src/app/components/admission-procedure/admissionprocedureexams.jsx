"use client";

import React from "react";
import OurPrograms from "../admissions/our_programs";

function Admissionprocedureexams() {
    return (
        <div className="admission-exams-programs">
            <OurPrograms
                customPrograms={[
                    {
                        id: 1,
                        title: "About Kalsee",
                        specialization:
                            "The Kalinga Scholastic Entrance Examination (KALSEE) is a Computer-Based Test for all the streams except BBA and MBA. It is an MCQ-based exam with flexible scheduling options and no negative marking.",
                        eligibility: "",
                        type: "",
                        coursePageUrl: "/kalsee",
                        hideScholarshipLink: true,
                        exploreLinkText: "Know More",
                    },
                    {
                        id: 2,
                        title: "About Kalmat",
                        specialization:
                            "The Kalinga Management Aptitude Test (KAL-MAT) is an online entrance exam for BBA and MBA, conducted on specific dates decided by Kalinga University. It includes two steps: An online entrance exam and a personal interview",
                        eligibility: "",
                        type: "",
                        coursePageUrl: "/kalmat",
                        hideScholarshipLink: true,
                        exploreLinkText: "Know More",
                    },
                ]}
                hideSearchFilter={true}
                customTitle=""
                customSubtitle=""
                maxPrograms={2}
                mobileMaxWidth={700}
            />
    
            {/* ✅ Scoped CSS only for this wrapper */}
            <style jsx global>{`
        /* 1) Hide "Duration : ..." line inside ProgramCard */
        .admission-exams-programs p.whitespace-nowrap {
          display: none !important;
        }

        /* 2) Hide Apply Now button (it's the last <a> inside the action buttons row) */
        .admission-exams-programs .flex.flex-row.gap-2.md\\:gap-3 > a:last-child {
          display: none !important;
        }

        /* 3) Optional: reduce extra spacing after hiding Apply Now */
        .admission-exams-programs .flex.flex-row.gap-2.md\\:gap-3 {
          gap: 0.5rem !important;
        }

        /* 4) Optional: remove top padding from OurPrograms section header area since title/subtitle are blank */
        .admission-exams-programs section.pt-0.md\\:pt-16 {
          padding-top: 0 !important;
        }
        .admission-exams-programs .text-center.mb-5 {
          display: none !important;
        }
      `}</style>
        </div>
    );
}

export default Admissionprocedureexams;

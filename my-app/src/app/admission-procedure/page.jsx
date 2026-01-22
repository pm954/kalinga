"use client"

import React from 'react'
import AdmissionCareer from '../components/general/admission_cta';
import Admissionproceduresteps from '../components/admission-procedure/admissionproceduresteps';
import Admissionform from '../components/admission-procedure/admissionform';
import Admissioncrackandwin from '../components/admission-procedure/admissioncrackandwin';
import Admissionprocedureexams from '../components/admission-procedure/admissionprocedureexams';
import Admissionearlybenefits from '../components/admission-procedure/admissionearlybenefits';
import Admissionprocedurescolarship from '../components/admission-procedure/admissionprocedurescolarship';
import Admissionscholarshipeligibilty from '../components/admission-procedure/admissionscholarshipeligibilty';
import Admissionhacks from '../components/admission-procedure/admissionhacks';

function AdmissionProcedure() {
    const breadcrumbData = {
        heroImage:
            "https://kalinga-university.s3.ap-south-1.amazonaws.com/academics/academics-banner.webp",
        pageTitle: "Admission Procedure",
        customBreadcrumbs: [
            { label: "Home", href: "/" },
            { label: "Admission Procedure", href: "/admission-procedure" },
        ],
    };

    if (typeof window !== "undefined") {
        window.__breadcrumbData = breadcrumbData;
    }
    return (

        <div>
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

            <Admissionproceduresteps />
            <Admissionform />
            <Admissioncrackandwin />
            <Admissionprocedureexams />
            <Admissionearlybenefits />
            <Admissionprocedurescolarship />
            <Admissionscholarshipeligibilty />
            <Admissionhacks />
            <AdmissionCareer />
        </div>
    )
}

export default AdmissionProcedure
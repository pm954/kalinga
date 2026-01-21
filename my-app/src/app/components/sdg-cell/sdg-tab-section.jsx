"use client";

import { useState } from "react";
import FlipbookTrigger from "../general/FlipbookTrigger";

const SDG_TABS = [
    { id: "measures", label: "Energy Conservation Measures" },
    { id: "waste", label: "Waste Management" },
    { id: "water", label: "Water Management" },
    { id: "environmental", label: "Environmental Sustainability" },
    { id: "initiatives", label: "Green Initiatives" },
    { id: "audits", label: "Quality Audits" },
    { id: "reports", label: "Audit Reports" },
    { id: "equity", label: "Gender Equity" },
    { id: "programs", label: "Gender Equity Programs Held At KU" },
    { id: "disabled", label: "Disabled-Friendly Environment" },
    { id: "obligations", label: "Constitutional Obligations" },
    { id: "celebrations", label: "Important Day Celebrations" },
    { id: "conduct", label: "Code Of Conduct" },
    { id: "promotion", label: "Environmental Promotion and Sustainability Activities" },
    { id: "social", label: "Institutional Social Responsibility (ISR) and Extension Activities" },
    { id: "csr", label: "CSR at Kalinga University" },
    { id: "bp1", label: "Best Practice - 1" },
    { id: "bp2", label: "Best Practice - 2" },
    { id: "contributions", label: "Our Contributions in Sustainable and Social Development" },
];

const ENERGY_CONSERVATION_MEASURES = [
    "We have installed Rooftop Solar Power Panels that convert sunlight into electricity, which reduces the usage of traditional power sources.",
    "LED lights have been installed throughout the campus, which minimises energy consumption and enhances lighting quality.",
    "We conduct workshops and awareness programs throughout the year, educating students and staff members about sustainable solutions.",
];

const WASTE_MANAGEMENT_MEASURES = [
    "Our Waste Management System focuses on biodegradable and non-biodegradable waste materials, including the collection of waste paper, chemicals, and biomedical waste.",
    "An MoU has been signed with certified vendors, ensuring that waste materials are carefully disposed of and recycled.",
    "Our students practice waste classification outside the classroom, helping them develop sustainable habits.",
];

const WATER_MANAGEMENT_MEASURES = [
    "With our Water Management Policy, we continuously monitor and minimise the consumption of water and use alternative solutions like rainwater harvesting.",
    "Every building on our campus is equipped with a rainwater harvesting system that is linked to recharge wells.",
    "We have planted less water-consuming plants on our campus to minimise water usage and to improve biodiversity.",
];

const WATER_MANAGEMENT_PDF = {
    title: "Water Management Action Plan (PDF)",
    url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sdg-cell/Water+Management/water-mgmt.pdf",
};

const ENVIRONMENTAL_SUSTAINABILITY_CONTENT = `
We’re committed to maximising positive environmental impact by incorporating sustainability lessons into our academic programs, encouraging research work related to eco-friendly solutions, promoting sustainable practices in day-to-day activities, and working towards our short-term and long-term environmental goals. 
`;

const ENVIRONMENTAL_SUSTAINABILITY_PDF = {
    title: "Policy Guidelines For Environmental Sustainability (PDF)",
    url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sdg-cell/Environmental+Sustainability+/Environmental-Sustainability.pdf",
};

const GREEN_INITIATIVES_CONTENT = `
Kalinga’s green campus promotes sustainable practices and develops a sense of awareness and responsibility among young students. It uses sustainable practices like vermicomposting, apiculture, organic farming, nursery, greenhouse, and electric vehicles. 
`;

const QUALITY_AUDITS_CONTENT = `
We regularly conduct Green Audits and promote environmental ethics to ensure that our campus is using sustainable practices in the most efficient manner. We even encourage our students and staff members to adopt sustainable habits and become responsible citizens. 
`;

const AUDIT_REPORTS = [
    { title: "Audit Report 2022-23", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sdg-cell/Audit+Reports/2022-23.pdf" },
    { title: "Audit Report 2021-22", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sdg-cell/Audit+Reports/2021-22.pdf" },
    { title: "Audit Report 2020-21", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sdg-cell/Audit+Reports/2020-21.pdf" },
    { title: "Audit Report 2019-20", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sdg-cell/Audit+Reports/2019-20.pdf" },
    { title: "Audit Report 2018-19", url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sdg-cell/Audit+Reports/2018-19.pdf" },
];

const GENDER_EQUITY_CONTENT = `
Our education system includes the concept of gender sensitivity to eliminate gender discrimination and provide equal opportunities to our students. Our inclusive programs challenge stereotypes and create a supportive learning environment for both male and female candidates, where they learn and grow with a positive attitude and behaviour. We have designed a curriculum that recognises the needs of men and women and meets their rights and needs in terms of content, language, and teaching style. Female child are supported with additional funding and materials to ensure their full participation. 
`;

const GENDER_EQUITY_PROGRAMS = {
    "2024-25": [
        { sno: 1, event: "CATC-134 & TSC-I", category: "Camp", date: "16.06.2025 to 25.06.2025", department: "NCC" },
        { sno: 2, event: "CATC-02, Selection Shooting Training & Launch Camp", category: "Camp", date: "15.05.2025 to 24.05.2025", department: "NCC" },
        { sno: 3, event: "ANO Duty as Committee Member for the Selection of ANO", category: "Camp", date: "24.03.2025", department: "NCC" },
        { sno: 4, event: "International Women’s Day", category: "Guest Lecture", date: "08.03.2025", department: "IEEE & DSW" },
        { sno: 5, event: "NCC “B” Certificate Exam", category: "Other", date: "01.03.2025 to 02.03.2025", department: "NCC" },
        { sno: 6, event: "NCC “B” Certificate Exam Practice Session", category: "Other", date: "25.02.2025", department: "NCC" },
        { sno: 7, event: "NCC “C” Certificate Exam", category: "Other", date: "15.02.2025 to 16.02.2025", department: "NCC" },
        { sno: 8, event: "Asmita Khelo India Pencak Silat Women’s League (East Zone)", category: "Sports", date: "31.01.2025 to 02.02.2025", department: "Sports" },
        { sno: 9, event: "KAWACH - An Awareness Program on Self Defence", category: "Awareness", date: "24.01.2025", department: "DSW" },
        { sno: 10, event: "Trainers Training Certification Course on the Prevention of Sexual Harassment (POSH) Act, 2013", category: "Training", date: "11.01.2025 to 02.02.2025", department: "Law" },
        { sno: 11, event: "NCC Rank Ceremony 2024-25", category: "Other", date: "10.10.2024", department: "NCC" },
        { sno: 12, event: "Workshop on Self-Defence Techniques", category: "Workshop", date: "19.09.2024", department: "NCC" },
        { sno: 13, event: "NCC Selection Process Day", category: "Other", date: "17.09.2024", department: "NCC" },
        { sno: 14, event: "Awareness session on Fundamental Right", category: "Awareness", date: "14.09.2024", department: "Law" },
        { sno: 15, event: "IGC - Best Cadet Camp", category: "Other", date: "21.08.2024 to 30.08.2024", department: "NCC" },
        { sno: 16, event: "Working mechanism of Usha Sewing Machine", category: "Training", date: "28.08.2024", department: "FD" },
        { sno: 17, event: "CATC-XI CAMP", category: "Camp", date: "12.08.2024 to 21.08.2024", department: "8CG Girls Battalion, Kota" },
        { sno: 18, event: "ANOs & CTOs Conference (2024-25)", category: "Camp", date: "31.07.2025", department: "8CG Girls Battalion, Kota" },
        { sno: 19, event: "ANO Duty as Committee Member for the Selection of ANO", category: "Camp", date: "29.07.2025", department: "8CG Girls Battalion, Kota" },
        { sno: 20, event: "Redefining Menstrual Stigma as a Matter of Menstrual Health Hygiene: Behaviour Shift to Empower Skilful Youth", category: "Guest Lecture", date: "15.07.2024", department: "Arts & Humanities" },
        { sno: 21, event: "One Day State Level Women Program Officer Training Workshop", category: "Workshop", date: "10.07.2024", department: "NSS" },
        { sno: 22, event: "CATC-VIII (Group Level TSC Selection Camp)", category: "Camp", date: "02.07.2024 to 12.07.2024", department: "NCC" },
    ],

    "2023-24": [
        { sno: 1, event: "International Women's Day", category: "Cultural", date: "10.03.2024", department: "DSW" },
        { sno: 2, event: "A Talk on Cervical Cancer", category: "Guest Lecture", date: "01.07.2023", department: "DSW" },
        { sno: 3, event: "Cancer Awareness talk and screening Camp", category: "Guest Lecture", date: "18.11.2023", department: "DSW" },
        { sno: 4, event: "International Girls Child Day", category: "Guest Lecture", date: "11.10.2023", department: "NSS Unit of Kalinga" },
        { sno: 5, event: "Unrecognised Areas Relating to Same-Sex Couples: A Way Forward", category: "Guest Lecture", date: "09.08.2023", department: "Faculty of Law" },
        { sno: 6, event: "CATC-XII CAMP", category: "Camp", date: "18.08.2023 to 27.08.2023", department: "NCC Army Wing" },
        { sno: 7, event: "CATC-XI CAMP", category: "Camp", date: "21.07.2023 to 30.07.2023", department: "NCC Army Wing" },
        { sno: 8, event: "Attempt Guinness Book World Records", category: "Sports", date: "11.09.2023", department: "DSW" },
        { sno: 9, event: "Two Days Workshop on Mental Health aspects of Gender Based Violence", category: "Workshop", date: "14.07.2023 to 15.07.2023", department: "NIMHANS, Bangalore" },
    ],

    "2022-23": [
        { sno: 1, event: "Global Tribal Queen Contest 2022", category: "Cultural", date: "13.10.2022 to 15.10.2022", department: "DSW" },
        { sno: 2, event: "Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013", category: "Other", date: "29.10.2022", department: "Law" },
        { sno: 3, event: "Cricket Knockout Matches Girls", category: "Sport", date: "13.02.2023", department: "Sport/DSW" },
        { sno: 4, event: "Cricket Knockout Matches Girls", category: "Sport", date: "14.02.2023", department: "Sport/DSW" },
        { sno: 5, event: "Cricket Knockout Matches Girls", category: "Sport", date: "15.02.2023", department: "Sport/DSW" },
        { sno: 6, event: "State Level Workshop on Creating Awareness about State Women Commission, Cyber Crime, Human Trafficking and Sexual Victimization of Women at Works Place", category: "Workshop", date: "12.03.2023", department: "Forensic Science" },
        { sno: 7, event: "Guest Lecture: From Tradition to Modernity: The Changing Role of Women in India", category: "Guest Lecture", date: "17.04.2023", department: "Arts & Humanities" },
    ],

    "2021-22": [
        { sno: 1, event: "Walk a Cause for Zero Tolerance towards Crime Against Women", category: "Walkathon", date: "13.03.2022", department: "DSW" },
        { sno: 2, event: "WINGS: Women Ideation Network for Growth & Support", category: "Startup Ideas", date: "01.04.2022, 15.04.2022, 22.04.2022", department: "Commerce & Management" },
        { sno: 3, event: "Professional Awards \"Naari Shakti Ko Salam\" on International Women's Day", category: "Cultural", date: "07.03.2022", department: "Anil Jotsinghani" },
    ],

    "2020-21": [
        { sno: 1, event: "Aarogyam - a way to a healthy life - Health Talk", category: "Other", date: "19.02.2021", department: "Women Cell" },
        { sno: 2, event: "Panel Discussion: Indian Women's Emergence to Uprising, Celebrating International Women's Day", category: "Important Day Celebration", date: "08.03.2021", department: "Women Cell" },
        { sno: 3, event: "National Webinar on Women Empowerment on When Dreams Come True", category: "Webinar", date: "03.04.2021", department: "Women Cell" },
        { sno: 4, event: "A Legal Session on The Shadow Pandemic: Exploring the Intersectional impact of Covid on Girls and Women", category: "Webinar", date: "24.04.2021", department: "Women Cell" },
        { sno: 5, event: "Webinar on Women Feed the World-Disseminating Women's Role in Agriculture", category: "Webinar", date: "15.05.2021", department: "Women Cell" },
    ],

    "2019-20": [
        { sno: 1, event: "Dazzling Divas - A Fashion Show, Ambuja Mall, City Centre Mall, Raipur", category: "Cultural", date: "18.08.2019", department: "DSW" },
        { sno: 2, event: "Fashion Workshop at SIDI Campus, VIP Estate, Raipur (Mr. Kanwaljeet Singh)", category: "Cultural", date: "15.10.2019", department: "DSW" },
        { sno: 3, event: "Participation in Design (Workshop for design aspirants), Hotel Maurya, Patna", category: "Cultural", date: "17.11.2019", department: "DSW" },
        { sno: 4, event: "Mr. & Miss Face of Central India 2019, Auditorium Kalinga University", category: "Cultural", date: "20.11.2019", department: "DSW" },
        { sno: 5, event: "Fashionista exhibition visit at Hotel Sayaji, Raipur", category: "Other", date: "17.01.2020 to 19.01.2020", department: "FD" },
        { sno: 6, event: "Health Awareness Programme \"Healthy Heart\" organised by NSS Unit of Kalinga University", category: "NSS", date: "14.02.2020", department: "NSS" },
        { sno: 7, event: "Nail Arts Session by Ms. Anubhooti Khanna at Seminar Hall", category: "Seminar/Workshop", date: "05.03.2020", department: "FD" },
        { sno: 8, event: "Celebration of International Women's Day, Auditorium, Kalinga University", category: "Celebration", date: "08.03.2020", department: "DSW" },
    ],

    "2018-19": [
        { sno: 1, event: "Dazzling Divas - A Fashion Show", category: "Cultural", date: "18.08.2019", department: "DSW" },
        { sno: 2, event: "Fashion Workshop at SIDI Campus (Mr. Kanwaljeet Singh)", category: "Cultural", date: "15.10.2019", department: "DSW" },
        { sno: 3, event: "Participation in Design (Workshop for design aspirants), Hotel Maurya, Patna", category: "Cultural", date: "17.11.2019", department: "DSW" },
        { sno: 4, event: "Mr. & Miss Face of Central India 2019, Auditorium Kalinga University", category: "Cultural", date: "20.11.2019", department: "DSW" },
        { sno: 5, event: "Fashionista exhibition visit at Hotel Sayaji, Raipur", category: "Other", date: "17.01.2020 to 19.01.2020", department: "FD" },
        { sno: 6, event: "Health Awareness Programme \"Healthy Heart\" organised by NSS Unit of Kalinga University", category: "NSS", date: "14.02.2020", department: "NSS" },
        { sno: 7, event: "Nail Arts Session by Ms. Anubhooti Khanna at Seminar Hall", category: "Seminar/Workshop", date: "05.03.2020", department: "FD" },
        { sno: 8, event: "Celebration of International Women's Day, Auditorium, Kalinga University", category: "Celebration", date: "08.03.2020", department: "DSW" },
    ],
};

const GENDER_SENSITISATION_PDF = {
    title: "Gender Sensitisation Action Plan (PDF)",
    url: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sdg-cell/Gender-Equity.pdf",
};



const getGenderYears = () =>
    Object.keys(GENDER_EQUITY_PROGRAMS).sort((a, b) => b.localeCompare(a));


/** ✅ IMAGE PROVISIONS (leave src blank, you will fill) */
const ENERGY_IMAGES = [
    { src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sdg-cell/sgd-ecm-solar.webp", alt: "Energy measure image 1" },
    { src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sdg-cell/sgd-ecm-bulb.webp", alt: "Energy measure image 2" },
    { src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sdg-cell/sdg-ecm-workshop.webp", alt: "Energy measure image 3" },
];

const WASTE_IMAGES = [
    { src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sdg-cell/Waste+Management/sdg-wsmgmt-1.webp", alt: "Waste management image 1" },
    { src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sdg-cell/Waste+Management/sdg-wsmgmt-2.webp", alt: "Waste management image 2" },
    { src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sdg-cell/Waste+Management/sdg-wsmgmt-3.webp", alt: "Waste management image 3" },
    { src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sdg-cell/Waste+Management/sdg-wsmgmt-4.webp", alt: "Waste management image 4" },
];

const WATER_IMAGES = [
    { src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sdg-cell/Water+Management/sdg-wa-mgmt-1.webp", alt: "Water management image 1" },
    { src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sdg-cell/Water+Management/sdg-wtmgmt-2.webp", alt: "Water management image 2" },
    { src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sdg-cell/Water+Management/sdg-wtmgmt-3.webp", alt: "Water management image 3" },
    { src: "https://kalinga-university.s3.ap-south-1.amazonaws.com/sdg-cell/Water+Management/sdg-wtmgmt-4.webp", alt: "Water management image 4" },
];

const ENVIRONMENT_IMAGES = [
    { src: "", alt: "ES image 1" },
    { src: "", alt: "ES image 2" },
    { src: "", alt: "ES image 3" },
    { src: "", alt: "ES image 4" },
    { src: "", alt: "ES image 5" },
    { src: "", alt: "ES image 6" },
];

const GREEN_INITIATIVES_IMAGES = [
    { src: "", alt: "GI image 1" },
    { src: "", alt: "GI image 2" },
    { src: "", alt: "GI image 3" },
    { src: "", alt: "GI image 4" },
    { src: "", alt: "GI image 5" },
    { src: "", alt: "GI image 6" },
    { src: "", alt: "GI image 7" },
];

const GENDER_EQUITY_IMAGES = [
    { src: "", alt: "GE image 1" },
];

/** Reusable Image Grid */
function ImageGrid({ images = [] }) {
    const visibleImages = images.filter((img) => img?.src?.trim()); // only show if you filled URL

    // If you haven't filled any URLs yet, show placeholders (optional)
    if (visibleImages.length === 0) {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((_, idx) => (
                    <div
                        key={idx}
                        className="w-full h-[180px] md:h-[200px] rounded-xl bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-sm"
                    >
                        Image {idx + 1}
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((img, idx) => {
                const hasSrc = img?.src?.trim();
                return hasSrc ? (
                    <div key={idx} className="w-full overflow-hidden rounded-xl border border-gray-200">
                        <img
                            src={img.src}
                            alt={img.alt || `Image ${idx + 1}`}
                            className="w-full h-[180px] md:h-[200px] object-cover"
                            loading="lazy"
                        />
                    </div>
                ) : (
                    <div
                        key={idx}
                        className="w-full h-[180px] md:h-[200px] rounded-xl bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-sm"
                    >
                        Image {idx + 1}
                    </div>
                );
            })}
        </div>
    );
}

export default function SdgTabSection() {
    const [activeTab, setActiveTab] = useState("measures");

    const [expandedYears, setExpandedYears] = useState({});

    const toggleYear = (year) => {
        setExpandedYears((prev) => {
            const isOpen = !!prev[year];
            const next = {};
            Object.keys(prev).forEach((k) => (next[k] = false));
            if (!isOpen) next[year] = true;
            return next;
        });
    };

    return (
        <section className="w-full py-4 px-2">
            <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

            <div className="flex flex-col lg:flex-row gap-4 bg-[var(--dark-blue)] py-16 md:px-10 px-4 rounded-xl">
                {/* Left Tabs */}
                <div className="w-full lg:w-80 flex-shrink-0">
                    <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible scrollbar-hide">
                        {SDG_TABS.map((tab) => {
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`
                    flex-shrink-0 lg:w-full text-left px-4 py-5 rounded-[8px]
                    font-plus-jakarta-sans text-sm md:text-base font-semibold
                    transition-all duration-200
                    ${isActive
                                            ? "bg-[var(--button-red)] text-white"
                                            : "bg-[var(--lite-sand)] text-[var(--foreground)] hover:opacity-90"
                                        }
                  `}
                                >
                                    {tab.label}
                                </button>
                            );
                        })}
                    </nav>
                </div>

                {/* Right Content */}
                <div className="flex-1 w-full">
                    <div className="rounded-[16px] bg-white p-4 md:p-6 shadow-sm h-full">
                        <h2 className="font-plus-jakarta-sans text-xl md:text-3xl text-[var(--foreground)] mb-6 text-center">
                            {SDG_TABS.find((t) => t.id === activeTab)?.label}
                        </h2>

                        {/* Energy Conservation */}
                        {activeTab === "measures" && (
                            <div className="space-y-6">
                                <ul className="list-disc pl-6 space-y-3 text-[var(--foreground)] font-plus-jakarta-sans text-sm md:text-base leading-relaxed">
                                    {ENERGY_CONSERVATION_MEASURES.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>

                                {/* ✅ 3 Images */}
                                <ImageGrid images={ENERGY_IMAGES} />
                            </div>
                        )}

                        {/* Waste Management */}
                        {activeTab === "waste" && (
                            <div className="space-y-6">
                                <ul className="list-disc pl-6 space-y-3 text-[var(--foreground)] font-plus-jakarta-sans text-sm md:text-base leading-relaxed">
                                    {WASTE_MANAGEMENT_MEASURES.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>

                                {/* ✅ 4 Images */}
                                <ImageGrid images={WASTE_IMAGES} />
                            </div>
                        )}

                        {/* Water Management */}
                        {activeTab === "water" && (
                            <div className="space-y-6">
                                <ul className="list-disc pl-6 space-y-3 text-[var(--foreground)] font-plus-jakarta-sans text-sm md:text-base leading-relaxed">
                                    {WATER_MANAGEMENT_MEASURES.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>

                                {/* ✅ PDF Link */}
                                <div className="pt-2">
                                    <FlipbookTrigger pdfUrl={WATER_MANAGEMENT_PDF.url} title={WATER_MANAGEMENT_PDF.title}>
                                        <a
                                            href={WATER_MANAGEMENT_PDF.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[var(--button-red)] text-white font-plus-jakarta-sans text-sm md:text-base font-semibold hover:opacity-90 transition"
                                        >
                                            View Water Management Action Plan
                                            <span aria-hidden="true">↗</span>
                                        </a>
                                    </FlipbookTrigger>
                                </div>

                                {/* ✅ 5 Images */}
                                <ImageGrid images={WATER_IMAGES} />
                            </div>
                        )}

                        {/* Environmental Sustainability */}
                        {activeTab === "environmental" && (
                            <div className="space-y-6">
                                <p className="text-[var(--foreground)] font-plus-jakarta-sans text-sm md:text-base leading-relaxed">
                                    {ENVIRONMENTAL_SUSTAINABILITY_CONTENT}
                                </p>

                                {/* ✅ PDF Link */}
                                <div className="pt-2">
                                    <FlipbookTrigger pdfUrl={ENVIRONMENTAL_SUSTAINABILITY_PDF.url} title={ENVIRONMENTAL_SUSTAINABILITY_PDF.title}>
                                        <a
                                            href={ENVIRONMENTAL_SUSTAINABILITY_PDF.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[var(--button-red)] text-white font-plus-jakarta-sans text-sm md:text-base font-semibold hover:opacity-90 transition"
                                        >
                                            Policy Guidelines For Environmental Sustainability
                                            <span aria-hidden="true">↗</span>
                                        </a>
                                    </FlipbookTrigger>
                                </div>

                                {/* ✅ 6 Images */}
                                <ImageGrid images={ENVIRONMENT_IMAGES} />
                            </div>
                        )}

                        {/* Green Initiatives */}
                        {activeTab === "initiatives" && (
                            <div className="space-y-6">
                                <p className="text-[var(--foreground)] font-plus-jakarta-sans text-sm md:text-base leading-relaxed">
                                    {GREEN_INITIATIVES_CONTENT}
                                </p>

                                {/* ✅ 7 Images */}
                                <ImageGrid images={GREEN_INITIATIVES_IMAGES} />
                            </div>
                        )}

                        {/* Quality Audits */}
                        {activeTab === "audits" && (
                            <div className="space-y-6">
                                <p className="text-[var(--foreground)] font-plus-jakarta-sans text-sm md:text-base leading-relaxed">
                                    {QUALITY_AUDITS_CONTENT}
                                </p>
                            </div>
                        )}

                        {/* Audit Reports */}
                        {activeTab === "reports" && (
                            <div className="space-y-4">
                                {AUDIT_REPORTS.length > 0 ? (
                                    <div className="space-y-3">
                                        {AUDIT_REPORTS.map((report, idx) => (
                                            <FlipbookTrigger key={idx} pdfUrl={report.url} title={report.title}>
                                                <a
                                                    href={report.url || "#"}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`block px-4 py-3 rounded-lg border font-plus-jakarta-sans text-sm md:text-base transition
                ${report.url?.trim()
                                                            ? "bg-gray-50 hover:bg-gray-100 border-gray-200 text-[var(--foreground)]"
                                                            : "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed pointer-events-none"
                                                        }`}
                                                >
                                                    {report.title}
                                                </a>
                                            </FlipbookTrigger>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-center text-[var(--foreground)]/70 font-plus-jakarta-sans text-sm md:text-base">
                                        No audit reports added yet.
                                    </p>
                                )}
                            </div>
                        )}

                        {/* Gender Equity */}
                        {activeTab === "equity" && (
                            <div className="space-y-6">
                                <p className="text-[var(--foreground)] font-plus-jakarta-sans text-sm md:text-base leading-relaxed">
                                    {GENDER_EQUITY_CONTENT}
                                </p>

                                {/* ✅ 7 Images */}
                                <ImageGrid images={GENDER_EQUITY_IMAGES} />
                            </div>
                        )}


                        {/* Gender Equity Programs at KU */}
                        {activeTab === "programs" && (

                            <div className="flex-1">

                                {/* Accordion */}
                                <div className="space-y-2 text-left">
                                    {getGenderYears().map((year) => {
                                        const isExpanded = expandedYears[year] || false;
                                        const rows = GENDER_EQUITY_PROGRAMS[year] || [];

                                        return (
                                            <div key={year} className="border-b border-[var(--button-red)] pb-2 last:border-b-0">
                                                <button
                                                    onClick={() => toggleYear(year)}
                                                    className="w-full flex items-center gap-2 py-1 hover:opacity-80 transition-opacity justify-between pr-3"
                                                    aria-label={`Toggle ${year}`}
                                                >
                                                    <h3 className="font-plus-jakarta-sans text-sm md:text-base text-[var(--foreground)]">
                                                        {year}
                                                    </h3>
                                                    <div
                                                        className={`text-[var(--background)] bg-[var(--button-red)] rounded-sm p-3 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""
                                                            }`}
                                                    >
                                                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </div>
                                                </button>

                                                {isExpanded && rows.length > 0 && (
                                                    <div className="mt-2 overflow-x-auto overflow-y-auto max-h-[350px] border border-gray-200 rounded-lg">
                                                        <table className="w-full border-collapse min-w-[900px]">
                                                            <thead className="sticky top-0 z-10">
                                                                <tr className="bg-[var(--dark-blue)] text-white">
                                                                    <th className="px-4 py-3 text-left font-plus-jakarta-sans text-sm md:text-base font-semibold whitespace-nowrap">
                                                                        S.No.
                                                                    </th>
                                                                    <th className="px-4 py-3 text-left font-plus-jakarta-sans text-sm md:text-base font-semibold whitespace-nowrap">
                                                                        Event
                                                                    </th>
                                                                    <th className="px-4 py-3 text-left font-plus-jakarta-sans text-sm md:text-base font-semibold whitespace-nowrap">
                                                                        Category
                                                                    </th>
                                                                    <th className="px-4 py-3 text-left font-plus-jakarta-sans text-sm md:text-base font-semibold whitespace-nowrap">
                                                                        Date
                                                                    </th>
                                                                    <th className="px-4 py-3 text-left font-plus-jakarta-sans text-sm md:text-base font-semibold whitespace-nowrap">
                                                                        Department / Managed by
                                                                    </th>
                                                                </tr>
                                                            </thead>

                                                            <tbody>
                                                                {rows.map((r) => (
                                                                    <tr key={`${year}-${r.sno}`} className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-white">
                                                                        <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">{r.sno}</td>
                                                                        <td className="px-4 py-3 text-[var(--foreground)]">{r.event}</td>
                                                                        <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">{r.category}</td>
                                                                        <td className="px-4 py-3 text-[var(--foreground)] whitespace-nowrap">{r.date}</td>
                                                                        <td className="px-4 py-3 text-[var(--foreground)]">{r.department}</td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                )}

                                                {isExpanded && rows.length === 0 && (
                                                    <p className="px-4 py-2 text-[var(--foreground)]/60 text-sm">
                                                        No records available for this year.
                                                    </p>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* PDF */}
                                <div className="flex justify-center mb-6">
                                    <FlipbookTrigger pdfUrl={GENDER_SENSITISATION_PDF.url} title={GENDER_SENSITISATION_PDF.title}>
                                        <a
                                            href={GENDER_SENSITISATION_PDF.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[var(--button-red)] text-white font-plus-jakarta-sans text-sm md:text-base font-semibold hover:opacity-90 transition"
                                        >
                                            View Gender Sensitisation Action Plan
                                            <span aria-hidden="true">↗</span>
                                        </a>
                                    </FlipbookTrigger>
                                </div>
                            </div>
                        )}



                        {/* Placeholder for other tabs */}
                        {!["measures", "waste", "water", "environmental", "initiatives", "audits", "reports", "equity", "programs"].includes(activeTab) && (
                            <p className="text-center text-[var(--foreground)]/70 font-plus-jakarta-sans text-sm md:text-base">
                                Content will be added for this section.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
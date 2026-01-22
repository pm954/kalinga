"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import APITable from "../components/general/api-table";

export default function MOUPage() {
    const pathname = usePathname();

    useEffect(() => {
        const breadcrumbData = {
            pathname: pathname,
            heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/campuslife.webp",
            pageTitle: "MOU",
            customBreadcrumbs: [
                { label: 'Home', href: '/' },
                { label: 'MOU', href: '/mou' }
            ]
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


            {/* Test APITable with the MOU table */}
            <APITable
                tableId="10"
                title="Active Memorandum of Understanding"
                className="py-16"
                overflowX={true}
            />
        </>
    );
}

import React from 'react'
import OrganogramOfKalinga from '../about/organogram_of_kalinga'

function Admissionform() {
    const syllabusContent = {
        title: "Download Admission Form ",
        description: [
            "",
        ],
        buttonLabel: "Admission Form",
        href: "https://kalinga-university.s3.ap-south-1.amazonaws.com/admission/Admission_Form.pdf"
    };
    return (
        <div>
            <OrganogramOfKalinga
                title={syllabusContent.title}
                description={syllabusContent.description}
                buttonLabel={syllabusContent.buttonLabel}
                href={syllabusContent.href}
                buttons={syllabusContent.buttons}
                buttonClassName="!bg-white !text-black"
                arrowClassName="!bg-[var(--dark-orange-red)]"
                arrowIconClassName="!text-white"
                textClassName="!text-black"
                cardBackgroundColor="bg-[var(--button-red)]"
                useContainer={false}
                showImage={false}
                imageUrl={syllabusContent.imageUrl}
                imageAlt={syllabusContent.title}
            />
        </div>
    )
}

export default Admissionform
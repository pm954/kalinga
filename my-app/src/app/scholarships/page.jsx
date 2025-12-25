import MainIntro from "@/app/components/about/main_intro";
import WhyStudy from "@/app/components/department/why-study";
import ScholarshipsCarousel from "@/app/components/scholarships/scholarships-carousel";

export default function scholarships() {
  const whyStudyItems = [
    {
      id: 1,
      title: "Over 5000+ top performers have been rewarded.",
    },
    {
      id: 2,
      title: "Scholarships worth 3 Crores+ distributed.",
    },
    {
      id: 3,
      title: "Recognising the hard work and talent of young minds.",
    },
    {
      id: 4,
      title: "Rewarding excellence beyond academics.",
    },
    {
      id: 5,
      title: "Fast-track your university admission process.",
    },
    {
      id: 6,
      title: "Focus on learning instead of stressing.",
    },
    {
      id: 7,
      title: "Helping you manage your academic budget.",
    },
  ];
  const scholarshipItems = [
    {
        id: 1,
        title: "Social Scholarships",

    }
];
  return (
    <>
      <MainIntro
        readmore={false}
        className="items-center justify-center"
        title="KU Scholarships 2025-26"
        subtitle="Rewarding the Hard Work and Academic Excellence of Meritorious Students"
        description="We reward the hard work of every student, and Kalinga University’s scholarships encourage them to dream bigger and confidently step forward towards their career goals."
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/placeholder-img.png"
      />
      <WhyStudy
        items={whyStudyItems}
        sectionTitle="How KU Scholarships Are a Game-Changer"
      />
      <ScholarshipsCarousel
        title="Scholarships"
        description="Lorem ipsum dolor sit amet..."
        buttonLabel="Enquire Now"
        cards={scholarshipItems}
      />
      

    </>
  );
}

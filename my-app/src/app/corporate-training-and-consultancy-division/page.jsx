import HeroSectionTwo from '../components/general/hero-section-two';
import MainIntro from '../components/about/main_intro';
import MasterClassTab from '../components/ctcd/master_class_tab';

export default function CorporateTrainingAndConsultancyDivision() {
  // Sample data for Student Activities (Masterclasses)
  const masterclassActivities = [
    {
      id: 1,
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/ctcd.png",
      imageAlt: "Masterclass - Growth as a Leader",
      title: "MASTER CLASS ON GROWTH AS A LEADER A PROGRAM FOR FIRST TIME MANAGERS",
      description: "Grow As A Leader: A Program For First-Time Managers",
      buttonText: "Read More",
      date: "August 25-2025",
    },
    {
      id: 2,
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/ctcd.png",
      imageAlt: "Masterclass - Maximizing Fundraising",
      title: "MASTER CLASS ON MAXIMIZING FUNDRAISING RESOURCE FOR CSR",
      description: "Maximising Fund-Raising Resource For CSR",
      buttonText: "Read More",
      date: "August 25-2025",
    },
    {
      id: 3,
      imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/ctcd.png",
      imageAlt: "Masterclass - AI-Driven Benefits",
      title: "MASTER CLASS ON AI-DRIVEN BENEFITS FOR MANUFACTURING & OPERATIONS",
      description: "AI-Driven Benefits For Manufacturing & Operations",
      buttonText: "Read More",
      date: "08th March 2025",
    },
  ];

  // Sample data for Gallery
  const galleryImages = [
    {
      id: 1,
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/ctcd.png",
      alt: "Masterclass Event 1"
    },
    {
      id: 2,
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/ctcd.png",
      alt: "Masterclass Event 2"
    },
    {
      id: 3,
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/ctcd.png",
      alt: "Masterclass Event 3"
    },
    {
      id: 4,
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/ctcd.png",
      alt: "Masterclass Event 4"
    },
  ];

  return (
    <>
      <HeroSectionTwo />
      <MainIntro 
        title="Corporate Training And Consultancy Division (CTCD)"
        description="Due to increasing competition in the domestic and international markets, political influence, and technological advancements, organisations find it difficult to compete in the marketplace."
        points={[
          "Enhancing employee skills through targeted training programs aligned with industry needs",
          "Providing strategic consultancy services to help organizations navigate complex business challenges",
          "Developing customized training modules tailored to specific organizational requirements",
          "Fostering innovation and continuous learning culture within corporate environments",
          "Building strong partnerships with industry leaders to deliver world-class training solutions"
        ]}
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/ctcd/ctcd-1.png"
        imageAlt="CTCD"
      />
      <MasterClassTab
        tab1Activities={masterclassActivities}
        tab1Gallery={galleryImages}
        tab1ActivitiesTitle="Masterclasses"
        tab1GalleryTitle="Annual Masterclass 2025-24 Glimpse"
        tab2Activities={masterclassActivities}
        tab2Gallery={galleryImages}
        tab2ActivitiesTitle="Masterclasses"
        tab2GalleryTitle="Annual Masterclass 2025-24 Glimpse"
      />
    </>
  );
}
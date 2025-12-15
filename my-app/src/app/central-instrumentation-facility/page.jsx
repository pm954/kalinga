import React from 'react'
import MainIntro from '../components/about/main_intro'
import VisionMission from '../components/about/vision-mission'
import ImageListItem from '../components/ccrc/imagelistitem'
import OurEquipmentSlider from '../components/cif/our_equipment_slider'
import CifYoutubeCallSection from '../components/cif/youtube_call_section'
import QuickLinks from '../components/general/quick_links'
import ContactSection from '../components/cif/contact_section'
import Testimonials from '../components/home/Testimonials'
import Gallery from '../components/general/gallery'
import AdmissionCareer from '../components/general/admission_cta'
import CareerApplicationForm from "../components/careers/CareerApplicationForm";
const CentralInstrumentationFacilityPage = () => {
  
  const quickLinks = [
    {
      id: 1,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
      title: "CIF In Action",
      description: "Watch how our researchers use advanced instruments for real-time experiments.",
    },
    {
      id: 2,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
      title: "Equipment Catalogue",
      description: "Explore detailed specifications of instruments available at the Central Instrumentation Facility.",
    },
    {
      id: 3,
      icon: "https://kalinga-university.s3.ap-south-1.amazonaws.com/logos/check-icon.png",
      title: "User Guidelines",
      description: "Learn about booking procedures, sample preparation, and SOPs for efficient facility usage.",
    },
  ]
  const items = [
    {
      text: "To motivate students to pursue research work by providing them with highly advanced instruments.",
    },
    {
      text: "To assist research scholars, faculty members, and UG/PG/PhD students in their projects or dissertations as part of their curriculum.",
    },
    {
      text: "To promote academics and industry collaboration.",
    },
    {
      text: "To provide reliable research outcomes that can be used for patenting and publishing.",
    },
    {
      text: "To analyse samples of researchers for KU and other institutes.",
    },
    {
      text: "To sign MoUs with organisations and industries for collaborative research work.",
    },
    {
      text: "To provide training and guidance on how to operate a machine, data collection, and data analysis.",
    },
    {
      text: "To organise hands-on training programs, workshops, seminars, conferences, and symposia.",
    },
    {
      text: "To conduct certification programs in advanced instrumentation technologies.",
    },
    {
      text: "To create networking opportunities with research organisations for collaborative growth.",
    },
  ];

  const cifTestimonials = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      role: "Research Scholar, Department of Chemistry",
      quote: "The Central Instrumentation Facility has been instrumental in my research work. The XRD analysis I conducted here provided crucial data for my PhD thesis. The technical staff is highly knowledgeable and always ready to help.",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/students-say-2.webp",
      theme: "orange"
    },
    {
      id: 2,
      name: "Prof. Rajesh Kumar",
      role: "Faculty Member, Department of Physics",
      quote: "As a faculty member, I've seen how CIF has transformed research capabilities at Kalinga University. The advanced instruments and expert guidance have enabled our students to produce high-quality research publications.",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/program/diploma.webp",
      theme: "red"
    },
    {
      id: 3,
      name: "Anjali Patel",
      role: "PG Student, Biotechnology",
      quote: "The hands-on training programs at CIF gave me practical experience with sophisticated instruments. This exposure has been invaluable for my career in research. The facility is well-maintained and the support staff is excellent.",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/student-say-3.webp",
      theme: "amber"
    },
    {
      id: 4,
      name: "Dr. Amit Verma",
      role: "External Researcher, Industry Collaboration",
      quote: "We collaborated with Kalinga University's CIF for material characterization. The facility's state-of-the-art equipment and professional approach helped us complete our project efficiently. Highly recommended for industry-academia partnerships.",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/Home/student-say-1.webp",
      theme: "amber"
    }
  ];

  return (
    <>
    <MainIntro 
    title="About the Central Instrumentation Facility"
    description="To fulfil the research needs in science and technology at a higher level, Central Instrumentation Facility labs are established at Kalinga University for students, faculty members, and research scholars. A wide range of advanced instruments, including an X-Ray Diffractometer (XRD), 3D Printer, Bio-Chemistry Analyser, and many more, are available for in-depth experimentation work under one roof. We also welcome researchers from other universities, organisations, and NGOs, promoting collaboration across different departments.Managed by a team of technical experts, KU ensures that researchers are well-supported through hands-on training programs and workshops, which not only teach them how to operate an instrument but also ways to analyse and manage data effectively. We aim to expand our sophisticated list of machines to become a National Leader in research excellence."
    imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg"
    imageAlt="Central Instrumentation Facility"
    />
    <VisionMission
      visionTitle="Vision"
      missionTitle="Mission"
      visionText="To position our Central Instrumentation Facility at the top in research standards in the field of basic and applied sciences. The aim is to facilitate researchers with high-end tools and technologies so that they can explore new horizons and address complex challenges. "
      missionText="To build a resource-rich environment where researchers can work with modern instruments, receive technical guidance, and produce impactful research outcomes that can be published in reputed journals."
      imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg"
      imageAlt="Central Instrumentation Facility"
      showImage={false}
      className="bg-white"
    />
    <ImageListItem
      items={items}
      imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg"
      title="Central Instrumentation Facility"
      description="Explore state-of-the-art instruments that support advanced research across disciplines."
      buttonText="Read More"
      className="!bg-[var(--light-gray)]"
      textClassName="text-[var(--foreground)]"
      headingClassName="text-[var(--foreground)]"
    />
    <OurEquipmentSlider />
    <CifYoutubeCallSection />
    <QuickLinks 
    title="Quick Links"
    description="Access important CIF-related resources and information to help you through your CIF journey."
    links={quickLinks}
    titleClassName="text-white"
    />
    <ContactSection />
    <CareerApplicationForm
          heading="Alumni Association Registration Form"
          description="Share your details to stay connected with Kalinga University, receive updates, and participate in alumni activities and events."
          backgroundClass="bg-[var(--button-red)]"
          hideTabs={true}
          submitLabel="Submit Alumni Details"
          useArrowSubmitButton={true}
          arrowSubmitVariant="white"
        />
    <Testimonials 
      testimonials={cifTestimonials} 
      className="bg-[var(--light-gray)]"
      subtitle="Research Excellence. Real Impact."
      title="What researchers say about our Central Instrumentation Facility."
    />
    <Gallery/>
    <AdmissionCareer/>
    </>
  )
}

export default CentralInstrumentationFacilityPage
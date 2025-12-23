import KalseeExamPattern from "../components/kalsee/kalsee_exam_pattern";
import HeroSectionTwo from "../components/general/hero-section-two";
import KalseeApplicationForm from "../components/kalsee/kalsee-application-form";
import KalseeMilestone from "../components/general/kalsee-milestone";
import MainIntro from "../components/about/main_intro";
import ImageListItem from "../components/ccrc/imagelistitem";
import QuickLinks from "../components/general/quick_links";
import AdmissionSteps from "../components/admissions/admission-steps";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/general/faq";
import AdmissionCareer from "../components/general/admission_cta";
export default function KalseePage() {
  const faqItems = [
    {
      question: "What is KALSEE?",
      answer: "KALSEE is the gateway to your academic journey at Kalinga University. This comprehensive entrance exam is designed to assess your knowledge, aptitude, and readiness for various undergraduate and postgraduate programs. Prepare yourself for success and take the first step towards a bright future."
    },
    {
      question: "What is the eligibility criteria for KALSEE?",
      answer: "The eligibility criteria for KALSEE is that the candidate must have completed their 10+2 or equivalent examination with minimum required marks. Specific requirements for each program are listed in our admission brochure."
    },
    {
      question: "What is the fee structure for KALSEE?",
      answer: "The fee structure for KALSEE is that the candidate must have completed their 10+2 or equivalent examination with minimum required marks. Specific requirements for each program are listed in our admission brochure."
    },
    {
      question: "What is the admission process for KALSEE?",
      answer: "The admission process for KALSEE is that the candidate must have completed their 10+2 or equivalent examination with minimum required marks. Specific requirements for each program are listed in our admission brochure."
    },
  ]
  const testimonials = [
    {
      name: "John Doe",
      role: "Student",
      quote: "I got my admission for KALSEE by filling out the application form online.",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/entrance-exam/entrance-exam-banner.webp"
    },
    {
      name: "John Smith",
      description: "I got my admission for KALSEE by filling out the application form online.",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/entrance-exam/entrance-exam-banner.webp"
    },
    {
      name: "Jane Doe",
      role: "Student",
      quote: "I got my admission for KALSEE by filling out the application form online.",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/entrance-exam/entrance-exam-banner.webp"
    },
  ]
  const kifSteps = [
    {
      title: "Step 1: Apply",
      description: "Apply for KALSEE by filling out the application form online.",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/entrance-exam/entrance-exam-banner.webp"
    },
    {
      title: "Step 2: Prepare",
      description: "Prepare for KALSEE by studying the exam pattern and syllabus.",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/entrance-exam/entrance-exam-banner.webp"
    },
    {
      title: "Step 3: Take the Exam",
      description: "Take the KALSEE exam by attending the exam center on the scheduled date.",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/entrance-exam/entrance-exam-banner.webp"
    },  
    {
      title: "Step 4: Get the Result",
      description: "Get the result of KALSEE by checking the result online.",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/entrance-exam/entrance-exam-banner.webp"
    },
    {
      title: "Step 5: Get the Admission",
      description: "Get the admission for KALSEE by attending the admission center on the scheduled date.",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/entrance-exam/entrance-exam-banner.webp"
    },
  ]

  const links = [
    {
      title: "Apply Now",
      description: "Apply for KALSEE by filling out the application form online.",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/entrance-exam/entrance-exam-banner.webp"
    },
    {
      title: "Prepare for KALSEE",
      description: "Prepare for KALSEE by studying the exam pattern and syllabus.",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/entrance-exam/entrance-exam-banner.webp"
    },
    {
      title: "Take the Exam",
      description: "Take the KALSEE exam by attending the exam center on the scheduled date.",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/entrance-exam/entrance-exam-banner.webp"
    },
  ]
  const boxItems = [
    {
      title: "Step 1: Apply",
      description: "Apply for KALSEE by filling out the application form online.",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/entrance-exam/entrance-exam-banner.webp"
    },
    {
      title: "Step 2: Prepare",
      description: "Prepare for KALSEE by studying the exam pattern and syllabus.",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/entrance-exam/entrance-exam-banner.webp"
    },
  ]
  return (
    <>
      <HeroSectionTwo 
        backgroundImage="https://kalinga-university.s3.ap-south-1.amazonaws.com/entrance-exam/entrance-exam-banner.webp"
        title="Your Next Big Chapter Starts With One Click"
        description="KALSEE (Kalinga University Entrance Examination) is the gateway to your academic journey at Kalinga University. This comprehensive entrance exam is designed to assess your knowledge, aptitude, and readiness for various undergraduate and postgraduate programs. Prepare yourself for success and take the first step towards a bright future."
        buttonText="Apply Now"
        buttonLink="/admissions"
        showForm={false}
        customForm={<KalseeApplicationForm />}
      />
      <KalseeMilestone />
      <MainIntro
        title="KALSEE - Kalinga University Entrance Examination"
        description="KALSEE (Kalinga University Entrance Examination) is the gateway to your academic journey at Kalinga University. This comprehensive entrance exam is designed to assess your knowledge, aptitude, and readiness for various undergraduate and postgraduate programs. Prepare yourself for success and take the first step towards a bright future."
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/entrance-exam/entrance-exam-banner.webp"
        imageAlt="KALSEE"
      />
      <ImageListItem textClassName="hidden" listItemTextClassName="text-black"  imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/kif/kif.webp" boxItems={boxItems} title="Our Key Offerings" subtitle="About KIF" description="Kalinga Incubation Foundation (KIF) is a platform for students to incubate their ideas and turn them into reality." />
      <KalseeExamPattern />
      <QuickLinks links={links} title="What Awaits You At KALSEE?" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid"
       textColorClassName="text-[var(--background)]" showReadMore={false}  titleClassName="text-white" />
      <AdmissionSteps
        steps={kifSteps}
     subtitleClassName="hidden"
        title="Your Step-By-Step Startup Process"
        ctaLabel="Apply Now"
        showReadMore={false}
        showHeaderButton={false}
        showIcon={false}
        showImage={false}
        bgColor="bg-white"
      />
      <Testimonials testimonials={testimonials} />
      <FAQ title="Frequently Asked Questions" items={faqItems} />
      <AdmissionCareer />
    </>
  );
}

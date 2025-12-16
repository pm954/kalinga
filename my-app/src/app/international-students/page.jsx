import React from 'react'   
import MainIntro from '../components/about/main_intro'
import PublicationGrid from '../components/research/publication-grid'
import AccreditationRanking from '../components/home/AccreditationRanking'
import FeatureCards from "../components/home/featurecard";
import ImageListItem from '../components/ccrc/imagelistitem';
import StudentCell from '../components/international-students/student_cell';
import AdmissionSteps from '../components/admissions/admission-steps';
import AppreciationLetterLayout from '../components/international-students/appreciation_letter_layout';
import OrganogramOfKalinga from '../components/about/organogram_of_kalinga';
import MediaCardSlider from '../components/general/media-card-slider';
import UpcomingConference from '../components/research/upcoming_conference';
import Gallery from '../components/campuslife/campusgallery';
import AdmissionCareer from '../components/general/admission_cta';
export default function InternationalStudents() {
  const newsConferences = [
    {
      id: 1,
      title: "Annual Research Symposium 2025",
      date: "November 10 · 2025",
      category: "Research & Innovation",
      description: "Join us for our annual research symposium featuring cutting-edge research presentations, keynote speakers, and networking opportunities for researchers and academics.",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
    },
    {
      id: 2,
      title: "International Education Summit",
      date: "December 05 · 2025",
      category: "Education",
      description: "A global gathering of educators, policymakers, and thought leaders to discuss the future of higher education and innovative teaching methodologies.",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
    },
    {
      id: 3,
      title: "Technology & Innovation Conference",
      date: "January 20 · 2026",
      category: "Technology",
      description: "Explore the latest trends in technology, artificial intelligence, and digital transformation in education and industry applications.",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
    },
  ]
  const videoItems = [
    {
      id: 1,
      name: "Name",
      description: "Lorem ipsum",
      thumbnail: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
    },
    {
      id: 2,
      name: "Name",
      description: "Lorem ipsum",
      thumbnail: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
    },
    {
      id: 3,
      name: "Name",
      description: "Lorem ipsum",
      thumbnail: "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg",
    },  
  ]
  const boxItems = [
    {
      id: 1,
      title: "Global Exposure",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      title: "Global Exposure",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      title: "Global Exposure",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      title: "Global Exposure",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 5,
      title: "Global Exposure",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 6,
      title: "Global Exposure",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ]
  const internationalStudentsFeatureCards = [
    {
      id: 1,
      title: 'Global Exposure',
      body: 'Our students are from 29+ nationalities, which opens doors to experiencing a diverse student community. Here you’ll not just study but collaborate, make new connections, learn new languages, participate in multi-cultural programs, and grow together',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Global.svg',
      variant: 'gray',
    },
    {
      id: 2,
      title: 'Vibrant Campus Life',
      body: 'Luscious gardens, lively events, and a dynamic student community will make your college life experience truly unforgettable.',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/campus+life.svg',
      variant: 'amber',
    },
    {
      id: 3,
      title: 'Career Counseling',
      body: 'Our primary aim is to navigate your journey towards the right direction by providing career guidance and support at every step until you land your dream job.',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Career+Counseling.svg',
      variant: 'gray',
    },
    {
      id: 4,
      title: 'Choose From a Wide Range Of Programs',
      body: 'Our 130 + Programs are designed to provide industry-relevant knowledge and make you job-ready. From Computer Science to Pharmacy, choose from unlimited career opportunities.',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Wide+Range+of+Programs.svg',
      variant: 'amber',
    },
    {
      id: 5,
      title: 'Abundant Scholarships',
      body: 'We offer up to 100% merit-based scholarships, social scholarships, entrance exam scholarships, sports scholarships, culture & achievers scholarships, and much more.',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Abundant+Scholarships.svg',
      variant: 'gray',
    },
    {
      id: 6,
      title: 'Industry-Relevant Curriculum',
      body: 'Our curriculum is aligned with the New Education Policy 2020. All our educational programs match industry standards that equip our students with essential practical skills and updated industrial knowledge.',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Industry-Relevant+Curriculum.svg',
      variant: 'amber',
    },
    {
      id: 7,
      title: 'Holistic Development',
      body: 'Our primary goal is to make our students well-rounded in their academic journey. By nurturing their minds, they become confident to make the best decisions in life.',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Holistic+Development.svg',
      variant: 'gray',
    },
    {
      id: 8,
      title: 'Extensive Research Facilities',
      body: 'With 90 + Labs, including IT Labs and CIF labs, we’re Chhattisgarh’s No. 1 institute, committed to innovation and groundbreaking research facilities.',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Extensive+Research+Facilities.svg',
      variant: 'amber',
    },
    {
      id: 9,
      title: 'Experienced Faculties',
      body: 'Learn from highly experienced professors of KU who are from across India and abroad. Their expertise helps students become future leaders.',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Experienced+Faculties.svg',
      variant: 'gray',
    },
    {
      id: 10,
      title: 'Our Flagship Events',
      body: 'Every year, we organise memorable events and competitions where students showcase their creativity and talent and win amazing prizes.',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Flagship+Events.svg',
      variant: 'amber',
    },
    {
      id: 11,
      title: 'Internships & Industrial Visits',
      body: 'All Kalinga University students are provided with internship opportunities and are encouraged to work on practical projects and visit industrial sites.',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/international.svg',
      variant: 'gray',
    },
    {
      id: 12,
      title: 'Improve Employability',
      body: 'Employers these days are not just looking for your graduation degrees, but they hire you based on your overall presentation. Beyond textbook knowledge, KU teaches communication skills, leadership qualities, problem-solving abilities, time management, critical thinking, emotional intelligence, teamwork, and much more. ',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/100%25+Automation.svg',
      variant: 'amber',
    },
    {
      id: 13,
      title: 'Campus Placement Drives',
      body: 'With 400+ recruitment partners, we offer placement opportunities to students in our campus drives from different backgrounds so that they can secure their dream job',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Campus+Placement+Drives.svg',
      variant: 'gray',
    },
    {
      id: 14,
      title: 'Networking Opportunities',
      body: 'Connect with industry leaders, alumni, and working professionals through our workshops, seminars, National and International conferences, and future-proof your career. ',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Networking+Opportunities.svg',
      variant: 'amber',
    },
    {
      id: 15,
      title: 'Cultural Celebrations',
      body: 'Become a part of a campus that celebrates both National and International events. Cultural fests, concerts, talent shows, sports day, Kalinga Utsav, and open mic competitions are some of our lively events that unite our students.',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Cultural+Celebrations.svg',
      variant: 'gray',
    },
    {
      id: 16,
      title: 'Community Services',
      body: 'You will not just graduate from Kalinga with a degree, but you’ll become a socially responsible citizen too. Join our NCC and NSS team and become a part of a community that serves the Nation.',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Community+Services.svg',
      variant: 'amber',
    },
    {
      id: 17,
      title: 'Educational Tours',
      body: 'Our educational tours are all about a fun learning experience. From visiting top industries across India to exploring mega-infrastructure in Dubai, we’ve planned more exciting tours in the coming years.',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Educational+Tours.svg',
      variant: 'gray',
    },
    {
      id: 18,
      title: 'Mentor-Mentee System',
      body: 'We establish one-on-one connections with every student so that their issues can be identified and solved early. With our personalised guidance and supportive environment, our students excel both personally and academically.',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Mentor-Mentee+System.svg',
      variant: 'amber',
    },
    {
      id: 19,
      title: 'Emotional Well-Being',
      body: 'To cope with academic stress, mental health issues, or social anxiety, we organise well-being programs tailored to student needs so their voices are heard and acted upon.',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/Emotional+Well-Being.svg',
      variant: 'gray',
    },
    {
      id: 20,
      title: '100% Automation',
      body: 'Right from your admission till graduation, get a seamless digital experience through our student ERP system. We generate an ERP account for every student, which contains all the necessary information like academic curriculum, time tables, notices, exam date sheets, transportation details, event details, results, holiday calendar, forms, and other important updates.',
      image: 'https://kalinga-university.s3.ap-south-1.amazonaws.com/icons/100%25+Automation.svg',
      variant: 'amber',
    },
  ];
  
  const publicationStats = [
    {
      id: 1,
      title: "International Students",
      value: 100,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      title: "International Students",
      value: 100,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      title: "International Students",
      value: 100,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      title: "International Students",
      value: 100,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    }
  ]
  return (
    <>
      <MainIntro
        title="International Students At KU"
        description="Kalinga University, established in 2013, stands out as one of the leading private universities strategically located in the Smart City of New Raipur, Chhattisgarh. The University has consistently ranked among the top 101–150 universities in India under the NIRF Rankings 2025 for the fourth consecutive year and has also received a NAAC B+ accreditation, continuously shining on the horizons of high-quality education with equal opportunities to its international students."
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/international-students/international-main-intro.webp"
        imageAlt="International Students"
      />
      <PublicationGrid stats={publicationStats} />
      <AccreditationRanking
        heading="Accreditations & Rankings"
        secondHeading=""
      />
      <FeatureCards 
        title="Why is Kalinga University the Right Choice?"
        subtitle=""
        description="Spread across 50+ Acres of Land, the University offers fully equipped infrastructure with the most advanced curriculum that prepares students to compete in global opportunities. Every space on our campus generates curiosity and encourages motivation among young minds. We just don't focus on classroom-based learning, but our primary focus is to provide a holistic learning experience to our students so that they can become all-rounders in their personal and professional lives. With a supportive and inclusive learning environment, our students have achieved remarkable success and transformed their DREAMS into REALITY.pus generates curiosity and encourages motivation among young minds. We just don't focus on classroom-based learning, but our primary focus is to provide a holistic learning experience to our students so that they can become all-rounders in their personal and professional lives. With a supportive and inclusive learning environment, our students have achieved remarkable success and transformed their DREAMS into REALITY."
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/student.jpg"
        imageAlt="International Students"
        cards={internationalStudentsFeatureCards}
      />        
       <ImageListItem 
         imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/ccrc/kif/kif.webp" 
         boxItems={boxItems} 
         title="Why Study At India" 
         subtitle="" 
         description="Kalinga Incubation Foundation (KIF) is a platform for students to incubate their ideas and turn them into reality."
         className="bg-white"
         textClassName="text-white"
         headingClassName="" 
         cardBackgroundColor="bg-[var(--button-red)]"
         cardTitleClassName="text-white"
       /> 
      <StudentCell />
      <AdmissionSteps   
        bgColor="bg-[var(--background)]"
      />
      <AppreciationLetterLayout />
      <MainIntro
        title="International Students At KU"
        description="Kalinga University, established in 2013, stands out as one of the leading private universities strategically located in the Smart City of New Raipur, Chhattisgarh. The University has consistently ranked among the top 101–150 universities in India under the NIRF Rankings 2025 for the fourth consecutive year and has also received a NAAC B+ accreditation, continuously shining on the horizons of high-quality education with equal opportunities to its international students."
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/international-students/international-students-group.webp"
        imageAlt="International Students"
        reverseLayout={true}
        applyTransform3dSlant={false}
      />
      <OrganogramOfKalinga
        title="Download Brochure 2025-26"
        description="Kalinga University follows a well-defined governance structure that ensures smooth administration, transparency, and institutional excellence."
        buttonLabel="Download PDF"
        href="/about-us"
      />
      <MainIntro 
        title="International Students At KU"
        description="Kalinga University, established in 2013, stands out as one of the leading private universities strategically located in the Smart City of New Raipur, Chhattisgarh. The University has consistently ranked among the top 101–150 universities in India under the NIRF Rankings 2025 for the fourth consecutive year and has also received a NAAC B+ accreditation, continuously shining on the horizons of high-quality education with equal opportunities to its international students."
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/international-students/international-students-group.webp"
        imageAlt="International Students"
        reverseLayout={false}
        applyTransform3dSlant={true}
      />
      <MediaCardSlider
        categoryTitle="Video Interviews"
        title="Lorem ipsum dolor sit amet, consectetur"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
        videoItems={videoItems}
        cardBgClass="bg-white"
        nameTextClass="text-[var(--button-red)]"
        descriptionTextClass="text-gray-600"
        swiperClassName="ccrc-video-slider"
      />
      <UpcomingConference 
        conferences={newsConferences}
        title="Upcoming Conferences & Events"
        backgroundColor="bg-[var(--light-gray)]"
        backgroundColorcard="bg-white"
        showCategory={false}
        showDate={false}
        imageWidth={300}
        imageHeight={300}
        imageContainerClass="w-full md:w-1/3 flex justify-center"
      />
      <Gallery title="International Students Glimpse" /> 
      <AdmissionCareer />
    </>
  )
}
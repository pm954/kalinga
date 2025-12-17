"use client"
import PublicationGrid from "../components/research/publication-grid";
import UGCLogo from "../components/research/ugc_logo";
import UpcomingConference from "../components/research/upcoming_conference";
import ProgramsOffered from "../components/department/programs-offered"; 
import OrganogramOfKalinga from "../components/about/organogram_of_kalinga";
import MainIntro from "../components/about/main_intro";
import QuickLinks from "../components/general/quick_links";
import FAQ from "../components/general/faq";
import ResearchSixGridButtons from "../components/research/research_six_grid-buttons";
import AdmissionCareer from "../components/general/admission_cta";
import UpcomingConferences from "../components/research/upcoming_conference";
import MentorIntro from "../components/department/dept_head_intro";
import CenterOfExcellence from "../components/about/center_of_excellence";
import AwardsScrollbar from "../components/home/awards-scrollbar"; 
import AutoBreadcrumb from "../components/layout/BreadcrumbData";
export default function Research() {

  const newsConferences = [
    {
      id: 1,
      title: "Scopus Workshop: Research Impact",
      date: "Nov 28, 2025 · 10:00 A.M.",
      category: "Academic Event",
      description: "Hybrid workshop on Scopus analytics and publishing insights with experts.",
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/campus-life/Pic1+(1).jpeg"
    }
  ];
  const centres = [
    {
      id: 1,
      name: "Rajasthan Global Security Pvt. Ltd.",
     
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/research/Rajasthan+Global+Security+Pvt.+Ltd..png",
    },
    {
      id: 2,
      name: "WANFENG Aluminium Wheel (INDIA) Pvt. Ltd.",
      
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/research/WANFENG+Aluminium+Wheel+(INDIA)+Pvt.+Ltd+(2).png",
    },
    {
      id: 3,
      name: "Real Care Foundation",
      
      image: "https://kalinga-university.s3.ap-south-1.amazonaws.com/research/Real+Care+Foundation.png",
    },
    
  ];
  const awards = [
    {
      id: 1,
      year: "2024-25 ",
     
      active: true,
    },  {
      id: 1,
      year: "2023-24",
     
      active: true,
    },  {
      id: 1,
      year: "22022-23",
     
      active: true,
    },  {
      id: 1,
      year: "2021-22",
     
      active: true,
    },  {
      id: 1,
      year: "2020-21",
     
      active: true,
    },  {
      id: 1,
      year: "2019-20",
     
      active: true,
    },  {
      id: 1,
      year: "2018-19",
     
      active: true,
    },  
     
  ];
  const breadcrumbData = {
    heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/research/reserarch-banner.webp",
    pageTitle: "Research",
    customBreadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Research', href: '/research' }
    ]
  };
  return (
    <div>
      <AutoBreadcrumb data={breadcrumbData} />
      <MainIntro
        title="Research at Kalinga University"
        description="Kalinga University fosters a strong research culture that extends beyond classrooms through collaboration with leading universities and R&D institutions. Its research-driven curriculum, IPR and incubation cells support innovation, patents, commercialization, and industry linkage. With advanced CIF laboratories, research tools, plagiarism checks, and a robust research policy, the university empowers students to independently explore, innovate, and solve real-world challenges."
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/research/research-main-content.webp"
        imageAlt="Kalinga University Research"
        showButton ={false}
        showKnowMore ={false}
      />

      <PublicationGrid  />
      <OrganogramOfKalinga 
        title="Apply Now for Ph.D. Admissions"
        description="Begin your research journey with world-class faculty, advanced labs, and a structured research ecosystem."
        buttonLabel="Apply Now"
        href="/about-us"
      
      />
      <UGCLogo />
      <QuickLinks titleClassName="text-white" />
      
      <MentorIntro   imageSrc = "https://kalinga-university.s3.ap-south-1.amazonaws.com/departments/oprakash.png"
  title = "Dr. Harsha Patil"
  subtitle = "HoD – Research"
  department = "Research Department"
  quote = "Research is the foundation of academic excellence, where curiosity transforms into innovation and knowledge advances society."
  message = "At Kalinga University, research stands at the core of academic excellence. We are committed to nurturing a strong research ecosystem that encourages curiosity, innovation, and problem-solving among our students and faculty. Through advanced research laboratories, high-tech instruments, robust policy frameworks, IPR support, and collaborations with national and international organizations, we empower our scholars to contribute meaningfully to society. With hands-on training, workshops, and continuous mentorship, our faculty actively guide students in publishing research, filing patents, and presenting their work on diverse platforms, shaping them into confident leaders in their respective fields."
  />  

      <FAQ 
        title="Research Committee Members" 
        subtitleClassName="!hidden" 
        variant="table-display"
        items={[]}
        tableSections={[
          {
            id: 1,
            title: "2023-2024",
            data: [
              { name: "Dr. Priya Sharma", designation: "Faculty of Science", category: "Author" },
              { name: "Dr. Rajesh Kumar", designation: "Faculty of Technology", category: "Co-Author" },
              { name: "Prof. Meera Patel", designation: "Faculty of CS & IT", category: "Author" },
              { name: "Dr. Anil Verma", designation: "Faculty of Pharmacy", category: "Researcher" },
              { name: "Dr. Sushma Desai", designation: "Faculty of Law", category: "Author" },
              { name: "Dr. Vikram Singh", designation: "Faculty of Commerce & Management", category: "Co-Author" },
              { name: "Prof. Kavita Rao", designation: "Faculty of Arts & Humanities", category: "Author" },
              { name: "Dr. Manoj Tiwari", designation: "Faculty of Engineering", category: "Researcher" },
              { name: "Dr. Neha Agarwal", designation: "Faculty of Education", category: "Author" },
              { name: "Dr. Pradeep Nair", designation: "Faculty of Science", category: "Co-Author" },
              { name: "Prof. Ritu Agarwal", designation: "Faculty of Technology", category: "Author" },
              { name: "Dr. Sandeep Reddy", designation: "IEEE", category: "Researcher" }
            ]
          },
          {
            id: 2,
            title: "2022-2023",
            data: [
              { name: "Dr. Vijay Bhushan", designation: "Faculty of Arts & Humanities", category: "Author" },
              { name: "Dr. Sinha Singh", designation: "Faculty of Commerce & Management", category: "Author" },
              { name: "Dr. Smith Kalyan Pandey", designation: "Faculty of Commerce & Management", category: "Co-Author" },
              { name: "Dr. Jasmine Joshi", designation: "Faculty of Commerce & Management", category: "Researcher" },
              { name: "Dr. Nusratin Khatun", designation: "Faculty of Technology", category: "Author" },
              { name: "Prof. Ritu Mishra", designation: "Faculty of Technology", category: "Co-Author" },
              { name: "Dr. Komal Gupta", designation: "Faculty of Commerce & Management", category: "Author" },
              { name: "Dr. Ruchi Gupta", designation: "Faculty of Commerce & Management", category: "Researcher" },
              { name: "Dr. C. Divya", designation: "Faculty of Commerce & Management", category: "Author" },
              { name: "Prof. Shiv Kumar", designation: "Faculty of Technology", category: "Co-Author" },
              { name: "Dr. Sunayana Shukla", designation: "Faculty of Commerce & Management", category: "Author" },
              { name: "Dr. Arvind Mehta", designation: "Faculty of Science", category: "Researcher" },
              { name: "Dr. Preeti Khanna", designation: "Faculty of Pharmacy", category: "Author" }
            ]
          },
          {
            id: 3,
            title: "2021-2022",
            data: [
              { name: "Dr. Amit Kumar", designation: "Faculty of Technology", category: "Author" },
              { name: "Prof. Divya Sharma", designation: "Faculty of CS & IT", category: "Co-Author" },
              { name: "Dr. Rohit Verma", designation: "Faculty of Engineering", category: "Researcher" },
              { name: "Dr. Anjali Kapoor", designation: "Faculty of Arts & Humanities", category: "Author" },
              { name: "Dr. Sanjay Patel", designation: "Faculty of Commerce & Management", category: "Co-Author" },
              { name: "Prof. Geeta Singh", designation: "Faculty of Science", category: "Author" },
              { name: "Dr. Mukesh Yadav", designation: "Faculty of Pharmacy", category: "Researcher" },
              { name: "Dr. Priyanka Nair", designation: "Faculty of Law", category: "Author" },
              { name: "Dr. Rajiv Joshi", designation: "Faculty of Education", category: "Co-Author" },
              { name: "Dr. Sneha Reddy", designation: "Faculty of Technology", category: "Author" },
              { name: "Prof. Vishal Mehta", designation: "Faculty of CS & IT", category: "Researcher" },
              { name: "Dr. Kavita Desai", designation: "Faculty of Arts & Humanities", category: "Author" }
            ]
          }
        ]}
        overflowX={false}
      />
      
      <ResearchSixGridButtons />

      <UpcomingConferences 
        conferences={newsConferences}
        title="Upcoming Conferences & Events"
    
      />
          <CenterOfExcellence
        centres={centres}
        title=" Collaborative Activities/MoU"
        description="Explore the spaces and partnerships that power the Kalinga Incubation Foundation."
      />
      <AwardsScrollbar 
        awards={awards} 
        hideTitle={true}
        headerButtonLabel="View All Awards"
        onHeaderButtonClick={() => console.log('View all awards clicked')}
      />
      <AdmissionCareer />
    </div>
  );        
}
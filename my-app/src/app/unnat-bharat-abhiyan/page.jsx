"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/general/tab";
import FAQ from "../components/general/faq";
import ImageContent from "@/app/components/ccrc/imagecontent";
import MainIntro from "../components/about/main_intro";
import VisionMission from "../components/about/vision-mission";
import ImageListItem from "../components/ccrc/imagelistitem";
import DeptHeadIntro from "@/app/components/department/dept_head_intro";

/* ---------------- Breadcrumb ---------------- */
const breadcrumbData = {
  heroImage: "https://kalinga-university.s3.ap-south-1.amazonaws.com/kif/kif-banner.webp",
  pageTitle: "Unnat Bharat Abhiyan",
  customBreadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Unnat Bharat Abhiyan", href: "/unnat-bharat-abhiyan" },
  ],
};

if (typeof window !== "undefined") {
  window.__breadcrumbData = breadcrumbData;
}

/* ---------------- Vision & Mission ---------------- */
const visionMissionData = [
  {
    visionTitle: "Vision",
    missionTitle: "Mission",
    visionText:
      "Unnat Bharat Abhiyan is inspired by the vision of transformational change in rural development processes by leveraging knowledge institutions to help build the architecture of an Inclusive India.",
    missionText:
      "Enable higher educational institutions to work with rural communities, identify development challenges and create sustainable solutions, strengthen the link between society and academia, and upgrade the capabilities of the public and private sectors for rural development.",
    showImage: false,
  },
];

/* ---------------- Goals ---------------- */
const objectives = [
  { text: "To build an understanding of the development agenda within institutions of Higher Education and training relevant to national needs, especially those of rural India." },
  { text: "To re-emphasise the need for field work, stakeholder interactions, and design for societal objectives." },
  { text: "To stress rigorous reporting and useful outputs as central to developing new professions." },
  { text: "To provide rural India with access to professional resources of institutes of higher education." },
  { text: "To improve development outcomes through research and innovation." },
  { text: "To foster dialogue on science, society, and the environment." },
];

/* ---------------- Mentor ---------------- */
const MentorIntroProps = [
  {
    imageSrc: "https://kalinga-university.s3.ap-south-1.amazonaws.com/unnat-bharat-abhiyan/chart+(1).png",
    title: "Dr. Sandeep Gandhi",
    subtitle: "UBA PI Coordinator",
    department: "Registrar, Kalinga University",
    quote: `Registrar
Email: registrar@kalingauniversity.ac.in
Phone: +91-9303097043`,
    message: [],
  },
];

/* ---------------- UBA Team ---------------- */
const ubaTeamTable = [
  { slNo: 1, name: "Dr. Vijayalaxmi Biradar", designation: "Director IQAC", role: "Member" },
  { slNo: 2, name: "Dr. Smita Premanand", designation: "Assistant Professor, NSS Program Officer", role: "Member" },
  { slNo: 3, name: "Mr. Anup Kumar Jana", designation: "Assistant Professor", role: "Member" },
  { slNo: 4, name: "Mr. Sarat Chandra Mohanty", designation: "Assistant Professor", role: "Member" },
  { slNo: 5, name: "Dr. Anu G Pillai", designation: "Assistant Professor", role: "Member" },
  { slNo: 6, name: "Dr. Anita Verma", designation: "Assistant Professor", role: "Member" },
  { slNo: 7, name: "Ms. Rupal Gupta", designation: "Research Associate", role: "Member" },
  { slNo: 8, name: "Mr. Ashwan Kumar Sahu", designation: "IQAC Office Assistant", role: "Member" },
  { slNo: 9, name: "Mr. Hemant Kumar Sahu", designation: "IQAC Office Assistant", role: "Member" },
];

const ubaTeamTableSection = [
  {
    id: 1,
    title: "UBA Committee",
    columns: [
      { key: "slNo", label: "S. No.", width: "w-24" },
      { key: "name", label: "Name", width: "w-72" },
      { key: "designation", label: "Designation", width: "w-80" },
      { key: "role", label: "Role in UBA", width: "w-40" },
    ],
    data: ubaTeamTable,
  },
];
// CTCD common styles (reuse for UBA tabs)
const CARD_CLASSNAME = "rounded-[16px] bg-[var(--card-sandal)] p-[22px] md:p-[26px]";
const CARD_TITLE_CLASSNAME = "font-plus-jakarta-sans text-[24px] leading-[30px] font-medium text-[var(--button-red)]";
const CARD_TEXT_CLASSNAME = "mt-[10px] text-[var(--foreground)]";
const SECTION_TITLE_CLASSNAME = "font-stix text-2xl md:text-[40px] text-[var(--foreground)]";

/* ---------------- Page ---------------- */
export default function UnnatBharatAbhiyanPage() {
  return (
    
    <div className="bg-white">

      <ImageContent
        title="Unnat Bharat Abhiyan"
        description="Unnat Bharat Abhiyan (UBA) was launched by the Ministry of Education in 2014, which aims to address pressing challenges of rural India and connect them with higher education institutions for their holistic growth and development. Inspired by Gandhiji’s vision in Hind Swaraj, UBA supports the growth of self-sustained villages using eco-friendly and community-based technologies. The conceptualisation of Unnat Bharat Abhiyan started with the initiative of a group of dedicated faculty members of the Indian Institute of Technology (IIT) Delhi, working for a long time in the area of rural development and appropriate technology. India’s 70% of the population lives in rural areas, and this initiative will meet their needs of life, like food, energy, sanitation, education, health, and livelihood, reducing their migration towards their cities and improving growth and job opportunities in their areas."
        imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/unnat-bharat-abhiyan/news-6047.webp"
        readmore={false}
      />

      <MainIntro
        title="Our Commitment Towards Rural Transformation"
        description={[
          "Kalinga University proudly participates in the Unnat Bharat Abhiyan as a voluntary organisation by contributing towards rural progress. It has received approval on 07-10-2022. The university has taken significant measures to promote sustainable solutions and improve its infrastructure and lifestyle. Through fieldwork and surveys, it encourages rural empowerment by bridging the knowledge with the real community needs.",
        ]}
        imageUrl="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/students-3.jpg"
      />

      <VisionMission data={visionMissionData} showImg={false} />

      <ImageListItem
        items={objectives}
        imageSrc="https://kalinga-university.s3.ap-south-1.amazonaws.com/common/kalinga-students-2.jpg"
        title="Goals of Unnat Bharat Abhiyan"
        description={false}
      />

      <DeptHeadIntro items={MentorIntroProps} />

      <FAQ
        title="Our UBA Team Members"
        showHeading={false}
        variant="table-display"
        items={[]}
        tableSections={ubaTeamTableSection}
        overflowX={false}
      />

      {/* ================== UBA ACTIVITIES TABS ================== */}


      <div className="mt-20 mx-2 rounded-xl bg-[var(--dark-blue)] py-16">
        <div className="container mx-auto">
          <Tabs defaultValue="infra">
 <TabsList className="!flex !gap-4 md:!gap-5 !bg-transparent !rounded-none !p-0 !overflow-x-auto !px-2 md:!px-0">

  <TabsTrigger
    value="infra"
    className="!h-[54px] min-w-[240px] !rounded-[14px] !bg-white 
    font-plus-jakarta-sans text-[16px] font-medium 
    !text-[var(--foreground)] 
    hover:!bg-[#972B28] hover:!text-white 
    data-[state=active]:!bg-[var(--button-red)] 
    data-[state=active]:!text-white 
    shadow-sm transition-all whitespace-nowrap"
  >
    Infrastructure Development
  </TabsTrigger>

  <TabsTrigger
    value="survey"
    className="!h-[54px] min-w-[200px] !rounded-[14px] !bg-white 
    font-plus-jakarta-sans text-[16px] font-medium 
    !text-[var(--foreground)] 
    hover:!bg-[#972B28] hover:!text-white 
    data-[state=active]:!bg-[var(--button-red)] 
    data-[state=active]:!text-white 
    shadow-sm transition-all whitespace-nowrap"
  >
    Village Survey
  </TabsTrigger>

  <TabsTrigger
    value="garbage"
    className="!h-[54px] min-w-[280px] !rounded-[14px] !bg-white 
    font-plus-jakarta-sans text-[16px] font-medium 
    !text-[var(--foreground)] 
    hover:!bg-[#972B28] hover:!text-white 
    data-[state=active]:!bg-[var(--button-red)] 
    data-[state=active]:!text-white 
    shadow-sm transition-all whitespace-nowrap"
  >
    Smart Garbage Monitoring
  </TabsTrigger>

</TabsList>




            <div className="mt-6 rounded-xl bg-white p-8">

              {/* TAB 1 */}
              <TabsContent value="infra">
              {/* ================= INFRASTRUCTURE DEVELOPMENT ================= */}
<div className="space-y-6">

 <h3 className={SECTION_TITLE_CLASSNAME}>

    Infrastructure (Basic Amenities) Development of Government Schools
  </h3>
<p className={CARD_TEXT_CLASSNAME}>


    An infrastructure development program for Government schools in rural areas
    of Naya Raipur was conducted by the National Service Scheme (NSS) unit and
    Internal Quality Assurance Cell (IQAC) of Kalinga University from 22-08-2022 to
    27-08-2022. This program aimed to provide basic amenities to Government schools
    present in rural areas to develop their infrastructure. In total,
    <strong> 6 faculty members</strong> and <strong>30 students</strong> participated
    in the event.
  </p>

  <p className={CARD_TEXT_CLASSNAME}>


    During the program, a team from the NSS unit and the IQAC cell of Kalinga
    University visited the following seven schools:
  </p>

  <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)]">
    <li>Govt. Primary School, Kotni</li>
    <li>Govt. Primary School, Palaud</li>
    <li>Govt. Primary School, Kuhera</li>
    <li>Govt. Primary School, Parsada</li>
    <li>Govt. Middle School, Kotni</li>
    <li>Govt. Middle School, Tandul</li>
    <li>Govt. Middle School, Kuhera</li>
  </ul>

 <p className={CARD_TEXT_CLASSNAME}>


    Initially, a survey was carried out to fetch the requirements of the Government
    schools, and based on this, various amenities like Green Board, Carpet,
    Dustbin, Almira, Book Rack, wheel chair, etc., were distributed to the above
    Government schools of Naya Raipur. This initiative brought a smile to the
    faces of the students and teachers of the schools. Finally, the Head
    Master/Mistress appreciated this initiative of Kalinga University by
    providing an appreciation certificate.
  </p>

</div>

              </TabsContent>

              {/* TAB 2 */}
              <TabsContent value="survey">
           {/* ================= VILLAGE / HOUSEHOLD SURVEY ================= */}
<div className="space-y-6">

 <h2 className={SECTION_TITLE_CLASSNAME}>

    Village / Household Surveys in the Kalinga University UBA Adopted Villages
  </h2>


  {/* ===== TABLE ===== */}
  <div className="overflow-x-auto rounded-xl border border-gray-300">

    <table className="w-full border-collapse text-left">

      <thead className="bg-[var(--dark-blue)] text-white">
        <tr>
          <th className="border border-gray-300 px-4 py-3">S. No.</th>
          <th className="border border-gray-300 px-4 py-3">Date of Visit</th>
          <th className="border border-gray-300 px-4 py-3">Village Name</th>
          <th className="border border-gray-300 px-4 py-3 text-center">Houses Surveyed</th>
        </tr>
      </thead>

     <tbody className="bg-white">


        <tr>
          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">1</td>
          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">03-11-2022</td>
          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">Palaud</td>
          <td className="border border-gray-300 px-4 py-3 text-center text-[var(--foreground)]">52</td>
        </tr>

        <tr>
          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">2</td>
          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">04-11-2022</td>
          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">Kotni</td>
          <td className="border border-gray-300 px-4 py-3 text-center text-[var(--foreground)]">52</td>
        </tr>

        <tr>
          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">3</td>
          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">05-11-2022</td>
          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">Tandul</td>
          <td className="border border-gray-300 px-4 py-3 text-center text-[var(--foreground)]">52</td>
        </tr>

        <tr>
          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">4</td>
          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">07-11-2022</td>
          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">Kuhera</td>
          <td className="border border-gray-300 px-4 py-3 text-center text-[var(--foreground)]">49</td>
        </tr>

        <tr>
          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">5</td>
          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">08-11-2022</td>
          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">Parsada</td>
          <td className="border border-gray-300 px-4 py-3 text-center text-[var(--foreground)]">60</td>
        </tr>

        <tr>
          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">6</td>
          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">09-11-2022</td>
          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">Kotara Bhata</td>
          <td className="border border-gray-300 px-4 py-3 text-center text-[var(--foreground)]">54</td>
        </tr>

        {/* TOTAL */}
        <tr className="font-semibold bg-gray-50">
          <td colSpan="3" className="border border-gray-300 px-4 py-3 text-center text-[var(--foreground)] ">
            Total Number of Houses Surveyed
          </td>
          <td className="border border-gray-300 px-4 py-3 text-center text-[var(--foreground)]">319</td>
        </tr>

      </tbody>
    </table>
  </div>

  {/* ===== BELOW TABLE CONTENT ===== */}
<p className={CARD_TEXT_CLASSNAME}>


    Under the UBA scheme, Kalinga University, Raipur, has adopted six villages, and
    in these villages, separate teams were assigned to collect data from every
    house in that area. A meeting was conducted with the village Sarpanch, and
    basic information related to the village, like village infrastructure,
    amenities/services availability, details of the land, forest, and horticulture
    field in the village, was collected.
  </p>

  <p className={CARD_TEXT_CLASSNAME}>


    Along with this, the requirements of the common electrical appliances for the
    village were also discussed. The household survey started from
    <strong> 3rd November 2022</strong> and was completed on
    <strong> 9th November 2022</strong>.
  </p>

</div>

              </TabsContent>

              {/* TAB 3 */}
              <TabsContent value="garbage">
               {/* ================= SMART GARBAGE MONITORING ================= */}
<div className="space-y-6">

 <h2 className={SECTION_TITLE_CLASSNAME}>

    Smart Garbage Monitoring System in Government Schools
  </h2>

 

  {/* ===== TABLE ===== */}
<div className="overflow-x-auto rounded-xl border border-gray-300">

    <table className="w-full border-collapse text-left">

      <thead className="bg-[var(--dark-blue)] text-white">
        <tr>
          <th className="border border-gray-300 px-4 py-3">S. No.</th>
          <th className="border border-gray-300 px-4 py-3">Date of Visit</th>
          <th className="border border-gray-300 px-4 py-3">Village / School Name</th>
          <th className="border border-gray-300 px-4 py-3 text-center">No. of Students Attended</th>
        </tr>
      </thead>

    <tbody className="bg-white">

        <tr>
          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">1</td>
          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">03-10-2023</td>
          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">Government Middle School, Kuhera</td>
          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)] text-center">53</td>
        </tr>

        <tr>
          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">2</td>
          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">04-10-2023</td>
          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">Government Middle School, Tandul</td>
          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)] text-center">57</td>
        </tr>

        <tr>
          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">3</td>
          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">05-10-2023</td>
          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">Government Middle School, Palaud</td>
          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]  text-center">64</td>
        </tr>

        <tr>
          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">4</td>
          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">06-10-2023</td>
          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">Mahatma Vidya Pith School, Palaud</td>
          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)] text-center">42</td>
        </tr>

        <tr>
          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">5</td>
          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">07-10-2023</td>
          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)]">Government Middle School, Kotara Bhata</td>
          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)] text-center">52</td>
        </tr>

        {/* TOTAL ROW */}
        <tr className="font-semibold bg-gray-50">
          <td colSpan="3" className="border border-gray-300 px-4 py-3 text-[var(--foreground)] text-center">
            Total Number of Students Attended
          </td>
          <td className="border border-gray-300 px-4 py-3 text-[var(--foreground)] text-center">268</td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* ===== BELOW TABLE CONTENT ===== */}
<p className={CARD_TEXT_CLASSNAME}>


    Government schools often struggle with maintaining a clean and hygienic
    environment. Improper garbage disposal can lead to unclean surroundings,
    attracting pests and causing health issues for students and staff members.
    Implementing a smart garbage monitoring system in government schools can have
    several benefits and impacts, leading to improved hygiene, sustainability,
    and cost-efficiency. With real-time monitoring and alerts, the system can
    ensure that garbage bins are emptied promptly, reducing the risk of litter
    and unhygienic conditions.
  </p>

<p className={CARD_TEXT_CLASSNAME}>


    Keeping this into consideration, a proposal was submitted to the IEEE Signal
    Processing Society (SPS) and the IEEE Humanitarian Activities Committee (HAC).
    In response to this, IEEE Kalinga University Student Branch (IEEE KU SB)
    received a sanctioned amount of <strong>USD 1,000.00</strong> for the project
    named “Smart Garbage Monitoring System” with project code and grant reference
    number: <strong>22-SPSHAC-07</strong>. The visit was scheduled from
    <strong> 3rd October 2023 to 7th October 2023</strong>.
  </p>

</div>

              </TabsContent>

            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

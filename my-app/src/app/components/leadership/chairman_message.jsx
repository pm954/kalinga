"use client";
import Image from "next/image";

export default function ChairmanMessage({
  imageSrc = "https://kalinga-university.s3.ap-south-1.amazonaws.com/leadership/chairman.jpg",
  imageAlt = "Dr. Rajeev Kumar",
  name = "Dr. Rajeev Kumar",
  title = "Chairman",
  quote = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  message = [
    "It gives me immense pleasure to welcome you to the Kalinga University, where we believe that education is not just about classroom learning but about inspiring learners to achieve lifelong knowledge.",
    "Due to globalization, the competition has tremendously increased in every field including education. To cope with that, we have developed a robust curriculum that turns students into job-ready professionals. We focus on imparting a holistic learning experience to make them well-rounded in emotional, intellectual, and ethical standards.",
    "With an aim to deliver quality education, we are proud to inform you that we are in between 101-150 top universities in India under the NIRF Rankings, 2023. We are also NAAC B+ accredited university, proving our commitment to academic excellence.",
    "We have a multi-cultural campus environment with students from 24 countries, 20 different range of programs, a sustainable campus, an interdisciplinary teaching environment, centers of excellence, advanced research labs, expert faculty members, an industry-ready curriculum, and impeccable career development cell.",
    "Academics are just one part of our university, but we also emphasize co-curricular, extracurricular, and community service. We just don't nurture young minds, but we also prepare responsible global citizens. Every leader is encouraged to go beyond their boundaries, discover their strengths and weaknesses, and become a responsible citizen.",
    "At KU, students don't just earn degrees; they graduate with confidence and purpose to make a thoughtful change in society. As you step into a new journey with us, we assure you that you'll always feel motivated and inspired every single day of your life.",
    "I welcome you all to Kalinga University and wish all the best in your career and life."
  ]
}) {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Top Section - Portrait, Name, and Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          {/* Left - Portrait */}
          <div className="lg:col-span-4">
            <div className="bg-[var(--lite-sand)] rounded-2xl p-2 w-full">
              <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Middle - Name and Title */}
          <div className="lg:col-span-3 flex flex-col justify-center">
            <h2 className="font-stix text-3xl md:text-4xl lg:text-5xl text-[var(--foreground)] mb-2">
              {name}
            </h2>
            <p className="text-lg md:text-xl text-[var(--foreground)] font-plus-jakarta-sans">
              {title}
            </p>
          </div>

          {/* Right - Quote Box */}
          <div className="lg:col-span-5">
            <div className="border-2 border-[var(--dark-blue)] rounded-lg p-6 md:p-8 bg-white relative">
              {/* Decorative Quotation Marks */}
              <div className="absolute top-4 left-4">
                <span className="text-[var(--dark-blue)] text-7xl md:text-8xl font-stix leading-none opacity-30">"</span>
              </div>
              <p className="text-[var(--dark-blue)] text-base md:text-lg leading-relaxed mt-8 mb-4 font-plus-jakarta-sans italic pl-4">
                {quote}
              </p>
              <div className="mt-6">
                <p className="font-semibold text-[var(--dark-blue)] font-plus-jakarta-sans">{name}</p>
                <p className="text-sm text-[var(--dark-blue)] font-plus-jakarta-sans">{title}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Chairman's Message */}
        <div className="border-l-2 border-r-2 border-b-2 border-[var(--dark-blue)] rounded-lg p-6 md:p-10 bg-white">
          <h2 className="font-stix text-3xl md:text-4xl lg:text-5xl text-[var(--foreground)] mb-6 md:mb-8">
            Chairman's Message
          </h2>
          <div className="space-y-4 md:space-y-6">
            {message.map((paragraph, index) => (
              <p key={index} className="text-base md:text-lg text-[var(--foreground)] leading-relaxed font-plus-jakarta-sans">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


"use client";

import Image from "next/image";
import SectionHeading from "../general/SectionHeading";

export default function ISOCertificateSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <SectionHeading 
            title="ISO Certificate"
            titleClassName="text-3xl md:text-4xl lg:text-5xl mb-6"
          />
          <p className="max-w-4xl mx-auto leading-relaxed">
            The CIF at Kalinga University is well-equipped with advanced research facilities that produce accurate measurements in the biological, physical, and chemical sciences.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Certificate 1 */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-[3/4]">
              <Image
                src="https://kalinga-university.s3.ap-south-1.amazonaws.com/about/iso-certifcate.webp"
                alt="Kalinga University ISO 9001:2015 Certificate"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 80vw, 400px"
                priority
              />
            </div>
          </div>

          {/* Certificate 2 */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-[3/4]">
              <Image
                src="https://kalinga-university.s3.ap-south-1.amazonaws.com/about/iso-certifcate.webp"
                alt="Kalinga University ISO 9001:2015 Certificate"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 80vw, 400px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


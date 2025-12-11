import Image from "next/image";

const defaultVision = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
  esse cillum dolore eu fugiat nulla pariatur.
`.trim();

const defaultMission = defaultVision;

export default function VisionMission({
  visionTitle = "Vision",
  missionTitle = "Mission",
  visionText = defaultVision,
  missionText = defaultMission,
  imageSrc = "https://kalinga-university.s3.ap-south-1.amazonaws.com/common/person-standing-1.png",
  imageAlt = "Vision and Mission",
  showImage = true,
  className = "",
}) {
  const gridCols = showImage ? "lg:grid-cols-12" : "lg:grid-cols-2";
  const visionCol = showImage
    ? "order-1 lg:order-1 lg:col-span-5"
    : "order-1 lg:order-1";
  const missionCol = showImage
    ? "order-2 lg:order-3 lg:col-span-5"
    : "order-2 lg:order-2";

  return (
    <section className={`pt-16 lg:pt-24 bg-white ${className}`}>
      <div className="container mx-auto px-4 lg:px-5">
        <div className={`grid grid-cols-1 ${gridCols} gap-8 lg:gap-6 items-center`}>
          {/* Left - Vision Box */}
          <div className={visionCol}>
            <div className="bg-[var(--dark-skin)] p-6 lg:p-8 rounded-2xl shadow-lg transform-3d-slant-mirror">
              <h3 className="font-stix text-[var(--foreground)] mb-4 text-center">
                {visionTitle}
              </h3>
              <p className="text-[var(--foreground)] leading-relaxed ">
                {visionText}
              </p>
            </div>
          </div>

          {/* Center - Person Image */}
          {showImage && (
            <div className="order-3 lg:order-2 lg:col-span-2 flex justify-center">
              <div className="relative w-full max-w-[250px] lg:max-w-[300px]">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={400}
                  height={600}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          )}

          {/* Right - Mission Box */}
          <div className={missionCol}>
            <div className="bg-[var(--dark-skin)]  p-6 lg:p-8 rounded-2xl shadow-lg transform-3d-slant">
              <h3 className="font-stix text-[var(--foreground)] mb-4 text-center">
                {missionTitle}
              </h3>
              <p className="text-[var(--foreground)] leading-relaxed">
                {missionText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


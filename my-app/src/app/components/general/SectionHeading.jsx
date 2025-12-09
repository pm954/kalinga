export default function SectionHeading({ 
  subtitle, 
  title,
  subtitleClassName = "",
  titleClassName = ""
}) {
  return (
    <>
      {subtitle && (
        <div className={`text-[var(--button-red)] text-base sm:text-lg md:text-xl lg:text-[25px] pt-3 sm:pt-5 md:pt-8 lg:pt-[50px] font-plus-jakarta-sans font-medium leading-tight sm:leading-[25px] ${subtitleClassName}`}>
          {subtitle}
        </div>
      )}
      {title && (
        <h2 className={`font-stix text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[50px] leading-tight py-3 sm:py-5 md:py-8  text-[var(--foreground)] ${titleClassName}`}>
          {title}
        </h2>
      )}
    </>
  );
}


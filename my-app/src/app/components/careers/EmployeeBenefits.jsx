'use client'

export default function EmployeeBenefits() {

  const benefits = [
    {
      id: 1,
      title: "Competitive Compensation",
      description: " We provide industry-aligned salary packages that reward expertise, performance, and dedication."
    },
    {
      id: 2,
      title: " Professional Development",
      description: "Enhance your skills through ongoing training programs, faculty development workshops, and research collaborations."
    },
    {
      id: 3,
      title: "Health & Wellness",
      description: "Comprehensive health coverage and wellness initiatives ensure the physical and mental well-being of our employees."
    },
    {
      id: 4,
      title: "Work–Life Balance",
      description: "A positive and flexible work environment that promotes productivity while supporting personal commitments."

    },
    {
      id: 5,
      title: "Research & Innovation Support",
      description: "Access institutional funding, advanced facilities, and resources to pursue innovative research and academic excellence."
    },
    {
      id: 6,
      title: "Recognition & Growth",
      description: "We celebrate achievements through awards, promotions, and opportunities for career progression."
    }
  ];

  return (
    <section className="w-full max-w-[1249px] mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-[var(--dark-blue)] text-center text-3xl sm:text-[40px] mb-4">Employee Benefits</h2>
      <p className="text-center text-[14px] text-[var(--light-text-gray)] max-w-3xl mx-auto mb-16">
      At Kalinga University, we recognize that our people are our greatest asset. We are committed to creating a supportive, inclusive, and growth-oriented workplace that encourages excellence, innovation, and well-being.
</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {benefits.map((item) => (
          <div key={item.id} className="bg-[var(--card-sandal)] rounded-[10px] p-8">
            
            <div className="mb-[30px]">
              <img src="/career.svg" className="w-[40px] h-[40px]" />
            </div>

            <h3 className="text-[var(--dark-gray)] text-[20px] font-medium mb-[20px]">{item.title}</h3>
            <div className="w-full h-[1px] bg-[var(--dark-gray)] mb-3"></div>
            <p className="text-[var(--dark-gray)] text-[15px]">
              {item.description}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}

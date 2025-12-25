"use client";

export default function Organogram() {
  const Node = ({ children, variant = "sand", className = "" }) => {
    const variants = {
      blue: "bg-[var(--dark-blue)] text-white",
      gold: "bg-[var(--card-sandal)] text-[var(--dark-blue)]",
      sand: "bg-[var(--lite-sand)] text-[var(--dark-blue)]",
      white: "bg-white border border-gray-300 text-[var(--dark-blue)]",
    };

    return (
      <div
        className={`px-5 py-3 rounded-xl font-semibold text-sm shadow-sm whitespace-nowrap ${variants[variant]} ${className}`}
      >
        {children}
      </div>
    );
  };

  const ListNode = ({ title, items }) => (
    <div className="bg-[var(--lite-sand)] rounded-xl px-5 py-4 w-[260px] shadow-sm">
      <div className="font-semibold text-sm mb-3">{title}</div>
      <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
        {items.map((i, idx) => (
          <li key={idx}>{i}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-center text-3xl font-serif">
          Kalinga University
        </h2>
        <p className="text-center text-[var(--button-red)] font-semibold tracking-wide mt-1">
          ORGANOGRAM
        </p>

        {/* Chart */}
        <div className="org-wrap mt-14">
          <div className="org-chart">

            <ul className="org-level">
              <li>
                <Node variant="blue" className="min-w-[220px]">
                  CHANCELLOR
                </Node>

                <ul className="org-level">
                  {/* LEFT BRANCH */}
                  <li>
                    <Node variant="gold" className="min-w-[230px]">
                      VICE CHANCELLOR
                    </Node>

                    <ul className="org-level">
                      <li>
                        <Node>REGISTRAR</Node>
                        <ul className="org-level">
                          <li><Node variant="white">HR DEPARTMENT</Node></li>
                          <li><Node variant="white">EXAM CELL</Node></li>
                          <li><Node variant="white">FINANCE DEPARTMENT</Node></li>
                          <li><Node variant="white">ADMISSION DEPARTMENT</Node></li>
                          <li><Node variant="white">SCHOLARSHIP INCHARGE</Node></li>
                        </ul>
                      </li>

                      <li>
                        <Node>DIRECTOR IQAC</Node>
                        <ul className="org-level">
                          <li><Node variant="white">IIC CELL</Node></li>
                          <li><Node variant="white">IEEE CELL</Node></li>
                          <li><Node variant="white">UBA CELL</Node></li>
                        </ul>
                      </li>

                      <li>
                        <Node>DIRECTOR CCRC</Node>
                        <ul className="org-level">
                          <li><Node variant="white">T&amp;P</Node></li>
                          <li><Node variant="white">CTCD</Node></li>
                          <li><Node variant="white">KIF</Node></li>
                          <li><Node variant="white">KUIIC</Node></li>
                        </ul>
                      </li>

                      <li>
                        <ListNode
                          title="DEAN ACADEMIC AFFAIRS"
                          items={[
                            "Dean Arts & Humanities",
                            "Dean Commerce & Management",
                            "Dean Education",
                            "Dean IT",
                            "Dean Law",
                            "Dean Pharmacy",
                            "Dean Research",
                            "Dean Science",
                            "Dean Technology",
                          ]}
                        />
                      </li>

                      <li>
                        <ListNode
                          title="DEAN STUDENT WELFARE"
                          items={[
                            "Chief Proctor",
                            "Chief Warden",
                            "National Student Coordinator",
                            "International Student Coordinator",
                            "NCC Coordinator",
                            "NSS Coordinator",
                            "YI Coordinator",
                            "POSH Cell",
                          ]}
                        />
                      </li>
                    </ul>
                  </li>

                  {/* RIGHT BRANCH */}
                  <li>
                    <Node variant="gold" className="min-w-[230px]">
                      DIRECTOR GENERAL
                    </Node>

                    <ul className="org-level">
                      <li>
                        <Node>CENTRES OF EXCELLENCES</Node>
                        <ul className="org-level">
                          <li><Node variant="white">TECHNOVIZ</Node></li>
                          <li><Node variant="white">EBLU</Node></li>
                          <li><Node variant="white">BHARAT DRONES</Node></li>
                          <li><Node variant="white">MSMEs</Node></li>
                          <li><Node variant="white">BOSCH</Node></li>
                          <li><Node variant="white">JustAuto</Node></li>
                          <li><Node variant="white">IBM</Node></li>
                        </ul>
                      </li>

                      <li>
                        <Node>CIF</Node>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>

          </div>
        </div>
      </div>

      {/* Scoped CSS */}
      <style>{`
        .org-wrap {
          width: 100%;
          overflow-x: auto;
        }

        .org-chart {
          min-width: 1200px;
          padding-bottom: 30px;
        }

        .org-chart ul.org-level {
          padding-top: 30px;
          position: relative;
          display: flex;
          justify-content: center;
        }

        .org-chart ul.org-level > li {
          list-style: none;
          text-align: center;
          position: relative;
          padding: 30px 14px 0 14px;
        }

        .org-chart ul.org-level > li::before,
        .org-chart ul.org-level > li::after {
          content: "";
          position: absolute;
          top: 0;
          right: 50%;
          width: 50%;
          height: 30px;
          border-top: 2px solid #9ca3af;
        }

        .org-chart ul.org-level > li::after {
          right: auto;
          left: 50%;
          border-left: 2px solid #9ca3af;
        }

        .org-chart ul.org-level > li:only-child::before,
        .org-chart ul.org-level > li:only-child::after {
          display: none;
        }

        .org-chart ul.org-level > li:first-child::before {
          border: none;
        }

        .org-chart ul.org-level > li:last-child::after {
          border: none;
        }

        .org-chart ul.org-level ul.org-level::before {
          content: "";
          position: absolute;
          top: 0;
          left: 50%;
          width: 0;
          height: 30px;
          border-left: 2px solid #9ca3af;
        }
      `}</style>
    </section>
  );
}
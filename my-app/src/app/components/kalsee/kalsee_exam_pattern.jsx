"use client";

import { useMemo, useState } from "react";
import SectionHeading from "../general/SectionHeading";

const dataMap = {
  btech: {
    note: "All questions carry 1 mark each.",
    rows: [
      { sl: 1, section: "Section A", subject: "Physics/ECE", questions: 25 },
      { sl: 2, section: "Section B", subject: "Chemistry", questions: 25 },
      { sl: 3, section: "Section C", subject: "Maths", questions: 25 },
      { sl: 4, section: "Section D", subject: "English Communication", questions: 15 },
    ],
  },
  ug: {
    note: "All questions carry 1 mark each.",
    rows: [
      { sl: 1, section: "Section A", subject: "General Awareness", questions: 25 },
      { sl: 2, section: "Section B", subject: "Reasoning", questions: 25 },
      { sl: 3, section: "Section C", subject: "Quantitative Aptitude", questions: 25 },
      { sl: 4, section: "Section D", subject: "English", questions: 15 },
    ],
  },
  pg: {
    note: "All questions carry 1 mark each.",
    rows: [
      { sl: 1, section: "Section A", subject: "Subject Knowledge", questions: 40 },
      { sl: 2, section: "Section B", subject: "Aptitude", questions: 30 },
      { sl: 3, section: "Section C", subject: "English", questions: 20 },
    ],
  },
  llm: {
    note: "All questions carry 1 mark each.",
    rows: [
      { sl: 1, section: "Section A", subject: "Legal Aptitude", questions: 40 },
      { sl: 2, section: "Section B", subject: "English", questions: 30 },
      { sl: 3, section: "Section C", subject: "General Knowledge", questions: 20 },
    ],
  },
  phd: {
    note: "All questions carry 1 mark each.",
    rows: [
      { sl: 1, section: "Section A", subject: "Research Aptitude", questions: 50 },
      { sl: 2, section: "Section B", subject: "Subject Knowledge", questions: 40 },
    ],
  },
};

export default function KalseeExamPattern() {
  const items = useMemo(
    () => [
      { key: "btech", label: "B.Tech" },
      { key: "ug", label: "All Undergraduate Courses (except B.Tech)" },
      { key: "pg", label: "All Postgraduate Courses" },
      { key: "llm", label: "LLM" },
      { key: "phd", label: "Ph.D." },
    ],
    []
  );

  // Default selected: UG (matches your screenshot highlight)
  const [active, setActive] = useState("ug");

  const activeData = dataMap[active] ?? dataMap.ug;

  const total = activeData.rows.reduce((sum, r) => sum + (Number(r.questions) || 0), 0);

  return (
    <section className="w-full py-8 sm:py-12 md:py-16">
      <div className="mx-auto w-full container px-4 sm:px-6">
        <SectionHeading
          title="Pattern Of KALSEE Exam"
          titleClassName="text-center  leading-tight sm:leading-normal md:leading-[54px]"
        />

        <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col md:grid md:grid-cols-[420px_1fr] gap-6 md:gap-8">
          {/* LEFT: selections */}
          <div className="flex md:flex-col gap-3 md:gap-5 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
            {items.map((it) => {
              const isActive = it.key === active;

              return (
                <button
                  key={it.key}
                  type="button"
                  onClick={() => setActive(it.key)}
                  className={[
                    "flex-shrink-0 md:w-full rounded-[10px] px-4 sm:px-6 py-4 sm:py-6 text-left font-semibold transition cursor-pointer text-sm sm:text-base",
                    "border border-black/10 whitespace-nowrap md:whitespace-normal",
                    isActive
                      ? "bg-[var(--button-red)] text-white"
                      : "bg-[var(--card-sandal)] text-[var(--foreground)]",
                  ].join(" ")}
                >
                  {it.label}
                </button>
              );
            })}
          </div>

          {/* RIGHT: panel */}
          <div className="rounded-[18px] bg-[var(--dark-blue)] p-4 sm:p-6 md:p-7">
            <p className="text-xs sm:text-sm md:text-[14px] font-semibold text-white/90">
              {activeData.note}
            </p>

            <div className="mt-4 overflow-x-auto rounded-[10px] bg-white">
              <table className="w-full min-w-[400px] border-collapse text-left text-xs sm:text-sm md:text-[14px]">
                <thead>
                  <tr className="bg-[var(--button-red)] text-white">
                    <th className="px-3 sm:px-4 md:px-5 py-3 sm:py-4 font-semibold">Sl. No</th>
                    <th className="px-3 sm:px-4 md:px-5 py-3 sm:py-4 font-semibold">Section</th>
                    <th className="px-3 sm:px-4 md:px-5 py-3 sm:py-4 font-semibold">Subject</th>
                    <th className="px-3 sm:px-4 md:px-5 py-3 sm:py-4 text-right font-semibold">Questions</th>
                  </tr>
                </thead>

                <tbody className="text-[var(--foreground)]">
                  {activeData.rows.map((r, idx) => (
                    <tr key={idx} className="border-t border-black/10">
                      <td className="px-3 sm:px-4 md:px-5 py-3 sm:py-4">{r.sl}</td>
                      <td className="px-3 sm:px-4 md:px-5 py-3 sm:py-4">{r.section}</td>
                      <td className="px-3 sm:px-4 md:px-5 py-3 sm:py-4">{r.subject}</td>
                      <td className="px-3 sm:px-4 md:px-5 py-3 sm:py-4 text-right">{r.questions}</td>
                    </tr>
                  ))}

                  <tr className="border-t border-black/10 bg-[#fffaf2]">
                    <td className="px-3 sm:px-4 md:px-5 py-3 sm:py-4 font-semibold text-center" colSpan={3}>
                      Total
                    </td>
                    <td className="px-3 sm:px-4 md:px-5 py-3 sm:py-4 text-right font-semibold">
                      {total}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

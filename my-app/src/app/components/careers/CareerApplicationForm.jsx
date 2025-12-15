'use client'

import { useState, useRef, useLayoutEffect, useEffect } from "react"
import GlobalRedPlainButton from "../general/global-red_plain_button"

export default function CareerApplicationForm() {

  const [activeTab, setActiveTab] = useState("personal")
  const tabRefs = useRef({})
  const tabsContainerRef = useRef(null)
  const [underlineStyle, setUnderlineStyle] = useState({ width: 0, x: 0 })

  const tabs = [
    { id: "personal", label: "Personal Information" },
    { id: "academic", label: "Academic Details" },
    { id: "position", label: "Position Details" },
    { id: "experience", label: "Professional Experience" },
    { id: "documents", label: "Upload Documents" }
  ]

  const updateUnderline = () => {
    const container = tabsContainerRef.current
    const currentEl = tabRefs.current[activeTab]

    if (!container || !currentEl) return

    const containerRect = container.getBoundingClientRect()
    const elRect = currentEl.getBoundingClientRect()

    setUnderlineStyle({
      width: Math.round(elRect.width),
      x: Math.round(elRect.left - containerRect.left + container.scrollLeft)
    })
  }

  useLayoutEffect(() => { updateUnderline() }, [activeTab])

  useEffect(() => {
    const ro = new ResizeObserver(updateUnderline)
    const c = tabsContainerRef.current
    if (c) ro.observe(c)
    return () => ro.disconnect()
  }, [])

  return (
    <section className="w-full max-w-[1249px] mx-auto bg-[var(--dark-blue)] py-20 px-4 sm:px-6 lg:px-8 rounded-xl">
      
      <h2 className="text-[var(--background)] text-center text-3xl sm:text-[40px] font-light">
      Career Application Form
      </h2>

      <p className="text-center text-[var(--background)]/70 max-w-3xl mx-auto mt-4 text-sm sm:text-base">
      Join a dynamic community of educators, researchers, and professionals shaping the future of learning at Kalinga University.
 Please fill in your details below to apply for a suitable position. Our HR team will review your application and contact you if your profile matches our current openings.

      </p>

      {/* TABS */}
      <div className="relative mt-10 pb-2 border-b border-[var(--background)]/30">
        
        <div
          ref={tabsContainerRef}
          className="flex gap-10 justify-center overflow-x-auto no-scrollbar px-2"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              ref={(el) => (tabRefs.current[tab.id] = el)}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 text-sm sm:text-base ${
                activeTab === tab.id ? "text-[var(--dark-orange-red-light)] font-medium" : "text-[var(--background)]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <span
          className="absolute bottom-0 h-[3px] bg-[var(--dark-orange-red-light)] transition-all duration-300"
          style={{
            width: underlineStyle.width,
            transform: `translateX(${underlineStyle.x}px)`
          }}
        />

      </div>

      {/* FORM */}
      <div className="mt-10 p-10 rounded-xl">
        
        <div className="grid sm:grid-cols-2 gap-10">

          <div>
            <label className="text-[var(--background)] text-xl">Full Name</label>
            <input className="w-full mt-2 bg-transparent border-b border-[var(--background)]/40 text-[var(--background)] py-2 focus:border-[var(--dark-orange-red-light)]" />
          </div>

          <div>
            <label className="text-[var(--background)] text-xl">Email Address</label>
            <input className="w-full mt-2 bg-transparent border-b border-[var(--background)]/40 text-[var(--background)] py-2 focus:border-[var(--dark-orange-red-light)]" />
          </div>

          <div>
            <label className="text-[var(--background)] text-xl">Mobile Number</label>
            <input className="w-full mt-2 bg-transparent border-b border-[var(--background)]/40 text-[var(--background)] py-2 focus:border-[var(--dark-orange-red-light)]" />
          </div>

          <div>
            <label className="text-[var(--background)] text-xl">Date of Birth</label>
            <input type="date" className="w-full mt-2 bg-transparent border-b border-[var(--background)]/40 text-[var(--background)] py-2 focus:border-[var(--dark-orange-red-light)]" />
          </div>

          <div>
            <label className="text-[var(--background)] text-xl">Gender</label>
            <select className="w-full mt-2 bg-transparent border-b border-[var(--background)]/40 text-[var(--background)] py-2 focus:border-[var(--dark-orange-red-light)]">
              <option className="text-[var(--foreground)]">Select</option>
              <option className="text-[var(--foreground)]">Male</option>
              <option className="text-[var(--foreground)]">Female</option>
            </select>
          </div>

          <div>
            <label className="text-[var(--background)] text-xl">Nationality</label>
            <input className="w-full mt-2 bg-transparent border-b border-[var(--background)]/40 text-[var(--background)] py-2 focus:border-[var(--dark-orange-red-light)]" />
          </div>

        </div>

        <div className="flex justify-end mt-12">
          <GlobalRedPlainButton>Submit</GlobalRedPlainButton>
        </div>

      </div>

    </section>
  );
}

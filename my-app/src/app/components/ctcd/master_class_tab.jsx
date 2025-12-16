'use client';

import { useState } from 'react';
import StudentActivities from '../department/student_activities';
import Gallery from '../general/gallery';

export default function MasterClassTab({
  tab1Activities = null,
  tab1Gallery = null,
  tab1ActivitiesTitle = "Masterclasses",
  tab1GalleryTitle = "Annual Masterclass 2025-24 Glimpse",
  tab2Activities = null,
  tab2Gallery = null,
  tab2ActivitiesTitle = "Masterclasses",
  tab2GalleryTitle = "Annual Masterclass 2025-24 Glimpse",
}) {
  const [activeTab, setActiveTab] = useState('tab1');

  const tabs = [
    { id: 'tab1', label: 'Tab 1' },
    { id: 'tab2', label: 'Tab 2' },
  ];

  return (
    <section className="bg-white py-16">
      <div className="px-4 lg:px-6">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8 md:mb-12">
          <div className="bg-[var(--lite-sand)] rounded-full px-4 py-3 md:px-4 md:py-4 flex items-center justify-center gap-3 md:gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`font-plus-jakarta-sans text-sm md:text-base lg:text-lg px-3 md:px-4 py-1.5 md:py-2 transition-colors duration-200 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'text-[var(--button-red)] font-semibold'
                    : 'text-[var(--foreground)] font-normal hover:text-[var(--button-red)]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === 'tab1' && (
            <>
              <StudentActivities
                title={tab1ActivitiesTitle}
                subtitle=""
                activities={tab1Activities}
              />
              <Gallery
                title={tab1GalleryTitle}
                images={tab1Gallery}
                backgroundColor="bg-white"
              />
            </>
          )}
          {activeTab === 'tab2' && (
            <>
              <StudentActivities
                title={tab2ActivitiesTitle}
                subtitle=""
                activities={tab2Activities}
              />
              <Gallery
                title={tab2GalleryTitle}
                images={tab2Gallery}
                backgroundColor="bg-white"
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
}


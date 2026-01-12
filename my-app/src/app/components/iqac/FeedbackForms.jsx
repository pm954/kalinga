'use client';

import React, { useState } from 'react';
import { submitForm } from '../../config/api';

// Reusable Rating Component
const RatingField = ({ label, name, value, onChange }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
    <div className="flex flex-wrap gap-4">
      {[
        { val: 5, text: "Strongly Agree" },
        { val: 4, text: "Very Much Agree" },
        { val: 3, text: "Agree" },
        { val: 2, text: "Somewhat Agree" },
        { val: 1, text: "Neither Agree Nor Disagree" }
      ].map((option) => (
        <label key={option.val} className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name={name}
            value={option.val}
            checked={parseInt(value) === option.val}
            onChange={(e) => onChange(name, parseInt(e.target.value))}
            className="w-4 h-4 text-[var(--button-red)] border-gray-300 focus:ring-[var(--button-red)]"
            required
          />
          <span className="text-sm text-gray-600">{option.val} - {option.text}</span>
        </label>
      ))}
    </div>
  </div>
);

const FeedbackFormWrapper = ({ title, description, onSubmit, onClose, children, loading, status }) => (
  <div className="space-y-6">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="font-plus-jakarta-sans text-2xl md:text-3xl text-[var(--foreground)] mb-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm">
          {description}
        </p>
      </div>
    </div>

    <form onSubmit={onSubmit} className="space-y-6">
      {children}

      {status.message && (
        <div className={`p-4 rounded-lg ${status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
          {status.message}
        </div>
      )}

      <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
        <button
          type="button"
          onClick={onClose}
          className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-[var(--button-red)] text-white rounded-lg hover:bg-[var(--button-red)]/90 transition-colors disabled:opacity-50"
        >
          {loading ? 'Submitting...' : 'Submit Feedback'}
        </button>
      </div>
    </form>
  </div>
);

// 1. Student Feedback Form
export const StudentFeedbackForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    student_name: "", session: "", program: "", nationality: "", email: "", gender: "", mobile: "",
    q1_course_objectives_clear: "", q2_workload_manageable: "", q3_outcomes_fulfilled: "",
    q4_teaching_methods_encouraged_participation: "", q5_library_resources_adequate: "",
    q6_assessment_methods_reasonable: "", q7_assessment_feedback_helpful: "", q8_industry_relevance: "",
    q9_experiments_relevance: "", q10_lab_outcomes_rating: "", q11_evaluation_scheme_rating: "",
    q12_infrastructure_sufficient: "", q13_sports_facilities_satisfaction: "", q14_medical_facilities_satisfaction: "",
    q15_cleanliness_classrooms: "", q16_cleanliness_toilets: "", q17_drinking_water: "",
    q18_amenity_centre_satisfaction: "", q19_feedback_process_fair: "", q20_teaching_aids_usage: "",
    q21_syllabus_balance: ""
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const handleRatingChange = (name, value) => setFormData(prev => ({ ...prev, [name]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });
    try {
      await submitForm('/student-feedback-forms/', formData);
      setStatus({ type: 'success', message: 'Feedback submitted successfully!' });
      setTimeout(onClose, 2000);
    } catch (err) {
      setStatus({ type: 'error', message: err.message || 'Error submitting feedback.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <FeedbackFormWrapper title="Student's Feedback" description="Collects satisfaction details regarding curriculum and facilities." onSubmit={handleSubmit} onClose={onClose} loading={loading} status={status}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="student_name" placeholder="Student Name *" value={formData.student_name} onChange={handleChange} required className="input-field p-2 border rounded" />
        <input name="session" placeholder="Session" value={formData.session} onChange={handleChange} className="input-field p-2 border rounded" />
        <input name="program" placeholder="Program" value={formData.program} onChange={handleChange} className="input-field p-2 border rounded" />
        <input name="nationality" placeholder="Nationality" value={formData.nationality} onChange={handleChange} className="input-field p-2 border rounded" />
        <input name="email" type="email" placeholder="Email *" value={formData.email} onChange={handleChange} required className="input-field p-2 border rounded" />
        <select name="gender" value={formData.gender} onChange={handleChange} className="input-field p-2 border rounded">
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input name="mobile" placeholder="Mobile" value={formData.mobile} onChange={handleChange} className="input-field p-2 border rounded" />
      </div>
      <div className="space-y-4 border-t pt-4 max-h-[400px] overflow-y-auto">
        <h4 className="font-semibold text-lg">Questionnaire (Rating 1-5)</h4>
        <RatingField label="1. The course objectives were clear" name="q1_course_objectives_clear" value={formData.q1_course_objectives_clear} onChange={handleRatingChange} />
        <RatingField label="2. The subject workload was manageable" name="q2_workload_manageable" value={formData.q2_workload_manageable} onChange={handleRatingChange} />
        <RatingField label="3. Course outcomes were fulfilled" name="q3_outcomes_fulfilled" value={formData.q3_outcomes_fulfilled} onChange={handleRatingChange} />
        <RatingField label="4. The learning and teaching methods encouraged participation" name="q4_teaching_methods_encouraged_participation" value={formData.q4_teaching_methods_encouraged_participation} onChange={handleRatingChange} />
        <RatingField label="5. The provision of learning resources in the library was adequate" name="q5_library_resources_adequate" value={formData.q5_library_resources_adequate} onChange={handleRatingChange} />
        <RatingField label="6. The assessment methods were reasonable" name="q6_assessment_methods_reasonable" value={formData.q6_assessment_methods_reasonable} onChange={handleRatingChange} />
        <RatingField label="7. Feedback on assessment was helpful" name="q7_assessment_feedback_helpful" value={formData.q7_assessment_feedback_helpful} onChange={handleRatingChange} />
        <RatingField label="8. Subject topics are relevant to industry requirement" name="q8_industry_relevance" value={formData.q8_industry_relevance} onChange={handleRatingChange} />
        <RatingField label="9. Relevance of experiments to real life applications" name="q9_experiments_relevance" value={formData.q9_experiments_relevance} onChange={handleRatingChange} />
        <RatingField label="10. Rating of course outcomes for laboratory courses" name="q10_lab_outcomes_rating" value={formData.q10_lab_outcomes_rating} onChange={handleRatingChange} />
        <RatingField label="11. Rating of evaluation scheme" name="q11_evaluation_scheme_rating" value={formData.q11_evaluation_scheme_rating} onChange={handleRatingChange} />
        <RatingField label="12. Sufficient Classrooms, reading rooms, toilets" name="q12_infrastructure_sufficient" value={formData.q12_infrastructure_sufficient} onChange={handleRatingChange} />
        <RatingField label="13. Satisfaction with sports facilities" name="q13_sports_facilities_satisfaction" value={formData.q13_sports_facilities_satisfaction} onChange={handleRatingChange} />
        <RatingField label="14. Satisfaction with medical facilities" name="q14_medical_facilities_satisfaction" value={formData.q14_medical_facilities_satisfaction} onChange={handleRatingChange} />
        <RatingField label="15. Proper cleaning of Classrooms/labs/workshops" name="q15_cleanliness_classrooms" value={formData.q15_cleanliness_classrooms} onChange={handleRatingChange} />
        <RatingField label="16. Proper cleaning of toilets" name="q16_cleanliness_toilets" value={formData.q16_cleanliness_toilets} onChange={handleRatingChange} />
        <RatingField label="17. Provision of Clean and cold drinking water" name="q17_drinking_water" value={formData.q17_drinking_water} onChange={handleRatingChange} />
        <RatingField label="18. Satisfaction with Student Amenity Centre" name="q18_amenity_centre_satisfaction" value={formData.q18_amenity_centre_satisfaction} onChange={handleRatingChange} />
        <RatingField label="19. Fairness of feedback process" name="q19_feedback_process_fair" value={formData.q19_feedback_process_fair} onChange={handleRatingChange} />
        <RatingField label="20. Usage of modern teaching aids" name="q20_teaching_aids_usage" value={formData.q20_teaching_aids_usage} onChange={handleRatingChange} />
        <RatingField label="21. Balance between theory and practical applications" name="q21_syllabus_balance" value={formData.q21_syllabus_balance} onChange={handleRatingChange} />
      </div>
    </FeedbackFormWrapper>
  );
};

// 2. Alumni Feedback Form
export const AlumniFeedbackForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    student_name: "", session: "", program_name: "", enrollment_no: "", email: "", mobile: "",
    current_status: "", tools_technologies_used: "", improvement_comments: "",
    q1_relevance_higher_studies: "", q2_relevance_job: "", q3_theory_to_practice: "", q4_it_knowledge: ""
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const handleRatingChange = (name, value) => setFormData(prev => ({ ...prev, [name]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });
    try {
      await submitForm('/alumni-feedback-forms/', formData);
      setStatus({ type: 'success', message: 'Feedback submitted successfully!' });
      setTimeout(onClose, 2000);
    } catch (err) {
      setStatus({ type: 'error', message: err.message || 'Error submitting feedback.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <FeedbackFormWrapper title="Alumni Feedback" description="Collects alumni input on education quality and preparation." onSubmit={handleSubmit} onClose={onClose} loading={loading} status={status}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="student_name" placeholder="Name *" value={formData.student_name} onChange={handleChange} required className="input-field p-2 border rounded" />
        <input name="session" placeholder="Session" value={formData.session} onChange={handleChange} className="input-field p-2 border rounded" />
        <input name="program_name" placeholder="Program Name" value={formData.program_name} onChange={handleChange} className="input-field p-2 border rounded" />
        <input name="enrollment_no" placeholder="Enrollment No" value={formData.enrollment_no} onChange={handleChange} className="input-field p-2 border rounded" />
        <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} className="input-field p-2 border rounded" />
        <input name="mobile" placeholder="Mobile" value={formData.mobile} onChange={handleChange} className="input-field p-2 border rounded" />
        <select name="current_status" value={formData.current_status} onChange={handleChange} className="input-field p-2 border rounded">
          <option value="">Current Status</option>
          <option value="Pursuing higher education">Pursuing higher education</option>
          <option value="Working">Working</option>
          <option value="Self employed">Self employed</option>
          <option value="Preparing for competitive exams">Preparing for competitive exams</option>
        </select>
        <input name="tools_technologies_used" placeholder="Tools/Technologies Used" value={formData.tools_technologies_used} onChange={handleChange} className="input-field p-2 border rounded" />
      </div>
      <textarea name="improvement_comments" placeholder="Suggestions for Improvement" value={formData.improvement_comments} onChange={handleChange} rows={3} className="w-full p-2 border rounded" />

      <div className="space-y-4 border-t pt-4">
        <h4 className="font-semibold text-lg">Questionnaire (Rating 1-5)</h4>
        <RatingField label="1. Relevance of curriculum to higher studies" name="q1_relevance_higher_studies" value={formData.q1_relevance_higher_studies} onChange={handleRatingChange} />
        <RatingField label="2. Relevance of curriculum to job requirements" name="q2_relevance_job" value={formData.q2_relevance_job} onChange={handleRatingChange} />
        <RatingField label="3. Theory to practice correlation" name="q3_theory_to_practice" value={formData.q3_theory_to_practice} onChange={handleRatingChange} />
        <RatingField label="4. IT knowledge provided" name="q4_it_knowledge" value={formData.q4_it_knowledge} onChange={handleRatingChange} />
      </div>
    </FeedbackFormWrapper>
  );
};

// 3. Faculty Feedback Form
export const FacultyFeedbackForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    faculty_name: "", designation: "", subject_taught: "", subject_code: "", department: "",
    employee_code: "", email: "", mobile: "",
    q1_curriculum_needs: "", q2_knowledge_interest: "", q3_syllabus_clarity: "", q4_outcomes_clarity: "",
    q5_theory_application_balance: "", q6_books_relevance: "", q7_unit_coverage: "",
    q8_industry_gap_bridging: "", q9_class_test_conduct: "", q10_teaching_flexibility: ""
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const handleRatingChange = (name, value) => setFormData(prev => ({ ...prev, [name]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });
    try {
      await submitForm('/faculty-feedback-forms/', formData);
      setStatus({ type: 'success', message: 'Feedback submitted successfully!' });
      setTimeout(onClose, 2000);
    } catch (err) {
      setStatus({ type: 'error', message: err.message || 'Error submitting feedback.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <FeedbackFormWrapper title="Faculty Feedback" description="Collects faculty satisfaction regarding curriculum." onSubmit={handleSubmit} onClose={onClose} loading={loading} status={status}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="faculty_name" placeholder="Faculty Name" value={formData.faculty_name} onChange={handleChange} className="input-field p-2 border rounded" />
        <input name="designation" placeholder="Designation" value={formData.designation} onChange={handleChange} className="input-field p-2 border rounded" />
        <input name="subject_taught" placeholder="Subject Taught" value={formData.subject_taught} onChange={handleChange} className="input-field p-2 border rounded" />
        <input name="subject_code" placeholder="Subject Code" value={formData.subject_code} onChange={handleChange} className="input-field p-2 border rounded" />
        <input name="department" placeholder="Department" value={formData.department} onChange={handleChange} className="input-field p-2 border rounded" />
        <input name="employee_code" placeholder="Employee Code" value={formData.employee_code} onChange={handleChange} className="input-field p-2 border rounded" />
        <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} className="input-field p-2 border rounded" />
        <input name="mobile" placeholder="Mobile" value={formData.mobile} onChange={handleChange} className="input-field p-2 border rounded" />
      </div>

      <div className="space-y-4 border-t pt-4">
        <h4 className="font-semibold text-lg">Questionnaire (Rating 1-5)</h4>
        <RatingField label="1. Curriculum meets needs" name="q1_curriculum_needs" value={formData.q1_curriculum_needs} onChange={handleRatingChange} />
        <RatingField label="2. Knowledge/Interest in subject" name="q2_knowledge_interest" value={formData.q2_knowledge_interest} onChange={handleRatingChange} />
        <RatingField label="3. Syllabus Clarity" name="q3_syllabus_clarity" value={formData.q3_syllabus_clarity} onChange={handleRatingChange} />
        <RatingField label="4. Clarify of course outcomes" name="q4_outcomes_clarity" value={formData.q4_outcomes_clarity} onChange={handleRatingChange} />
        <RatingField label="5. Balance between theory and application" name="q5_theory_application_balance" value={formData.q5_theory_application_balance} onChange={handleRatingChange} />
        <RatingField label="6. Relevance of reference books" name="q6_books_relevance" value={formData.q6_books_relevance} onChange={handleRatingChange} />
        <RatingField label="7. Coverage of units" name="q7_unit_coverage" value={formData.q7_unit_coverage} onChange={handleRatingChange} />
        <RatingField label="8. Bridging industry gap" name="q8_industry_gap_bridging" value={formData.q8_industry_gap_bridging} onChange={handleRatingChange} />
        <RatingField label="9. Conduct of class tests" name="q9_class_test_conduct" value={formData.q9_class_test_conduct} onChange={handleRatingChange} />
        <RatingField label="10. Teaching flexibility" name="q10_teaching_flexibility" value={formData.q10_teaching_flexibility} onChange={handleRatingChange} />
      </div>
    </FeedbackFormWrapper>
  );
};

// 4. Employer Feedback Form
export const EmployerFeedbackForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    company_name: "", evaluator_name_designation: "", email: "", student_employee_name: "", mobile: "",
    overall_satisfaction: "", program_improvements: "", recruit_more_students: "",
    q1_goal_contribution: "", q2_technical_leadership_skill: "", q3_creativity: "", q4_relationship: "",
    q5_social_activity_motivation: "", q6_obligation_beyond_schedule: "", q7_overall_performance: ""
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const handleRatingChange = (name, value) => setFormData(prev => ({ ...prev, [name]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });
    try {
      await submitForm('/employer-feedback-forms/', formData);
      setStatus({ type: 'success', message: 'Feedback submitted successfully!' });
      setTimeout(onClose, 2000);
    } catch (err) {
      setStatus({ type: 'error', message: err.message || 'Error submitting feedback.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <FeedbackFormWrapper title="Employer Feedback" description="Collects employer feedback on Kalinga University graduates." onSubmit={handleSubmit} onClose={onClose} loading={loading} status={status}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="company_name" placeholder="Company Name" value={formData.company_name} onChange={handleChange} className="input-field p-2 border rounded" />
        <input name="evaluator_name_designation" placeholder="Evaluator Name & Designation" value={formData.evaluator_name_designation} onChange={handleChange} className="input-field p-2 border rounded" />
        <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} className="input-field p-2 border rounded" />
        <input name="student_employee_name" placeholder="Student/Employee Name" value={formData.student_employee_name} onChange={handleChange} className="input-field p-2 border rounded" />
        <input name="mobile" placeholder="Mobile" value={formData.mobile} onChange={handleChange} className="input-field p-2 border rounded" />
        <select name="recruit_more_students" value={formData.recruit_more_students} onChange={handleChange} className="input-field p-2 border rounded">
          <option value="">Recruit more students from KU?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <textarea name="overall_satisfaction" placeholder="Overall Satisfaction Comments" value={formData.overall_satisfaction} onChange={handleChange} rows={2} className="w-full p-2 border rounded" />
      <textarea name="program_improvements" placeholder="Suggestions for Program Improvements" value={formData.program_improvements} onChange={handleChange} rows={2} className="w-full p-2 border rounded" />

      <div className="space-y-4 border-t pt-4">
        <h4 className="font-semibold text-lg">Questionnaire (Rating 1-5)</h4>
        <RatingField label="1. Contribution to goal" name="q1_goal_contribution" value={formData.q1_goal_contribution} onChange={handleRatingChange} />
        <RatingField label="2. Technical Leadership Skill" name="q2_technical_leadership_skill" value={formData.q2_technical_leadership_skill} onChange={handleRatingChange} />
        <RatingField label="3. Creativity" name="q3_creativity" value={formData.q3_creativity} onChange={handleRatingChange} />
        <RatingField label="4. Relationship with seniors/peers" name="q4_relationship" value={formData.q4_relationship} onChange={handleRatingChange} />
        <RatingField label="5. Motivation for social activity" name="q5_social_activity_motivation" value={formData.q5_social_activity_motivation} onChange={handleRatingChange} />
        <RatingField label="6. Sense of obligation beyond schedule" name="q6_obligation_beyond_schedule" value={formData.q6_obligation_beyond_schedule} onChange={handleRatingChange} />
        <RatingField label="7. Overall Performance" name="q7_overall_performance" value={formData.q7_overall_performance} onChange={handleRatingChange} />
      </div>
    </FeedbackFormWrapper>
  );
};

// 5. Parents Feedback Form
export const ParentsFeedbackForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    parent_name: "", student_name: "", program: "", session: "", year_of_study: "",
    nationality: "", email: "", mobile: "",
    q1_course_objectives_clear: "", q2_value_based_curriculum: "", q3_career_preparation: "",
    q4_industry_relevance: "", q5_internship_effectiveness: "", q6_academic_support: "",
    q7_faculty_accessibility: "", q8_resources_satisfaction: "", q9_evaluation_transparency: "",
    q10_overall_satisfaction: ""
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const handleRatingChange = (name, value) => setFormData(prev => ({ ...prev, [name]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });
    try {
      await submitForm('/parent-feedback-forms/', formData);
      setStatus({ type: 'success', message: 'Feedback submitted successfully!' });
      setTimeout(onClose, 2000);
    } catch (err) {
      setStatus({ type: 'error', message: err.message || 'Error submitting feedback.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <FeedbackFormWrapper title="Parents Feedback" description="Collects parent satisfaction regarding their ward's education." onSubmit={handleSubmit} onClose={onClose} loading={loading} status={status}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="parent_name" placeholder="Parent Name" value={formData.parent_name} onChange={handleChange} className="input-field p-2 border rounded" />
        <input name="student_name" placeholder="Student Name" value={formData.student_name} onChange={handleChange} className="input-field p-2 border rounded" />
        <input name="program" placeholder="Program" value={formData.program} onChange={handleChange} className="input-field p-2 border rounded" />
        <input name="session" placeholder="Session" value={formData.session} onChange={handleChange} className="input-field p-2 border rounded" />
        <input name="year_of_study" placeholder="Year of Study" value={formData.year_of_study} onChange={handleChange} className="input-field p-2 border rounded" />
        <input name="nationality" placeholder="Nationality" value={formData.nationality} onChange={handleChange} className="input-field p-2 border rounded" />
        <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} className="input-field p-2 border rounded" />
        <input name="mobile" placeholder="Mobile" value={formData.mobile} onChange={handleChange} className="input-field p-2 border rounded" />
      </div>

      <div className="space-y-4 border-t pt-4">
        <h4 className="font-semibold text-lg">Questionnaire (Rating 1-5)</h4>
        <RatingField label="1. Course objectives were clear" name="q1_course_objectives_clear" value={formData.q1_course_objectives_clear} onChange={handleRatingChange} />
        <RatingField label="2. Value based curriculum" name="q2_value_based_curriculum" value={formData.q2_value_based_curriculum} onChange={handleRatingChange} />
        <RatingField label="3. Preparation for career" name="q3_career_preparation" value={formData.q3_career_preparation} onChange={handleRatingChange} />
        <RatingField label="4. Relevance to industry" name="q4_industry_relevance" value={formData.q4_industry_relevance} onChange={handleRatingChange} />
        <RatingField label="5. Effectiveness of internships" name="q5_internship_effectiveness" value={formData.q5_internship_effectiveness} onChange={handleRatingChange} />
        <RatingField label="6. Academic support provided" name="q6_academic_support" value={formData.q6_academic_support} onChange={handleRatingChange} />
        <RatingField label="7. Accessibility of faculty" name="q7_faculty_accessibility" value={formData.q7_faculty_accessibility} onChange={handleRatingChange} />
        <RatingField label="8. Satisfaction with resources" name="q8_resources_satisfaction" value={formData.q8_resources_satisfaction} onChange={handleRatingChange} />
        <RatingField label="9. Transparency of evaluation" name="q9_evaluation_transparency" value={formData.q9_evaluation_transparency} onChange={handleRatingChange} />
        <RatingField label="10. Overall Satisfaction" name="q10_overall_satisfaction" value={formData.q10_overall_satisfaction} onChange={handleRatingChange} />
      </div>
    </FeedbackFormWrapper>
  );
};

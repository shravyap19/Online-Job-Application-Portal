function SideBar({ activeSection, setActiveSection }) {
  const sections = [
    { key: "personal-info", label: "Personal Information" },
    { key: "education", label: "Education" },
    { key: "experience-skills", label: "Experience and Skills" },
    { key: "voluntary-identification", label: "Voluntary Identification" },
    { key: "review-submit", label: "Review and Submit" },
  ];
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        {sections.map((section) => (
          <p
            key={section.key}
            onClick={() =>
              section.key !== activeSection && setActiveSection(section.key)
            }
            className={`${section.key} ${
              section.key === activeSection ? "active-section" : ""
            }`}
          >
            {section.label}
          </p>
        ))}
      </div>
    </div>
  );
}
export default SideBar;

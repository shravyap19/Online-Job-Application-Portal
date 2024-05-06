function SideBar({ activeSection, setActiveSection, canProceed }) {
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
            onClick={() => {
              if (canProceed || section.key === activeSection) {
                setActiveSection(section.key);
              }
            }}
            className={`${section.key} ${
              section.key === activeSection ? "active-section" : ""
            }`}
            style={{
              cursor:
                canProceed || section.key === activeSection
                  ? "pointer"
                  : "default",
              opacity: canProceed || section.key === activeSection ? 1 : 0.5,
            }}
          >
            {section.label}
          </p>
        ))}
      </div>
    </div>
  );
}
export default SideBar;

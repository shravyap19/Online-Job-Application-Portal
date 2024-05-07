import "./style.css";
import "./App.css";
import SideBar from "./SideBar";
import { useState } from "react";
import PersonalInformation from "./PersonalInformation";
import Education from "./Education";
import ExperienceSkills from "./ExperienceSkills";
import VoluntaryIdentification from "./VoluntaryIdentification";
import ReviewSubmit from "./ReviewSubmit";
import SuccessPage from "./SuccessPage";

function App() {
  let [activeSection, setActiveSection] = useState("personal-info");
  let [formData, setFormData] = useState({
    personalInfo: {},
    education: {},
    experienceSkills: {},
    voluntaryIdentification: {},
  });
  const sections = [
    "personal-info",
    "education",
    "experience-skills",
    "voluntary-identification",
    "review-submit",
  ];
  let [canProceed, setCanProceed] = useState(true);
  let [isSubmitted, setIsSubmitted] = useState(false);
  function updateFormData(section, data) {
    setFormData((prevData) => ({
      ...prevData,
      [section]: data,
    }));
  }
  function onSubmit() {
    setIsSubmitted(true);
  }

  function renderSection() {
    switch (activeSection) {
      case "education":
        return (
          <Education
            data={formData.education}
            updateData={(data) => updateFormData("education", data)}
          />
        );
      case "experience-skills":
        return (
          <ExperienceSkills
            data={formData.experienceSkills}
            updateData={(data) => updateFormData("experienceSkills", data)}
          />
        );
      case "voluntary-identification":
        return (
          <VoluntaryIdentification
            data={formData.voluntaryIdentification}
            updateData={(data) =>
              updateFormData("voluntaryIdentification", data)
            }
          />
        );
      case "review-submit":
        return (
          <ReviewSubmit
            formData={formData}
            setActiveSection={setActiveSection}
          />
        );
      default:
        return (
          <PersonalInformation
            data={formData.personalInfo}
            updateData={(data) => updateFormData("personalInfo", data)}
            setCanProceed={setCanProceed}
          />
        );
    }
  }

  const currentIndex = sections.indexOf(activeSection);
  const previousSection = sections[currentIndex - 1];
  const nextSection = sections[currentIndex + 1];

  return (
    <div>
      <div className="header">
        <p className="job-title">Senior Software Engineer, Systems</p>
        <p className="job-title header-padding">Front End Engineering</p>
        <div className="job-location-container">
          <div className="header-padding">
            <img
              className="location-icon"
              src="./location.webp"
              alt="location-icon"
            />
          </div>
          <p className="job-location">Sunnyvale, California</p>
        </div>
      </div>
      {!isSubmitted && (
        <div className="App">
          <SideBar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            canProceed={canProceed}
          ></SideBar>
          <div className="details-container">
            {renderSection()}
            <hr className="hr-footer" />
            <div className="footer-btn">
              <div className="footer-submit-container">
                {previousSection && (
                  <div
                    className="btn-container"
                    onClick={() => setActiveSection(previousSection)}
                  >
                    <div className="arrow-container">
                      <div className="arrow">&larr;</div>
                    </div>
                    <p className="footer-btn-label">Back</p>
                  </div>
                )}
                {!nextSection && (
                  <div>
                    <button onClick={onSubmit} className="submit-btn">
                      Submit
                    </button>
                  </div>
                )}
              </div>

              {nextSection && (
                <div
                  disabled={canProceed}
                  className={`btn-container ${
                    !canProceed ? "disabled-btn" : ""
                  }`}
                  onClick={() => canProceed && setActiveSection(nextSection)}
                >
                  <div className="arrow-container">
                    <div className="arrow">&rarr;</div>
                  </div>
                  <p className="footer-btn-label">Next</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {isSubmitted && <SuccessPage name={formData.personalInfo.fullName} />}
    </div>
  );
}

export default App;

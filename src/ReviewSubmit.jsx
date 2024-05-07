import { get } from "lodash";
function ReviewSubmit({ formData, setActiveSection }) {
  console.log(formData.personalInfo);
  return (
    <div>
      <p className="heading">Review Your Application</p>
      <p className="sub-heading">
        Please check your application for accuracy. You can't make changes after
        you submit.
      </p>
      <div>
        <div
          className="review-edit-container"
          onClick={() => setActiveSection("personal-info")}
        >
          <p className="sub-heading text-decoration">Personal Information</p>
          <img className="edit-img" src="./edit-icon.svg" alt="edit" />
        </div>
        <div className="review-text-container">
          <p className="review-text">Full name</p>
          <p className="input-info">{formData.personalInfo.fullName}</p>
        </div>
        <div className="review-text-container">
          <p className="review-text">City</p>
          <p className="input-info"> {formData.personalInfo.city}</p>
        </div>
        <div className="review-text-container">
          <p className="review-text">State</p>
          <p className="input-info">{formData.personalInfo.state}</p>
        </div>
        <div className="review-text-container">
          <p className="review-text">ZipCode</p>
          <p className="input-info">{formData.personalInfo.zipCode}</p>
        </div>
        <div className="review-text-container">
          <p className="review-text">Email</p>
          <p className="input-info">{formData.personalInfo.email}</p>
        </div>
        <div className="review-text-container">
          <p className="review-text">Phone</p>
          <p className="input-info">{formData.personalInfo.phone}</p>
        </div>
        <div className="review-text-container">
          <p className="review-text">Resume</p>
          <p className="input-info">{formData.personalInfo.resume.name}</p>
        </div>
        <div>
          {get(formData, "personalInfo.urls.length") > 0 &&
            formData.personalInfo.urls.map((url) => (
              <div className="webiste-div">
                <p className="review-text">Website</p>
                <p className="input-info">{url.value}</p>
              </div>
            ))}
        </div>
      </div>
      {get(formData, "education.degrees.length") > 0 && (
        <div>
          <div
            className="review-edit-container"
            onClick={() => setActiveSection("education")}
          >
            <p className="sub-heading text-decoration">Education</p>
            <img className="edit-img" src="./edit-icon.svg" alt="edit" />
          </div>
          <div>
            {formData.education.degrees.map((degree) => (
              <div className="review-text-container">
                <p className="input-info">{degree.schoolName}</p>
                <div className="current-job-container gap align-items-center">
                  <p className="input-info">{degree.selectedDegree.label}</p>
                  <p>-</p>
                  {degree.concentrations.length > 0 &&
                    degree.concentrations.map(
                      (concentration) =>
                        concentration !== "" && (
                          <p className="input-info">{concentration}</p>
                        )
                    )}
                </div>
              </div>
            ))}
            <p className="input-info">{formData.education.highSchool}</p>
          </div>
        </div>
      )}
      {(get(formData, "experienceSkills.prevEmployerDetails.length") > 0 ||
        formData.experienceSkills.skills) && (
        <div>
          <div
            className="review-edit-container"
            onClick={() => setActiveSection("education")}
          >
            <p className="sub-heading text-decoration">Experience and skills</p>
            <img className="edit-img" src="./edit-icon.svg" alt="edit" />
          </div>
          <div>
            <div className="review-text-container">
              <p className="review-text">
                Are you applying for your first job?
              </p>
              <p className="input-info">
                {formData.experienceSkills.isFirstJob ? "Yes" : "No"}
              </p>
            </div>
            {formData.experienceSkills.prevEmployerDetails.map((details) => {
              const hasDetails =
                details.employerName ||
                details.position ||
                details.city ||
                details.state ||
                details.zipCode ||
                details.startDate ||
                details.endDate ||
                details.description;
              return (
                hasDetails && (
                  <div key={details.id}>
                    <div className="review-text-container">
                      <p className="input-info">{details.employerName}</p>
                      <p className="input-info">{details.position}</p>
                      {details.city || details.state || details.zipCode ? (
                        <div className="current-job-container gap">
                          {details.city && (
                            <p className="input-info">{details.city}</p>
                          )}
                          {details.city && details.state && <p>&#44;</p>}
                          {details.state && (
                            <p className="input-info">{details.state}</p>
                          )}
                          {details.state && details.zipCode && <p>&#44;</p>}
                          {details.zipCode && (
                            <p className="input-info">{details.zipCode}</p>
                          )}
                        </div>
                      ) : null}
                      {(details.startDate || details.endDate) && (
                        <div className="current-job-container gap align-items-center ">
                          {details.startDate && (
                            <p className="input-info">{details.startDate}</p>
                          )}

                          {details.startDate && (
                            <div>
                              <p>-</p>
                            </div>
                          )}
                          {details.startDate && !details.endDate && (
                            <p className="input-info">Present</p>
                          )}
                          {details.endDate && (
                            <p className="input-info">{details.endDate}</p>
                          )}
                        </div>
                      )}
                      {details.description && (
                        <p className="input-info">{details.description}</p>
                      )}
                    </div>
                  </div>
                )
              );
            })}
          </div>

          {formData.experienceSkills.skills && (
            <div>
              <p className="review-text">Skills</p>
              <p className="input-info">{formData.experienceSkills.skills}</p>
            </div>
          )}
        </div>
      )}

      {formData.voluntaryIdentification.gender && (
        <div>
          <div
            className="review-edit-container"
            onClick={() => setActiveSection("education")}
          >
            <p className="sub-heading text-decoration margin-dim">
              Voluntary Identification
            </p>
            <img className="edit-img" src="./edit-icon.svg" alt="edit" />
          </div>
          <div>
            <p className="review-text">Gender</p>
            <p className="input-info">
              {formData.voluntaryIdentification.gender}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReviewSubmit;

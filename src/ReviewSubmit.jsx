import { get } from "lodash";
function ReviewSubmit({ formData }) {
  console.log(formData);
  return (
    <div>
      <p className="heading">Review and Submit</p>
      <div>
        <p className="sub-heading">Personal Information</p>
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
        <div>
          {get(formData, "personalInfo.urls.length") > 0 &&
            formData.personalInfo.urls.map((url) => (
              <div>
                <p className="review-text">Website</p>
                <p className="input-info">{url.value}</p>
              </div>
            ))}
        </div>
      </div>
      <div>
        <p className="sub-heading">Education</p>
        <div>
          {get(formData, "education.degrees.length") > 0 &&
            formData.education.degrees.map((degree) => (
              <div>
                <p className="medium-text">Higher Education</p>
                <p className="review-text">School Name</p>
                <p className="input-info">{degree.schoolName}</p>
                <p className="review-text">Degree</p>
                <p className="input-info">{degree.selectedDegree.label}</p>
                {degree.concentrations.length > 0 &&
                  degree.concentrations.map((concentration) => (
                    <div>
                      <p>Concentration</p>
                      <p className="input-info">{concentration}</p>
                    </div>
                  ))}
                <p className="review-text">High School</p>
                <p className="input-info">{degree.highSchool}</p>
              </div>
            ))}
        </div>
      </div>
      <div>
        <p>Experience and skills</p>
        <div>
          {get(formData, "experienceSkills.prevEmployerDetails.length") > 0 &&
            formData.experienceSkills.prevEmployerDetails.map((details) => (
              <div>
                <p className="review-text">Employer Name</p>
                <p className="input-info">{details.employerName}</p>
                <p className="review-text">Position</p>
                <p className="input-info">{details.position}</p>
                <p className="review-text">City</p>
                <p className="input-info">{details.city}</p>
                <p className="review-text">State</p>
                <p className="input-info">{details.state}</p>
                <p className="review-text">ZipCode</p>
                <p className="input-info">{details.zipCode}</p>
                <p className="review-text">Start(MM/YYYY)</p>
                <p className="input-info">{details.startDate}</p>
                <p className="review-text">End(MM/YYYY)</p>
                <p className="input-info">{details.endDate}</p>
                <p className="review-text">Description</p>
                <p className="input-info">{details.description}</p>
              </div>
            ))}
        </div>

        <p className="input-info">{formData.experienceSkills.skills}</p>
      </div>
      <div>
        <p>Voluntary Identification</p>
      </div>
    </div>
  );
}

export default ReviewSubmit;

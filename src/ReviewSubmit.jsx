import { get } from "lodash";
function ReviewSubmit({ formData }) {
  console.log(formData);
  return (
    <div>
      <p className="heading">Review and Submit</p>
      <div>
        <p className="sub-heading">Personal Information</p>
        <div>
          <p className="review-text">Full name</p>
          <p className="review-text">{formData.personalInfo.fullName}</p>
        </div>
        <p>City</p>
        <p>{formData.personalInfo.city}</p>
        <p>State</p>
        <p>{formData.personalInfo.state}</p>
        <p>ZipCode</p>
        <p>{formData.personalInfo.zipCode}</p>
        <p>Email</p>
        <p>{formData.personalInfo.email}</p>
        <p>Phone</p>
        <p>{formData.personalInfo.phone}</p>
        {get(formData, "personalInfo.urls.length") > 0 &&
          formData.personalInfo.urls.map((url) => (
            <div>
              <p>Website</p>
              <p>{url.value}</p>
            </div>
          ))}
      </div>
      <div>
        <p>Education</p>
        {get(formData, "education.degrees.length") > 0 &&
          formData.education.degrees.map((degree) => (
            <div>
              <p>Higher Education</p>
              <p>School Name</p>
              <p>{degree.schoolName}</p>
              <p>Degree</p>
              <p>{degree.selectedDegree.label}</p>
              {degree.concentrations.length > 0 &&
                degree.concentrations.map((concentration) => (
                  <p>concentration</p>
                ))}
              <p>High School</p>
              <p>{degree.highSchool}</p>
            </div>
          ))}
      </div>
      <div>
        <p>Experience and skills</p>
        {get(formData, "experienceSkills.prevEmployerDetails.length") > 0 &&
          formData.experienceSkills.prevEmployerDetails.map((details) => (
            <div>
              <p>Employer Name</p>
              <p>{details.employerName}</p>
              <p>Position</p>
              <p>{details.position}</p>
              <p>City</p>
              <p>{details.city}</p>
              <p>State</p>
              <p>{details.state}</p>
              <p>ZipCode</p>
              <p>{details.zipCode}</p>
              <p>Start(MM/YYYY)</p>
              <p>{details.startDate}</p>
              <p>End(MM/YYYY)</p>
              <p>{details.endDate}</p>
              <p>Description</p>
              <p>{details.description}</p>
            </div>
          ))}
        <p>{formData.experienceSkills.skills}</p>
      </div>
      <div>
        <p>Voluntary Identification</p>
      </div>
    </div>
  );
}

export default ReviewSubmit;

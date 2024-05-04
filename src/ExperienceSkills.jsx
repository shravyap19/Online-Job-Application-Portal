import { useState } from "react";
import Location from "./Location";

function ExperienceSkills({ data, updateData }) {
  let [prevEmployerDetails, setPrevEmployerDetails] = useState([
    { id: Date.now(), value: "" },
  ]);
  function handleChange(e) {
    let { name, value } = e.target;
    updateData({ ...data, [name]: value });
  }
  function handleEmployerDetailsChange(id, value, field) {
    setPrevEmployerDetails((prevEmployees) =>
      prevEmployees.map((employee) =>
        employee.id === id ? { ...employee, [field]: value } : employee
      )
    );
    updateData({ ...data, prevEmployerDetails });
  }
  function handleRemoveJob(id) {
    setPrevEmployerDetails((prevEmpDetails) =>
      prevEmpDetails.filter((empDetails) => empDetails.id !== id)
    );
  }
  function handleAddEmployerDetails() {
    let newEmployerDetails = { id: Date.now(), value: "" };
    setPrevEmployerDetails([...prevEmployerDetails, newEmployerDetails]);
  }
  return (
    <div>
      <p className="heading">Experience and Skills</p>
      <p className="sub-heading">Work Experience</p>
      <p className="sub-heading">Are you applying for your first job?</p>
      <div className="first-job-container">
        <input
          className=" ut"
          type="radio"
          id="first-job-yes"
          name="first-job"
          value="Yes"
          // onChange={(e) => handleChange(e)}
        />
        <label className="title margin-r" htmlFor="first-job-yes">
          Yes
        </label>
        <input
          className="radio-input"
          type="radio"
          id="first-job-no"
          name="first-job"
          value="No"
          // onChange={}
        />
        <label className="title margin-r" htmlFor="first-job-no">
          No
        </label>
      </div>
      {prevEmployerDetails.map((details) => (
        <div key={details.id}>
          <p className="title">Employer Name</p>
          <input
            className="input-text-box"
            type="text"
            placeholder="Employer Name"
            name="employerName"
            onChange={(e) =>
              handleEmployerDetailsChange(
                details.id,
                e.target.value,
                e.target.name
              )
            }
          />
          <p className="title">Position</p>
          <input
            className="input-text-box"
            type="text"
            placeholder="Position"
            name="position"
            onChange={(e) =>
              handleEmployerDetailsChange(
                details.id,
                e.target.value,
                e.target.name
              )
            }
          />
          <Location data={data} updateData={updateData} />
          <p className="title time-period-container">Time Period</p>
          <div className="current-job-container">
            <input className="current-work-checkbox" type="checkbox" />
            <p className="sub-heading">I currently work here</p>
          </div>
          <div className="date-calendar">
            <div>
              <p className="title">Start(MM/YYYY)</p>
              <input
                className="zip-text-box"
                type="text"
                placeholder="Start(MM/YYYY)"
                name="startDate"
                onChange={(e) =>
                  handleEmployerDetailsChange(details.id, e.name, e.value)
                }
              />
            </div>
            <div>
              <p className="title">to</p>
            </div>
            <div>
              <p className="title">End(MM/YYYY)</p>
              <input
                className="zip-text-box"
                type="text"
                placeholder="End(MM/YYYY)"
                name="endDate"
                onChange={(e) =>
                  handleEmployerDetailsChange(details.id, e.name, e.value)
                }
              />
            </div>
          </div>
          <p className="title">Description</p>
          <textarea
            className="text-area"
            placeholder="Add your responsibilities, contributions and results"
            name="description"
            onChange={(e) =>
              handleEmployerDetailsChange(details.id, e.name, e.value)
            }
          />
          {prevEmployerDetails.length > 1 && (
            <div
              className="remove-container"
              onClick={(e) =>
                handleRemoveJob(prevEmployerDetails.id, e.value, e.name)
              }
            >
              <p className="cross-container">&times;</p>
              <p className="remove-url">Remove this Job</p>
            </div>
          )}
        </div>
      ))}
      <div onCLick={handleAddEmployerDetails} className="add-more-container">
        <img className="add-more-btn" src="./plus.png" alt="add more" />
        <p className="title">Add Another Job</p>
      </div>
      <p className="sub-heading parent-container">Skills (optional)</p>
      <textarea
        name="skills"
        className="text-area"
        placeholder="Areas of expertise"
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}

export default ExperienceSkills;

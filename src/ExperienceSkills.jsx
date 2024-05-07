import { useEffect } from "react";
import { useState } from "react";
import Location from "./Location";

function ExperienceSkills({ data, updateData }) {
  let [prevEmployerDetails, setPrevEmployerDetails] = useState([]);
  let [isFirstJob, setIsFirstJob] = useState(data.isFirstJob || false);
  useEffect(() => {
    if (data.prevEmployerDetails) {
      setPrevEmployerDetails(data.prevEmployerDetails);
    } else {
      setPrevEmployerDetails([
        {
          id: Date.now(),
          employerName: "",
          position: "",
          city: "",
          state: "",
          zipCode: "",
          startDate: "",
          endDate: "",
          description: "",
          currentJob: false,
        },
      ]);
    }
    setIsFirstJob(data.isFirstJob || false);
  }, [data.prevEmployerDetails, data.isFirstJob]);
  function handleChange(e) {
    let { name, value } = e.target;
    updateData({ ...data, [name]: value });
  }
  function handleEmployerDetailsChange(id, value, field) {
    let updatedData = prevEmployerDetails.map((employer) =>
      employer.id === id ? { ...employer, [field]: value } : employer
    );
    setPrevEmployerDetails(updatedData);
    updateData({ ...data, prevEmployerDetails: updatedData });
  }
  function handleRemoveJob(id) {
    let updatedData = prevEmployerDetails.filter(
      (empDetails) => empDetails.id !== id
    );
    setPrevEmployerDetails(updatedData);
    updateData({ ...data, updatedData });
  }
  function handleCurrentJobChange(id, isChecked) {
    const updatedDetails = prevEmployerDetails.map((detail) => {
      if (detail.id === id) {
        return { ...detail, currentJob: isChecked };
      }
      return detail;
    });
    setPrevEmployerDetails(updatedDetails);
    updateData({ ...data, prevEmployerDetails: updatedDetails });
  }
  function handleAddEmployerDetails() {
    const newPrevEmpDetails = {
      id: Date.now(),
      employerName: "",
      position: "",
      city: "",
      state: "",
      zipCode: "",
      startDate: "",
      endDate: "",
      description: "",
      currentJob: false,
    };
    setPrevEmployerDetails((prevEmpDetails) => {
      const updatedDetails = [...prevEmpDetails, newPrevEmpDetails];
      return updatedDetails;
    });
  }
  function handleFirstJobRadioChange(value) {
    let isFirstJobValue = value === "Yes";
    setIsFirstJob(isFirstJobValue);
    if (isFirstJobValue) {
      let newInitialEmployerDetails = [
        {
          id: Date.now(),
          employerName: "",
          position: "",
          startDate: "",
          city: "",
          state: "",
          zipCode: "",
          endDate: "",
          description: "",
          currentJob: false,
        },
      ];
      setPrevEmployerDetails((prevEmpDetails) => {
        let updatedData = [...prevEmpDetails, newInitialEmployerDetails];
        return updatedData;
      });
      updateData({
        ...data,
        isFirstJob: isFirstJobValue,
        prevEmployerDetails: newInitialEmployerDetails,
      });
    } else {
      updateData({ ...data, isFirstJob: isFirstJobValue });
    }
  }
  return (
    <div>
      <p className="heading">Experience and Skills</p>
      <p className="sub-heading">Work Experience</p>
      <p className="sub-heading">Are you applying for your first job?</p>
      <div className="first-job-container">
        <input
          className="radio-input"
          type="radio"
          id="first-job-yes"
          name="first-job"
          value="Yes"
          checked={isFirstJob}
          onChange={(e) => handleFirstJobRadioChange(e.target.value)}
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
          checked={!isFirstJob}
          onChange={(e) => handleFirstJobRadioChange(e.target.value)}
        />
        <label className="title margin-r" htmlFor="first-job-no">
          No
        </label>
      </div>
      {!isFirstJob &&
        prevEmployerDetails.map((details) => (
          <div key={details.id} className="degree-div">
            <p className="title">Employer Name</p>
            <input
              className="input-text-box"
              type="text"
              placeholder="Employer Name"
              name="employerName"
              value={details.employerName || ""}
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
              value={details.position}
              name="position"
              onChange={(e) =>
                handleEmployerDetailsChange(
                  details.id,
                  e.target.value,
                  e.target.name
                )
              }
            />

            <Location
              city={details.city || ""}
              state={details.state || ""}
              zipCode={details.zipCode || ""}
              handleLocationChange={handleEmployerDetailsChange}
              detailsId={details.id}
            />
            <p className="title time-period-container">Time Period</p>
            <div className="current-job-container">
              <input
                className="current-work-checkbox"
                type="checkbox"
                checked={details.currentJob || false}
                onChange={(e) =>
                  handleCurrentJobChange(details.id, e.target.checked)
                }
              />
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
                  value={details.startDate || ""}
                  onChange={(e) =>
                    handleEmployerDetailsChange(
                      details.id,
                      e.target.value,
                      e.target.name
                    )
                  }
                />
              </div>
              {!details.currentJob && (
                <div>
                  <p className="title">to</p>
                </div>
              )}
              {!details.currentJob && (
                <div>
                  <p className="title">End(MM/YYYY)</p>
                  <input
                    className="zip-text-box"
                    type="text"
                    placeholder="End(MM/YYYY)"
                    value={details.endDate || ""}
                    name="endDate"
                    onChange={(e) =>
                      handleEmployerDetailsChange(
                        details.id,
                        e.target.value,
                        e.target.name
                      )
                    }
                  />
                </div>
              )}
            </div>
            <p className="title">Description</p>
            <textarea
              className="text-area"
              placeholder="Add your responsibilities, contributions and results"
              name="description"
              value={details.description || ""}
              onChange={(e) =>
                handleEmployerDetailsChange(
                  details.id,
                  e.target.value,
                  e.target.name
                )
              }
            />
            {prevEmployerDetails.length > 1 && (
              <div
                className="remove-container"
                onClick={(e) => handleRemoveJob(details.id)}
              >
                <img
                  className="remove-btn"
                  src="./cross-button.webp"
                  alt="close"
                />
                <p className="remove-url">Remove this Job</p>
              </div>
            )}
          </div>
        ))}
      {!isFirstJob && (
        <div onClick={handleAddEmployerDetails} className="add-more-container">
          <img className="add-more-btn" src="./plus.png" alt="add more" />
          <p className="add-another">Add Another Job</p>
        </div>
      )}
      <p className="sub-heading parent-container">Skills (optional)</p>
      <textarea
        name="skills"
        className="text-area"
        placeholder="Areas of expertise"
        value={data.skills || ""}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}

export default ExperienceSkills;

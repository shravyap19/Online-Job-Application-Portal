import { useEffect } from "react";
import { useState } from "react";
import Select from "react-select";
function Education({ data, updateData }) {
  let [degrees, setDegrees] = useState([]);
  useEffect(() => {
    if (data.degrees) {
      setDegrees(data.degrees);
    } else {
      setDegrees([
        {
          id: Date.now(),
          schoolName: "",
          selectedDegree: null,
          concentrations: ["", ""],
          options: [
            { value: "Bachelors", label: "Bachelors" },
            { value: "Masters", label: "Masters" },
            { value: "PHD", label: "PHD" },
          ],
        },
      ]);
    }
  }, [data.degrees]);
  function handleAddDegree() {
    const newDegree = {
      id: Date.now(),
      schoolName: "",
      selectedDegree: null,
      concentrations: ["", ""],
      options: [
        { value: "Bachelors", label: "Bachelors" },
        { value: "Masters", label: "Masters" },
        { value: "PHD", label: "PHD" },
      ],
    };
    setDegrees((prevDegrees) => {
      const updatedDegree = [...prevDegrees, newDegree];
      return updatedDegree;
    });
  }
  function handleRemoveDegree(id, name) {
    const updatedDegrees = degrees.filter((degree) => degree.id !== id);
    setDegrees(updatedDegrees);
    const updatedData = { ...data, [name]: updatedDegrees };
    updateData(updatedData);
  }
  function handleChange(id, name, value) {
    let updatedDegree = degrees.map((degree) =>
      degree.id === id ? { ...degree, [name]: value } : degree
    );
    setDegrees(updatedDegree);
    updateData({ ...data, [name]: value });
  }
  function handleDegreeChange(id, selectedOption) {
    let updatedDegrees = degrees.map((prevDegree) =>
      prevDegree.id === id
        ? { ...prevDegree, selectedDegree: selectedOption }
        : prevDegree
    );
    setDegrees(updatedDegrees);
    updateData({ ...data, degrees: updatedDegrees });
  }
  function handleConcentrationChange(degreeId, index, value) {
    let updatedConcentrations = degrees.map((degree) => {
      if (degree.id === degreeId) {
        let newConcentrations = [...degree.concentrations];
        newConcentrations[index] = value;
        return { ...degree, concentrations: newConcentrations };
      }
      return degree;
    });
    setDegrees(updatedConcentrations);
    updateData({ ...data, degrees: updatedConcentrations });
  }
  function handleHighSchoolNameChange(name, value) {
    updateData({ ...data, [name]: value });
  }

  return (
    <div>
      <p className="heading">Education</p>
      <p className="sub-heading">Higher Education (optional)</p>
      {degrees.map((degree) => (
        <div key={degree.id}>
          <p className="title">School Name</p>
          <input
            className="input-text-box"
            type="text"
            name="schoolName"
            value={degree.schoolName}
            placeholder="College/University Name"
            onChange={(e) =>
              handleChange(degree.id, e.target.name, e.target.value)
            }
          />
          <p className="title">Degree</p>
          <Select
            className="degree-dropdown"
            options={degree.options}
            placeholder="Degree"
            name="degree"
            value={degree.selectedDegree}
            onChange={(selectedOption) =>
              handleDegreeChange(degree.id, selectedOption)
            }
          />
          <div className="concentration-container">
            {degree.concentrations.map((concentration, index) => (
              <div key={index}>
                <p className="title">Concentration</p>
                <input
                  type="text"
                  className="location-city-input"
                  placeholder="Concentration"
                  value={concentration || ""}
                  name="concentrations"
                  onChange={(e) =>
                    handleConcentrationChange(degree.id, index, e.target.value)
                  }
                />
              </div>
            ))}
          </div>

          {degrees.length > 1 && (
            <div
              className="remove-container"
              onClick={() => handleRemoveDegree(degree.id, "degrees")}
            >
              <p className="cross-container">&times;</p>
              <p className="remove-url">Remove this Degree</p>
            </div>
          )}
        </div>
      ))}

      <div className="add-more-container" onClick={() => handleAddDegree()}>
        <img className="add-more-btn" src="./plus.png" alt="add more" />
        <p className="add-another">Add Another Degree</p>
      </div>
      <p className="sub-heading">High School (optional)</p>
      <p className="title">High School</p>
      <input
        className="input-text-box"
        type="text"
        name="highSchool"
        value={data.highSchool || ""}
        placeholder="High School"
        onChange={(e) =>
          handleHighSchoolNameChange(e.target.name, e.target.value)
        }
      />
    </div>
  );
}

export default Education;

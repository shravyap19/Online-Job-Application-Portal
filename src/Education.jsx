import { useState } from "react";
import Select from "react-select";
function Education({ data, updateData }) {
  const [degrees, setDegrees] = useState([
    {
      id: Date.now(),
      value: [
        { value: "Bachelors", label: "Bachelors" },
        { value: "Masters", label: "Masters" },
        { value: "PHD", label: "PHD" },
      ],
    },
  ]);
  function handleAddDegree() {
    const newDegree = {
      id: Date.now(),
      value: [
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
  function handleRemoveDegree(id) {
    setDegrees((prevDegrees) =>
      prevDegrees.filter((degree) => degree.id !== id)
    );
  }
  function handleChange(e) {
    let { name, value } = e.target;
    updateData({ ...data, [name]: value });
  }
  function handleDegreeChange(selectedOption, id) {
    setDegrees((prevDegrees) =>
      prevDegrees.map((degree) =>
        degree.id === id ? { ...degree, selectedOption } : degree
      )
    );
    updateData({ ...data, degree: selectedOption ? selectedOption.value : "" });
  }

  return (
    <div>
      <p className="heading">Education</p>
      <p className="sub-heading">Higher Education (optional)</p>
      <p className="title">School Name</p>
      <input
        className="input-text-box"
        type="text"
        name="collegeName"
        placeholder="College/university Name"
        onChange={handleChange}
      />
      {degrees.map((degree) => (
        <div key={degree.id}>
          <p className="title">Degree</p>
          <Select
            className="degree-dropdown"
            options={degree.value}
            placeholder="Degree"
            name="degree"
            onChange={(selectedOption) =>
              handleDegreeChange(selectedOption, degree.id)
            }
          />
          <div className="concentration-container">
            <div>
              <p className="title">Concentration</p>
              <input
                type="text"
                className="location-city-input"
                placeholder="Concentration"
                name="concentration1"
                onChange={handleChange}
              />
            </div>
            <div>
              <p className="title">Concentration</p>
              <input
                type="text"
                className="location-city-input"
                placeholder="Concentration"
                name="concentration2"
                onChange={handleChange}
              />
            </div>
          </div>
          {degrees.length > 1 && (
            <div
              className="remove-container"
              onClick={() => handleRemoveDegree(degree.id)}
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
      <input className="input-text-box" type="text" placeholder="High School" />
    </div>
  );
}

export default Education;

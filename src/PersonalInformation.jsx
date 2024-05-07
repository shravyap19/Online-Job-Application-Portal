import { useEffect } from "react";
import { useState } from "react";
import Location from "./Location";
function PersonalInformation({ data, updateData, setCanProceed }) {
  let [urls, setUrls] = useState([]);
  const [resumeName, setResumeName] = useState(
    data.resume ? data.resume.name : ""
  );

  useEffect(() => {
    if (data.urls) {
      setUrls(data.urls);
    } else {
      setUrls([{ id: Date.now(), value: "" }]);
    }
    checkFormValidity(data);
  }, [data.urls]);

  function checkFormValidity(updatedData) {
    let isFormValid =
      updatedData.fullName &&
      updatedData.email &&
      updatedData.phone &&
      updatedData.city &&
      updatedData.state &&
      updatedData.zipCode &&
      updatedData.resume;
    setCanProceed(isFormValid);
  }

  function handleAddURL() {
    const newUrl = { id: Math.random(), value: "" };
    setUrls([...urls, newUrl]);
  }
  function handleRemoveUrl(id, name) {
    let updatedUrls = urls.filter((url) => url.id !== id);
    setUrls(updatedUrls);
    const updatedData = { ...data, [name]: updatedUrls };
    updateData(updatedData);
  }

  function handleChange(value, name) {
    const updatedData = { ...data, [name]: value };
    updateData(updatedData);
    checkFormValidity(updatedData);
  }
  function handleURLChange(id, value, name) {
    const updateUrls = urls.map((url) =>
      url.id === id ? { ...url, value } : url
    );
    setUrls(updateUrls);
    let updatedData = { ...data, [name]: updateUrls };
    updateData(updatedData);
    checkFormValidity(updatedData);
  }
  function handleFileChange(e) {
    const { files } = e.target;
    if (files.length > 0) {
      const file = files[0];
      setResumeName(file.name);
      let updatedFileData = { ...data, resume: file };
      updateData(updatedFileData);
      checkFormValidity(updatedFileData);
    }
  }
  function removeResume() {
    setResumeName("");
    let updatedFileData = { ...data, resume: "" };
    updateData(updatedFileData);
  }
  return (
    <div>
      <p className="heading">Personal Information</p>
      <p className="sub-heading">Resume</p>
      {!resumeName && (
        <button className="resume-upload-label">
          <span>Upload from device</span>
          <input
            className="resume-input"
            type="file"
            id="fileInput"
            onChange={(e) => handleFileChange(e)}
          />
        </button>
      )}
      {resumeName && (
        <div className="resume-name-display">
          {resumeName}
          <img
            onClick={removeResume}
            className="remove-btn"
            src="./close.png"
            alt="close"
          />
        </div>
      )}

      <p className="sub-heading parent-container">Contact Info</p>
      <p className="title">Full Name</p>
      <input
        className="input-text-box"
        type="text"
        placeholder="Full Name"
        name="fullName"
        value={data.fullName || ""}
        onChange={(e) => handleChange(e.target.value, e.target.name)}
      />
      <Location
        city={data.city || ""}
        state={data.state || ""}
        zipCode={data.zipCode || ""}
        handleLocationChange={handleChange}
      />
      <div className="parent-container">
        <p className="title">Email</p>
        <input
          className="input-text-box"
          type="text"
          placeholder="Email"
          name="email"
          value={data.email || ""}
          onChange={(e) => handleChange(e.target.value, e.target.name)}
        />
      </div>
      <div className="parent-container">
        <p className="title">Phone</p>
        <input
          className="input-text-box"
          type="text"
          placeholder="Phone"
          name="phone"
          value={data.phone || ""}
          onChange={(e) => handleChange(e.target.value, e.target.name)}
        />
      </div>
      <p className="sub-heading parent-container">Website (optional)</p>
      <div>
        {urls.map((url) => (
          <div key={url.id} className="degree-div">
            <p className="URL-details">URL(LinkedIn, Github, Portfolio)</p>
            <input
              className="input-text-box"
              type="text"
              placeholder="URL(LinkedIn, Github, Portfolio)"
              name="urls"
              value={url.value}
              onChange={(e) =>
                handleURLChange(url.id, e.target.value, e.target.name)
              }
            />
            {urls.length > 1 && (
              <div
                className="remove-container"
                onClick={(e) => handleRemoveUrl(url.id, "urls")}
              >
                <img className="remove-btn" src="./close.png" alt="close" />
                <p className="remove-url">Remove this website</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div onClick={handleAddURL} className="add-more-container">
        <img className="add-more-btn" src="./plus.webp" alt="add more" />
        <p className="add-another">Add Another Website</p>
      </div>
    </div>
  );
}
export default PersonalInformation;

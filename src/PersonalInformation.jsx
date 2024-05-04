import { useState } from "react";
import Location from "./Location";
function PersonalInformation({ data, udpateData }) {
  let [urls, setUrls] = useState([{ id: Math.random(), value: "" }]);

  function handleAddURL() {
    const newUrl = { id: Math.random(), value: "" };
    setUrls([...urls, newUrl]);
  }
  function handleRemoveUrl(id) {
    setUrls(urls.filter((url) => url.id !== id));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    udpateData({ ...data, [name]: value });
  }
  function handleURLChange(id, value) {
    setUrls((prevUrls) =>
      prevUrls.map((url) => (url.id === id ? { ...url, value } : url))
    );
  }
  function handleFileChange(e) {
    const { name, files } = e.target;
    udpateData({ ...data, [name]: files[0] });
  }
  return (
    <div>
      <p className="heading">Personal Information</p>
      <p className="sub-heading">Resume</p>
      <button className="resume-upload-label">
        <span>Upload from device</span>
        <input
          className="resume-input"
          type="file"
          name="resume"
          onChange={handleFileChange}
        />
      </button>
      <p className="sub-heading parent-container">Contact Info</p>
      <p className="title">Full Name</p>
      <input
        className="input-text-box"
        type="text"
        placeholder="Full Name"
        name="fullName"
        onChange={handleChange}
      />
      <Location />
      <div className="parent-container">
        <p className="title">Email</p>
        <input
          className="input-text-box"
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className="parent-container">
        <p className="title">Phone</p>
        <input
          className="input-text-box"
          type="text"
          placeholder="Phone"
          name="phone"
          onChange={handleChange}
        />
      </div>
      <p className="sub-heading parent-container">Website (optional)</p>
      <div>
        {urls.map((url) => (
          <div key={url.id}>
            <p className="URL-details">URL(LinkedIn, Github, Portfolio)</p>
            <input
              className="input-text-box"
              type="text"
              placeholder="URL(LinkedIn, Github, Portfolio)"
              name="websiteLink"
              value={url.value}
              onChange={(e) => handleURLChange(url.id, e.target.value)}
            />
            {urls.length > 1 && (
              <div
                className="remove-container"
                onClick={(e) => handleRemoveUrl(url.id)}
              >
                <p className="cross-container">&times;</p>
                <p className="remove-url">Remove this website</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div onClick={handleAddURL} className="add-more-container">
        <img className="add-more-btn" src="./plus.png" alt="add more" />
        <p className="add-another">Add Another Website</p>
      </div>
    </div>
  );
}
export default PersonalInformation;

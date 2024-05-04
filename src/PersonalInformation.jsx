import { useEffect } from "react";
import { useState } from "react";
import Location from "./Location";
function PersonalInformation({ data, updateData }) {
  let [urls, setUrls] = useState([]);

  useEffect(() => {
    if (data.urls) {
      setUrls(data.urls);
    } else {
      setUrls([{ id: Date.now(), value: "" }]);
    }
  }, [data.urls]);

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

  function handleChange(e) {
    const { name, value } = e.target;
    updateData({ ...data, [name]: value });
  }
  function handleURLChange(id, value, name) {
    const updateUrls = urls.map((url) =>
      url.id === id ? { ...url, value } : url
    );
    setUrls(updateUrls);
    updateData({ ...data, [name]: updateUrls });
  }
  function handleFileChange(e) {
    const { name, files } = e.target;
    updateData({ ...data, [name]: files[0] });
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
          onChange={(e) => handleFileChange(e)}
        />
      </button>
      <p className="sub-heading parent-container">Contact Info</p>
      <p className="title">Full Name</p>
      <input
        className="input-text-box"
        type="text"
        placeholder="Full Name"
        name="fullName"
        value={data.fullName || ""}
        onChange={(e) => handleChange(e)}
      />
      <Location data={data} updateData={updateData} />
      <div className="parent-container">
        <p className="title">Email</p>
        <input
          className="input-text-box"
          type="text"
          placeholder="Email"
          name="email"
          value={data.email || ""}
          onChange={(e) => handleChange(e)}
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
          onChange={(e) => handleChange(e)}
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

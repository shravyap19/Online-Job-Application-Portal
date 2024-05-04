import { useState } from "react";
import Select from "react-select";
function Location({ data, updateData }) {
  const [usStates, setUsStates] = useState([
    { id: Date.now(), value: "AL", label: "Alabama" },
    { id: Date.now(), value: "AK", label: "Alaska" },
    { id: Date.now(), value: "AZ", label: "Arizona" },
    { id: Date.now(), value: "AR", label: "Arkansas" },
    { id: Date.now(), value: "CA", label: "California" },
    { id: Date.now(), value: "CO", label: "Colorado" },
    { id: Date.now(), value: "CT", label: "Connecticut" },
    { id: Date.now(), value: "DE", label: "Delaware" },
    { id: Date.now(), value: "FL", label: "Florida" },
    { id: Date.now(), value: "GA", label: "Georgia" },
    { id: Date.now(), value: "HI", label: "Hawaii" },
    { id: Date.now(), value: "ID", label: "Idaho" },
    { id: Date.now(), value: "IL", label: "Illinois" },
    { id: Date.now(), value: "IN", label: "Indiana" },
    { id: Date.now(), value: "IA", label: "Iowa" },
    { id: Date.now(), value: "KS", label: "Kansas" },
    { id: Date.now(), value: "KY", label: "Kentucky" },
    { id: Date.now(), value: "LA", label: "Louisiana" },
    { id: Date.now(), value: "ME", label: "Maine" },
    { id: Date.now(), value: "MD", label: "Maryland" },
    { id: Date.now(), value: "MA", label: "Massachusetts" },
    { id: Date.now(), value: "MI", label: "Michigan" },
    { id: Date.now(), value: "MN", label: "Minnesota" },
    { id: Date.now(), value: "MS", label: "Mississippi" },
    { id: Date.now(), value: "MO", label: "Missouri" },
    { id: Date.now(), value: "MT", label: "Montana" },
    { id: Date.now(), value: "NE", label: "Nebraska" },
    { id: Date.now(), value: "NV", label: "Nevada" },
    { id: Date.now(), value: "NH", label: "New Hampshire" },
    { id: Date.now(), value: "NJ", label: "New Jersey" },
    { id: Date.now(), value: "NM", label: "New Mexico" },
    { id: Date.now(), value: "NY", label: "New York" },
    { id: Date.now(), value: "NC", label: "North Carolina" },
    { id: Date.now(), value: "ND", label: "North Dakota" },
    { id: Date.now(), value: "OH", label: "Ohio" },
    { id: Date.now(), value: "OK", label: "Oklahoma" },
    { id: Date.now(), value: "OR", label: "Oregon" },
    { id: Date.now(), value: "PA", label: "Pennsylvania" },
    { id: Date.now(), alue: "RI", label: "Rhode Island" },
    { id: Date.now(), value: "SC", label: "South Carolina" },
    { id: Date.now(), value: "SD", label: "South Dakota" },
    { id: Date.now(), value: "TN", label: "Tennessee" },
    { id: Date.now(), value: "TX", label: "Texas" },
    { id: Date.now(), value: "UT", label: "Utah" },
    { id: Date.now(), value: "VT", label: "Vermont" },
    { id: Date.now(), value: "VA", label: "Virginia" },
    { id: Date.now(), value: "WA", label: "Washington" },
    { id: Date.now(), value: "WV", label: "West Virginia" },
    { id: Date.now(), value: "WI", label: "Wisconsin" },
    { id: Date.now(), value: "WY", label: "Wyoming" },
  ]);
  function handleChange(e) {
    let { name, value } = e.target;
    updateData({ ...data, [name]: value });
  }
  function handlePrevJobStateChange(selecetedOption, id) {
    setUsStates((prevStates) =>
      prevStates.map((prevState) =>
        prevState.id === id ? { ...prevState, selecetedOption } : prevState
      )
    );
    updateData({
      ...data,
      state: selecetedOption ? selecetedOption.value : "",
    });
  }
  return (
    <div className="location-container">
      <div>
        <p className="title">City</p>
        <input
          className="location-city-input"
          type="text"
          placeholder="City"
          name="city"
          value={data.city || ""}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <p className="title">State</p>
        <Select
          className="state-dropdown"
          options={usStates}
          placeholder="Location"
          name="state"
          value={data.state || ""}
          onChange={(selectedOption) =>
            handlePrevJobStateChange(selectedOption, selectedOption.id)
          }
        />
      </div>
      <div>
        <p className="title">Zip Code</p>
        <input
          className="zip-text-box"
          type="text"
          placeholder="Zip Code"
          name="zipCode"
          value={data.zipCode || ""}
          onChange={(e) => handleChange(e)}
        />
      </div>
    </div>
  );
}

export default Location;

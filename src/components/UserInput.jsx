import { useState } from "react";

export default function UserInput({ onChange, userInput }) {
  const [tempInput, setTempInput] = useState({ ...userInput });

  const handleInputChange = (field, value) => {
    setTempInput((prev) => ({
      ...prev,
      [field]: +value,
    }));
  };

  const handleSubmit = () => {
    Object.keys(tempInput).forEach((key) => {
      onChange(key, tempInput[key]);
    });
  };

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={tempInput.initialInvestment}
            onChange={(event) => handleInputChange("initialInvestment", event.target.value)}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={tempInput.annualInvestment}
            onChange={(event) => handleInputChange("annualInvestment", event.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={tempInput.expectedReturn}
            onChange={(event) => handleInputChange("expectedReturn", event.target.value)}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={tempInput.duration}
            onChange={(event) => handleInputChange("duration", event.target.value)}
          />
        </p>
      </div>
      <div id="btn-container">
        <button className="custom-btn" onClick={handleSubmit}>
          Calculate
        </button>
      </div>
    </section>
  );
}

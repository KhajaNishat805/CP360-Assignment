import React, { useState } from "react";
import "./CustomDropdown.css";
import Select from "react-select";

export const CustomDropdown=({optionList})=> {
  // React state to manage selected options
  const [selectedOptions, setSelectedOptions] = useState();

  // Function triggered on selection
  function handleSelect(data) {
    setSelectedOptions(data);
  }
  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Home</div>
      <div className="input-container">Choose your color</div>

        <Select
          options={optionList}
          placeholder="Select color"
          value={selectedOptions}
          onChange={handleSelect}
          isSearchable={true}
          isMulti
        />
      </div>
    </div>
  );
}
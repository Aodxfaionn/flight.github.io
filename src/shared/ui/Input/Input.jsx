import React, { useState } from "react";
import "./input.css";

export function Input({ id, text }) {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="input">
      <label htmlFor={id}>{text}</label>
      <input type="text" id={id} value={value} onChange={handleChange} />
    </div>
  );
}

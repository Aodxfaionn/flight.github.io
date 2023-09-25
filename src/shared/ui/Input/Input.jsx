import React, { useState } from "react";
import "./input.css";

export function Input({ id, text, type, onChange }) {
  const [value, setValue] = useState("");
  return (
    <div className="input">
      <label htmlFor={id}>{text}</label>
      <input type={type} id={id} onChange={onChange} />
    </div>
  );
}

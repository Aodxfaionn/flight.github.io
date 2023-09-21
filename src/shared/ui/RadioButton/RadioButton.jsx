import React from "react";
import "./radioButton.css";

export function RadioButton({id, name, value, text}) {
  return (
    <div className="radioBtn">
      <input type="radio" id={id} name={name} value={value} />
      <label htmlFor={id}>{text}</label>
    </div>
  );
}

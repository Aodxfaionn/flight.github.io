import React from "react";
import "./radioButton.css";

export function RadioButton({id, name, value, text, onClick}) {
  return (
    <div className="radioBtn" onClick={onClick}>
      <input type="radio" id={id} name={name} value={value} />
      <label htmlFor={id}>{text}</label>
    </div>
  );
}

import React, { Children } from "react";
import "./checkbox.css";

export function Checkbox({ id, name, value, text }) {
  return (
    <div className="checkbox">
      <input type="checkbox" id={id} value={value} name={name} />
      <label htmlFor={id}>{text}</label>
    </div>
  );
}

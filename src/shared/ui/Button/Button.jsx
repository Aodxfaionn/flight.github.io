import React from 'react'
import'./button.css'

export function Button({ onClick, text, style }) {
  return <button onClick={onClick} className={`btn ${style}`}>{text}</button>;
}

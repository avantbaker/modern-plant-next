import React from 'react';

export default function Checkbox({ value, label, onChange, className, name }) {

  return (
    <div className="checkbox-wrapper mb-lg">
      <input 
        type="checkbox"
        onChange={onChange}
        className={className} 
        name={name}
        value={value}
        id={name}
      />
      <label className="ml-sm checkbox-label" htmlFor={name}>{label}</label>
    </div>
  )
}
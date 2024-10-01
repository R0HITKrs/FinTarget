import React from 'react';

const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <div style={{ margin: '10px 0' }}>
      <label>{label}</label>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;

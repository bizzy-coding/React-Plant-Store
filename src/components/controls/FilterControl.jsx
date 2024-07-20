import React from 'react';

function FilterControl({ onChange }) {
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    onChange(name, checked);
  };

  return (
    <div className="type-filter">
      <h3>Filter by Light</h3>
      <div>
        <label>
          <input type="checkbox" name="direct sunlight" onChange={handleCheckboxChange} />
          Happiest in direct sunlight
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" name="light and shade" onChange={handleCheckboxChange} />
          Happy in light and shade
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" name="shade" onChange={handleCheckboxChange} />
          Happy in shade
        </label>
      </div>
    </div>
  );
}

export default FilterControl;

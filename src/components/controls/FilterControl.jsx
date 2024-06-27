import React from 'react';

function FilterControl({ onChange }) {
  return (
    <div className="type-filter">
      <label htmlFor="plant-type">Choose a plant type:</label>
      <select id="plant-type" onChange={e => onChange(e.target.value) + console.log(e.target.value)}>

        <option value="">All</option>
        <option value="Tropical">Tropical</option>
        <option value="Succulent">Succulent</option>
        <option value="Indoor">Indoor</option>
        <option value="Outdoor">Outdoor</option>
      </select>
    </div>
  );
}

export default FilterControl;

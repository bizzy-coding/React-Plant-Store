import React from 'react';

function AdvancedFilterControl({ onChange }) {
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    onChange(name, checked);
  };

  return (
    <div className="advanced-filter-container">
      <h3>Advanced Filters</h3>

      {/* Native Country Filter */}
      <div className="filter-section">
        <h4>Filter by Native Country</h4>
        <div>
          <label>
            <input type="checkbox" name="Africa" onChange={handleCheckboxChange} />
            Africa
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="America" onChange={handleCheckboxChange} />
            America
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="Asia" onChange={handleCheckboxChange} />
            Asia
          </label>
        </div>
      </div>

      {/* Growth Rate Filter */}
      <div className="filter-section">
        <h4>Filter by Growth Rate</h4>
        <div>
          <label>
            <input type="checkbox" name="slow" onChange={handleCheckboxChange} />
            Slow
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="medium" onChange={handleCheckboxChange} />
            Medium
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="fast" onChange={handleCheckboxChange} />
            Fast
          </label>
        </div>
      </div>

      {/* Humidity Requirements Filter */}
      <div className="filter-section">
        <h4>Filter by Humidity Requirements</h4>
        <div>
          <label>
            <input type="checkbox" name="lowHumidity" onChange={handleCheckboxChange} />
            Low
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="medHumidity" onChange={handleCheckboxChange} />
            Medium
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="highHumidity" onChange={handleCheckboxChange} />
            High
          </label>
        </div>
      </div>

      {/* Pet Friendly Filter */}
      <div className="filter-section">
        <h4>Pet Friendly</h4>
        <div>
          <label>
            <input type="checkbox" name="petFriendly" onChange={handleCheckboxChange} />
            Pet Friendly
          </label>
        </div>
      </div>
    </div>
  );
}

export default AdvancedFilterControl;

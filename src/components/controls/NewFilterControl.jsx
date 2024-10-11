import React, { useState, useEffect, useRef } from 'react';

function FilterControl({ onChange }) {
  const [showLightDropdown, setShowLightDropdown] = useState(false);
  const [showDifficultyDropdown, setShowDifficultyDropdown] = useState(false);

  const [lightFilter, setLightFilter] = useState([]);
  const [difficultyFilter, setDifficultyFilter] = useState([]);

  const lightDropdownRef = useRef(null);
  const difficultyDropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (lightDropdownRef.current && !lightDropdownRef.current.contains(event.target)) {
        setShowLightDropdown(false);
      }
      if (difficultyDropdownRef.current && !difficultyDropdownRef.current.contains(event.target)) {
        setShowDifficultyDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle checkbox change for light filter
  const handleLightChange = (e) => {
    const { name, checked } = e.target;
    let updatedLightFilter = [...lightFilter];

    if (checked) {
      updatedLightFilter.push(name);
    } else {
      updatedLightFilter = updatedLightFilter.filter((item) => item !== name);
    }

    setLightFilter(updatedLightFilter);
    onChange({ light: updatedLightFilter, difficulty: difficultyFilter });
  };

  // Handle checkbox change for difficulty filter
  const handleDifficultyChange = (e) => {
    const { name, checked } = e.target;
    let updatedDifficultyFilter = [...difficultyFilter];

    if (checked) {
      updatedDifficultyFilter.push(name);
    } else {
      updatedDifficultyFilter = updatedDifficultyFilter.filter((item) => item !== name);
    }

    setDifficultyFilter(updatedDifficultyFilter);
    onChange({ light: lightFilter, difficulty: updatedDifficultyFilter });
  };

  return (
    <div className="filter-container">
      {/* Light Filter Dropdown */}
      <div className="type-filter" ref={lightDropdownRef}>
        <h3>Filter by Light</h3>
        <div onClick={() => setShowLightDropdown(!showLightDropdown)} className="dropdown-header">
          {lightFilter.length > 0 ? lightFilter.join(', ') : 'Select Light Filter'}
        </div>
        {showLightDropdown && (
          <div className="dropdown-menu">
            <label>
              <input
                type="checkbox"
                name="direct sunlight"
                checked={lightFilter.includes('direct sunlight')}
                onChange={handleLightChange}
              />
              Happiest in direct sunlight
            </label>
            <label>
              <input
                type="checkbox"
                name="light and shade"
                checked={lightFilter.includes('light and shade')}
                onChange={handleLightChange}
              />
              Happy in light and shade
            </label>
            <label>
              <input
                type="checkbox"
                name="shade"
                checked={lightFilter.includes('shade')}
                onChange={handleLightChange}
              />
              Happy in shade
            </label>
          </div>
        )}
      </div>

      {/* Difficulty Filter Dropdown */}
      <div className="difficulty-filter" ref={difficultyDropdownRef}>
        <h3>Filter by Difficulty</h3>
        <div onClick={() => setShowDifficultyDropdown(!showDifficultyDropdown)} className="dropdown-header">
          {difficultyFilter.length > 0 ? difficultyFilter.join(', ') : 'Select Difficulty Filter'}
        </div>
        {showDifficultyDropdown && (
          <div className="dropdown-menu">
            <label>
              <input
                type="checkbox"
                name="low"
                checked={difficultyFilter.includes('low')}
                onChange={handleDifficultyChange}
              />
              Low
            </label>
            <label>
              <input
                type="checkbox"
                name="med"
                checked={difficultyFilter.includes('med')}
                onChange={handleDifficultyChange}
              />
              Medium
            </label>
            <label>
              <input
                type="checkbox"
                name="high"
                checked={difficultyFilter.includes('high')}
                onChange={handleDifficultyChange}
              />
              High
            </label>
          </div>
        )}
      </div>
    </div>
  );
}

export default FilterControl;
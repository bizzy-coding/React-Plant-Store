import React, { useState, useEffect, useRef } from 'react';

function FilterControl({ onChange }) {
  const [showLightDropdown, setShowLightDropdown] = useState(false);
  const [showDifficultyDropdown, setShowDifficultyDropdown] = useState(false);
  const [showPlantTypeDropdown, setShowPlantTypeDropdown] = useState(false); 
  const [showPlantSizeDropdown, setShowPlantSizeDropdown] = useState(false); 
  // New state for plant type dropdown

  const [lightFilter, setLightFilter] = useState([]);
  const [difficultyFilter, setDifficultyFilter] = useState([]);
  const [plantTypeFilter, setPlantTypeFilter] = useState([]); 
  const [plantSizeFilter, setPlantSizeFilter] = useState([]); 
  // New state for plant type filter

  const lightDropdownRef = useRef(null);
  const difficultyDropdownRef = useRef(null);
  const plantTypeDropdownRef = useRef(null); 
  const plantSizeDropdownRef = useRef(null); 
  // New ref for plant type dropdown

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (lightDropdownRef.current && !lightDropdownRef.current.contains(event.target)) {
        setShowLightDropdown(false);
      }
      if (difficultyDropdownRef.current && !difficultyDropdownRef.current.contains(event.target)) {
        setShowDifficultyDropdown(false);
      }
      if (plantTypeDropdownRef.current && !plantTypeDropdownRef.current.contains(event.target)) {
        setShowPlantTypeDropdown(false);
      }
    if (plantSizeDropdownRef.current && !plantSizeDropdownRef.current.contains(event.target)) {
      setShowPlantSizeDropdown(false);
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
    onChange(name, checked);
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
    onChange(name, checked);
  };

  // Handle checkbox change for plant type filter
  const handlePlantTypeChange = (e) => {
    const { name, checked } = e.target;
    let updatedPlantTypeFilter = [...plantTypeFilter];

    if (checked) {
      updatedPlantTypeFilter.push(name);
    } else {
      updatedPlantTypeFilter = updatedPlantTypeFilter.filter((item) => item !== name);
    }

    setPlantTypeFilter(updatedPlantTypeFilter);
    onChange(name, checked);
  };

  // Handle checkbox change for plant type filter
  const handlePlantSizeChange = (e) => {
    const { name, checked } = e.target;
    console.log("Size filter change:", name, checked); 
    let updatedPlantSizeFilter = [...plantSizeFilter];
  
    if (checked) {
      updatedPlantSizeFilter.push(name);  
    } else {
      updatedPlantSizeFilter = updatedPlantSizeFilter.filter((item) => item !== name);
    }
  
    setPlantSizeFilter(updatedPlantSizeFilter);
    onChange(name, checked);  
  };

  return (
    <div className="filter-container">
      
      {/* Plant Size Filter Dropdown */}
      <div className="plant-size-filter" ref={plantSizeDropdownRef}>
        <div onClick={() => setShowPlantSizeDropdown(!showPlantSizeDropdown)} className="dropdown-header">
          {'Size ⌄'}
        </div>
        {showPlantSizeDropdown && (
          <div className="dropdown-menu">
            <label>
              <input
                type="checkbox"
                name="sizeSmall"
                checked={plantSizeFilter.includes('sizeSmall')}
                onChange={handlePlantSizeChange}
              />
              Small
            </label>
            <label>
              <input
                type="checkbox"
                name="sizeMedium"
                checked={plantSizeFilter.includes('sizeMedium')}
                onChange={handlePlantSizeChange}
              />
              Medium
            </label>
            <label>
              <input
                type="checkbox"
                name="sizeLarge"
                checked={plantSizeFilter.includes('sizeLarge')}
                onChange={handlePlantSizeChange}
              />
              Large
            </label>
          </div>
        )}
      </div>


      {/* Plant Type Filter Dropdown */}
      <div className="plant-type-filter" ref={plantTypeDropdownRef}>
        <div onClick={() => setShowPlantTypeDropdown(!showPlantTypeDropdown)} className="dropdown-header">
          {'Type ⌄'}
        </div>
        {showPlantTypeDropdown && (
          <div className="dropdown-menu">
            <label>
              <input
                type="checkbox"
                name="Tropical"
                checked={plantTypeFilter.includes('Tropical')}
                onChange={handlePlantTypeChange}
              />
              Tropical
            </label>
            <label>
              <input
                type="checkbox"
                name="Succulent"
                checked={plantTypeFilter.includes('Succulent')}
                onChange={handlePlantTypeChange}
              />
              Succulent
            </label>
            <label>
              <input
                type="checkbox"
                name="Climber/Vine"
                checked={plantTypeFilter.includes('Climber/Vine')}
                onChange={handlePlantTypeChange}
              />
              Climber/Vine
            </label>
          </div>
        )}
      </div>

      {/* Light Filter Dropdown */}
      <div className="type-filter" ref={lightDropdownRef}>
        <div onClick={() => setShowLightDropdown(!showLightDropdown)} className="dropdown-header">
          { 'light ⌄'}
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
        <div onClick={() => setShowDifficultyDropdown(!showDifficultyDropdown)} className="dropdown-header">
          {'Care Level ⌄'}
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


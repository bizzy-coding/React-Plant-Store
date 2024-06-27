import React from 'react';

function SortControl({ onSort }) {
  return (
    <div className="sort-control">
      <label htmlFor="sort">Sort by:</label>
      <select id="sort" onChange={(e) => onSort(e.target.value)}>
        <option value="plantName-asc">Name (A to Z)</option>
        <option value="plantName-desc">Name (Z to A)</option>
        <option value="plantPrice-asc">Price (Low to High)</option>
        <option value="plantPrice-desc">Price (High to Low)</option>
      </select>
    </div>
  );
}

export default SortControl;

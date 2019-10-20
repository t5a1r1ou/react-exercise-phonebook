import React from "react";

export const Filter = ({ filterName, handleFilterChange }) => {
  return (
    <p>
      filter shown with{" "}
      <input value={filterName} onChange={handleFilterChange} />
    </p>
  );
};

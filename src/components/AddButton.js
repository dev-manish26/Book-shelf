import React from 'react';

function AddButton({ onClick }) {
  return (
    <button className="add-button" onClick={onClick}>
      Save
    </button>
  );
}

export default AddButton;

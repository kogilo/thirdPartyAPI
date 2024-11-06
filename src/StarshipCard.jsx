import React from 'react';

function StarshipCard({ ship }) {
  return (
    <div className="starship-card">
      <h2>{ship.name}</h2>
      {/* Add any additional details here if needed */}
    </div>
  );
}

export default StarshipCard;

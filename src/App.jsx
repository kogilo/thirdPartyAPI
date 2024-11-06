import React, { useState, useEffect } from 'react';
import { getAllStarships } from './services/sw-api';
import StarshipCard from './StarshipCard';

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    async function fetchStarships() {
      const data = await getAllStarships();
      setStarships(data.results);
    }
    fetchStarships();
  }, []);

  return (
    <div>
      <h1>Star Wars Starships</h1>
      <div className="starship-container">
        {starships.map((ship, idx) => (
          <StarshipCard key={idx} ship={ship} />
        ))}
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import ToyCard from '../components/ToyCard';
import { allToys } from '../data/allToyData';
import '../styles/Toys.css';

const Toys = () => {
  return (
    <div className="toys-page">
      <h1>All Toys</h1>
      <div className="toy-grid">
        {allToys.map(toy => (
          <ToyCard key={toy.id} toy={toy} />
        ))}
      </div>
    </div>
  );
};

export default Toys;

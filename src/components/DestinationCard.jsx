import React from 'react';
import './DestinationCard.css';

const DestinationCard = ({ title, description, budget, image, tags }) => {
  return (
    <div className="card glass fade-in">
      <div className="card-image-container">
        <img src={image} alt={title} className="card-image" />
        <div className="card-badge">{budget}</div>
      </div>
      <div className="card-content">
        <div className="card-tags">
          {tags.map((tag, index) => (
            <span key={index} className="card-tag">{tag}</span>
          ))}
        </div>
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <button className="card-link">探索行程 →</button>
      </div>
    </div>
  );
};

export default DestinationCard;

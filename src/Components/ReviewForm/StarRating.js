import React, { useState } from 'react';
import './StarRating.css';

const StarRating = ({ onRatingChange }) => {
  const [hoveredRating, setHoveredRating] = useState(0);
  const [selectedRating, setSelectedRating] = useState(0);

  const stars = [1, 2, 3, 4, 5];

  const handleStarClick = (star) => {
    setSelectedRating(star);
    onRatingChange(star);
  };

  return (
    <div
      className="star-rating"
      onMouseLeave={() => setHoveredRating(0)}
    >
        <div className='rating'>
        <strong>Rating: </strong><br/>
        </div>
      {stars.map((star) => (
        <span
          key={star}
          onClick={() => handleStarClick(star)}
          onMouseEnter={() => setHoveredRating(star)}
          className={`star ${star <= selectedRating || star <= hoveredRating ? 'active' : ''}`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;

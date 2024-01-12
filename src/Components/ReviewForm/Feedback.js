import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Feedback.css';
import StarRating from './StarRating';

function Feedback() {
  const navigate = useNavigate();

  const [selectedRating, setSelectedRating] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    review: '',
    rating: 0
  });

  const handleRatingChange = (newRating) => {
    setSelectedRating(newRating);
    setFormData({ ...formData, rating: newRating });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.review && formData.rating > 0) {
      setShowWarning(false);
      navigate("/ReviewForm")
    } else {
      setShowWarning(true);
    }
  };

  return (
    <div className='box'>
      <form onSubmit={handleSubmit}>
        <div className='feedbk'>
          <h1>Give Your Feedback</h1>
        </div>
        <br />
        {showWarning && <p className="warning">Please fill out all fields.</p>}
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="review">Review:</label>
          <textarea id="review" name="review" value={formData.review} onChange={handleChange} />
          <StarRating onRatingChange={handleRatingChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Feedback;

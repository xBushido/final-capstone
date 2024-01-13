import React, { createContext, useState, useContext } from 'react';

const ReviewContext = createContext();

const ReviewProvider = ({ children }) => {
  const [review, setReview] = useState(null);

  const setReviewData = (data) => {
    setReview(data);
  };

  return (
    <ReviewContext.Provider value={{ review, setReviewData }}>
      {children}
    </ReviewContext.Provider>
  );
};

const useReview = () => {
  const context = useContext(ReviewContext);
  if (!context) {
    throw new Error('useReview must be used within a ReviewProvider');
  }
  return context;
};

export { ReviewProvider, useReview };

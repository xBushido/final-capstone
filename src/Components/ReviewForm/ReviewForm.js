import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useReview } from './ReviewContext';
import './ReviewForm.css';

const ReviewForm = () => {
  const { review } = useReview();

  // Example state to simulate user authentication and appointment data
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [appointmentsData, setAppointmentsData] = useState([
    // Example appointment data
    { id: 1, doctorName: 'Dr. John Doe', doctorSpeciality: 'Cardiology' },
    { id: 2, doctorName: 'Dr. John Smith', doctorSpeciality: 'Dermatology' },
    // ... other appointment objects
  ]);

  // Assume you have a function to check if the user has appointments
  const hasAppointments = () => {
    // Implement your logic here
    return appointmentsData.length > 0;
  };

  return (
    <div>
      <h1>Reviews</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Doctor Name</th>
            <th>Doctor Speciality</th>
            <th>Provide Feedback</th>
            <th>Review Given</th>
          </tr>
        </thead>
        <tbody>
          {isLoggedIn && hasAppointments() && appointmentsData.map(appointment => (
            <tr key={appointment.id}>
              <td>{appointment.id}</td>
              <td>{appointment.doctorName}</td>
              <td>{appointment.doctorSpeciality}</td>
              <td>
                <Link to="/Feedback">
                  <button disabled={review && review.doctorId === appointment.id}>Give Review</button>
                </Link>
              </td>
              <td>{review && review.review}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewForm;

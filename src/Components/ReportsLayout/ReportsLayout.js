import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ReportsLayout.css';

const ReportsLayout = () => {

  // Example state to simulate user authentication and appointment data
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [appointmentsData, setAppointmentsData] = useState([
    // Example appointment data
    { id: 1, doctorName: 'Dr. Richard Pearson', doctorSpeciality: 'General Physician' },
    // ... other appointment objects
  ]);

  // Assume you have a function to check if the user has appointments
  const hasAppointments = () => {
    // Implement your logic here
    return appointmentsData.length > 0;
  };

  return (
    <div>
      <h1>Reports</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Doctor Name</th>
            <th>Doctor Speciality</th>
            <th>View Report</th>
            <th>Download Report</th>
          </tr>
        </thead>
        <tbody>
          {isLoggedIn && hasAppointments() && appointmentsData.map(appointment => (
            <tr key={appointment.id}>
              <td>{appointment.id}</td>
              <td>{appointment.doctorName}</td>
              <td>{appointment.doctorSpeciality}</td>
              <td>
              <a href={`patient_report.pdf`}>
                  <button>View Report</button>
                </a>
                </td>
                <td>
                <a href={'patient_report.pdf'} download>
                  <button>Download Report</button>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportsLayout;

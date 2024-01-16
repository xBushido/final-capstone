import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ReportsLayout.css';

const ReportsLayout = () => {

  return (
    <div>
      <h1>Reviews</h1>
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
            <button>View Report</button>
            <button>Download Report</button>
        </tbody>
      </table>
    </div>
  );
};

export default ReportsLayout;

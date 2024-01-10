import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Notification.css';

const Notification = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('email');
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    const storedAppointmentData = JSON.parse(localStorage.getItem(storedDoctorData?.name));

    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    if (storedDoctorData) {
      setDoctorData(storedDoctorData);
    }

    if (storedAppointmentData) {
      setAppointmentData(storedAppointmentData);
      setShowNotification(true); // Set to true when appointment data is available
    }
  }, []);

  return (
    <div>
      {children}
      {isLoggedIn && showNotification && appointmentData && (
        <div className={`appointment-card ${showNotification ? 'show-notification' : ''}`}>
          <div className="appointment-card__content">
            <h3 className="appointment-card__title">Appointment Details</h3>
            <p className="appointment-card__message">
              <strong>Doctor:</strong> {doctorData?.name} <br/>
              <strong>Speciality:</strong> {doctorData?.speciality}<br/>

              {appointmentData.map(appointment => (
                    <div key={appointment.id}>
                        <p className="appointment-card__message">
                            <strong>Name:</strong> {appointment.name}
                        </p>
                        <p className="appointment-card__message">
                            <strong>Date of Appointment:</strong> {appointment.selectedDate}
                        </p>
                        <p className="appointment-card__message">
                            <strong>Time Slot:</strong> {appointment.selectedTime}
                        </p>
                    </div>
                ))}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;

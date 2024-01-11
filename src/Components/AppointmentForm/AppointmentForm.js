import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-time-picker/dist/TimePicker.css';

const AppointmentForm = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date()); // Initialize as a Date object
    const [selectedTime, setSelectedTime] = useState('12:00');

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const date = selectedDate.toLocaleDateString('en-US');

        onSubmit({ name, phoneNumber, date, selectedTime });
        setName('');
        setPhoneNumber('');
        setSelectedDate(new Date()); // Reset to the current date
        setSelectedTime('12:00');
    };

    // Generate time options in hourly intervals
    const timeOptions = [];
    for (let hour = 0; hour < 24; hour++) {
        const formattedHour = hour.toString().padStart(2, '0');
        const timeValue = `${formattedHour}:00`;
        timeOptions.push(
            <option key={timeValue} value={timeValue}>
                {formattedHour}:00
            </option>
        );
    }

    return (
        <form onSubmit={handleFormSubmit} className="appointment-form">
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                    type="tel"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="date">Select Date:</label>
                <input
                    type="date"
                    id="date"
                    value={selectedDate.toISOString().split('T')[0]} // Use ISO string for input value
                    onChange={(e) => setSelectedDate(new Date(e.target.value))}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="time">Select Time:</label>
                <select
                    id="time"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    required
                >
                    {timeOptions}
                </select>
            </div>
            <button type="submit">Book</button>
        </form>
    );
};

export default AppointmentForm;

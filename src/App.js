import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation';
import BookingConsultation from './Components/BookingConsultation';
import Notification from './Components/Notification/Notification';
import ReviewForm from './Components/ReviewForm/ReviewForm';
import Feedback from './Components/ReviewForm/Feedback';
import { ReviewProvider } from './Components/ReviewForm/ReviewContext';
import ProfileCard from './Components/ProfileCard/ProfileCard';
import ReportsLayout from './Components/ReportsLayout/ReportsLayout';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Notification>
            <Navbar />
            <ReviewProvider>
            
        
                <Routes>
                <Route path="/" element={<Landing_Page/>}/>
                <Route path="/Sign_Up" element={<Sign_Up/>} />
                <Route path="/Login" element={<Login/>} />
                <Route path="/instant-consultation" element={<InstantConsultation/>} />
                <Route path="/booking-consultation" element={<BookingConsultation/>} />
                <Route path="/ReviewForm" element={<ReviewForm/>} />
                <Route path="/Feedback/:doctorName?" element={<Feedback />} />
                <Route path="/ProfileCard" element={<ProfileCard />} />
                <Route path="/ReportsLayout" element={<ReportsLayout />} />

                </Routes>
            </ReviewProvider>
            </Notification>
        </BrowserRouter>
    
    </div>
  );
}

export default App;

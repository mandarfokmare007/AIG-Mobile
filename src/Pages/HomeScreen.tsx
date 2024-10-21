// src/pages/HomePage.js
import { useEffect, useState } from 'react';
import { BottomNav } from '../Components/BottomNav';
import Header from '../Components/Header';
import AIGLogo from '../assests/images/Logo.png';
import doctorImg from "../assests/images/doctor.png";

import { useNavigate } from 'react-router-dom';
import Appointment from "../assests/icons/Appointment.svg";
import HealthHistory from "../assests/icons/HealthHistory.svg";
import HealthTest from "../assests/icons/HealthTest.svg";
import homeCare from "../assests/icons/homeCare.svg";
import parcel from "../assests/icons/parcel.svg";
import vitals from "../assests/icons/vitals.svg";
import './HomeScreen.scss';


const HomePage = () => {
  const navigate = useNavigate();

    const [activeIndex, setActiveIndex] = useState(0);
    const items = [
      { id: 1, title: 'Consult with your doctor', content: 'Start consultation now' },
      { id: 2, title: 'Card 2', content: 'Content for Card 2' },
      { id: 3, title: 'Card 3', content: 'Content for Card 3' },
    ];
  
    // Automatically move to the next item every 3 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
      }, 3000);
  
      return () => clearInterval(interval); // Clear the interval on unmount
    }, [items.length]);
  return(
  <>
    <Header />
    <div className='container'>
    <h2 style={{ marginLeft: '20px', fontSize: '18px' }}>Our Services</h2>
    <div className="services-grid">
  <div className="service-card random-color1">
    <div className="icon-background"></div>
    <h3>Book Appointment</h3>
    <i className="icon"><img src={Appointment}></img></i> 
  </div>
  <div className="service-card random-color2">
    <div className="icon-background"></div>
    <h3>Health Package</h3>
    <i className="icon"><img src={parcel}></img></i>
  </div>
  <div className="service-card random-color3">
    <div className="icon-background"></div>
    <h3>Health Tests</h3>
    <i className="icon"><img src={HealthTest}></img></i>
  </div>
  <div className="service-card random-color4">
    <div className="icon-background"></div>
    <h3>Home Care</h3>
    <i className="icon"><img src={homeCare}></img></i>
  </div>
  <div className="service-card random-color4" onClick={()=>navigate('/health-history')}>
    <div className="icon-background"></div>
    <h3>My Health History</h3>
    <i className="icon"><img src={HealthHistory}></img></i>
  </div>
  <div className="service-card random-color6">
    <div className="icon-background"></div>
    <h3>My Vitals</h3>
    <i className="icon"><img src={vitals}></img></i>
  </div>
</div>

<div className="carousel">
      <div className="carousel-content" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {items.map((item) => (
          <div key={item.id} className={`carousel-card ${item.id === items[activeIndex].id ? 'active' : ''}`}>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="single-card">
      <img src={AIGLogo} alt="AIG" className="card-image" />
      <h2 className="card-title">Symtoms checker</h2>
    </div>
    <div>
      <h3>Top Consulted Doctors</h3>
      <div className="doctor-card">
        <img
          src={doctorImg}
          alt="Doctor"
        />
        <div className="doctor-info">
          <h4>Dr. Rupjyoti Talukdar</h4>
          <p>Director - Medical Gastroenterology</p>
          <p>10 years • 4.9 ⭐</p>
        </div>
        <button className='button'>Book</button>
      </div>
    </div>
    </div>
    <BottomNav />
  </>)
};

export default HomePage;

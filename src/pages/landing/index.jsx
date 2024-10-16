import React from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import EventsDisplay from './components/events';


const Home = () => {
  return (
    <div>
    <Navbar />
    <EventsDisplay />
    <Footer />
    </div>
  );
};

export default Home
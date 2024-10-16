import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MapPin, DollarSign } from 'lucide-react';

const EventCard = ({ event }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handlePaymentClick = () => {
    if (event && event.id) {
      navigate(`/payment`); // Navigate to payment page with event ID
    } else {
      console.error('Event ID is missing');
    }
  };

  // If no event prop is passed, return null (avoiding rendering errors)
  if (!event) {
    return null;
  }

  return (
    <motion.div
      className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-2xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Event Flyer Image */}
      <div
        className="relative h-full object-cover overflow-hidden inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out"
        style={{
          backgroundImage: `url(${event.image})`,
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-[#ffd700] opacity-80" />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
        <div>
          <h3 className="text-3xl font-bold mb-2 drop-shadow-lg">{event.name}</h3>
          <div className="flex items-center mb-2">
            <Calendar className="w-5 h-5 mr-2" />
            <span>{new Date(event.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-5 h-5 mr-2" />
            <span>{event.location}</span>
          </div>
        </div>

        {/* Ticket Prices */}
        <div>
          <div className="mb-4">
            <h4 className="text-xl font-semibold mb-2">Ticket Options</h4>
            <div className="flex flex-wrap gap-2">
              {event.prices.map((price, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-20 rounded-full px-4 py-1 backdrop-blur-sm"
                >
                  <span className="font-bold">${price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Purchase Tickets Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            onClick={handlePaymentClick}
          >
            <div className="flex items-center justify-center">
              <DollarSign className="w-5 h-5 mr-2" />
              <span>Purchase Tickets</span>
            </div>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;

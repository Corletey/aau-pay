// src/components/eventCard.jsx
import { useNavigate } from 'react-router-dom';

const EventCard = ({ event }) => {
  const navigate = useNavigate();
  
  const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div 
      onClick={() => navigate(`/event/${event.id}`)}
      className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer border border-gray-100"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={event.image} 
          alt={event.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#393464]/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <p className="text-white font-semibold">{formattedDate}</p>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-[#393464] mb-2 group-hover:text-[#4a4580] transition-colors">
          {event.name}
        </h3>
        
        <div className="flex items-center text-gray-600 mb-4">
          <svg className="w-5 h-5 mr-2 text-[#393464]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          {event.location}
        </div>

        {/* Price Tiers */}
        <div className="space-y-2">
          <p className="text-sm font-semibold text-[#393464]">Available Tickets:</p>
          <div className="grid grid-cols-3 gap-2">
            {event.prices.map((price, index) => (
              <div 
                key={index}
                className="bg-[#f8f8ff] rounded-lg p-2 text-center transition-colors hover:bg-[#393464]/5"
              >
                <p className="text-xs text-[#393464]/80 mb-1">Tier {index + 1}</p>
                <p className="text-sm font-bold text-[#393464]">${price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
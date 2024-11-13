import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const EventCard = ({ event }) => {
  const navigate = useNavigate();
  const [activeTooltip, setActiveTooltip] = useState(null);
  const eventDate = event.date ? new Date(event.date) : new Date();
  const formattedDate = eventDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
  const hasRates = event.rates && event.rates.length > 0;

  const handleCardClick = (e) => {
    // Prevent navigation if clicking on the tooltip area
    if (e.target.closest('.tooltip-trigger')) {
      e.stopPropagation();
      return;
    }
    navigate(`/event/${event.id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 flex flex-col h-full relative"
    >
      {/* Image Container - Fixed height */}
      <div className="relative h-48 w-full flex-shrink-0">
        <img
          src={event.image}
          alt={event.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#393464]/80 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4">
          <p className="text-white font-semibold">{formattedDate}</p>
        </div>
      </div>

      {/* Content Container - Flex column with justified content */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Title and Location - Fixed height section */}
        <div className="min-h-[120px]">
          <h3 className="text-xl font-bold text-[#393464] mb-3 line-clamp-2 group-hover:text-[#4a4580] transition-colors">
            {event.name}
          </h3>
          <div className="flex items-start text-gray-600">
            <svg className="w-5 h-5 mr-2 text-[#393464] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <span className="line-clamp-2">{event.location || 'Location TBA'}</span>
          </div>
        </div>

        {/* Pricing Section - Auto-adjusting grid */}
        {hasRates && (
          <div className="mt-auto pt-4 border-t border-gray-100">
            <p className="text-sm font-semibold text-[#393464] mb-2">Available Tickets:</p>
            <div className={`grid gap-2 ${
              event.rates.length === 1 ? 'grid-cols-1' :
              event.rates.length === 2 ? 'grid-cols-2' :
              'grid-cols-3'
            }`}>
              {event.rates.map((rate, index) => (
                <div
                  key={index}
                  className="tooltip-trigger relative"
                  onMouseEnter={() => setActiveTooltip(index)}
                  onMouseLeave={() => setActiveTooltip(null)}
                >
                  <div className="bg-[#f8f8ff] rounded-lg p-2 text-center transition-colors hover:bg-[#393464]/5">
                    <p className="text-xs text-[#393464]/80 mb-1 line-clamp-1">
                      {rate.description?.en?.split('–')[0].trim() || `Tier ${index + 1}`}
                    </p>
                    <p className="text-sm font-bold text-[#393464]">${rate.value}</p>
                  </div>
                  
                  {/* Tooltip */}
                  {activeTooltip === index && rate.description?.en && (
                    <div className="absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg p-2 text-sm">
                      <div className="text-gray-700">{rate.description.en}</div>
                      {/* Arrow */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-white border-r border-b border-gray-200"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCard;
import React, { useState } from 'react';
import EventCard from '../../../components/eventCard.jsx';
import K from '../../../constants/index.jsx';

const EventsDisplay = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter events based on search term
  const filteredEvents = K.eventsData.filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Upcoming Events</h2>
      
      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search events by name or location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Display filtered events or a message if no events found */}
      {filteredEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No events found matching your search.</p>
      )}
    </div>
  );
};

export default EventsDisplay;
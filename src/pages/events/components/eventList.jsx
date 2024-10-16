import { Link } from 'react-router-dom';
import K from '../constants';

function EventsList() {
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {K.eventsData.map(event => (
        <div key={event.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={event.image} alt={event.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">{event.name}</h2>
            <p className="text-gray-600 mb-4">{event.location} | {event.date}</p>
            <Link to={`/event/${event.id}`} className="text-blue-500 hover:underline">
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EventsList;

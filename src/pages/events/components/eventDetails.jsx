import K from '../../../constants/index.jsx';

const MoreDetails = ({ eventId }) => {
  const event = K.eventsData.find(event => event.id === parseInt(eventId));

  if (!event) {
    return <div className="p-10 text-center text-2xl">Event not found!</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-10">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={event.image} alt={event.name} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{event.name}</h1>
          <p className="text-gray-600 mb-4"><strong>Date:</strong> {event.date}</p>
          <p className="text-gray-600 mb-4"><strong>Location:</strong> {event.location}</p>
          <p className="text-gray-700 mb-4">{event.description}</p>
          <div className="text-gray-600 mb-4">
            <strong>Prices:</strong> {event.prices.join(', ')} USD
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreDetails;

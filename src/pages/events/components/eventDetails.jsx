import { useParams, useNavigate } from 'react-router-dom';
import K from '../../../constants/index.jsx';

const MoreDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = K.Eventdata.find(event => event.id === parseInt(id));

  if (!event) {
    return (
      <div className="min-h-screen bg-[#f8f8ff] flex flex-col items-center justify-center p-4">
        <div className="text-2xl font-bold text-[#393464] mb-4">Event not found!</div>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-[#393464] text-white rounded-lg hover:bg-[#4a4580] transition-colors"
        >
          Return to Events
        </button>
      </div>
    );
  }

  const formattedDate = new Date(event.createdAt).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-[#f8f8ff]">
      <div className="max-w-5xl mx-auto p-4 py-12">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="group mb-8 px-4 py-2 flex items-center text-[#393464] hover:text-[#4a4580] transition-colors"
        >
          <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
          </svg>
          Back to Events
        </button>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Hero Section */}
          <div className="relative h-80">
            <img 
              src={event.image} 
              alt={event.title.en} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#393464]/90 via-[#393464]/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <h1 className="text-4xl font-bold text-white mb-2">{event.title.en}</h1>
              <div className="flex items-center text-white/90">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                {event.location}
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Event Details */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#393464]/10 flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-[#393464]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Date</p>
                  <p className="font-semibold text-[#393464]">{formattedDate}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 items-center sm:ml-4">
                {event.rates.map((rate, index) => (
                  <div 
                    key={index}
                    className="bg-[#f8f8ff] rounded-lg px-4 py-2 text-sm font-semibold text-[#393464] border border-[#393464]/10 sm:text-base sm:px-6"
                  >
                    Tier {index + 1}: ${rate.value}
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#393464] mb-4">About the Event</h2>
              <div 
                className="text-gray-600 leading-relaxed" 
                dangerouslySetInnerHTML={{ __html: event.description.en }} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreDetails;

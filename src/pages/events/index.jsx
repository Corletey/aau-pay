// src/pages/events/index.jsx
import React from 'react';
import MoreDetails from './components/eventDetails.jsx';
import PaymentForm from './components/paymentForm';

const Payment = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <MoreDetails />
          <PaymentForm />
        </div>
      </div>
    </div>
  );
};

export default Payment;
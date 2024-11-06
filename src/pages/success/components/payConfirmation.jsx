import React from 'react';
import { CheckCircleIcon } from 'lucide-react';

const PaymentConfirmation = () => {
  return (
    <div className="min-h-screen bg-[#f8f8ff] flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center">
        <CheckCircleIcon className="text-green-500 w-16 h-16 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-[#393464] mb-2">Payment Successful</h1>
        <p className="text-gray-600 mb-8">Thank you for your purchase!</p>
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div>
            <p className="text-gray-600">Order Number</p>
            <p className="font-medium text-[#393464]">ABC123</p>
          </div>
          <div>
            <p className="text-gray-600">Total Amount</p>
            <p className="font-medium text-[#393464]">$99.99</p>
          </div>
          <div>
            <p className="text-gray-600">Payment Method</p>
            <p className="font-medium text-[#393464]">Visa ending in 1234</p>
          </div>
          <div>
            <p className="text-gray-600">Transaction Date</p>
            <p className="font-medium text-[#393464]">November 6, 2024</p>
          </div>
        </div>
        <button className="bg-[#393464] text-white rounded-lg px-6 py-3 hover:bg-[#4a4580] transition-colors">
          View Order Details
        </button>
      </div>
    </div>
  );
};

export default PaymentConfirmation;
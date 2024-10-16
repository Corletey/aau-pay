import React, { useState } from 'react';

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    ticketType: '',
    quantity: 1,
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    billingAddress: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg border border-yellow-300 mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-yellow-600">Register for Event</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 transition duration-200 ease-in-out p-2"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 transition duration-200 ease-in-out p-2"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 transition duration-200 ease-in-out p-2"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 transition duration-200 ease-in-out p-2"
          />
        </div>
        <div>
          <label htmlFor="ticketType" className="block text-sm font-medium text-gray-700">Ticket Type</label>
          <select
            id="ticketType"
            name="ticketType"
            value={formData.ticketType}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 transition duration-200 ease-in-out p-2"
          >
            <option value="">Select a ticket type</option>
            <option value="General Admission">General Admission - $20</option>
            <option value="VIP">VIP - $50</option>
          </select>
        </div>
        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            min="1"
            required
            className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 transition duration-200 ease-in-out p-2"
          />
        </div>
        <div>
          <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            required
            placeholder="1234 5678 9012 3456"
            className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 transition duration-200 ease-in-out p-2"
          />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">Expiry Date</label>
            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              required
              placeholder="MM/YY"
              className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 transition duration-200 ease-in-out p-2"
            />
          </div>
          <div>
            <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              required
              placeholder="123"
              className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 transition duration-200 ease-in-out p-2"
            />
          </div>
        </div>
        <div>
          <label htmlFor="billingAddress" className="block text-sm font-medium text-gray-700">Billing Address</label>
          <textarea
            id="billingAddress"
            name="billingAddress"
            value={formData.billingAddress}
            onChange={handleChange}
            required
            rows="3"
            className="mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 transition duration-200 ease-in-out p-2"
          ></textarea>
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
          >
            Complete Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;

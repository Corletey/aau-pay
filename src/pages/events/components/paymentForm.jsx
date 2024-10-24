// src/pages/events/components/paymentForm.jsx
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

  const inputClasses = "mt-1 block w-full rounded-lg border border-gray-300 shadow-sm focus:border-[#393464] focus:ring focus:ring-[#393464] focus:ring-opacity-20 transition duration-200 ease-in-out p-2";

  return (
    <div className="bg-white rounded-lg shadow-lg border border-[#393464] p-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#393464]">Register for Event</h2>
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
              className={inputClasses}
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
              className={inputClasses}
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
            className={inputClasses}
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
            className={inputClasses}
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
            className={inputClasses}
          >
            <option value="">Select a ticket type</option>
            <option value="tier1">Tier 1 - $800</option>
            <option value="tier2">Tier 2 - $1000</option>
            <option value="tier3">Tier 3 - $1500</option>
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
            className={inputClasses}
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
            className={inputClasses}
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
              className={inputClasses}
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
              className={inputClasses}
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
            className={inputClasses}
          ></textarea>
        </div>

        <div className="text-right">
          <button
            type="submit"
            className="px-6 py-3 bg-[#393464] text-white font-semibold rounded-lg shadow hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[#393464] focus:ring-opacity-50 transition duration-150 ease-in-out"
          >
            Complete Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
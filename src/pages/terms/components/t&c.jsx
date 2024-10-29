import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 text-gray-800 font-serif">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl">
        <div className="bg-gray-800 text-white py-4 px-8 text-center">
          <h1 className="text-4xl font-bold mb-2">Terms and Conditions</h1>
          <p className="text-gray-300 text-sm">Last updated: October 29, 2024</p>
        </div>

        <div className="px-12 py-6 space-y-8">
          {sections.map((section, index) => (
            <SectionCard key={index} title={section.title} content={section.content} />
          ))}
        </div>
      </div>
    </div>
  );
};

const SectionCard = ({ title, content }) => (
  <section className="bg-gray-50 rounded-lg p-8 transition-transform transform hover:scale-[1.02] hover:shadow-lg">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">{title}</h2>
    <p className="text-gray-600 leading-relaxed">{content}</p>
  </section>
);

const sections = [
  {
    title: "Overview",
    content:
      "The AAU payment platform is designed to facilitate secure and convenient online payments for various services and products offered by AAU. By using our payment platform, you agree to be bound by these terms and conditions, as well as any other guidelines or policies referenced herein."
  },
  {
    title: "Payment Information",
    content:
      "You are required to provide accurate and complete payment information, including your name, address, email, phone number, and payment details such as credit card information. You acknowledge that AAU is not responsible for any errors or incorrect information provided by you, and you agree to indemnify and hold AAU harmless from any damages or losses arising from such errors."
  },
  {
    title: "Payment Authorization",
    content:
      "By providing your payment information, you authorize AAU to charge your account for the amount due. You also acknowledge that AAU reserves the right to modify the amount charged or cancel a transaction at any time, for any reason."
  },
  {
    title: "Payment Queries",
    content:
      "Please contact us at paulos@aau.org or the email address provided on the product or service if you have any queries on your payment. Include your name, transaction details, etc."
  },
  {
    title: "Refunds and Cancellations",
    content:
      "Refunds and cancellations may be granted at AAU's discretion, subject to the specific terms and conditions applicable to the product or service for which you are making a payment. If you wish to request a refund or cancellation, please contact us at paulos@aau.org or the email address provided on the product or services you made payment for, and include your name, transaction details, and reason for the request. You acknowledge that certain products or services may not be eligible for refunds or cancellations, and that any refunds or cancellations may be subject to administrative fees or processing fees."
  },
  {
    title: "Security",
    content:
      "AAU takes reasonable measures to ensure the security and integrity of its payment platform, including the use of encryption technology and secure servers. However, you acknowledge that there are inherent risks associated with electronic transactions, and that AAU cannot guarantee the security of your payment information."
  },
  {
    title: "User Conduct",
    content:
      "You agree to use the AAU payment platform only for lawful purposes, and not to engage in any conduct that violates these terms and conditions or any applicable laws or regulations. You also agree not to interfere with or disrupt the operation of the payment platform, or to access or attempt to access any restricted areas of the platform without authorization."
  },
  {
    title: "Intellectual Property",
    content:
      "All content and materials on the AAU payment platform, including trademarks, logos, and copyrighted works, are the property of AAU or its affiliates, and may not be used or reproduced without the express written consent of AAU."
  },
  {
    title: "Disclaimer of Warranties",
    content:
      "AAU makes no warranties or representations of any kind, whether express or implied, with respect to the payment platform, including without limitation, warranties of merchantability, fitness for a particular purpose, or non-infringement of third-party rights."
  },
  {
    title: "Limitation of Liability",
    content:
      "AAU shall not be liable for any damages of any kind arising from or in connection with the use of the payment platform, including without limitation, direct, indirect, incidental, punitive, or consequential damages. You acknowledge that your use of the payment platform is at your own risk, and that AAU shall not be liable for any losses or damages arising from any errors or interruptions in the operation of the platform."
  },
  {
    title: "Governing Law and Jurisdiction",
    content:
      "These terms of use shall be governed by and construed in accordance with the laws of Ghana, without giving effect to any principles of conflicts of law. Any dispute arising out of or in connection with these terms of use shall be resolved exclusively in the courts of Ghana."
  },
  {
    title: "Termination",
    content:
      "AAU reserves the right to terminate your access to the payment platform at any time, without notice, for any reason whatsoever."
  },
  {
    title: "Modification of Terms and Conditions",
    content:
      "AAU reserves the right to modify these terms and conditions at any time, without notice. Your continued use of the payment platform following any such modifications shall constitute your acceptance of the revised terms and conditions."
  }
];

export default TermsAndConditions;
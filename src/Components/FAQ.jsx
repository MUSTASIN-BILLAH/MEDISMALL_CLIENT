import React, { useState } from "react";

const faqData = [
  {
    question: "How can I order medicines?",
    answer:
      "You can browse medicines on the website, add them to your cart, and complete the checkout process using your account.",
  },
  {
    question: "Do you deliver internationally?",
    answer:
      "Currently, we deliver only within the country. International shipping will be available soon.",
  },
  {
    question: "Can I return a medicine?",
    answer:
      "Yes, medicines can be returned within 7 days of delivery if unopened and in original condition.",
  },
  {
    question: "Is my payment secure?",
    answer:
      "Absolutely! We use secure payment gateways and encrypt all sensitive data to keep your payment safe.",
  },
  {
    question: "Do I need a prescription for all medicines?",
    answer:
      "No, some medicines can be bought over the counter, while others require a prescription from a registered doctor.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Yes, once your order is shipped, you will receive a tracking number to follow the delivery status.",
  },
  {
    question: "Are there any discounts available?",
    answer:
      "We regularly offer discounts and promotions. Check our homepage or subscribe to our newsletter for updates.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can contact us via the Contact Us page, email, or the chat feature available on the website.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-6  min-h-screen">
      <h2 className="text-3xl font-bold text-green-800 text-center mb-8">Frequently Asked Questions</h2>

      <div className="max-w-3xl mx-auto">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-white border-2 border-gray-400 rounded-lg mb-4 shadow hover:shadow-lg transition-shadow duration-300"
          >
            {/* Question */}
            <button
              className="w-full text-left p-4 flex justify-between items-center font-semibold text-green-800 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-green-600">{openIndex === index ? "-" : "+"}</span>
            </button>

            {/* Answer */}
            {openIndex === index && (
              <div className="p-4 border-t border-green-200 text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

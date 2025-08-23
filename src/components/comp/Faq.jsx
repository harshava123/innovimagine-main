import React, { useState } from 'react'

const faqData = [
  {
    question: 'What services does Grahmind offer?',
    answer: "Grahmind provides AI-powered digital solutions, including web and mobile app development, automation, data analytics, and custom AI integrations for businesses."
  },
  {
    question: 'How can AI benefit my business?',
    answer: "AI can automate repetitive tasks, provide data-driven insights, enhance customer experiences, and help your business innovate faster and more efficiently."
  },
  {
    question: 'Is Grahmind suitable for startups and enterprises?',
    answer: "Yes, we work with both startups and large enterprises, tailoring our solutions to fit your unique needs and scale as you grow."
  },
  {
    question: 'How do I get started with a project?',
    answer: "Simply contact us through our website or book a call. We'll discuss your goals and propose a tailored digital solution for your business."
  },
  {
    question: 'What technologies do you use?',
    answer: "We use modern technologies including React, Node.js, Python, cloud platforms, and the latest AI/ML frameworks to deliver robust and scalable solutions."
  }
]

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = idx => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section className="bg-white py-16 min-h-[60vh] flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full mx-auto">
        <h2 className="text-4xl font-sans text-black mb-10 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqData.map((item, idx) => (
            <div key={idx} className="border border-gray-200 rounded-xl bg-gray-50">
              <button
                className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none"
                onClick={() => toggle(idx)}
              >
                <span className="text-lg font-sans text-gray-900">{item.question}</span>
                <span className="text-2xl text-gray-600 transition-transform duration-200" style={{ transform: openIndex === idx ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                  +
                </span>
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-5 text-gray-700 text-base animate-fade-in">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq

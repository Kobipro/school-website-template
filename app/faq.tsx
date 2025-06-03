'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

interface FAQItemProps {
    question: string;
    answer: string;
    }


const FAQItem : React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-800 ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left"
      >
        <span className="text-xl font-medium">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex items-center justify-center"
        >
          <Plus className="w-6 h-6 " />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-neutral-600">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Faq = () => {
  const faqData = [
  {
      question: "What is Oobiiee and what services do you offer?",
      answer: "Oobiiee is a fintech platform that provides instant monthly loans to individuals in Ghana. Our goal is to empower financial stability with seamless and automated loan approvals."
    },
    {
      question: "How does Oobiiee's loan approval process work?",
      answer: "Our loan approval process is fully automated. Once you meet our eligibility criteria and complete your application, you receive an instant decision without the need for manual approval."
    },
    {
      question: "What are the requirements to qualify for a loan?",
      answer: "To qualify, you must be a registered Oobiiee member, have a valid Ghanaian ID, and maintain a good repayment history to access higher loan limits over time."
    },
    {
      question: "How does Oobiiee ensure loan security and fraud prevention?",
      answer: "We utilize advanced security protocols, data encryption, and AI-driven fraud detection to protect user information and ensure secure transactions."
    },
    {
      question: "What repayment options does Oobiiee offer?",
      answer: "You can repay your loan through mobile money (MTN MoMo, Vodafone Cash, AirtelTigo Money) or bank transfers. We provide flexible repayment schedules to suit your financial situation."
    },
    {
      question: "Are there any penalties for late repayments?",
      answer: "Yes, late repayments attract additional charges. To avoid penalties and maintain a good credit score, we encourage timely repayments."
    },
    {
      question: "Does Oobiiee offer credit score evaluations?",
      answer: "Yes, we assess your credit score based on your repayment history with us. Responsible borrowing and timely payments improve your creditworthiness over time."
    },
    {
      question: "How do I contact Oobiiee for support?",
      answer: "You can reach us via our support center on the Oobiiee app, email, or our official social media channels for quick assistance."
    }
  ];

  return (
    <div className=" 
    
    mx-auto 2xl:w-4/5 md:px-16
    
     px-6   py-16 pb-32 ">
      <h1 className="text-4xl font-bold mb-12 ">FAQ</h1>
      <div className="space-y-2">
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;
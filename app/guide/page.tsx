import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import WordFadeIn from "../wordFadeIn";

const LoanRegistrationGuide = () => {
  return (
    <div>
      <Navbar />
      <section className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <div className="flex items-center justify-center relative">
          <WordFadeIn
            className="text-3xl pt-20 lg:text-5xl font-semibold max-w-3xl mx-auto z-20"
            words="Step-by-Step Guide to Registering for a Loan"
          />
        </div>
        <p className="text-xl md:text-2xl my-6 md:w-4/5 mx-auto text-gray-500">
          Follow these steps to complete your registration and get a loan in minutes.
        </p>

        <div className="space-y-10 mt-10">
          {[
            "Create an Account",
            "Complete Your Personal Details",
            "Add Emergency Contact Information",
            "Provide Medical & Insurance Details",
            "Upload Identification",
            "Set Up Your Security Passkey",
            "Add Employment Details",
            "Choose Loan Type",
            "Specify Loan Amount",
            "Review Loan Terms & Conditions",
            "Submit Your Application",
            "Await Approval",
            "Accept Loan Agreement",
            "Loan Disbursement",
            "Start Repayment",
          ].map((step, index) => (
            <div key={index}>
              <h3 className="text-2xl lg:text-3xl font-semibold">{index + 1}. {step}</h3>
              <p className="text-xl md:text-2xl my-6 md:w-4/5 text-gray-500">
                {getStepDescription(index + 1)}
              </p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

const getStepDescription = (step) => {
  // const descriptions = {
  //   1: "Sign up with your email address and create a password to start the registration process.",
  //   2: "Check your inbox for a verification email and click the link to verify your email address.",
  //   3: "Fill out your personal details, including your full name, date of birth, and contact information.",
  //   4: "Provide your employment information, such as job title, company name, and salary details.",
  //   5: "Upload a valid government-issued ID for identity verification.",
  //   6: "Provide recent payslips or bank statements to verify your income.",
  //   7: "Connect your bank account to allow for seamless loan disbursement and repayments.",
  //   8: "Select the type of loan you need, whether it's a personal loan, emergency loan, or other.",
  //   9: "Enter the loan amount you wish to apply for, considering your eligibility.",
  //   10: "Carefully read and accept the terms and conditions associated with your loan.",
  //   11: "Click the 'Submit' button to send your loan application for review.",
  //   12: "Our team will review your application, and you’ll receive a notification once it's approved.",
  //   13: "Once approved, digitally sign the loan agreement to proceed with disbursement.",
  //   14: "Your approved loan will be disbursed directly into your linked bank account.",
  //   15: "Begin your loan repayment according to the agreed schedule. Manage your payments easily through our platform."
  // };
  const descriptions = {
    1: "Sign up with your email address, phone number, and create a password to start the registration process.",
    2: "Fill out your personal details, including your full name, date of birth, gender, and address.",
    3: "Provide emergency contact details, including the name and phone number of a trusted contact.",
    4: "Enter your medical and insurance details, including your primary physician, insurance provider, policy number, allergies, and medical history.",
    5: "Upload a valid government-issued ID (e.g., Ghana Card) for identity verification.",
    6: "Set up a security passkey to enhance your account security.",
    7: "Provide your employment details, such as your occupation.",
    8: "Select the type of loan you need, whether it's a personal loan, emergency loan, or other options.",
    9: "Enter the loan amount you wish to apply for, based on your financial needs.",
    10: "Carefully read and accept the terms and conditions associated with your loan.",
    11: "Click the 'Submit' button to send your loan application for review.",
    12: "Your application will be reviewed, and you’ll receive a notification once it's approved.",
    13: "Once approved, accept the loan agreement to proceed with disbursement.",
    14: "Your approved loan will be disbursed directly into your linked bank or mobile money account.",
    15: "Begin your loan repayment according to the agreed schedule. Manage your payments easily through our platform."
};

  return descriptions[step];
};

export default LoanRegistrationGuide;
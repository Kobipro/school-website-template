import Navbar from "../navbar";
import Footer from "../footer";
import WordFadeIn from "../wordFadeIn";


const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <section className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <div className="flex items-center justify-center relative">
          <WordFadeIn
            className="text-3xl pt-20 lg:text-5xl font-semibold max-w-3xl mx-auto md:text-center z-20"
            words="Privacy Policy"
          />
        </div>

        <p className="text-xl md:text-2xl my-6 md:w-4/5 mx-auto text-gray-500">
          At Oobiiee, we prioritize your privacy and are committed to protecting your personal data.
          This Privacy Policy outlines the data we collect, including identification, financial, and usage information,
          and our methods, such as direct collection or automated technologies. Your data is processed for loan applications,
          service improvement, compliance, fraud prevention, and marketing, based on contractual necessity, legal obligations,
          or consent. We ensure data security with encryption and retention policies, share data as required, and facilitate
          international transfers under safeguards. You have rights regarding your data access, correction, and deletion.
          Automated decisions, like loan assessments, are subject to human review on request. We use cookies for a better
          user experience and abide by regulations concerning children’s data. Updates to this policy will be communicated
          on our website. We adhere to international data protection standards, ensuring that your personal information
          is processed lawfully and transparently. All data processing is conducted with legitimate business interests,
          and we take all necessary steps to guarantee your rights are respected at every stage of the process.
          The data retention period depends on the nature and purpose of the information collected, but rest assured,
          data is kept only for as long as needed. In the event of a data breach, we have procedures in place to inform
          you and take appropriate measures to mitigate any potential harm. We do not sell or lease your personal
          information to third parties, and any data-sharing agreements we maintain with third-party service providers
          are strictly controlled. If you wish to withdraw your consent or make inquiries about our data practices,
          please reach out using the contact information provided below. We also provide an opt-out option for
          marketing communications, allowing you to manage your preferences. Our commitment to your privacy
          includes ongoing reviews of our practices and policies to stay in alignment with evolving regulatory
          requirements and technological advancements. By continuing to use our services, you acknowledge
          that you have read, understood, and accepted the terms outlined in this Privacy Policy.
        </p>
      </section>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
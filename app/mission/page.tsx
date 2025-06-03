import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import WordFadeIn from "../wordFadeIn";


const Mission = () => {
  return (
    <>
      <Navbar />
      <section className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <div className="flex items-center justify-center relative">
          <WordFadeIn
            className="text-3xl pt-20 lg:text-5xl font-semibold max-w-3xl mx-auto z-20"
            words="Our Mission"
          />
        </div>
        <p className="text-xl md:text-2xl my-6 md:w-4/5 mx-auto text-gray-500">
          Our mission at Oobiiee is to empower underserved communities across Africa by providing easy access to
          affordable financial solutions that cater to the unique needs of individuals and families. We recognize that
          countless people in Africa face financial barriers that prevent them from pursuing their dreams, building
          businesses, or improving their standard of living. These challenges are often compounded by traditional
          financial systems that require extensive documentation, credit history, or collateral—resources that many
          hardworking people simply do not have. At Oobiiee, we are committed to breaking down these barriers and
          offering a more inclusive, human-centered approach to financial services.
        </p>
        <p className="text-xl md:text-2xl my-6 md:w-4/5 mx-auto text-gray-500">
          We believe that access to financial resources should not be a privilege but a right for everyone who strives
          for a better life. That’s why we offer loans that are simple, transparent, and tailored to meet the needs of
          people at different stages of their financial journey. Our goal is not only to provide funds but to serve as
          a partner in progress, supporting individuals in realizing their full potential. We aim to equip them with
          the tools, resources, and financial literacy they need to manage their finances confidently and sustainably.
        </p>
        <p className="text-xl md:text-2xl my-6 md:w-4/5 mx-auto text-gray-500">
          We understand that in Africa, many people run small businesses, support families, or fund educational
          aspirations, and we seek to make those endeavors more attainable by offering loans without the traditional
          hurdles. Through our digital platform, we reach underserved populations, including those in rural areas,
          providing financial access where it’s needed the most. By leveraging technology, we make the loan process
          faster, more secure, and accessible to people from all walks of life.
        </p>
        <p className="text-xl md:text-2xl my-6 md:w-4/5 mx-auto text-gray-500">
          Our vision extends beyond just lending money; we aim to foster economic growth, reduce poverty, and build
          stronger communities across the continent. At Oobiiee, we are dedicated to transforming lives and empowering
          Africa's future, one loan at a time.
        </p>
      </section>
      <Footer />
    </>
  );
};

export default Mission;
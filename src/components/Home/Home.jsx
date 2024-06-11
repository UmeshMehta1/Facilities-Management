import React from "react";
import Header from "./Header/Header";
import Services from "./Our-Services/Services";
import Experts from "./Experts/Experts";
import Testimonial from "./Testimonial/Testimonial";
import Faq from "./CompanyFAQs/Faq";
function Home() {
  return (
    <>
      <Header />
      <Services />
      {/* <Experts /> */}
      <Testimonial />
      <Faq />
    </>
  );
}

export default Home;

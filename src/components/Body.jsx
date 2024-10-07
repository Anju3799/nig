import React from "react";
import Wrapper from "../assets/Wrapper";
import About from "./Section/About";
import Services from "./Section/Services";
import OtherServices from "./Section/OtherServices";
import Why from "./Section/Why";
import ContactUs from "./Section/ContactUs";
import Mission from "./Section/Mission";
import Vision from "./Section/Vision";
import Team from "./Section/Team";

function Body() {
  const content = [
    {
      sectionId: "aboutus",
      heading: "About Us",
      content: <About />,
    },
    {
      sectionId: "services",
      heading: "Our Services",
      content: <Services />,
    },
    {
      sectionId: "other-services",
      heading: "Other Services",
      content: <OtherServices />,
    },
    {
      sectionId: "why",
      heading: "Why Choose NIGlobal Tech?",
      content: <Why />,
    },
    {
      sectionId: "contactus",
      heading: "Contact Us",
      content: <ContactUs />,
    },
    {
      sectionId: "mission",
      heading: "Our Mission",
      content: <Mission />,
    },
    {
      sectionId: "vision",
      heading: "Our Vision",
      content: <Vision />,
    },
    {
      sectionId: "team",
      heading: "Our Team",
      content: <Team />,
    },
  ];
  return (
    <div className="lg:max-w-[1024px] m-auto px-5 lg:px-0">
      {content.map((item) => (
        <Wrapper sectionId={item.sectionId} key={item.sectionId}>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl mb-1 font-bold text-center md:text-left">{item.heading}</h1>
            {item.content}
          </div>
        </Wrapper>
      ))}
    </div>
  );
}

export default Body;

import React from "react";
import Column from "../Column";

function ContactUs() {
  return (
    <Column>
      <p>
        Ready to elevate your business with NIGlobal Tech? Contact us today to
        discuss how we can assist with IT consulting, product development,
        startup scaling, and SDLC support.
      </p>
      <ul className="list-disc pl-4">
        <li>Phone: [Your Phone Number]</li>
        <li>Email: [Your Email Address]</li>
        <li>Address: [Your Address]</li>
        <li>
          Contact Form:{" "}
          <a
            href="[Link to Contact Form]"
            className="text-blue-500 hover:underline"
          >
            [Link to Contact Form]
          </a>
        </li>
      </ul>
    </Column>
  );
}

export default ContactUs;

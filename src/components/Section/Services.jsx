import React from 'react'
import Column from '../Column'

function Services() {
  return (
    <Column>
        <div>
            <h2 className="text-lg mb-1 font-semibold">IT consulting</h2>
            <ul className="list-disc pl-4">
              <li>
                <p>
                  <span className="font-semibold">Strategic IT Planning:</span>
                  Develop and implement technology strategies that align with
                  your business objectives.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-semibold"> System Optimization:</span>
                  Enhance your existing IT systems to improve performance and
                  scalability.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-semibold">Cloud Solutions: </span>
                  Leverage cloud services to drive flexibility and
                  cost-efficiency.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-semibold">
                    IT Infrastructure Management:
                  </span>
                  Build and maintain a solid IT foundation to support your
                  growth.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg mb-1 font-semibold">Product Development</h2>
            <ul className="list-disc pl-4">
              <li>
                <p>
                  <span className="font-semibold">
                    Custom Software Development:
                  </span>
                  Create tailored software solutions designed to meet your
                  specific needs and challenges.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-semibold">Web Development:</span>
                  Develop dynamic, engaging websites that drive user engagement
                  and support business goals.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-semibold">Mobile App Development:</span>
                  Build user-friendly mobile applications for iOS and Android
                  platforms.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-semibold">UI/UX Design:</span>
                  Design intuitive and visually appealing interfaces to enhance
                  user experience.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-semibold">
                    {" "}
                    Prototyping & Testing :
                  </span>
                  Develop prototypes and conduct thorough testing to ensure
                  high-quality products.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg mb-1 font-semibold">SDLC Support</h2>
            <ul className="list-disc pl-4">
              <li>
                <p>
                  <span className="font-semibold">Requirement Analysis:</span>
                  Define and document project requirements to align with your
                  business goals.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-semibold">Design & Architecture:</span>
                  Craft detailed design and architectural plans for your
                  software projects.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-semibold">Development:</span>
                  Build scalable and effective solutions through efficient
                  development practices.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-semibold">
                    Testing & Quality Assurance:
                  </span>
                  Conduct rigorous testing to ensure reliability and
                  performance.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-semibold">Deployment:</span>
                  Oversee the successful launch of your software applications.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-semibold">Maintenance & Support:</span>
                  Provide ongoing maintenance and support to ensure long-term
                  success and reliability.
                </p>
              </li>
            </ul>
          </div>
    </Column>
  )
}

export default Services
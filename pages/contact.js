import React from "react";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import { useStateValue } from "../stateProvider";

function ContactPage() {
  const [{ darkmode }, dispatch] = useStateValue();
  return (
    <div
      data-theme={darkmode ? "forest" : "lemonade"}
      className={" overflow-hidden md:h-screen min-h-screen bg-base-100"}
    >
      <Navbar otherPage={true} />
      <div className="grid grid-cols-2">
        <div className="md:col-span-1 col-span-2 flex items-center justify-center relative md:h-screen">
          <div className="lg:left-36 left-10 md:absolute z-20 rounded-lg bg-base-200 lg:p-20 p-10 shadow-md mx-auto">
            <h2 className="my-10">
              Email:{" "}
              <span>
                <a
                  className="link link-primary"
                  href="mailto:Jejeniyi7@gmail.com"
                >
                  Jejeniyi7@gmail.com
                </a>
              </span>
            </h2>
            <h2 className="my-10">
              PhoneNumber:{" "}
              <span>
                <a className="link link-primary" href="tel:+2349130860401">
                  +2349130860401
                </a>
              </span>
            </h2>
          </div>

          <div className="side-contact h-full w-full blur-sm"></div>
        </div>
        <div className="md:col-span-1 col-span-2">
        <Contact />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;

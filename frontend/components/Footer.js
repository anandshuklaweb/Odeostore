import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-700 p-3 py-8 md:grid min-h-2: grid-cols-2 mt-10 lg:grid-cols-4">
        <div className="w-1/2 md:ml-5  md:w-3/4">
          <h1 className="text-teal-400 text-xl font-medium">Company</h1> <br />
          <p className="text-gray-300/80 text-base hover:text-teal-300 cursor-none">
            {" "}
            A123 Lost Street <br /> Chandigarh, PB 535022 <br /> India{" "}
          </p>{" "}
        </div>
        <div className="md:w-2/4 md:order-3 md:ml-5">
          <h1 className="text-teal-400 text-xl font-medium tracking-[0.030rem]">
            Useful Links
          </h1>
          <ul className="mt-2 text-base text-gray-300/80">
            <li>
              <i className="fa fa-chevron-right text-teal-400"></i>{" "}
              <a href="#" className="hover:text-teal-300">
                Home
              </a>
            </li>
            <li>
              <i className="fa fa-chevron-right text-teal-400"></i>{" "}
              <a href="#" className="hover:text-teal-300">
                About Us
              </a>
            </li>
            <li>
              <i className="fa fa-chevron-right text-teal-400"></i>{" "}
              <a href="#" className="hover:text-teal-300">
                Services
              </a>
            </li>
            <li>
              <i className="fa fa-chevron-right text-teal-400"></i>{" "}
              <a href="#" className="hover:text-teal-300">
                Terms of service
              </a>
            </li>
            <li>
              <i className="fa fa-chevron-right text-teal-400"></i>{" "}
              <a href="#" className="hover:text-teal-300">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>
        <div className=" md:w-3/4 md:order-4">
          <h1 className="text-teal-400 text-lg font-medium tracking-[0.030rem]">
            Our Services
          </h1>
          <ul className="mt-2 text-base text-gray-300/80">
            <li>
              <i className="text-xs fa fa-chevron-right text-teal-400"></i>{" "}
              <a href="#" className="hover:text-teal-300">
                Web Design
              </a>
            </li>
            <li>
              <i className="fa fa-chevron-right text-teal-400"></i>{" "}
              <a href="#" className="hover:text-teal-300">
                Web Development
              </a>
            </li>
            <li>
              <i className="fa fa-chevron-right text-teal-400"></i>{" "}
              <a href="#" className="hover:text-teal-300">
                Product Management
              </a>
            </li>
            <li>
              <i className="fa fa-chevron-right text-teal-400"></i>{" "}
              <a href="#" className="hover:text-teal-300">
                Marketing
              </a>
            </li>
            <li>
              <i className="fa fa-chevron-right text-teal-400"></i>{" "}
              <a href="#" className="hover:text-teal-300">
                Graphic Design
              </a>
            </li>
          </ul>
        </div>
        <div className="md:order-2 lg:order-last">
          <h1 className="text-teal-400 text-xl font-medium tracking-[0.030rem]">
            Join Our Newsletter
          </h1>
          <br />
          <p className="text-gray-300/80 text-base	 w-3/5 leading-7 mb-5 md:w-3/4">
            Join 25,000+ others and never miss out on new tips,tutorials, and
            more.
          </p>
        </div>
      </div>
      <div className="bg-gray-900 p-3 flex flex-col text-center md:flex-row md:justify-between md:space-y-0">
        <div className="flex mx-3 justify-between  md:flex-row text-gray-200 md:ml-5xl:ml-24">
          <p>
            @ Copyright <strong>Odeostore.</strong>All Rights Reserved
          </p>
        </div>
        <div className="flex mx-3 justify-between space-x-20 md:flex-row text-gray-200 md:space-x-28 md:ml-20 lg:ml-24 lg:space-x-[13rem] xl:space-x-72 xl:ml-24">
          <p>
            Designed by <span className="text-teal-400">Anand Shukla</span>
          </p>
        </div>
      </div>

      {/* <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script> */}
    </>
  );
};

export default Footer;

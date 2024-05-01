import { Link } from "react-router-dom";
import Logo from "../Logo";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaUpwork } from "react-icons/fa6";
import { Tooltip } from "react-tooltip";
import "./Footer.css";

function Footer() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  function scrollPageUp() {
    window.scrollTo(0, 0);
  }
  const socialMedia = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mohd-shoaib530/",
      icon: <FaLinkedin />,
    },
    {
      name: "GitHub",
      url: "https://github.com/MohdShoaib530",
      icon: <FaGithub />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/mohd.shoaib_91/",
      icon: <FaInstagram />,
    },
    {
      name: "Gmail",
      url: "mailto:mohdshoaib91530@gmail.com",
      icon: <BiLogoGmail />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/MohdShoaib915",
      icon: <FaTwitter />,
    },
    {
      name: "Upwork",
      url: "https://www.upwork.com/freelancers/~0102a4f512110275d7",
      icon: <FaUpwork />,
    },
  ];
  return (
    <>
      <section className="relative overflow-hidden py-10 bg-gray-400 border border-t-2 border-t-black">
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="-m-6 flex flex-wrap">
            <div className="w-full p-6 md:w-1/2 lg:w-2/12">
              <div className="h-full">
                <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                  Company
                </h3>
                <ul>
                  <li className="mb-4">
                    <Link
                      className=" text-base font-medium text-gray-900 hover:text-gray-700"
                      to="/"
                    >
                      Features
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className=" text-base font-medium text-gray-900 hover:text-gray-700"
                      to="/"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className=" text-base font-medium text-gray-900 hover:text-gray-700"
                      to="/"
                    >
                      Affiliate Program
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" text-base font-medium text-gray-900 hover:text-gray-700"
                      to="/"
                    >
                      Press Kit
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full p-6 md:w-1/2 lg:w-2/12">
              <div className="h-full">
                <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                  Support
                </h3>
                <ul>
                  <li className="mb-4">
                    <Link
                      className=" text-base font-medium text-gray-900 hover:text-gray-700"
                      to="/"
                    >
                      Account
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className=" text-base font-medium text-gray-900 hover:text-gray-700"
                      to="/"
                    >
                      Help
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className=" text-base font-medium text-gray-900 hover:text-gray-700"
                      to="/"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" text-base font-medium text-gray-900 hover:text-gray-700"
                      to="/"
                    >
                      Customer Support
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full p-6 md:w-1/2 lg:w-3/12">
              <div className="h-full">
                <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                  Legals
                </h3>
                <ul>
                  <li className="mb-4">
                    <Link
                      className=" text-base font-medium text-gray-900 hover:text-gray-700"
                      to="/"
                    >
                      Terms &amp; Conditions
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className=" text-base font-medium text-gray-900 hover:text-gray-700"
                      to="/"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" text-base font-medium text-gray-900 hover:text-gray-700"
                      to="/"
                    >
                      Licensing
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-gray-400 mt-5">
        <footer className="footer px-10 flex flex-col lg:flex-row justify-between items-center text-gray-800">
          <div>
            <p className="text-center ">
              &copy; {year} All rights reserved. Made with{" "}
              <span role="img" aria-label="heart">
                ❤️
              </span>{" "}
              by{" "}
              <button
                onClick={() => scrollPageUp()}
                className="text-blue-700"
                data-tooltip-id="on-top-tooltip"
                data-tooltip-content="On-Top"
                data-tooltip-place="top"
              >
                Mohd Shoaib
              </button>
              <Tooltip id="on-top-tooltip" />
            </p>
          </div>
          <nav className="md:place-self-center md:justify-self-end mb-2">
            <div className="grid grid-flow-col gap-5">
              {socialMedia.map((social, index) => (
                <li key={index} className="social-media-item">
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={social.name}
                    data-tooltip-place="top"
                    className="text-gray-800 text-3xl  relative ease-out hover:ease-in transition duration-300 transform hover:scale-110"
                  >
                    {social.icon}
                  </a>
                  <Tooltip id="my-tooltip" />
                </li>
              ))}
            </div>
          </nav>
        </footer>
      </div>
    </>
  );
}

export default Footer;

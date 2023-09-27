import React from "react";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <section className="relative py-12 md:py-24">
        <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row flex-wrap md:flex-nowrap items-center justify-between relative">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8">
            <h2 className="text-4xl mb-4">
              Do you want to grow your business?
            </h2>
            <p className="text-xl mb-6">Click below, we can do it together.</p>
            <Link
              href="/contact-us"
              className="bg-white text-primary px-6 py-2 rounded-full inline-flex items-center transition-transform duration-300 hover:-translate-y-1"
            >
              Contact Us
            </Link>
          </div>
          <div className="w-1/2 md:w-1/4">
            <Image
              src="https://staging.profici.co.uk/newprofici/wp-content/uploads/2023/08/contact-us.png"
              alt="Contact Us Image"
              width={500}
              height={300}
            />
          </div>
        </div>
      </section>
      <div className="container mx-auto bg-primary px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex items-center justify-start md:justify-center">
            <Image
              src="https://profici.co.uk/wp-content/uploads/2022/05/ProficiWhite.svg"
              alt="Profici Logo"
              width={128}
              height={64}
            />
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-lg">QUICK LINKS</h4>
            <ul className="space-y-2">
              {/* ... other links */}
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Digital Marketing Franchise
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Who We Are
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-lg">
              SIGN UP FOR OUR NEWSLETTER
            </h4>
            <input
              type="email"
              placeholder="Email Address"
              className="p-2 rounded w-full bg-white text-black"
            />
            <button className="mt-2 bg-white hover:bg-secondary text-black py-2 px-4 rounded w-full">
              Subscribe
            </button>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-lg">CONTACT US</h4>
            <address>
              Profici (NW) Ltd <br />
              Exchange Station <br />
              Tithebarn Street <br />
              Liverpool, L2 2QP <br />
              Phone: 0151 319 8550 <br />
              Email:{" "}
              <Link
                href="mailto:info@profici.co.uk"
                className="hover:underline"
              >
                info@profici.co.uk
              </Link>
            </address>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500">
        &copy; {new Date().getFullYear()} - Profici
      </div>
    </footer>
  );
};

export default Footer;

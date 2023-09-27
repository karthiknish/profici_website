import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
function HomePage() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const services = new Array(6).fill({
    image:
      "https://staging.profici.co.uk/newprofici/wp-content/uploads/2023/08/seo.png",
    title: "SEO",
    description:
      "Relevance and link popularity so its pages can become easily findable.",
  });

  const clients = new Array(12).fill(
    "https://staging.profici.co.uk/newprofici/wp-content/uploads/2022/04/KFC_logo.svg_.png"
  );

  return (
    <main>
      {/* First Section */}
      <motion.section
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
        transition={{ duration: 0.5 }}
        className="bg-primary text-white py-16 lg:py-24 relative overflow-hidden"
      >
        <div className="flex flex-wrap justify-center items-center px-12 lg:px-24 relative z-10">
          <div className="w-full md:w-1/2 px-8 text-center md:text-left">
            <p className="mb-4">
              Elevate, Engage, Excel: Your Journey Begins Here.
            </p>
            <h1 className="text-4xl mb-4">
              Your Digital Presence Is About To Take Off
            </h1>
            <p className="mb-6">
              Propelling businesses into the digital age by transforming clicks
              into loyal customers and driving unparalleled growth.
            </p>
            <a
              href="/about-us"
              className="bg-white text-primary px-6 py-2 rounded-full inline-flex items-center"
            >
              About Us
              {/* SVG Icon */}
            </a>
          </div>
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://staging.profici.co.uk/newprofici/wp-content/uploads/2023/08/Profici-Guys-Talking.png"
              alt="Profici Guys Talking"
              className="w-full max-w-sm mx-auto"
            />
          </div>
        </div>
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "30%",
            zIndex: 1,
          }}
        >
          <path
            d="M0 80 C40 60 30 30 100 0 L100 100 L0 100 Z"
            fill="white"
          ></path>
        </svg>
      </motion.section>

      {/* Second Section */}
      <motion.section
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap-reverse py-16 lg:py-24 px-12 lg:px-24"
      >
        <div className="w-full md:w-1/2 px-8">
          <img
            src="https://staging.profici.co.uk/newprofici/wp-content/uploads/2023/08/TomProficiEvent.png"
            alt="Tom at Profici Event"
            className="w-full max-w-sm mx-auto"
          />
        </div>
        <div className="w-full md:w-1/2 px-8">
          <p className="mb-4">
            Elevate, Engage, Excel: Your Journey Begins Here.
          </p>
          <h1 className="text-4xl mb-4">
            Your Digital Presence Is About To Take Off
          </h1>
          <p className="mb-6">
            Propelling businesses into the digital age by transforming clicks
            into loyal customers and driving unparalleled growth.
          </p>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
        transition={{ duration: 0.5 }}
        className="py-16 lg:py-24 px-12 lg:px-24 bg-gray-100"
      >
        <h2 className="text-center text-4xl mb-16">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform transition-transform duration-300 hover:-translate-y-2.5"
            >
              <img
                src={service.image}
                alt={service.title}
                className="mb-4 w-1/4 mx-auto"
              />
              <h3 className="font-bold text-xl mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Email Subscription Section */}
      <motion.section
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap py-16 lg:py-24 px-12 lg:px-24"
      >
        <div className="w-full lg:w-1/2 px-8 lg:pr-16">
          <p className="mb-4 text-lg">Your go-to marketing guide</p>
          <h1 className="text-4xl mb-6">
            Download your Free 26-Page Website Analysis Report
          </h1>
          <div className="flex flex-col md:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 flex-grow border rounded-l-md"
            />
            <button className="bg-primary text-white px-6 py-2 rounded-r-md">
              Download
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-8 lg:pl-16">
          <img
            src="https://staging.profici.co.uk/newprofici/wp-content/uploads/2023/08/Marketing-Phone-Graphic.png"
            alt="Marketing Phone Graphic"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </motion.section>

      {/* Clients Section */}
      <motion.section
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
        transition={{ duration: 0.5 }}
        className="py-16 bg-gray-100 lg:py-24 px-16 lg:px-32"
      >
        <h2 className="text-center text-4xl mb-16">Our Clients</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {clients.map((client, index) => (
            <div
              key={index}
              className="transform transition-transform duration-300 p-2"
            >
              <img
                src={client}
                alt="Client Logo"
                className="w-1/3 mx-auto filter grayscale hover:filter-none"
              />
            </div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}

export default HomePage;

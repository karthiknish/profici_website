import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import Head from "next/head";
const locations = [
  {
    title: "Liverpool (HQ)",
    company: "Profici (NW) Ltd",
    address: "Exchange Station, Tithebarn Street, Liverpool, L2 2QP",
    email: "info@profici.co.uk",
    phone: "0151 319 8550",
    iframe:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9513.222522697526!2d-2.990537!3d53.40936!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b219b7a79e385%3A0x980ae36515685322!2sProfici!5e0!3m2!1sen!2sin!4v1693584259168!5m2!1sen!2sin",
  },
  {
    title: "London",
    company: "Profici (NW) Ltd",
    address: "3rd Floor, 11 Argyll Street, London, W1F 7TH",
    email: "info@profici.co.uk",
    phone: "0151 319 8550",
    iframe:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9931.640900996319!2d-0.140707!3d51.514863!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d554c6c9f9%3A0xbff7bbb2654fd811!2s3rd%20Floor%2C%2011%20Argyll%20St%2C%20London%20W1F%207TH%2C%20UK!5e0!3m2!1sen!2sin!4v1693584389131!5m2!1sen!2sin",
  },
  {
    title: "Scotland",
    company: "Profici (NW) Ltd",
    address:
      "Office 37, Rosyth Business Centre, 16 Cromarty Campus, Rosyth, KY11 2WX",
    email: "info@profici.co.uk",
    phone: "0151 319 8550",
    iframe:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8918.230329795555!2d-3.44!3d56.026334000000006!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887d1cc2e22c4cf%3A0xabdb72be0ca7247e!2sRosyth%20Business%20Centre!5e0!3m2!1sen!2sin!4v1693585204138!5m2!1sen!2sin",
  },
  {
    title: "Mauritius",
    company: "Profici (NW) Ltd",
    address: "Altima 2 Building, Cybercity, Mauritius, 522333",
    email: "info@profici.co.uk",
    phone: "0151 319 8550",
    iframe:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29946.623855358546!2d57.48930000000001!3d-20.245228!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x217c5b1e46b602f5%3A0xf0d0d0b8a3ddfb97!2sAltima%20One%20Building!5e0!3m2!1sen!2suk!4v1693585163204!5m2!1sen!2suk",
  },
  {
    title: "Singapore",
    company: "Profici (NW) Ltd",
    address: "1 Scotts Road, Shaw Centre, Singapore, 228208",
    email: "info@profici.co.uk",
    phone: "0151 319 8550",
    iframe:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31910.25129833476!2d103.831847!3d1.306293!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da198d72215b75%3A0xab19185d9b377de4!2sShaw%20Centre!5e0!3m2!1sen!2suk!4v1693585237953!5m2!1sen!2suk",
  },
];

const ContactLocations = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    communication: false,
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formId = "d4a1232"; // replace with your form ID
      const url = `https://profici.co.uk/wp-json/contact-form-7/v1/contact-forms/${formId}/feedback`;

      const response = await axios.post(url, formData);

      if (response.data.status === "mail_sent") {
        console.log("Form submitted successfully");
        // Handle success
      } else {
        console.log("Form submission failed");
        // Handle error
      }
    } catch (error) {
      console.error("Error submitting form", error);
      // Handle error
    }
  };
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <motion.main
        className="p-8 min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h1 className="text-3xl font-bold text-center mb-6">Get in Touch</h1>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Image
            src="https://images.pexels.com/photos/7689684/pexels-photo-7689684.jpeg?cs=srgb&dl=pexels-jep-gambardella-7689684.jpg&fm=jpg"
            alt="Contact Image"
            className="w-full shadow-xl rounded-lg h-auto"
            layout="responsive"
            width={500}
            height={300}
          />
          <div className="bg-white p-8 shadow-md rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <h1 className="text-2xl mb-4">Contact Us</h1>
              <div className="flex flex-col space-y-4">
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="Name*"
                  required
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address*"
                  required
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                />
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Company"
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="How can we help?*"
                  required
                  rows="4"
                  className="px-4 py-2 border rounded-lg focus:outline-none focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                />
              </div>

              <div className="communication_terms mt-4">
                <input
                  type="checkbox"
                  name="communication"
                  id="communication"
                  checked={formData.communication}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                <label
                  htmlFor="communication"
                  className="inline-flex items-center"
                >
                  If you would like to receive further marketing communication
                  from Profici regarding our news, industry updates, events,
                  guides, training opportunities and our services, please tick
                  the box.
                </label>
              </div>
              {/* You need to handle recaptcha separately, as it can't be directly included like this */}
              <button
                type="submit"
                className="bg-secondary text-white px-6 py-2 rounded-full hover:bg-secondary-400 mt-4"
              >
                Get In Touch
              </button>
            </form>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center mb-6">Our Locations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((location) => (
            <section
              key={location.title}
              className="mb-12 rounded-lg shadow-xl p-4"
            >
              <iframe
                style={{ border: 0, width: "100%", height: "250px" }}
                frameBorder="0"
                allowFullScreen
                src={location.iframe}
              ></iframe>
              <h3 className="text-2xl font-bold mb-4">{location.title}</h3>
              <p className="mb-2">{location.company}</p>
              <address className="not-italic mb-4">{location.address}</address>
              <p>
                Email:{" "}
                <a
                  href={`mailto:${location.email}`}
                  className="text-blue-500 hover:underline"
                >
                  {location.email}
                </a>
              </p>
              <p>Phone: {location.phone}</p>
            </section>
          ))}
        </div>
      </motion.main>
    </>
  );
};

export default ContactLocations;

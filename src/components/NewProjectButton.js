import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import axios from "axios";
const NewProjectButton = () => {
  const [isOpen, setIsOpen] = useState(false);
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
      {/* Button Component */}
      <div className="fixed bottom-4 right-4 z-10">
        <button
          onClick={() => setIsOpen(true)}
          className="relative overflow-hidden bg-yellow-500 hover:bg-white hover:text-yellow-500 text-white p-4 rounded-full shadow-xl focus:outline-none w-36 h-36 flex items-center justify-center transform transition-transform duration-300 hover:scale-110"
        >
          <span className="font-bold"> Start New Project</span>
          <motion.svg
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            exit={{ rotate: 0 }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 100 100"
          >
            <path
              id="circlePath"
              d="M50,15 a35,35 0 1,1 0,70 a35,35 0 1,1 0,-70"
              fill="none"
            ></path>
            <text>
              <textPath
                style={{ fontSize: "0.5rem" }}
                xlinkHref="#circlePath"
                className="opacity-50"
              >
                <tspan x="0" dy="0">
                  ELEVATE YOUR BRAND
                </tspan>
                <tspan x="110%" dy="0">
                  ELEVATE YOUR BRAND
                </tspan>
              </textPath>
            </text>
          </motion.svg>
        </button>
      </div>

      {/* Modal Component */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center p-4 bg-black z-50 overflow-hidden"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg p-4 sm:p-6 max-w-full w-full sm:w-3/4 lg:w-1/2 max-h-screen overflow-y-auto flex flex-col"
            >
              <span
                onClick={() => setIsOpen(false)}
                className="absolute text-black top-4 right-4 cursor-pointer text-4xl p-10"
              >
                &times;
              </span>
              <div className="w-full p-2 sm:p-4 flex flex-col justify-center items-center">
                <h1 className="text-2xl sm:text-4xl text-center">
                  Let us help you get your project started
                </h1>
                <a
                  className="text-blue-500 text-sm sm:text-xl underline cursor-pointer"
                  href="mailto:info@profici.co.uk"
                >
                  info@profici.co.uk
                </a>
              </div>
              <div className="w-full p-2 sm:p-4">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-2 sm:space-y-4"
                >
                  <h1 className="text-xl sm:text-2xl mb-2">Contact Us</h1>
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
                      If you would like to receive further marketing
                      communication from Profici regarding our news, industry
                      updates, events, guides, training opportunities and our
                      services, please tick the box.
                    </label>
                  </div>
                  {/* You need to handle recaptcha separately, as it can't be directly included like this */}
                  <button
                    type="submit"
                    className="bg-secondary text-white px-4 sm:px-6 py-2 rounded-full hover:bg-secondary-400 mt-2 sm:mt-4"
                  >
                    Get In Touch
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NewProjectButton;

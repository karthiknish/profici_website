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
      <div className="fixed bottom-4 right-4 z-20">
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
              <textPath xlinkHref="#circlePath" className="text-xs opacity-50">
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
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 items-center justify-center p-4 bg-black z-50 overflow-hidden"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg p-6 w-full h-auto lg:h-full"
            >
              <span
                onClick={() => setIsOpen(false)}
                className="absolute text-black top-4 right-4 cursor-pointer text-4xl p-10"
              >
                &times;
              </span>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="yourName"
                  value={formData.yourName}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                />
                {/* Add other form fields similarly */}
                <button type="submit">Send</button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NewProjectButton;

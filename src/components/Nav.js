import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import Router from "next/router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Who We Are", href: "/who-we-are" },
    { name: "Business Consultancy", href: "/business-consultancy" },
    { name: "Digital Marketing Services", href: "/digital-marketing-services" },
    { name: "Web Design", href: "/web-design" },
    { name: "Resources", href: "/resources" },
  ];

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4 ">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white z-30"
          >
            {isOpen ? (
              <AiOutlineClose size={24} />
            ) : (
              <AiOutlineMenu size={24} />
            )}
          </button>
          <div className={`hidden lg:flex space-x-4`}>
            <Link href="/">
              <img
                src="https://profici.co.uk/wp-content/uploads/2022/05/ProficiWhite.svg"
                alt="Profici Logo"
                className="h-8 w-auto"
              />
            </Link>
            {navLinks.map((link) => (
              <Link
                className="text-white hover:text-gray-300"
                href={link.href}
                key={link.href}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <Link className="lg:hidden" href="/">
          <img
            src="https://profici.co.uk/wp-content/uploads/2022/05/ProficiWhite.svg"
            alt="Profici Logo"
            className="h-8 w-auto"
          />
        </Link>
        <motion.button
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={() => Router.push("/contact-us")}
          className="bg-secondary text-white px-6 py-2 rounded-full hover:bg-blue-400"
        >
          Get in Touch
        </motion.button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-20 bg-gray-800 bg-opacity-95 flex flex-col items-center justify-center lg:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
            onClick={() => setIsOpen(false)}
          >
            {navLinks.map((link) => (
              <Link
                className="text-white text-2xl mb-4"
                href={link.href}
                key={link.href}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

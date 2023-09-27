import "../styles/globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { AnimatePresence } from "framer-motion";
import NewProjectButton from "@/components/NewProjectButton";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <AnimatePresence mode="wait">
        <Nav />
        <Component {...pageProps} />
        <NewProjectButton />
        <Footer />
      </AnimatePresence>
    </>
  );
}

export default MyApp;

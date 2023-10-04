import "../styles/globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { AnimatePresence } from "framer-motion";
import NewProjectButton from "@/components/NewProjectButton";
import { QueryClient, QueryClientProvider } from "react-query";
import "react-loading-skeleton/dist/skeleton.css";
function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AnimatePresence mode="wait">
          <Nav />
          <Component {...pageProps} />
          <NewProjectButton />
          <Footer />
        </AnimatePresence>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;

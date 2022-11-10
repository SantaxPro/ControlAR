import { motion } from "framer-motion";
const NavigationBarContainer = ({ children }) => {
    return (
      <motion.nav
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}

        className="flex rounded-b-md bg-white fixed top-0 right-0 left-0
        drop-shadow-xl h-16 py-2 px-6 items-center justify-center"
      >
        {children}
      </motion.nav>
    );
  };

export default NavigationBarContainer;
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";

const BaseDialog = ({ isOpen, onClose, children }) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: -100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.55,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="fixed inset-0 flex items-center justify-center"
      >
        <Dialog.Panel>{children}</Dialog.Panel>
      </motion.div>
    </Dialog>
  );
};

export default BaseDialog;

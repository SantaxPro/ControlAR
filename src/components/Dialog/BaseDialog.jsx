import { Dialog } from "@headlessui/react";

 
const BaseDialog = ({ isOpen, onClose, children }) => {
    return (
      <Dialog open={isOpen} onClose={onClose}>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
        <div className="fixed inset-0 flex items-center justify-center">
          {children}
        </div>
      </Dialog>
    );
  };

export default BaseDialog;
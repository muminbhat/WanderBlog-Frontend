import React, { useState, useEffect } from "react";
import { Button, Modal } from "flowbite-react";

function PopupModal() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Use setTimeout to show the modal after a delay (e.g., 5 seconds)
    const timeout = setTimeout(() => {
      setShowModal(true);
    }, 5000); // 5000 milliseconds (5 seconds)

    // Clean up the timeout if the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      {/* The modal */}
      {showModal && (
        <Modal show={true} onClose={closeModal}>
          <Modal.Header>Under Development</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                I want to inform you that the Web Application is currently
                under development phase. While I am working hard to bring you an
                amazing online experience, please be aware that the site is not
                yet fully functional.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                During this development phase, you may encounter occasional
                changes and updates. I apologize for any inconvenience this may
                cause and appreciate your patience and understanding.
              </p>

              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                If you have any questions or need assistance, please feel free
                to contact me at{" "}
                <a
                  href="mailto:mumin.fayaz5050@gmail.com"
                  className="text-blue-500 hover:underline"
                >
                  mumin.fayaz5050@gmail.com
                </a>
                .
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={closeModal}>I accept</Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default PopupModal;

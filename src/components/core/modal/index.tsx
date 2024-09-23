import React from 'react';
import styles from './Modal.module.scss';

export interface ModalProps {
  isOpen: boolean; // Determines if the modal is open or closed
  onClose: () => void; // Function to handle closing the modal
  title?: string; // Optional title for the modal
  children: React.ReactNode; // The content to display inside the modal
  footer?: React.ReactNode; // Optional footer with action buttons
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, footer }) => {
  // If the modal is not open, don't render anything
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          {title && <h2 className={styles.modalTitle}>{title}</h2>}
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
        </div>
        <div className={styles.modalContent}>{children}</div>
        {footer && <div className={styles.modalFooter}>{footer}</div>}
      </div>
    </div>
  );
};

export default Modal;

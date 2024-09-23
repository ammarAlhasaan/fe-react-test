import React from 'react';
import {Modal} from "../../core";
import {useNavigate} from "react-router-dom";

interface DialogRouteProps {
  children: React.ReactNode;
  title?: string;
  footer?: React.ReactNode; // Optional footer with action buttons
}

const DialogRoute: React.FC<DialogRouteProps> = ({children, ...props}) => {
  let navigate = useNavigate();

  function onDismiss() {
    navigate(-1);
  }

  return (
    <Modal
      isOpen
      onClose={onDismiss}
      {...props}
    >
      {children}
    </Modal>
  );
};

export default DialogRoute;

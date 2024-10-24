import React from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineClose,
  AiOutlineCloseCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
  AiOutlineExclamationCircle,
} from "react-icons/ai";
import "./Toast.css";

const Toast = ({ message, type, onClose, position = "top-right" }) => {
  const icon = {
    success: <AiOutlineCheckCircle />,
    info: <AiOutlineInfoCircle />,
    warning: <AiOutlineWarning />,
    error: <AiOutlineExclamationCircle />,
  };

  return (
    <div className={`notification ${type} ${position}`}>
      <div className="notification-content">
        {icon[type]}
        <span>{message}</span>
      </div>
      <button onClick={onClose}>
        <AiOutlineClose />
      </button>
    </div>
  );
};

export default Toast;

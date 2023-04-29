import React, { ReactNode } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Type = 'success' | 'info' | 'warning' | 'error';

interface ToastProps {
  message: string;
  type: Type;
  children?: ReactNode;
  onTrigger?: () => void;
}

export const Toast = ({ message, type, children, onTrigger }: ToastProps) => {
  const notify = () => {
    switch (type) {
      case 'info':
        toast.info(message);
        break;
      case 'success':
        toast.success(message);
        break;
      case 'warning':
        toast.warning(message);
        break;
      case 'error':
        toast.error(message);
        break;
      default:
        toast(message);
        break;
    }
  };

  return (
    <div>
      {React.cloneElement(children as React.ReactElement, {
        onClick: () => {
          if (onTrigger) onTrigger();
          notify();
        },
      })}
      <ToastContainer theme={'colored'} />
    </div>
  );
};

/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { v4 as uuid } from 'uuid';
import Toast from '../components/Toast';

interface IToastContext {
  alerts?: Array<{ type: string; content: React.ReactChild }>;
  notify?: (
    content: string,
    type: 'success' | 'danger' | 'warning' | 'info'
  ) => void;
}

export const ToastContext = React.createContext<IToastContext>({
  alerts: [],
  notify: (content, type) => {
    console.log('');
  },
});

interface ToastContextProvider {
  children?: React.ReactNode;
}

export default function ToastContextProvider({
  children,
}: ToastContextProvider) {
  const [alerts, setAlerts] = React.useState([]);
  const notify = (
    content = '',
    type: 'success' | 'danger' | 'warning' | 'info'
  ) => {
    const id = uuid();
    setAlerts((_alerts) => [
      ..._alerts,
      {
        content,
        type,
        id,
        timeOut: setTimeout(() => {
          setAlerts((__alerts) => __alerts.filter((alert) => alert.id !== id));
        }, 6000),
      },
    ]);
  };
  const onDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const { id } = e.currentTarget.dataset;
    setAlerts((_alerts) => _alerts.filter((alert) => alert.id !== id));
  };
  return (
    <ToastContext.Provider value={{ alerts, notify }}>
      <div
        className="fixed py-4 px-4 md:px-0 top-0 right-0 w-full md:w-1/4 z-30"
        style={{
          zIndex: 200,
        }}
      >
        <AnimatePresence>
          {alerts.map((alert) => (
            <motion.div
              key={alert.id}
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1.0 }}
              exit={{
                opacity: 0,
                scale: 0.5,
                transition: { duration: 0.2 },
              }}
              transition={{ type: 'spring', stiffness: 100 }}
            >
              <Toast
                key={alert.id}
                type={alert.type}
                content={alert.content}
                id={alert.id}
                onClick={onDelete}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {children}
    </ToastContext.Provider>
  );
}

import { useContext } from 'react';
import { ToastContext } from '../context/ToastContext';

export default function useNotify() {
  const { notify } = useContext(ToastContext);
  return notify;
}

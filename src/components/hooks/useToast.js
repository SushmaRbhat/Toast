import { useCallback, useState } from "react";

export const useToast = () => {
  const [toast, setToast] = useState({
    message: "",
    type: "",
    visible: false,
  });
  let timer;

  const triggerToast = useCallback(
    (message, type = "info", duration = 3000) => {
      clearTimeout(timer);
      setToast({ message, type, visible: true });
      timer = setTimeout(() => {
        setToast({ visible: false });
      }, duration);
    },
    []
  );

  const closeToast = useCallback(() => {
    setToast({ visible: false });
  }, []);

  return { toast, triggerToast, closeToast };
};

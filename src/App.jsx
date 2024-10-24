import { useState } from "react";
import "./App.css";
import Toast from "./components/Toast";
import { useToast } from "./components/hooks/useToast";

function App() {
  const { toast, triggerToast, closeToast } = useToast();
  const { message, type, visible } = toast;

  return (
    <div className="app">
      <h1>Toast</h1>
      <div className="button-container">
        <button
          onClick={() => triggerToast("This is success message", "success")}
        >
          Show Success
        </button>
        <button onClick={() => triggerToast("This is info message", "info")}>
          Show Info
        </button>
        <button
          onClick={() => triggerToast("This is warning message", "warning")}
        >
          Show Warning
        </button>
        <button onClick={() => triggerToast("This is error message", "error")}>
          Show Error
        </button>
      </div>

      {visible ? (
        <Toast
          message={message}
          type={type}
          onClose={closeToast}
          position={"top-right"}
        />
      ) : null}
    </div>
  );
}

export default App;

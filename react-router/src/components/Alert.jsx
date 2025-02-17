import { useAlert } from "../context/AlertContext";

const Alert = () => {
  const { alertMessage, hideAlert } = useAlert();

  if (!alertMessage) return null;

  return (
    <div className="alert">
      <p>{alertMessage}</p>
      <button onClick={hideAlert}>✖</button>
    </div>
  );
};

export default Alert;

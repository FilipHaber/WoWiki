import PropTypes from "prop-types";

import "../assets/styles/scss/Toast.scss";

function Toast({ message, onCloseOverlay }) {
  return (
    <div className="toast-overlay" onClick={onCloseOverlay}>
      <p className="toast">{message}</p>
    </div>
  );
}

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  onCloseOverlay: PropTypes.func.isRequired,
};

export default Toast;

import PropTypes from "prop-types";

import "../assets/styles/scss/Toast.scss";

function ConfirmationToast({ message, onCloseOverlay, onCancel, onConfirm }) {
  return (
    <div className="toast-overlay" onClick={onCloseOverlay}>
      <div className="toast">
        <p>{message}</p>
        <button className="confirm-button" onClick={onConfirm}>
          Confirmer
        </button>
        <button className="cancel-button" onClick={onCancel}>
          Annuler
        </button>
      </div>
    </div>
  );
}

ConfirmationToast.propTypes = {
  message: PropTypes.string.isRequired,
  onCloseOverlay: PropTypes.func.isRequired,
  deleteSubmitHandler: PropTypes.func.isRequired,
};

export default ConfirmationToast;

import { useEffect } from "react";

const Popup = ({ isOpen, name, onClose, children }) => {

  useEffect(() => {

    if (!isOpen) return;

    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', closeByEscape)

    return () => document.removeEventListener('keydown', closeByEscape)

  }, [isOpen, onClose])

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
        onClose();
    }
  }

  return (
    <div className={`popup popup_${name} ${isOpen ? "popup_opened" : ""}`} onClick={handleOverlay}>
      <div className={`popup__container ${name === "image" ? "popup__container_type_image" : ""}`}>
        <button type="button" onClick={onClose} aria-label="Закрыть окно" className="popup__close-button"></button>
        {children}
      </div>
    </div>
  );
};

export default Popup;

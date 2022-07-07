function PopupWithForm ({title, name, children, isOpen, buttonName, onClose, onSubmit}) {

  return (
    <div className={`popup popup_${name} ${isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <button type="button" onClick={onClose} aria-label="Закрыть окно" className="popup__close-button"></button>
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form" action="#" name={name} onSubmit={onSubmit}>
          {children}
          <button type="submit" className="popup__submit-button">{buttonName}</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;

function InfoTooltip ({ loggedIn, isOpen, onClose }) {

  return (
    <div className={`popup popup_infoTooltip ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <button
          type="button"
          onClick={onClose}
          aria-label="Закрыть окно"
          className="popup__close-button"
        ></button>
        <div className={`popup__status-image ${!loggedIn && "popup__status-image_error"}`}></div>
        <p className="popup__message">
          {loggedIn ? (
            <>Вы&nbsp;успешно зарегистрировались!</>
          ) : (
            <>Что-то пошло не&nbsp;так! Попробуйте ещё раз.</>
          )}
        </p>
      </div>
    </div>
  );
}

export default InfoTooltip;

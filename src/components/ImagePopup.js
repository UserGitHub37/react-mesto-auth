function ImagePopup ({card, onClose}) {

  return (
    <div className={`popup popup_image ${card && 'popup_opened'}`}>
      <div className="popup__container popup__container_type_image">
        <button type="button" onClick={onClose} aria-label="Закрыть окно" className="popup__close-button"></button>
        <img src={card?.link} alt="Увеличенное фото места" className="popup__enlarged-image"/>
        <h2 className="popup__title popup__title_type_image">{card ? card.name : ''}</h2>
      </div>
    </div>
  );
}

export default ImagePopup;

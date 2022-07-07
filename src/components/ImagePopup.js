import Popup from './Popup';

function ImagePopup ({card, onClose}) {

  return (
    <Popup isOpen={Boolean(card)} name="image" onClose={onClose}>
      <img src={card?.link} alt="Увеличенное фото места" className="popup__enlarged-image"/>
      <h2 className="popup__title popup__title_type_image">{card ? card.name : ''}</h2>
    </Popup>
  );
}

export default ImagePopup;

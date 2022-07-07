import Popup from './Popup';

function PopupWithForm ({title, name, children, isOpen, buttonName, onClose, onSubmit}) {

  return (
    <Popup isOpen={isOpen} name={name} onClose={onClose}>
      <h2 className="popup__title">{title}</h2>
      <form className="popup__form" action="#" name={name} onSubmit={onSubmit}>
        {children}
        <button type="submit" className="popup__submit-button">{buttonName}</button>
      </form>
    </Popup>
  );
}

export default PopupWithForm;

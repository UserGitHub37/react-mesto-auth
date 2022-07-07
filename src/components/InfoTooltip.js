import Popup from './Popup';

function InfoTooltip ({ isRegistered, isOpen, onClose }) {

  return (
    <Popup isOpen={isOpen} name="infoTooltip" onClose={onClose}>
      <div className={`popup__status-image ${!isRegistered && "popup__status-image_error"}`}></div>
      <p className="popup__message">
        {isRegistered ? (
          <>Вы&nbsp;успешно зарегистрировались!</>
        ) : (
          <>Что-то пошло не&nbsp;так! Попробуйте ещё раз.</>
        )}
      </p>
    </Popup>
  );
}

export default InfoTooltip;

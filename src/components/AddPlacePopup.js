import { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup ({ isOpen, onClose, onAddPlace, isLoading }) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  useEffect(() => {
    setName('');
    setLink('');
  }, [isOpen]);

  function handleChangeName (e) {
    setName(e.target.value);
  }

  function handleChangeLink (e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name,
      link
    });
  }

  return (
    <PopupWithForm title='Новое место' name='place' isOpen={isOpen} buttonName={ isLoading ? 'Сохранение...' : 'Создать' } onClose={onClose} onSubmit={handleSubmit}>
      <input className="popup__input popup__input_field_name-place" id="name-place-input" type="text" name="placeName" placeholder="Название" minLength="2" maxLength="30" required value={name ? name : ''} onChange={handleChangeName}/>
      <span className="popup__error-message name-place-input-error"></span>
      <input className="popup__input popup__input_field_link-place" id="link-place-input" type="url" name="placeImageLink" placeholder="Ссылка на картинку" required value={link ? link : ''} onChange={handleChangeLink}/>
      <span className="popup__error-message link-place-input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;

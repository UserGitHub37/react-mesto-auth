import { useContext } from 'react';
import Card from './Card';
import { CurrentUserContext } from '../../src/contexts/CurrentUserContext';

function Main ({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, cards, onCardLike, onCardDelete }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="content page__content">

        <section className="profile">
          <div className="profile__image-wrapper">
              <img src={currentUser.avatar} alt="Картинка пользователя" className="profile__image"/>
              <button type="button" onClick={onEditAvatar} aria-label="Редактировать фото профиля" className="profile__image-edit-button"></button>
          </div>
          <div className="profile__text-wrapper">
            <h1 className="profile__name">{currentUser.name}</h1>
            <p className="profile__info">{currentUser.about}</p>
          </div>
          <button type="button" onClick={onEditProfile} aria-label="Редактировать профиль" className="profile__edit-button"></button>
          <button type="button" onClick={onAddPlace} aria-label="Добавить изображение" className="profile__add-button"></button>
        </section>

        <section className="elements content__elements" aria-label="Фотографии различных мест">
          <ul className="elements__wrapper">

            {cards.map((card) => (
              <Card
                key={card._id}
                card={card}
                onCardClick={onCardClick}
                onCardLike={onCardLike}
                onCardDelete={onCardDelete}
              />
            ))}

          </ul>
        </section>

      </main>
  );
}

export default Main;

import { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../src/contexts/CurrentUserContext';

import '../index.css';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Login from './Login';
import Register from './Register';
import ProtectedRoute from './ProtectedRoute';

import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import InfoTooltip from './InfoTooltip';

import api from '../utils/api';
import apiAuth from '../utils/apiAuth'

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cardToDelete, setCardToDelete] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('email@mail.com');
  const [isRegistered, setIsRegistered] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    handleTokenCheck();
  }, [])

  useEffect(() => {
    if (loggedIn) {
      api.getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch(err => console.log(err));

      api.getCardList()
      .then((initialCards) => {
        setCards(initialCards);
      })
      .catch(err => console.log(err));
    }
  }, [loggedIn]);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    .catch(err => console.log(err));
  }

  function handleCardDelete(e) {
    e.preventDefault();
    setIsLoading(true);
    api.deleteCard(cardToDelete._id).then(() => {
      setCards((state) => state.filter((c) => c._id !== cardToDelete._id));
      closeAllPopups();
    })
    .catch(err => console.log(err))
    .finally(() => {
      setIsLoading(false);
    });
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsInfoTooltipPopupOpen(false);
    setSelectedCard(null);
    setCardToDelete(null);
  }

  function handleEditAvatarClick () {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick () {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick () {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick (card) {
    setSelectedCard(card);
  }

  function handleUpdateAvatar (inputData) {
    setIsLoading(true);
    api.setUserAvatar(inputData)
    .then((userData) => {
      setCurrentUser(userData);
      closeAllPopups();
    })
    .catch(err => console.log(err))
    .finally(() => {
      setIsLoading(false);
    });
  }

  function handleUpdateUser (inputData) {
    setIsLoading(true);
    api.setUserInfo(inputData)
    .then((userData) => {
      setCurrentUser(userData);
      closeAllPopups();
    })
    .catch(err => console.log(err))
    .finally(() => {
      setIsLoading(false);
    });
  }

  function handleAddPlaceSubmit (inputData) {
    setIsLoading(true);
    api.addCard(inputData)
    .then((newCard) => {
      setCards([newCard, ...cards]);
      closeAllPopups();
    })
    .catch(err => console.log(err))
    .finally(() => {
      setIsLoading(false);
    });
  }

  function handleRegister(data) {
    apiAuth.register(data)
    .then(() => {
      setIsRegistered(true);
      navigate('/signin');
    })
    .catch((err) => {
      setIsRegistered(false);
      console.log(err);
    })
    .finally(() => setIsInfoTooltipPopupOpen(true))
  }

  function handleLogin(data) {
    apiAuth.authorize(data)
    .then((res) => {
      localStorage.setItem('token', res.token);
      setLoggedIn(true);
      setEmail(data.email);
      navigate('/');
    })
    .catch(err => console.log(err));
  }

  function handleSignOut () {
    localStorage.removeItem('token');
    setLoggedIn(false);
    navigate('/signin');
  }

  function handleTokenCheck() {

    if(localStorage.getItem('token')) {
      apiAuth.checkToken(localStorage.getItem('token'))
      .then((res) => {
        setEmail(res.data.email);
        setLoggedIn(true);
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
    }

  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Header loggedIn={loggedIn}>
                <span className="header__menu-item header__menu-item_type_email">{email}</span>
                <button
                  type="button"
                  className="header__menu-item header__menu-item_type_button"
                  onClick={handleSignOut}
                >
                  Выйти
                </button>
              </Header>
              <Main
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onCardClick={handleCardClick}
                cards={cards}
                onCardLike={handleCardLike}
                onCardDelete={setCardToDelete}
              />
              <Footer />
            </ProtectedRoute>
          }
        />

        <Route
          path="/signin"
          element={
            <>
              <Header loggedIn={loggedIn}>
                <Link to="/signup" className="header__menu-item header__menu-item_type_link">
                  Регистрация
                </Link>
              </Header>
              <Login buttonName="Войти" onLogin={handleLogin} />
              <Footer />
            </>
          }
        />

        <Route
          path="/signup"
          element={
            <>
              <Header loggedIn={loggedIn}>
                <Link to="/signin" className="header__menu-item header__menu-item_type_link">
                  Войти
                </Link>
              </Header>
              <Register buttonName="Зарегистрироваться" onRegister={handleRegister}/>
              <Footer />
            </>
          }
        />

        <Route path="*" element={<div style={{color: "#fff"}}>404 Page not found</div>} />
      </Routes>

      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
        isLoading={isLoading}
      />

      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
        isLoading={isLoading}
      />

      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onAddPlace={handleAddPlaceSubmit}
        isLoading={isLoading}
      />

      <PopupWithForm
        title="Вы уверены?"
        name="confirmation"
        isOpen={Boolean(cardToDelete)}
        buttonName={ isLoading ? "Удаление..." : "Да" }
        onClose={closeAllPopups}
        onSubmit={handleCardDelete}
      />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      <InfoTooltip isRegistered={isRegistered} isOpen={isInfoTooltipPopupOpen} onClose={closeAllPopups} />

    </CurrentUserContext.Provider>
  );
}

export default App;

import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from "../utils/Api";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({name: '', link: ''});
  const [currentUser, setCurrentUser] = React.useState('');

  React.useEffect(() => {
    api.getUserInfo()
    .then(data => {
      setCurrentUser(data);
    })
    .catch(console.error)
  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  };
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  };
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  };
  function handleCardClick(selectedCard) {
    setSelectedCard(selectedCard);
  };
  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({name: '', link: ''});
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main 
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        
        <PopupWithForm 
          title="Редактировать профиль"
          name="profile"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          buttonText="Сохранить"
        >
          <input id="name-input" className="popup__input popup__input_type_name" name="name" placeholder="Имя" type="text" minLength="2" maxLength="40" required />
          <span className="popup__input-error name-input-error"></span>
          <input id="about-input" className="popup__input popup__input_type_about" name="about" placeholder="О себе" type="text" minLength="2" maxLength="200" required />
          <span className="popup__input-error about-input-error"></span>
        </PopupWithForm>
        <PopupWithForm 
          title="Новое место"
          name="card"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          buttonText="Создать"
        >
          <input id="place-input" className="popup__input popup__input_type_place" name="name" placeholder="Название" type="text" minLength="2" maxLength="30" required />
          <span className="popup__input-error place-input-error"></span>
          <input id="link-input" className="popup__input popup__input_type_link" name="link" placeholder="Ссылка на картинку" type="url" required />
          <span className="popup__input-error link-input-error"></span>
        </PopupWithForm>
        <PopupWithForm
          title="Обновить аватар"
          name="avatar"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          buttonText="Сохранить"
        >
          <input id="avatar-input" className="popup__input popup__input_type_avatar" name="avatar" placeholder="Ссылка на картинку" type="url" required />
          <span className="popup__input-error avatar-input-error"></span>
        </PopupWithForm>
        <PopupWithForm 
          title="Вы уверены?"
          name="confirm"
          buttonText="Да"
        />
        <ImagePopup 
          card={selectedCard}
          onClose={closeAllPopups} 
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

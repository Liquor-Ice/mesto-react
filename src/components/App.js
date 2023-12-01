import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import api from "../utils/Api";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({name: '', link: ''});
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
    .then(data => {
      setCurrentUser(data)
    })
    .catch(console.error);

    api.getInitialCards()
      .then(data => {
        setCards(data)
      })
      .catch(console.error);
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
  function handleUpdateUser(data) {
    api.setUserInfo(data).then((newData) => {
      setCurrentUser(newData);
      closeAllPopups();
    })
    .catch(console.error)
  };
  function handleUpdateAvatar(data) {
    api.changeAvatar(data).then((newData) => {
      setCurrentUser(newData);
      closeAllPopups();
    })
    .catch(console.error)
  }
  function handleAddPlaceSubmit(card) {
    api.addCard(card).then((newCard) => {
      setCards([newCard, ...cards]);
      closeAllPopups();
    })
    .catch(console.error)
  };
  
  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({name: '', link: ''});
  }

  function handleCardLike(card) {
    // Проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    .catch(console.error);
  }
  function handleCardDelete(card) {
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.deleteCard(card._id).then(() => {
        setCards((state) => state.filter((c) => {return c._id !== card._id}));
    })
    .catch(console.error);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main 
          cards={cards}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
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

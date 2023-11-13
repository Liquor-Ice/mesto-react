import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);

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
    setSelectedCard(false);
  }

  return (
    <>
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
        >
          <input id="name-input" className="popup__input popup__input_type_name" name="name" placeholder="Имя" type="text" minLength="2" maxLength="40" required />
          <span className="popup__input-error name-input-error"></span>
          <input id="about-input" className="popup__input popup__input_type_about" name="about" placeholder="О себе" type="text" minLength="2" maxLength="200" required />
          <span className="popup__input-error about-input-error"></span>
          <button className="popup__button popup__button_disabled page__button" type="submit" aria-label="сохранить изменения" disabled>Сохранить</button>
        </PopupWithForm>
        <PopupWithForm 
          title="Новое место"
          name="card"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input id="place-input" className="popup__input popup__input_type_place" name="name" placeholder="Название" type="text" minLength="2" maxLength="30" required />
          <span className="popup__input-error place-input-error"></span>
          <input id="link-input" className="popup__input popup__input_type_link" name="link" placeholder="Ссылка на картинку" type="url" required />
          <span className="popup__input-error link-input-error"></span>
          <button className="popup__button popup__button_disabled page__button" type="submit" aria-label="создать карточку" disabled>Создать</button>
        </PopupWithForm>
        <PopupWithForm
          title="Обновить аватар"
          name="avatar"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input id="avatar-input" className="popup__input popup__input_type_avatar" name="avatar" placeholder="Ссылка на картинку" type="url" required />
          <span className="popup__input-error avatar-input-error"></span>
          <button className="popup__button popup__button_disabled page__button" type="submit" aria-label="создать карточку" disabled>Сохранить</button>
        </PopupWithForm>
        <PopupWithForm 
          title="Вы уверены?"
          name="confirm"
        >
          <button className="popup__button page__button" type="button" aria-label="удалить карточку">Да</button>
        </PopupWithForm>
        <ImagePopup 
          card={selectedCard}
          onClose={closeAllPopups} 
        />

        <template id="card-template">
          <article className="card">
            <img src="#" alt="#" className="card__image" />
            <button className="card__delete page__button" type="button" aria-label="удалить карточку"></button>
            <div className="card__description">
              <h2 className="card__title page__overflow">#</h2>
              <div className="card__like-group">
                <button className="card__like page__button" type="button" aria-label="нравится"></button>
                <p className="card__like-counter">0</p>
              </div>
            </div>
          </article>
        </template>
      </div>
    </>
  );
}

export default App;

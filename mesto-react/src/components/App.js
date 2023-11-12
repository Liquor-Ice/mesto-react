import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Main />
        <Footer />
        
        <div className="popup popup_type_profile" aria-label="Редактирование профиля">
          <div className="popup__container">
            <button className="popup__close page__button" type="button" aria-label="закрыть форму"></button>
            <h2 className="popup__title">Редактировать профиль</h2>
            <form action="#" className="popup__form" name="profileForm" method="post" noValidate>
              <input id="name-input" className="popup__input popup__input_type_name" name="name" placeholder="Имя" type="text" minLength="2" maxLength="40" required />
              <span className="popup__input-error name-input-error"></span>
              <input id="about-input" className="popup__input popup__input_type_about" name="about" placeholder="О себе" type="text" minLength="2" maxLength="200" required />
              <span className="popup__input-error about-input-error"></span>
              <button className="popup__button popup__button_disabled page__button" type="submit" aria-label="сохранить изменения" disabled>Сохранить</button>
            </form>
          </div>
        </div>
        <div className="popup popup_type_card" aria-label="Создание карточки">
          <div className="popup__container">
            <button className="popup__close page__button" type="button" aria-label="закрыть форму"></button>
            <h2 className="popup__title">Новое место</h2>
            <form action="#" className="popup__form" name="cardForm" method="post" noValidate>
              <input id="place-input" className="popup__input popup__input_type_place" name="name" placeholder="Название" type="text" minLength="2" maxLength="30" required />
              <span className="popup__input-error place-input-error"></span>
              <input id="link-input" className="popup__input popup__input_type_link" name="link" placeholder="Ссылка на картинку" type="url" required />
              <span className="popup__input-error link-input-error"></span>
              <button className="popup__button popup__button_disabled page__button" type="submit" aria-label="создать карточку" disabled>Создать</button>
            </form>
          </div>
        </div>
        <div className="popup popup_type_image" aria-label="Фото">
          <div className="popup__container popup__image-container">
            <button className="popup__close page__button" type="button" aria-label="закрыть фото"></button>
            <img className="popup__image" src="#" alt="фото" />
            <h2 className="popup__subtitle"></h2>
          </div>
        </div>
        <div className="popup popup_type_avatarChange" aria-label="Обновить аватар">
          <div className="popup__container">
            <button className="popup__close page__button" type="button" aria-label="закрыть форму"></button>
            <h2 className="popup__title">Обновить аватар</h2>
            <form action="#" className="popup__form" name="cardForm" method="post" noValidate>
              <input id="avatar-input" className="popup__input popup__input_type_avatar" name="avatar" placeholder="Ссылка на картинку" type="url" required />
              <span className="popup__input-error avatar-input-error"></span>
              <button className="popup__button popup__button_disabled page__button" type="submit" aria-label="создать карточку" disabled>Сохранить</button>
            </form>
          </div>
        </div>
        <div className="popup popup_type_confirm">
          <div className="popup__container">
            <button className="popup__close page__button" type="button" aria-label="закрыть форму"></button>
            <h2 className="popup__title">Вы уверены?</h2>
            <button className="popup__button page__button" type="button" aria-label="удалить карточку">Да</button>
          </div>
        </div>

        <template id="card-template">
          <article className="card">
            <img src="#" alt="#" className="card__image" />
            <button className="card__delete page__button" type="button" aria-label="удалить карточку"></button>
            <div className="card__description">
              <h2 className="card__title page__overflow"></h2>
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

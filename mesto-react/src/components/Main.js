function Main() {
  function handleEditAvatarClick() {
    document.querySelector('.popup_type_avatarChange').classList.add('popup_opened');
  };

  function handleEditProfileClick() {
    document.querySelector('.popup_type_profile').classList.add('popup_opened');
  };

  function handleAddPlaceClick() {
    document.querySelector('.popup_type_card').classList.add('popup_opened');
  };

  return (
    <main className="content page__container">
      <section className="profile">
        <div className="profile__avatar-container" onClick={handleEditAvatarClick}></div>
        <img src="#" alt="аватарка" className="profile__avatar" />
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__name page__overflow">Северин Бакле</h1>
            <button className="profile__edit page__button" type="button" onClick={handleEditProfileClick} aria-label="редактировать профиль"></button>
          </div>
          <p className="profile__about page__overflow">Картограф виртуальных миров</p>
        </div>
        <button className="profile__add-button page__button" type="button" onClick={handleAddPlaceClick} aria-label="добавить место"></button>
      </section>
      <section className="elements" aria-label="Места">
        
      </section>
    </main>
  )
};

export default Main;
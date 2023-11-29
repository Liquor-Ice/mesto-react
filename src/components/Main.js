import React from "react";
import api from "../utils/Api";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
  const currentUser = React.useContext(CurrentUserContext);

  const [cards, setCards] = React.useState([]);

  const mapCards = cards => {
    return cards.map(item => ({
      id: item._id,
      link: item.link,
      name: item.name,
      likes: item.likes,
      owner: item.owner,
    }))
  };

  React.useEffect(() => {
    api.getInitialCards()
      .then(data => {
        setCards(mapCards(data))
      })
      .catch(console.error)
  }, [])

  return (
    <main className="content page__container">
      <section className="profile">
        <div className="profile__avatar-container" onClick={onEditAvatar}></div>
        <img src={currentUser.avatar} alt="аватарка" className="profile__avatar" />
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__name page__overflow">{currentUser.name}</h1>
            <button className="profile__edit page__button" type="button" onClick={onEditProfile} aria-label="редактировать профиль"></button>
          </div>
          <p className="profile__about page__overflow">{currentUser.about}</p>
        </div>
        <button className="profile__add-button page__button" type="button" onClick={onAddPlace} aria-label="добавить место"></button>
      </section>
      <section className="elements" aria-label="Места">
        {cards.map((item) => (
          <Card 
            key={item.id} 
            card={item}
            onCardClick={onCardClick}
          />
        ))}
      </section>
    </main>
  )
};

export default Main;
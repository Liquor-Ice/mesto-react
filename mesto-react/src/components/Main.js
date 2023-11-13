import React from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
  const [userName, setUserName] = React.useState('Северин');
  const [userDescription, setUserDescription] = React.useState('Картограф');
  const [userAvatar, setUserAvatar] = React.useState('');
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

  React.useEffect(()=>{
    api.getUserInfo()
      .then(info => {
        setUserName(info.name);
        setUserDescription(info.about);
        setUserAvatar(info.avatar);
      })
      .catch(error => {
        console.log('Error', error)
      })
  },[])

  React.useEffect(() => {
    api.getInitialCards()
      .then(data => {
        setCards(mapCards(data))
      })
      .catch(error => {
        console.log('Error', error)
      })
  }, [])

  return (
    <main className="content page__container">
      <section className="profile">
        <div className="profile__avatar-container" onClick={onEditAvatar}></div>
        <img src={userAvatar} alt="аватарка" className="profile__avatar" />
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__name page__overflow">{userName}</h1>
            <button className="profile__edit page__button" type="button" onClick={onEditProfile} aria-label="редактировать профиль"></button>
          </div>
          <p className="profile__about page__overflow">{userDescription}</p>
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
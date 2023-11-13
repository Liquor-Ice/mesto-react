function Card({card, onCardClick}) {
  function handleClick() {
    onCardClick(card);
  } 

  return (
    <article className="card">
      <img src={card.link} alt={card.name} className="card__image" onClick={handleClick} />
      <button className="card__delete page__button" type="button" aria-label="удалить карточку"></button>
      <div className="card__description">
        <h2 className="card__title page__overflow">{card.name}</h2>
        <div className="card__like-group">
          <button className="card__like page__button" type="button" aria-label="нравится"></button>
          <p className="card__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </article>
  )
};

export default Card;
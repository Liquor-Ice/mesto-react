
function ImagePopup() {
  return (
    <div className="popup popup_type_image" aria-label="Фото">
      <div className="popup__container popup__image-container">
        <button className="popup__close page__button" type="button" aria-label="закрыть фото"></button>
        <img className="popup__image" src="#" alt="фото" />
        <h2 className="popup__subtitle">#</h2>
      </div>
    </div>
  )
};

export default ImagePopup;
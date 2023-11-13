
function PopupWithForm({title, name, children, isOpen, onClose}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`} aria-label={title}>
      <div className="popup__container">
        <button className="popup__close page__button" type="button" onClick={onClose} aria-label="закрыть форму"></button>
        <h2 className="popup__title">{title}</h2>
        <form action="#" className="popup__form" name={name} method="post" noValidate>
          {children}
        </form>
      </div>
    </div>
  )
};

export default PopupWithForm;
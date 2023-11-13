
function PopupWithForm({title, name, children, isOpen, onClose, buttonText}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`} aria-label={title}>
      <div className="popup__container">
        <button className="popup__close page__button" type="button" onClick={onClose} aria-label="закрыть форму" />
        <h2 className="popup__title">{title}</h2>
        <form action="#" className="popup__form" name={name} method="post">
          {children}
          <button className="popup__button popup__button_disabled page__button" type="submit" aria-label={buttonText} disabled>{buttonText}</button>
        </form>
      </div>
    </div>
  )
};

export default PopupWithForm;
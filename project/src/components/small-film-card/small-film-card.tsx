interface FilmPreview {
  name: string,
  previewImage: string,
  videoLink: string,
}

function SmallFilmCard (props : FilmPreview) : JSX.Element {
  const {
    previewImage,
    name,
    videoLink,
  } = props;
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card_image">
        <img src={ previewImage } alt={ name } width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href={ videoLink }>{ name }</a>
      </h3>
    </article>
  );
}

export default SmallFilmCard;

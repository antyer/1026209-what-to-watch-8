import React from 'react';
import SmallFilmCard from '../small-film-card/small-film-card';

type FilmPreview = {
  name: string,
  previewImage: string,
  videoLink: string,
}

type FilmPreviewListProps = {
  filmsCount: number
}

function FilmPreviewList ({ filmsCount } : FilmPreviewListProps) : JSX.Element {

  const filmPreview : FilmPreview = {
    name: 'Fantastic Beasts: The Crimes of Grindelwald',
    previewImage: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    videoLink: 'film-page.html',
  };

  const filmPreviewList : FilmPreview[] = [];
  for (let i = 0; i < filmsCount; i++) {
    filmPreviewList.push(filmPreview);
  }

  return (
    <React.Fragment>
      {filmPreviewList.map( (item, i) => <SmallFilmCard key={Math.random() * 1000 } {...item}></SmallFilmCard>)}
    </React.Fragment>
  );
}

FilmPreviewList.defaultProps = {
  filmsCount : 8,
};

export default FilmPreviewList;

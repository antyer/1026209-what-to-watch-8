//import Main from '../main/main';
//import MoviePage from '../movie-page/movie-page';
//import MyList from '../my-list/my-list';
//import SignIn from '../sign-in/sign-in';
import AddReview from '../add-review/add-review';
/*
interface Film {
  name: string,
  posterImage: string,
  previewImage: string,
  backgroundImage: string,
  videoLink: string,
  genre: string,
  released: number,
}

const film : Film = {
  name: 'The Grand Budapest Hotel',
  posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
  previewImage: 'img/the-grand-budapest-hotel-poster.jpg',
  backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
  videoLink: 'https://some-link',
  genre: 'Comedy',
  released: 2014,
};
*/
function App(): JSX.Element {
  return (
    //<Main {...film}></Main>
    //<MoviePage {...film}></MoviePage>
    //<MyList></MyList>
    //<SignIn></SignIn>
    <AddReview></AddReview>
  );
}

export default App;

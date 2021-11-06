import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Main from '../main/main';
import MoviePage from '../movie-page/movie-page';
import MyList from '../my-list/my-list';
import SignIn from '../sign-in/sign-in';
import AddReview from '../add-review/add-review';
import Player from '../player/player';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Main}>
        </Route>
        <Route path='/login' exact component={SignIn}>
        </Route>
        <Route path='/mylist' exact component={MyList}>
        </Route>
        <Route path='/films/:id?' exact component={MoviePage}>
        </Route>
        <Route path='/films/:id/review' exact component={AddReview}>
        </Route>
        <Route path='/player/:id' exact component={Player}>
        </Route>
        <Route
          render={() => (
            <React.Fragment>
              <h1>
                404.
                <br />
                <small>Page not found</small>
              </h1>
              <Link to="/">Go to main page</Link>
            </React.Fragment>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import Main from '../main/main';
import MoviePage from '../movie-page/movie-page';
import MyList from '../my-list/my-list';
import SignIn from '../sign-in/sign-in';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import {AppRoute, AuthorizationStatus} from '../const/const';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.Main} exact component={Main}>
        </Route>
        <Route path={AppRoute.SignIn} exact component={SignIn}>
        </Route>
        <Route path={AppRoute.MoviePage} exact component={MoviePage}>
        </Route>
        <Route path={AppRoute.AddReview} exact component={AddReview}>
        </Route>
        <Route path={AppRoute.Player} exact component={Player}>
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => <MyList />}
          authorizationStatus={AuthorizationStatus.Auth}
        >
        </PrivateRoute>
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

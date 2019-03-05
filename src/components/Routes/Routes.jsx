import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  browserHistory,
} from 'react-router-dom';
import Header from 'components/Header/Header';
import Menu from 'components/Menu/Menu';
import Dashboard from 'components/Dashboard/Dashboard';
import Colors from 'components/Colors/Colors';
import Buttons from 'components/Buttons/Buttons';
import Titles from 'components/Titles/Titles';
import Media from 'components/Media/Media';

const Routes = () => (
  <Router history={browserHistory}>
    <Fragment>
      <Header appName="LESS Style Library Documentation" />
      <main>
        <aside className="sidebar">
          <Menu />
        </aside>
        <Route exact path="/" component={Dashboard} />
        <Route path="/colors" component={Colors} />
        <Route path="/titles" component={Titles} />
        <Route path="/buttons" component={Buttons} />
        <Route path="/media-queries" component={Media} />
      </main>
    </Fragment>
  </Router>
);

export default Routes;

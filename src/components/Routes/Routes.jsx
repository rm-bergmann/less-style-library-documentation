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
import Form from 'components/Form/Form';

const Routes = () => (
  <Router history={browserHistory}>
    <Fragment>
      <Header appName="LESS Style Library Documentation" />
      <Menu />
      <main>
        <Route exact path="/" component={Dashboard} />
        <Route path="/colors" component={Colors} />
        <Route path="/titles" component={Titles} />
        <Route path="/buttons" component={Buttons} />
        <Route path="/media-queries" component={Media} />
        <Route path="/form" component={Form} />
      </main>
      <aside className="sidebar">Sidebar Content</aside>
    </Fragment>
  </Router>
);

export default Routes;

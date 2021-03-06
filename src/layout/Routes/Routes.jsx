import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  browserHistory,
} from 'react-router-dom';
import Header from 'layout/Header/Header';
import Footer from 'layout/Footer/Footer';
import Menu from 'layout/Menu/Menu';
import Dashboard from 'components/Dashboard/Dashboard';
import Colors from 'components/Colors/Colors';
import Button from 'components/Button/Button';
import Titles from 'components/Titles/Titles';
import Media from 'components/Media/Media';
import Inputs from 'components/Inputs/Inputs';
import Textareas from 'components/Textareas/Textareas';
import Selects from 'components/Selects/Selects';
import Grid from 'components/Grid/Grid';
import Position from 'components/Position/Position';
import Border from 'components/Border/Border';
import Display from 'components/Display/Display';
import Hide from 'components/Hide/Hide';
import Font from 'components/Font/Font';
import Gradients from 'components/Gradients/Gradients';
import Shapes from 'components/Shapes/Shapes';

const Routes = () => (
  <Router history={browserHistory}>
    <>
      <Header appName="Less Style Library Documentation" />
      <Menu />
      <main>
        <Route exact path="/" component={Dashboard} />
        <Route path="/colors" component={Colors} />
        <Route path="/titles" component={Titles} />
        <Route path="/button" component={Button} />
        <Route path="/media-queries" component={Media} />
        <Route path="/inputs" component={Inputs} />
        <Route path="/textareas" component={Textareas} />
        <Route path="/selects" component={Selects} />
        <Route path="/grid" component={Grid} />
        <Route path="/position" component={Position} />
        <Route path="/border" component={Border} />
        <Route path="/display" component={Display} />
        <Route path="/hide" component={Hide} />
        <Route path="/font" component={Font} />
        <Route path="/gradients" component={Gradients} />
        <Route path="/shapes" component={Shapes} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  </Router>
);

export default Routes;

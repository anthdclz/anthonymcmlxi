import React from 'react';
import HomePage from './pages/home-page/home-page.component';
import ResumePage from './pages/resume-page/resume-page.component';
import ChartIndicatorsPage from './pages/chart-indicators-page/chart-indicators-page.component';
import VideoGameDesignPage from './pages/video-game-design-page/video-game-design-page.component';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { GlobalStyle } from './global.styles';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
<BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/resume' component={ResumePage} />
          <Route exact path='/chart-indicators' component={ChartIndicatorsPage} />
          <Route exact path='/video-game-design' component={VideoGameDesignPage} />
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

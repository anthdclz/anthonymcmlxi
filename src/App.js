import React from 'react';
import HomePage from './pages/home-page/home-page.component';
import ResumePage from './pages/resume-page/resume-page.component';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { GlobalStyle } from './global.styles';

class App extends React.Component {
  render() {
    const { match } = this.props;
    return (
      <div className="App">
        <GlobalStyle />
<BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact resume='/resume' component={ResumePage} />
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

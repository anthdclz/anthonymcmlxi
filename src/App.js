import React from 'react';
import HomePage from './pages/home-page/home-page.component';
import { Route, Switch } from 'react-router-dom';

import { GlobalStyle } from './global.styles';

const TempPage = () => (
  <div><h1>Temp Page</h1></div>
);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/temp' component={TempPage} />
        </Switch>
      </div>
    );
  }
}

export default App;

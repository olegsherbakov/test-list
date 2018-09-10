import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Application from './app/Application';

if (module.hot) {
  ReactDOM.render(
    <AppContainer>
      <Application />
    </AppContainer>,
    document.getElementById('app')
  );

  module.hot.accept('./app/Application', () => {
    const App = require('./app/Application').default

    ReactDOM.render(
      <AppContainer>
        <App/>
      </AppContainer>,
      document.getElementById('app')
    );
  });
} else {
  ReactDOM.render(<Application />, document.getElementById('app'));
}
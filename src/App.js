import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home';
import ProgressLine from './components/ProgessLine/ProgressLine';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <header className="header">
          <Header />
          <ProgressLine />
        </header>

        <Home />

      </BrowserRouter>
    </Provider>
  );
}

export default App;

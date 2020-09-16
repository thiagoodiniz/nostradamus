import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home';
import ProgressLine from './components/ProgessLine/ProgressLine';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
  return (
    <Provider store={ store }>
      <DndProvider backend={HTML5Backend}>
        <BrowserRouter>
          <header className="header">
            <Header />
            <ProgressLine />
          </header>

          <Home />

        </BrowserRouter>
      </DndProvider>
    </Provider>
  );
}

export default App;

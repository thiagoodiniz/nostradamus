import React from 'react';
import Header from './components/Header/Header';
import ProgressLine from './components/ProgessLine/ProgressLine';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Trainings from './components/Trainings/Trainings';
import MyModels from './components/MyModels/MyModel';

function App() {
  return (
    <>
      <BrowserRouter>
        <header className="header">
          <Header />
          <ProgressLine />
        </header>

        <div className="content">
          <Switch>
              <Redirect exact from="/" to="/trainings" />
              <Route path="/trainings" component={ Trainings }/>
              <Route path="/models" component={ MyModels } />
          </Switch>
        </div>

      </BrowserRouter>
    </>
  );
}

export default App;

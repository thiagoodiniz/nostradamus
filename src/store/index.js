import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(sagas);

export default store;
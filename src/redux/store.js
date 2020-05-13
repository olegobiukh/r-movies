import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from "redux-saga";
import reducer from './reducer';
import mySaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const stores = createStore(reducer, applyMiddleware(sagaMiddleware));

export default stores;
sagaMiddleware.run(mySaga);

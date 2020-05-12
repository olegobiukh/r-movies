import { createStore } from 'redux';
import reducers from '../reducers';

const stores = createStore(reducers);

export default stores;


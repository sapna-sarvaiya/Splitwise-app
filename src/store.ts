import { legacy_createStore as createStore } from 'redux';
import rootReducer from './store/reducer';


//check if redux dev tool extension is installed by user and if yes use that
// const composeEnhancers = process.env.NODE_ENV === 'development' && reduxDevTools ? reduxDevTools : compose;

const store = createStore(rootReducer);

export default store;

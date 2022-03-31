import {applyMiddleware, combineReducers, createStore} from 'redux';
import {preloaderReducer, resultReducer} from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {RootState} from './types';

const initialState: RootState = {
  preloader: false,
  result: null,
};

const rootReducer = combineReducers({
  preloader: preloaderReducer,
  result: resultReducer,
});

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;

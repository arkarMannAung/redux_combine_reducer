import { legacy_createStore as createStore, combineReducers, applyMiddleware, legacy_createStore } from "redux";
import thunk from 'redux-thunk';
import nameReducer from './name/nameReducer';
import scoreReducer from './score/scoreReducer';

const rootReducer = combineReducers({
    nameReducer, scoreReducer
})

export const store = legacy_createStore( rootReducer, applyMiddleware(thunk));
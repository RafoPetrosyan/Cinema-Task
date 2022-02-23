import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cinemaReducer } from "./cinemaReducer";

const rootReducer = combineReducers({
    cinemaList: cinemaReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
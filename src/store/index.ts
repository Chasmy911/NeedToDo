import { applyMiddleware, combineReducers, createStore } from 'redux';


const rootReducers = combineReducers({

});

export const store = createStore(rootReducers);

export type RootState = ReturnType<typeof rootReducers>;

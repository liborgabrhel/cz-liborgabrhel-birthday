import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers, { RootState } from './reducers';

export const store = createStore<RootState>(
	reducers,
	applyMiddleware(
		thunk,
	),
);

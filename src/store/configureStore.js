import { createStore, compose } from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
	const store = createStore(
		rootReducer,
		initialState,
		compose (
			window.devToolsExtension ? window.devToolsExtension() : undefined
		)
	);

	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers').default;
			store.replaceReducer(nextRootReducer);
		});
	}

	return store;
}
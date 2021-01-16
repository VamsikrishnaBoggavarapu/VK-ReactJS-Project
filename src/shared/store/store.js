import { createStore, applyMiddleware } from 'redux'
import rootRuducer from '@vk/reducers/rootReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
    rootRuducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;
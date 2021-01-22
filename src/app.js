import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {BrowserRouter as Router} from 'react-router-dom'
import reducers from './reducers/appReducer'
import AppContainer from './containers/AppContainer'

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<AppContainer/>
		</Router>
	</Provider>,
	document.getElementById('app')
)
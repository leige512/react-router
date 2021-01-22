import React from 'react'
import {
	Route,
	Switch,
} from 'react-router-dom'

import ProjectContainer from '../containers/ProjectContainer'
import IssueContainer from '../containers/IssueContainer'
import AccountContainer from '../containers/AccountContainer'
import Home from './Home'


class App extends React.Component {
	
	render () {
		const {history} = this.props
		return (
			<div>
				<Switch>
					<Route path='/project'>
						<ProjectContainer/>
					</Route>
					<Route path='/issue'>
						<IssueContainer/>
					</Route>
					<Route path='/account'>
						<AccountContainer/>
					</Route>
					<Route path='/'>
						<Home/>
					</Route>
				</Switch>
				<div style={{display: 'flow-root', padding: '10px'}}>
					<button onClick={() => history.push('/project')}>Project</button>
					<button onClick={() => history.push('/issue')}>Issue</button>
					<button onClick={() => history.push('/account')}>Account</button>
				</div>
			</div>
		)
	}
}

export default App
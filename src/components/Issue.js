import React from 'react'
import {
	Route,
	Switch,
} from 'react-router-dom'
import AnimatedRouter from 'react-animated-router'
import IssueDetailContainer from '../containers/IssueDetailContainer'
import IssueAddContainer from '../containers/IssueAddContainer'

class Issue extends React.Component {
	
	render () {
		
		const rows = [
		{id: 1, name: 'A'},
		{id: 2, name: 'B'},
		{id: 3, name: 'C'},
		{id: 4, name: 'D'},
		]
		const {history, match} = this.props
		const {path} = match
		return (
			<div>
				<AnimatedRouter>
					<Route path={path + '/issueDetail'}>
						<IssueDetailContainer/>
					</Route>
					<Route path={path + '/issueAdd'}>
						<IssueAddContainer/>
					</Route>
					<Route exact path={path + '/'}>
						<div>
							This is Issue page.
						</div>
					</Route>
				</AnimatedRouter>
				<div>
					{rows.map(row => 
						<div key={row.id} onClick={() => history.replace(path + '/issueDetail')}>
							{row.name}
						</div>
					)}
				</div>
			</div>
		)
	}
}

export default Issue
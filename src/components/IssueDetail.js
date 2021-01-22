import React from 'react'

class IssueDetail extends React.Component {
	
	render () {
		const {history, match} = this.props
		const {path} = match
		return (
			<div>
				<button onClick={() => history.replace('/issue')}>Back Page</button>
				<hr/>
				Issue Detail.
			</div>
		)
	}
}

export default IssueDetail
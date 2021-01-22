import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import IssueAdd from '../components/IssueAdd'
import {
	
} from '../actions/issueAddAction'

const mapStateToProps = state => ({
	...state.issueAdd
})

const mapDispatchToProps = dispatch => ({
	
})

const AppContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(IssueAdd))

export default AppContainer
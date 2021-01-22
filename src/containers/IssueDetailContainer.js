import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import IssueDetail from '../components/IssueDetail'
import {
	
} from '../actions/issueDetailAction'

const mapStateToProps = state => ({
	...state.issueDetail
})

const mapDispatchToProps = dispatch => ({
	
})

const AppContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(IssueDetail))

export default AppContainer
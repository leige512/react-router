import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import Issue from '../components/Issue'
import {
	
} from '../actions/issueAction'

const mapStateToProps = state => ({
	...state.issue
})

const mapDispatchToProps = dispatch => ({
	
})

const AppContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(Issue))

export default AppContainer
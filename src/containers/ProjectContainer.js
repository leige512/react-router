import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import Project from '../components/Project'
import {
	
} from '../actions/projectAction'

const mapStateToProps = state => ({
	...state.project
})

const mapDispatchToProps = dispatch => ({
	
})

const AppContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(Project))

export default AppContainer
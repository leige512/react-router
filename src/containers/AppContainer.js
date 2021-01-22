import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import App from '../components/App'
import {
	
} from '../actions/appAction'

const mapStateToProps = state => ({
	...state.app
})

const mapDispatchToProps = dispatch => ({
	
})

const AppContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(App))

export default AppContainer
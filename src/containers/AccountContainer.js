import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import Account from '../components/Account'
import {
	
} from '../actions/accountAction'

const mapStateToProps = state => ({
	...state.account
})

const mapDispatchToProps = dispatch => ({
	
})

const AppContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(Account))

export default AppContainer
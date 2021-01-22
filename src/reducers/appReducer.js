import {combineReducers} from 'redux'
import {
	APP,
	PROJECT,
	ISSUE,
	ACCOUNT,
	ISSUE_DETAIL,
	ISSUE_ADD,
} from '../constants/appConstant'

const defaultAppState = {
	
}
const defaultProjectState = {
	
}
const defaultIssueState = {
	
}
const defaultAccountState = {
	
}
const defaultIssueDetailState = {
	
}
const defaultIssueAddState = {
	
}

const app = (state = defaultAppState, action) => {
	switch(action.type) {
		case APP:
			return Object.assign({}, state, action.data)
		default:
			return state
	}
}
const project = (state = defaultProjectState, action) => {
	switch(action.type) {
		case PROJECT:
			return Object.assign({}, state, action.data)
		default:
			return state
	}
}
const issue = (state = defaultIssueState, action) => {
	switch(action.type) {
		case ISSUE:
			return Object.assign({}, state, action.data)
		default:
			return state
	}
}
const account = (state = defaultAccountState, action) => {
	switch(action.type) {
		case ACCOUNT:
			return Object.assign({}, state, action.data)
		default:
			return state
	}
}
const issueDetail = (state = defaultIssueDetailState, action) => {
	switch(action.type) {
		case ISSUE_DETAIL:
			return Object.assign({}, state, action.data)
		default:
			return state
	}
}
const issueAdd = (state = defaultIssueAddState, action) => {
	switch(action.type) {
		case ISSUE_ADD:
			return Object.assign({}, state, action.data)
		default:
			return state
	}
}

const reducers = combineReducers({
	app,
	project,
	issue,
	account,
	issueDetail,
	issueAdd,
})

export default reducers
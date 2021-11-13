import {LOADING_SET, REPOSITORIES_GET, USERS_CLEAR, USERS_SEARCH, USER_GET} from '../types'

const handlers = {
	[USERS_SEARCH]: (state, {payload}) => ({...state, users: payload, loading: false}),
	[REPOSITORIES_GET]: (state, {payload}) => ({...state, repositories: payload, loading: false}),
	[USER_GET]: (state, {payload}) => ({...state, user: payload, loading: false}),
	[LOADING_SET]: state => ({...state, loading: true}),
	[USERS_CLEAR]: state => ({...state, users: []}),
	DEFAULT: state => state
}

export const githubReducer = (state, action) => {
	const handler = handlers[action.type] || handlers.DEFAULT
	
	return handler(state, action)
}

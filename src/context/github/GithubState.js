import React, {useReducer} from 'react'
import {LOADING_SET, REPOSITORIES_GET, USERS_CLEAR, USERS_SEARCH, USER_GET} from '../types'
import {GithubContext} from './githubContext'
import {githubReducer} from './githubReducer'
import axios from 'axios'

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET

const withCredentials = url => {
	return `${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
}

export const GithubState = ({children}) => {
	const initialState = {
		user: {},
		users: [],
		loading: false,
		repositories: []
	}

	const [state, dispatch] = useReducer(githubReducer, initialState)
	
	const search = async value => {
		setLoading()
		
		const response = await axios.get(
			withCredentials(`https://api.github.com/search/users?q=${value}&`)
		)

		dispatch({
			type: USERS_SEARCH,
			payload: response.data.items
		})
	}

	const getUser = async name => {
		setLoading()
		
		const response = await axios.get(
			withCredentials(`https://api.github.com/users/${name}?`)
		)

		dispatch({
			type: USER_GET,
			payload: response.data
		})
	}

	const getRepositories = async name => {
		setLoading()
		
		const response = await axios.get(
			withCredentials(`https://api.github.com/users/${name}/repos?`)
		)

		dispatch({
			type: REPOSITORIES_GET,
			payload: response.data
		})
	}

	const clearUsers = () => dispatch({type: USERS_CLEAR})

	const setLoading = () => dispatch({type: LOADING_SET})

	const {user, users, repositories, loading} = state

	return (
		<GithubContext.Provider
			value={{
				setLoading, search, getUser, getRepositories, clearUsers,
				user, users, repositories, loading
			}}
		>
			{children}
		</GithubContext.Provider>
	)
}

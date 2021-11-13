import React, {useContext, useState} from 'react'
import {AlertContext} from '../../context/alert/alertContext'
import {GithubContext} from '../../context/github/githubContext'
import classes from './Search.module.scss'

export const Search = () => {
	const [value, setValue] = useState('')
	const alert = useContext(AlertContext)
	const github = useContext(GithubContext)

	const doSearch = () => {
		github.clearUsers()

		if (value.trim()) {
			alert.hide()
			github.search(value.trim())
		} else {
			alert.show('Enter user name!')
		}
	}

	const onSubmit = event => {
		if (event.key !== 'Enter') {
			return
		}

		doSearch()
	}

	return (
		<div className={classes.search}>
			<input 
				type="text"
				className={classes.searchInput}
				placeholder={'Search...'}
				value={value}
				onChange={event => setValue(event.target.value)}
				onKeyPress={onSubmit}
			/>
			<button className={classes.searchButton} onClick={doSearch}>Search</button>
		</div>
	)
}

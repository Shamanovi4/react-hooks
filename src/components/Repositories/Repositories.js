import React from 'react'
import classes from './Repositories.module.scss'

export const Repositories = ({repositories}) => (
	<React.Fragment>
		{repositories.map(repositories => (
			<div className={classes.repositoriesItem} key={repositories.id}>
				<a className={classes.repositoriesLink} href={repositories.html_url} target='_blank' rel='noreferrer'>{repositories.name}</a>
			</div>
		))}
	</React.Fragment>
)

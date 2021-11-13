import React from 'react'
import {Navigation} from '../../components/Navigation/Navigation'
import classes from './Layout.module.scss'

export const Layout = props => {
	return (
		<div className={classes.layout}>
			<header>
				<Navigation />
			</header>		
			<main>
				{props.children}
			</main>
		</div>
	)
}

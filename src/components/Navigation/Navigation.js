import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './Navigation.module.scss'

export const Navigation = () => {
	return (
		<nav className={classes.navbar}>
			<NavLink className={classes.navbarLink} to="/" exact>Main Page</NavLink>
		</nav>
	)
}
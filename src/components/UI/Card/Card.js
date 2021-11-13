import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from '../Button/Button'
import classes from './Card.module.scss'

export const Card = ({user}) => {
  return (
    <div className={classes.card}>
      <img className={classes.cardAvatar} src={user.avatar_url} alt={user.login}></img>
			<h2 className={classes.cardUsername}>{user.login}</h2>
			<Link to={'/profile/' + user.login}>
				<Button>Open</Button>
			</Link>
    </div>
  )
}

import React from 'react'
import classes from './Container.module.scss'

export const Container = props => {
  return (
    <div className={classes.container}>
			<div className={classes.containerWrapper}>
      	{props.children}
			</div>
    </div>
  )
}

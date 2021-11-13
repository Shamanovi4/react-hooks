import React from 'react'
import classes from './Page.module.scss'

export const Page = props => {
  return (
    <div className={classes.page}>
			<div className={classes.pageWrapper}>
      	{props.children}
			</div>
    </div>
  )
}

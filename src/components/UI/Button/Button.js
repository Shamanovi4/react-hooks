import React from 'react'
import classes from './Button.module.scss'

export const Button = props => {
  const cls = [
    classes.button,
    classes[props.type]
  ]

  return (
    <button
      onClick={props.onClick}
      className={cls.join(' ')}
    >
      {props.children}
    </button>
  )
}

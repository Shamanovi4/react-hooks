import React, {useReducer} from 'react'
import {ALERT_HIDE, ALERT_SHOW} from '../types'
import {AlertContext} from './alertContext'
import {alertReducer} from './alertReducer'

export const AlertState = ({children}) => {
	const [state, dispatch] = useReducer(alertReducer, null)

	const hide = () => dispatch({type: ALERT_HIDE})

	const show = text => dispatch({type: ALERT_SHOW, payload: {text}})

	return (
		<AlertContext.Provider value={{hide, show, alert: state}}>
			{children}
		</AlertContext.Provider>
	)
}

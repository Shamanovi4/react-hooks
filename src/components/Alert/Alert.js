import React, {useContext} from 'react'
import {RoundButton} from '../UI/RoundButton/RoundButton'
import classes from './Alert.module.scss'
import {MdClose} from 'react-icons/md'
import {AlertContext} from '../../context/alert/alertContext'

export const Alert = () => {
	const {alert, hide} = useContext(AlertContext)

	if (!alert) return null

	return (
		<div className={classes.alert}>
			<span className={classes.alertText}>
				{alert.text}
			</span>
			<RoundButton onClick={hide}>
				<MdClose />
			</RoundButton>
		</div>
	)
}

import React, {useContext} from 'react'
import {Alert} from '../../components/Alert/Alert'
import {Search} from '../../components/Search/Search'
import {Card} from '../../components/UI/Card/Card'
import {GithubContext} from '../../context/github/githubContext'
import {Container} from '../../hoc/Container/Container'
import {Page} from '../../hoc/Page/Page'
import classes from './MainPage.module.scss'

export const MainPage = () => {
	const {loading, users} = useContext(GithubContext)

	return (
		<Page>
			<Alert />
			<Container>
				<Search />
				<div className={classes.cards}>
					{loading
							? <p className={classes.loading}>Loading...</p>
							: users.map(user => (
								<Card key={user.id} user={user}></Card>
							))
					}
				</div>
			</Container>
		</Page>
	)
}

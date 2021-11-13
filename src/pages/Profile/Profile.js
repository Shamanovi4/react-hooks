import React, {useContext, useEffect} from 'react'
import {GithubContext} from '../../context/github/githubContext'
import classes from './Profile.module.scss'
import {Button} from '../../components/UI/Button/Button'
import {Container} from '../../hoc/Container/Container'
import {Page} from '../../hoc/Page/Page'
import {Repositories} from '../../components/Repositories/Repositories'

export const Profile = ({match}) => {
	const {getUser, getRepositories, loading, user, repositories} = useContext(GithubContext)
	const urlName = match.params.name

	useEffect(() => {
		getUser(urlName)
		getRepositories(urlName)
		// eslint-disable-next-line
	}, [])

	if (loading) {
		return <p className={classes.loading}>Loading...</p>
	}

	const {
		name, company, avatar_url,
		location, bio, blog,
		login, html_url, followers,
		public_repos, public_gists, following
	} = user

	return (
		<Page>
			<Container>
				<div className={classes.profile}>
					<div className={classes.profileContent}>
						<div className={classes.profileContentGroup}>
							<img src={avatar_url} alt={name} className={classes.profileAvatar} />
							<a className={classes.profileButton} href={html_url} target='_blank' rel='noreferrer'>
								<Button type={'button--no-margin'}>Open profile</Button>
							</a>
						</div>
						<div className={classes.profileContentGroup}>
							<h1 className={classes.profileName}>{name}</h1>
							<p className={classes.profileBio}>{bio}</p>
							<ul className={classes.profileInfo}>
								{login && <li className={classes.profileInfoItem}>
									<span className={classes.profileInfoItemTag}>Username: </span>
									<span className={classes.profileInfoItemText}>{login}</span>
								</li>}
								{company && <li className={classes.profileInfoItem}>
									<span className={classes.profileInfoItemTag}>Company: </span>
									<span className={classes.profileInfoItemText}>{company}</span>
								</li>}
								{location && <li className={classes.profileInfoItem}>
									<span className={classes.profileInfoItemTag}>Location: </span>
									<span className={classes.profileInfoItemText}>{location}</span>
								</li>}
								{blog && <li className={classes.profileInfoItem}>
									<span className={classes.profileInfoItemTag}>Website: </span>
									<a className={classes.profileLink} href={blog} target='_blank' rel='noreferrer'>{blog}</a>
								</li>}
							</ul>
						</div>
					</div>
					<ul className={classes.profileBadges}>
						<li className={classes.profileBadgesItem}>Followers: {followers}</li>
						<li className={classes.profileBadgesItem}>Following: {following}</li>
						<li className={classes.profileBadgesItem}>Repositories: {public_repos}</li>
						<li className={classes.profileBadgesItem}>Gists: {public_gists}</li>
					</ul>
				</div>
			</Container>
			{repositories.length > 0 && <Container>
				<div className={classes.repositories}>
					<Repositories repositories={repositories}/>
				</div>
			</Container>}
		</Page>
	)
}

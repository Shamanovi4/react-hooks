import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Layout} from './hoc/Layout/Layout'
import {MainPage} from './pages/MainPage/MainPage'
import {Profile} from './pages/Profile/Profile'
import {AlertState} from './context/alert/AlertState'
import {GithubState} from './context/github/GithubState'

function App() {
  return (
		<GithubState>
			<AlertState>
				<BrowserRouter>
					<Layout>
						<Switch>
							<Route path='/' exact component={MainPage} />
							<Route path='/profile/:name' component={Profile} />
						</Switch>
					</Layout>
				</BrowserRouter>
			</AlertState>
		</GithubState>
  )
}

export default App

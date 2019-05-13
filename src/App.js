import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { routes } from './routes'
import Helmet from 'react-helmet'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import './theme.css'
import './App.css'

function App() {
	return (
		<div className='App'>
			<Router>
				<Helmet title='Ignited Local Builds' />
				<NavBar routes={routes} />
				{routes.map((route, i) => {
					if (route.hasOwnProperty('component')) {
						return <Route key={i} {...route} />
					} else {
						return route.subroutes.map((subroute, j) => {
							return <Route key={j} {...subroute} />
						})
					}
				})}
			</Router>
		</div>
	)
}

export default App

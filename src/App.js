import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { routes } from './routes'
import Helmet from 'react-helmet'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
// Stylesheets
import 'bootstrap/dist/css/bootstrap.min.css'
import './theme.css'
import './App.css'

// FontAwesome setup
import { library } from '@fortawesome/fontawesome-svg-core'
import {
	faEnvelope,
	faHeart,
	faCampground
} from '@fortawesome/free-solid-svg-icons'
import {
	faTwitter,
	faFacebook,
	faInstagram
} from '@fortawesome/fontawesome-free-brands'

library.add(
	faEnvelope,
	faHeart,
	faCampground,
	faTwitter,
	faFacebook,
	faInstagram
)

function App() {
	return (
		<div className='App'>
			<Router>
				<Helmet title='Eagle Mortgage' />
				<NavBar routes={routes} />
				{routes.map((route, i) => {
					if (route.hasOwnProperty('component')) {
						return <Route key={i} {...route} />
					} else {
						return route.subroutes.map((subroute, j) => {
							if (subroute.hasOwnProperty('component')) {
								return <Route key={j} {...subroute} />
							} else {
								return subroute.subroutes.map((subroute, k) => {
									return <Route key={k} {...subroute} />
								})
							}
						})
					}
				})}
				<Footer />
			</Router>
		</div>
	)
}

export default App

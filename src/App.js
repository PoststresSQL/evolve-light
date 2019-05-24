import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { routes } from './routes'
import Helmet from 'react-helmet'
import NavBar from './components/Navigations/NavBar'
import Footer from './components/Footer'
// Stylesheets
import 'bootstrap/dist/css/bootstrap.min.css'
import './theme.css'
import './stack-interface.css'
import './App.css'

// FontAwesome setup
import { library } from '@fortawesome/fontawesome-svg-core'
import {} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
import {
	faInstagram,
	faFacebookSquare,
	faTwitterSquare
} from '@fortawesome/free-brands-svg-icons'

library.add(faInstagram, faFacebookSquare, faTwitterSquare)

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

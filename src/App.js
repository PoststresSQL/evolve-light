import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Helmet from 'react-helmet'
import NavBar from './components/NavBar'
import Home from './views/Home'
import Dropdown1 from './views/Dropdown1'
import About from './views/About'
import 'bootstrap/dist/css/bootstrap.min.css'
import './theme.css'
import './App.css'

// Define routes(pages)
const routes = [
	{
		title: 'Home',
		path: '/',
		component: Home,
		exact: true
	},
	{
		title: 'About',
		path: '/about',
		component: About
	},
	{
		title: 'Dropdown Link',
		path: '/dropdown/:service',
		subroutes: [
			{
				title: 'Dropdown 1',
				path: '/dropdown/dropdown-1',
				component: Dropdown1
			},
			{
				title: 'Dropdown 2',
				path: '/dropdown/dropdown-2',
				component: Dropdown1
			},
			{
				title: 'Dropdown 3',
				path: '/dropdown/dropdown-3',
				component: Dropdown1
			}
		]
	}
]

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

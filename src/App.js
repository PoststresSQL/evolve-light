import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Helmet from 'react-helmet'
import NavBar from './components/NavBar'
import Home from './views/Home'
import SomeView from './views/SomeView'
import About from './views/About'
import 'bootstrap/dist/css/bootstrap.min.css'
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
		path: '/dropdown',
		routes: [
			{
				title: 'Dropdown 1',
				path: '/dropdown-1',
				component: SomeView
			},
			{
				title: 'Dropdown 2',
				path: '/dropdown-2',
				component: SomeView
			},
			{
				title: 'Dropdown 3',
				path: '/dropdown-3',
				component: SomeView
			}
		]
	}
]

function App() {
	return (
		<div className='App'>
			<Router>
				<Helmet title='Ignited Local Builds' />
				<NavBar />
				{routes.map((route, i) => {
					return <Route key={i} {...route} />
				})}
			</Router>
		</div>
	)
}

export default App

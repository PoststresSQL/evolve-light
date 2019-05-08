import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Helmet from 'react-helmet'
import Nav from './components/Nav'
import NavLink from './components/NavLink'
import Home from './views/Home'
import About from './views/About'
import { jquery as $ } from 'jquery'
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
	}
]

function App() {
	return (
		<div className='App'>
			<Router>
				<Helmet title='Ignited Local Builds' />
				<Nav>
					{routes.map((route, i) => {
						return <NavLink key={i} {...route} />
					})}
				</Nav>
				{routes.map((route, i) => {
					return <Route key={i} {...route} />
				})}
			</Router>
		</div>
	)
}

export default App

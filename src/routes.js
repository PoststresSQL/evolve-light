import Home from './views/Home'
import About from './views/About'
import SomeView from './views/SomeView'
import Template from './views/Template'

// Define routes(pages)
export const routes = [
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
		title: 'Dropdown Menu',
		subroutes: [
			{
				title: 'Some View',
				path: '/dropdown-menu/some-view',
				component: SomeView
			},
			{
				title: 'Template',
				path: '/dropdown-menu/template',
				component: Template
			}
		]
	}
]

export default routes

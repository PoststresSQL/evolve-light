import Home from './views/Home'
import Dropdown1 from './views/Dropdown1'
import Dropdown2 from './views/Dropdown2'
import Dropdown3 from './views/Dropdown3'
import About from './views/About'

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
				component: Dropdown2
			},
			{
				title: 'Dropdown 3',
				path: '/dropdown/dropdown-3',
				component: Dropdown3
			}
		]
	}
]

export default routes

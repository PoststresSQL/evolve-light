import Home from './views/Home'
import About from './views/About'
import Microblading from './views/Microblading'
import MicroShading from './views/MicroShading'
import MicroTouchUp from './views/MicroTouchUp'
import MicroAnnual from './views/MicroAnnual'
import Process from './views/Process'
import Faqs from './views/Faqs'
import Contact from './views/Contact'
import Template from './views/Template'

// Define routes(pages)
export const routes = [
	{
		title: 'home',
		path: '/',
		component: Home,
		exact: true
	},
	{
		title: 'microblading services',
		subroutes: [
			{
				title: 'microblading',
				path: '/microblading-services/microblading',
				component: Microblading
			},
			{
				title: 'microblading & shading',
				path: '/microblading-services/microblading-and-shading',
				component: MicroShading
			},
			{
				title: 'microblading touch-ups',
				path: '/microblading-services/microblading-touch-ups',
				component: MicroTouchUp
			},
			{
				title: 'annual touch-ups',
				path: '/microblading-services/annual-touch-ups',
				component: MicroAnnual
			}
		]
	},
	{
		title: 'how it works',
		path: '/process',
		component: Process
	},
	{
		title: 'faqs',
		path: '/faqs',
		component: Faqs
	},
	{
		title: 'our company',
		subroutes: [
			{
				title: 'about terra',
				path: '/our-company/about-terra',
				component: About
			},
			{
				title: 'blog',
				path: '#',
				component: Template
			}
		]
	},
	{
		title: 'contact',
		path: '/contact',
		component: Contact
	}
]

export default routes

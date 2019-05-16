import Home from './views/Home'
import Template from './views/Template'
import MortgageCalculator from './views/MortgageCalculator'
import Purchase from './views/Purchase'
import Refinance from './views/Refinance'
import Construction from './views/Construction'
import GovernmentLoan from './views/GovernmentLoan'
import ConventionalLoan from './views/ConventionalLoan'
import ConstructionLoan from './views/ConstructionLoan'
import HardMoneyLoan from './views/HardMoneyLoan'
import DownPaymentAssistance from './views/DownPaymentAssistance'
import About from './views/About'
import Testimonials from './views/Testimonials'
import Contact from './views/Contact'

// Define routes(pages)
export const routes = [
	{
		title: 'Home',
		path: '/',
		component: Home,
		exact: true
	},
	{
		title: 'Purchase',
		path: '/purchase',
		component: Purchase
	},
	{
		title: 'Refinance',
		path: '/refinance',
		component: Refinance
	},
	{
		title: 'Construction',
		path: '/construction',
		component: Construction
	},
	{
		title: 'Mortgage Calculator',
		path: '/mortgage-calculator',
		component: MortgageCalculator
	},
	{
		title: 'Loan Options',
		subroutes: [
			{
				title: 'Government Loan',
				path: '/loan-options/government-loan',
				component: GovernmentLoan
			},
			{
				title: 'Conventional Loan',
				path: '/loan-options/conventional-loan',
				component: ConventionalLoan
			},
			{
				title: 'Construction Loan',
				path: '/loan-options/construction-loan',
				component: ConstructionLoan
			},
			{
				title: 'Hard Money Loan',
				path: '/loan-options/hard-money-loan',
				component: HardMoneyLoan
			},
			{
				title: 'Down Payment Assistance',
				path: '/loan-options/down-payment-assistance',
				component: DownPaymentAssistance
			}
		]
	},
	{
		title: 'Our Company',
		subroutes: [
			{
				title: 'Testimonials',
				path: '/our-company/testimonials',
				component: Testimonials
			},
			{
				title: 'About Us',
				path: '/our-company/about-us',
				component: About
			},
			{
				title: 'Contact',
				path: '/our-company/contact',
				component: Contact
			},
			{
				title: 'Blog',
				path: '/blog-url',
				component: Template
			}
		]
	}
]

export default routes

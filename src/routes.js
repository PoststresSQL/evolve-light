import Home from './views/Home'
import Template from './views/Template'
import Purchase from './views/Purchase'
import Refinance from './views/Refinance'
import Construction from './views/Construction'
import GovernmentLoan from './views/GovernmentLoan'
import ConventionalLoan from './views/ConventionalLoan'
import ConstructionLoan from './views/ConstructionLoan'
import HardMoneyLoan from './views/HardMoneyLoan'
import DownPaymentAssistance from './views/DownPaymentAssistance'
import LoanOptions from './views/LoanOptions'
import RefinanceCalculator from './views/RefinanceCalculator'
import PurchaseCalculator from './views/PurchaseCalculator'
import ConstructionCalculator from './views/ConstructionCalculator'
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
		title: 'Services',
		subroutes: [
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
			}
		]
	},
	{
		title: 'Loan Options',
		subroutes: [
			{
				title: 'Overview',
				path: '/loan-options',
				component: LoanOptions,
				exact: true
			},
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
	},
	{
		title: 'Get A Quote',
		subroutes: [
			{
				title: 'Refinance Calculator',
				path: '/get-a-quote/refinance-calculator',
				component: RefinanceCalculator
			},
			{
				title: 'Purchase Calculator',
				path: '/get-a-quote/purchase-calculator',
				component: PurchaseCalculator
			},
			{
				title: 'Construction Calculator',
				path: '/get-a-quote/construction-calculator',
				component: ConstructionCalculator
			}
		]
	}
]

export default routes

import About from './views/About'
import ConstructionCommercial from './views/ConstructionCommercial'
import ConstructionResidential from './views/ConstructionResidential'
import Contact from './views/Contact'
import DebtConsolidation from './views/DebtConsolidation'
import Home from './views/Home'
import HomeImprovment from './views/HomeImprovment'
import MortgageCalculator from './views/MortgageCalculator'
import PurchaseCommercial from './views/PurchaseCommercial'
import PurchaseResidential from './views/PurchaseResidential'
import RefinanceCommercial from './views/RefinanceCommercial'
import RefinanceResidential from './views/RefinanceResidential'
import Testimonials from './views/Testimonials'

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
		path: '/services',
		subroutes: [
			{
				title: 'Purchase',
				path: '/dropdown/purchase',
				subroutes: [
					{
						title: 'Residential',
						path: '/dropdown/purchase/residential',
						component: PurchaseResidential
					},
					{
						title: 'Commercial',
						path: '/dropdown/purchase/commercial',
						component: PurchaseCommercial
					}
				]
			},
			{
				title: 'Refinance',
				path: '/dropdown/refinance',
				subroutes: [
					{
						title: 'Residential',
						path: '/dropdown/refinance/residential',
						component: RefinanceResidential
					},
					{
						title: 'Commercial',
						path: '/dropdown/refinance/commercial',
						component: RefinanceCommercial
					},
					{
						title: 'Debt Consolidation',
						path: '/dropdown/refinance/debt-consolidation',
						component: DebtConsolidation
					},
					{
						title: 'Commercial',
						path: '/dropdown/refinance/home-improvment',
						component: HomeImprovment
					}
				]
			},
			{
				title: 'Construction',
				path: '/dropdown/construction',
				subroutes: [
					{
						title: 'Residential',
						path: '/dropdown/construction/residential',
						component: ConstructionResidential
					},
					{
						title: 'Commercial',
						path: '/dropdown/construction/commercial',
						component: ConstructionCommercial
					}
				]
			}
		]
	},
	{
		title: 'Mortgage Calculator',
		path: '/mortgage-calculator',
		component: MortgageCalculator
	},
	{
		title: 'Testimonials',
		path: '/testimonials',
		component: Testimonials
	},
	{
		title: 'About Us',
		path: '/about-us',
		component: About
	},
	{
		title: 'Contact',
		path: '/contact',
		component: Contact
	}
]

export default routes

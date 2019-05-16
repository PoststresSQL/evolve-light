import React from 'react'
import { Link } from 'react-router-dom'

function ConventionalLoan() {
	return (
		<div className='main-container'>
			<section className='cover imagebg height-auto' data-overlay='4'>
				<div className='background-image-holder'>
					<img
						alt='background'
						src='/users/u143/143632/background-01-smr.jpg'
					/>
				</div>
				<div className='container pos-vertical-center'>
					<div className='row'>
						<div className='col-sm-8 col-md-7'>
							<h1>Conventional Loans</h1>
							<p className='lead'>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Maxime dolorum suscipit
								asperiores placeat accusantium rerum animi
								consequuntur sed optio inventore!
							</p>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div class='container'>
					<div class='row'>
						<div class='col-12 wpb_wrapper'>
							<p>
								FHA loans are insured by the Federal Housing
								Administration, and with the government
								guarantee, lenders are more willing to lend with
								more lenient qualifying guidelines. FHA loans
								have been specifically designed to help
								borrowers get into homes.
							</p>
							<p>
								First Time Buyers can often benefit from the
								more lax guidelines of a FHA loan, including a
								lower down payment. Typical down payments can
								range between 10% – 20%, but with a FHA loan the{' '}
								<strong>
									down payment can be as low as 3%
								</strong>
								. This lower down payment can even be provided
								to you from a family member as a gift fund.
							</p>
							<p>
								With more lenient qualifying guidelines, FHA
								loans make homeownership more accessible to more
								people. Credit scores to 640, lower debt ratios,
								and seller contributions are all allowed with a
								FHA loan. A few ups and downs in your credit
								history may be ok with the FHA.
							</p>
							<h3>FHA Benefits</h3>
							<ul>
								<li>Ideal for First Time Buyers</li>
								<li>
									Lower down payments and gift funds allowed
								</li>
								<li>More flexible qualifying guidelines</li>
								<li>
									Available for purchase or refinance, fixed
									or adjustable rate
								</li>
							</ul>
							<p>
								First Time Buyers are not the only ones who can
								benefit from a government guaranteed loan. You
								can refinance with an FHA loan, even if you
								don’t currently have an FHA loan. FHA loans come
								with a few requirements. Because the program
								intends to help buyers get into a home, you must
								live in it as your primary residence. (Don’t
								worry investors, we have plenty of other loan
								programs that are perfect for you.) Flip
								properties are allowed, however, as long as it
								is owner occupied.
							</p>
							<p>
								Some FHA programs will require you to have the
								home appraised by an FHA- approved appraiser,
								and for you to pay mortgage insurance premiums.
								Plan on paying Up Front Mortgage Insurance
								(UFMI) and a Monthly Mortgage Insurance Premium,
								unless you qualify for the FHA streamlined*
								finance program. We can tell you what you
								qualify for and what to expect for your total
								payments, including mortgage insurance.
							</p>
							<p>* Qualifying factors may apply</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default ConventionalLoan

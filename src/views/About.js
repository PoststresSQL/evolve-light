import React from 'react'
import { FontAwesomeIcon as FAI } from '@fortawesome/react-fontawesome'

function About() {
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
							<h1>Eagles Mortgage</h1>
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

			<section id='bio-section' className='feature-large switchable'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-4'>
							<img
								alt='Image'
								className='border--round box-shadow-wide'
								src='https://placehold.it/300x400'
							/>
						</div>
						<div className='col-md-8'>
							<h2 className='big-title'>Our Story</h2>
							<p>
								Eagles Mortgage Company was established in June
								of 1998 and became incorporated in July of 2004
								by the founder and president, Mr. David
								Jennings. Eagles Mortgage Company takes pride in
								maintaining an impeccable record with the
								California Department of Real Estate and the
								California Department of Corporations. This
								record is maintained by writing sound loans for
								clients that will be appreciated for the years
								to follow. The fact that Eagles Mortgage Company
								continues to manage a steady flow of loans,
								despite the downturn in the economy and near
								market collapse, is a testament to its staying
								power in the lending industry.
							</p>
							<p>
								Eagles Mortgage Company specializes in an array
								of products from Purchase Money Loans to Loan
								Modification and Short Sale counseling. The
								staff from Eagles Mortgage Company work closely
								with other specialists, such as attorneys,
								Insurance agents, CPA’s, Appraisers and Credit
								Repair Specialists to ensure clients are well
								informed &amp; make sound decisions. The clients
								come first and are offered any help necessary in
								relation to their financial needs and making
								responsible decisions about their finances.
							</p>
							<p>
								Eagles Mortgage Company Inc. and its staff,
								follow ethical business practices and greatly
								value every customer, past, present and future.
								Eagles Mortgage Company is dedicated to
								providing the client with exceptional service,
								follow-up, and follow-through, even after the
								finances have been secured. Eagles Mortgage
								Company and their staff look forward to meeting
								with you, the client, and demonstrate to you why
								Eagles Mortgage Company is “A Local Name You
								Know and Can Trust”.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section id='values'>
				<div className='container'>
					<div className='row text-center'>
						<div className='col-12'>
							<h2 className='big-title'>Our Values</h2>
						</div>
					</div>
					<div className='row text-center'>
						<div className='col-md-4'>
							<div className='value-blurb'>
								<FAI icon={['far', 'check-circle']} size='3x' />
								<h4>Transparency</h4>
								<p>
									At American Pacific Mortgage, we give it to
									you straight. With clear and responsible
									communication, we get right to the issue. We
									believe in delivering information that you
									need to know when you need to know it, and
									are willing to have difficult conversations.
									We have direct, clear, and concise
									communication, so you know that we are
									trustworthy.
								</p>
							</div>
						</div>
						<div className='col-md-4'>
							<div className='value-blurb'>
								<FAI icon={['far', 'check-circle']} size='3x' />
								<h4>Respect</h4>
								<p>
									We Are Respectful. We understand that what
									we are doing matters to you. We care about
									doing the right thing, and will always treat
									sensitive matters with sensitivity. Your
									time, your business, and your dream of
									homeownership is important to us. We are
									dependable and reliable.
								</p>
							</div>
						</div>
						<div className='col-md-4'>
							<div className='value-blurb'>
								<FAI icon={['far', 'check-circle']} size='3x' />
								<h4>Scrappy</h4>
								<p>
									Not many companies would choose “scrappy” as
									a corporate value, and that is one of the
									reasons American Pacific Mortgage stands
									above the competition. To us, scrappy means
									determined. Relentless. We are willing to
									fight for what is right, to proactively
									generate solutions, and to be constantly
									improving. We are fierce, lively, and tough:
									exactly what it takes to make sure we get
									your loan funded.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id='steps-section'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-5 col-sm-6'>
							<img
								alt='Image'
								className='border--round box-shadow-wide'
								src='https://placehold.it/400x500'
							/>
						</div>
						<div className='col-sm-6 switchable__text'>
							<h2 className='big-title'>
								We're With You
								<span className='yellow'>
									Every Step of the Way
								</span>
							</h2>
							<ul
								className='accordion accordion-2'
								style={{ minHeight: '228px' }}>
								<li className=''>
									<div className='accordion__title'>
										<span className='h5'>
											Deciding whether or not a home is
											right for you?
										</span>
									</div>
									<div className='accordion__content'>
										<p>
											If you are looking to buy your first
											home, you’ve come to the right
											place. Positive Lending specializes
											in helping first-time homebuyers.
											Not only do we provide excellent
											customer service, but we offer
											educational materials that can last
											a lifetime. We genuinely care about
											seeing first-time homebuyers succeed
											when buying a new home.
										</p>
									</div>
								</li>
								<li className=''>
									<div className='accordion__title'>
										<span className='h5'>
											Already looking at homes to buy?
										</span>
									</div>
									<div className='accordion__content'>
										<p>
											If you are looking for homes for the
											first time, the process could be
											overwhelming. While you may want to
											jump into the process and start
											looking immediately, you should
											first talk to Positive Lending about
											your loan. Having an idea about the
											type of loan you’ll secure can help
											you with the home search.
										</p>
									</div>
								</li>
								<li>
									<div className='accordion__title'>
										<span className='h5'>
											Found a house and looking for
											options?
										</span>
									</div>
									<div className='accordion__content'>
										<p>
											If you’ve found your dream home, you
											need to make sure that you’ll be
											able to buy it without crippling
											yourself financially down the road.
											Positive Lending can work with you
											to get you the most favorable loan
											for your dream house. Being upfront
											with us will go a long way toward us
											being able to help you.
										</p>
									</div>
								</li>
								<li>
									<div className='accordion__title'>
										<span className='h5'>
											Looking to refinance your existing
											home?
										</span>
									</div>
									<div className='accordion__content'>
										<p>
											At Positive Lending, we don’t just
											focus on first-time homebuyers. We
											also offer refinancing options.
											After buying your first home, your
											financial status may become more
											favorable than your loan terms.
											There’s a good chance you’d be able
											to refinance your loan to decrease
											your interest rates and put more
											cash in your pocket.
										</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default About

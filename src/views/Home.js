import React from 'react'
import { FontAwesomeIcon as FAI } from '@fortawesome/react-fontawesome'

function Home(props) {
	return (
		<div className='main-container'>
			<section
				id='home-hero'
				className='cover imagebg height-auto'
				data-overlay='4'>
				<div className='background-image-holder'>
					<img
						alt='background'
						src='/users/u143/143632/background-01-smr.jpg'
					/>
				</div>
				<div className='container pos-vertical-center'>
					<div className='row'>
						<div className='col-sm-8 col-md-7'>
							<h1>
								We'll Help You Find the Perfect Home Loan for
								You
							</h1>
							<p className='lead'>
								At Positive Lending, we work with many home
								buyers who are looking to purchase in the
								Sacramento, CA area. When working together, we
								can help you finance your dream home.
							</p>
							<a
								className='btn btn--primary type--uppercase'
								href='/purchase'>
								<span className='btn__text'>Purchase</span>
							</a>
							<a
								className='btn btn--primary type--uppercase'
								href='/refinance'>
								<span className='btn__text'>Refinance</span>
							</a>
						</div>
					</div>
				</div>
			</section>

			<section id='features-section' className='text-center'>
				<div className='container'>
					<div className='row'>
						<div className='col-12'>
							<h2 className='big-title'>
								We Make It Easy to Find the Right Home Loan for
								Your Needs
							</h2>
						</div>
					</div>
					<div className='row'>
						<div className='col-sm-6 col-md-4'>
							<div className='text-block'>
								<img
									src='https://placehold.it/60x60'
									alt='icon placeholder'
								/>
								<h4>Simplified Process</h4>
								<p>
									As direct lenders, we can cut out
									intermediaries and work with you to simplify
									and streamline the loan process.
								</p>
							</div>
							<div className='text-block'>
								<img
									src='https://placehold.it/60x60'
									alt='icon placeholder'
								/>
								<h4>Cost Savings</h4>
								<p>
									Positive Lending does not charge an
									application fee and we require you to pay
									your appraisal costs only at closing.
								</p>
							</div>
						</div>
						<div className='col-sm-6 col-md-4'>
							<div className='text-block'>
								<img
									src='https://placehold.it/60x60'
									alt='icon placeholder'
								/>
								<h4>Personal Touch</h4>
								<p>
									At Positive Lending, we are passionate about
									helping our customers. The personal touch we
									provide is second-to-none.
								</p>
							</div>
							<div className='text-block'>
								<img
									src='https://placehold.it/60x60'
									alt='icon placeholder'
								/>
								<h4>Discounts</h4>
								<p>
									We appreciate the work of our teachers,
									first responders, and many more and offer
									discounts on their loans.
									<a href='/discounts'>View all discounts.</a>
								</p>
							</div>
						</div>
						<div className='col-sm-6 col-md-4'>
							<div className='text-block'>
								<img
									src='https://placehold.it/60x60'
									alt='icon placeholder'
								/>
								<h4>24/7 Availability</h4>
								<p>
									We care about our customers, which is why
									our phones are always on. Contact us any
									time, day, or night.
								</p>
							</div>
							<div className='text-block'>
								<img
									src='https://placehold.it/60x60'
									alt='icon placeholder'
								/>
								<h4>Resources &amp; Education</h4>
								<p>
									We seek to provide residents of Sacramento,
									CA with knowledge that will last a lifetime
									and can help them in the future.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id='process-section' className=''>
				<div className='container'>
					<div className='row'>
						<div className='col-md-6 text-center'>
							<img
								alt='placeholder'
								className='border--round box-shadow-wide'
								src='https://placehold.it/540x630'
								style={{ marginBottom: '50px' }}
							/>
						</div>
						<div className='col-md-6'>
							<h2 className='big-title'>
								Secure Your New Home
								<br />
								<span className='yellow'>
									with 3 Easy Steps
								</span>
							</h2>
							<ol className='process-3'>
								<li className='process_item'>
									<div className='process__number'>
										<span>1</span>
									</div>
									<div className='process__body'>
										<h4>Free Consultation</h4>
										<p>
											If you’re looking to move in the
											Sacramento, CA area, begin by
											contacting us for a free
											consultation. We’ll review your
											specific wants and needs to gain a
											better understanding of what you’re
											looking for in your new home.
										</p>
									</div>
								</li>
								<li className='process_item'>
									<div className='process__number'>
										<span>2</span>
									</div>
									<div className='process__body'>
										<h4>Get Pre-Approved</h4>
										<p>
											After the free initial consultation,
											we’ll help you complete a loan
											application that fits your needs.
											Then, you’ll receive a pre-approval
											letter that allows you to begin
											shopping for and make offers on a
											new home.
										</p>
									</div>
								</li>
								<li className='process_item'>
									<div className='process__number'>
										<span>3</span>
									</div>
									<div className='process__body'>
										<h4>Find Your New Home</h4>
										<p>
											Using your pre-approval letter,
											you’ll work with your
											<a href='/preferred-partners'>
												real estate agent
											</a>
											to find your dream home. As this is
											going on, we’ll work to secure final
											approval on your loan. Once
											approved, you can sign the closing
											documents for your new home.
										</p>
									</div>
								</li>
							</ol>
						</div>
					</div>
				</div>
			</section>

			<section className='text-center'>
				<div className='container'>
					<div className='row'>
						<div className='col-sm-12'>
							<h2 className='big-title'>Our Values</h2>
						</div>
						<div className='col-sm-4'>
							<div className='feature feature-3 boxed boxed--lg boxed--border'>
								<FAI icon='envelope' size='4x' />
								<h4>Integrity</h4>
								<p>
									Lorem ipsum dolor sit, amet consectetur
									adipisicing elit. Ratione deleniti iure sed
									possimus soluta, quam mollitia quis labore
									aliquam dolor, numquam eius cum. Eius
									consequatur cumque id eveniet, nostrum
									inventore!
								</p>
							</div>
						</div>
						<div className='col-sm-4'>
							<div className='feature feature-3 boxed boxed--lg boxed--border'>
								<FAI icon='heart' size='4x' />
								<h4>Reliability</h4>
								<p>
									Lorem ipsum dolor, sit amet consectetur
									adipisicing elit. Sequi, asperiores quia
									labore, nam nobis dolorem sit nisi vero qui
									quaerat aliquid minima rem laboriosam ea
									officia corporis quibusdam harum quisquam!
								</p>
							</div>
						</div>
						<div className='col-sm-4'>
							<div className='feature feature-3 boxed boxed--lg boxed--border'>
								<FAI icon='campground' size='4x' />
								<h4>Accessability</h4>
								<p>
									Lorem, ipsum dolor sit amet consectetur
									adipisicing elit. Impedit itaque, qui, iure
									obcaecati necessitatibus harum voluptatibus
									iste natus eos odit, ab dolores dolorem
									sapiente. Dicta fugiat sint alias inventore
									ipsum.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section
				id='cta-section-top'
				className='cta-section text-center bg--dark'>
				<div className='row'>
					<div className='col-md-6'>
						<img
							src='https://placehold.it/60x60'
							alt='icon placeholder'
						/>
						<h3>Call Now to Get Started</h3>
						<a
							className='btn btn--primary type--uppercase'
							href='tel:((phone))'>
							<span className='btn__text'>Call ((phone))</span>
						</a>
					</div>
					<div className='col-md-6'>
						<img
							src='https://placehold.it/60x60'
							alt='icon placeholder'
						/>
						<h3>Get a Free Quote</h3>
						<a
							className='btn btn--primary type--uppercase'
							href='/contact'>
							<span className='btn__text'>
								Schedule Consultation
							</span>
						</a>
					</div>
				</div>
			</section>

			<section id='loans-section'>
				<div className='container'>
					<div className='row'>
						<div className='col-12'>
							<h2 className='big-title text-center'>
								Choose the Right Loan for You
							</h2>
						</div>
					</div>
					<div className='row'>
						<div className='col-sm-12 col-sm-offset-1'>
							<div className='tabs-container tabs--vertical'>
								<ul className='tabs'>
									<li className='active'>
										<div className='tab__title'>
											<span className='h5'>
												<p>FHA Loan</p>
											</span>
										</div>
									</li>
									<li>
										<div className='tab__title'>
											<span className='h5'>
												<p>VA Loan</p>
											</span>
										</div>
									</li>
									<li>
										<div className='tab__title'>
											<span className='h5'>
												<p>First-Time Homebuyer</p>
											</span>
										</div>
									</li>
									<li>
										<div className='tab__title'>
											<span className='h5'>
												<p>Jumbo Loans</p>
											</span>
										</div>
									</li>
									<li>
										<div className='tab__title'>
											<span className='h5'>
												<p>USDA Loans</p>
											</span>
										</div>
									</li>
									<li>
										<div className='tab__title'>
											<span className='h5'>
												<p>Reverse Mortgage</p>
											</span>
										</div>
									</li>
									<li>
										<div className='tab__title'>
											<span className='h5'>
												<p>Specialty Loan Progams</p>
											</span>
										</div>
									</li>
								</ul>
								<ul className='tabs-content'>
									<li className='active'>
										<div className='tab__content'>
											<p className='lead'>
												FHA loans are government-backed,
												meaning lenders can be more
												flexible when defining the terms
												of the loan. The United States
												Federal Housing Administration
												insures and guarantees FHA
												loans, which have been
												explicitly designed to get
												first-time borrows into a new
												home. One of the most
												significant benefits of an FHA
												loan is the down payment. While
												many loans require down payments
												that can range between 10% and
												20%, the down payment for an FHA
												loan could be as low as 3%.
												Other significant benefits
												include the fact that people
												with credit scores as low as 640
												can still be approved, and there
												are lower debt ratios.
											</p>
										</div>
									</li>
									<li>
										<div className='tab__content'>
											<p className='lead'>
												A loan specifically designed for
												military members, the U.S.
												Department of Veterans Affairs
												insures all VA loans. The loans
												are issued by lenders who are
												VA-approved. When approving
												these loans, lenders tend to be
												more flexible with terms,
												conditions, and qualifying
												guidelines. That’s because the
												loans are backed by the United
												States government, making them
												stronger than other loan
												options. There is 100% financing
												available for the loans, and
												there is no mortgage insurance
												requirement. Active duty
												military members, veterans, and
												surviving spouses are all
												eligible for a VA loan as long
												as they have a Certificate of
												Eligibility, adequate income,
												and proper credit.
											</p>
										</div>
									</li>
									<li>
										<div className='tab__content'>
											<p className='lead'>
												As a first-time home buyer
												looking to move to the
												Sacramento, CA area, you may be
												intimidated or overwhelmed by
												numerous factors. Securing a
												loan with reasonable rates is
												likely one of the things with
												which you’re most worried. At
												Positive Lending, we understand
												how stressful the process is,
												which is why we work with you
												through the entire mortgage
												process. Not only will we
												explore home loan options
												together, but we’ll also educate
												you on the home buying process.
												As a first-time homebuyer, one
												of the things could take
												advantage of is down payment
												assistance, which is funded by
												your state or local government.
											</p>
										</div>
									</li>
									<li>
										<div className='tab__content'>
											<p className='lead'>
												Jumbo loans are just as their
												name describes, in that they are
												bigger loans for bigger goals.
												As you search for a new home,
												you may find the ideal one in
												one of the higher-priced areas
												of Sacramento, CA. Or, you may
												know that you soon have children
												on the way, which could require
												more space in your home.
												Regardless the reason,
												situations like these could need
												a jumbo loan, otherwise known as
												a non-conforming loan. These
												loans, which come in a variety
												of adjustable and fixed-rate
												terms, exceed the conforming
												loan limit of $417,000. Laws
												regarding jumbo loans vary from
												county to county. Our team can
												help with your jumbo loan no
												matter where you plan to move.
											</p>
										</div>
									</li>
									<li>
										<div className='tab__content'>
											<p className='lead'>
												Another loan option backed by
												the United States government,
												these loans are specifically
												intended for rural properties
												outside of metropolitan areas.
												To service these loans, lenders
												must meet strict federal
												guidelines. USDA loans are the
												only loan options that offer
												100% financing to those buyers
												who are not veterans. To secure
												100% financing, you’ll need to
												meet numerous criteria, some of
												which are very specific. But,
												even if they don’t obtain 100%
												financing, many more people are
												eligible for a USDA loan than
												they realize. A common
												misconception is that the loans
												are intended explicitly for
												farmers, but this is not the
												case. Any land outside of a
												major metropolitan area could be
												eligible for a USDA loan.
											</p>
										</div>
									</li>
									<li>
										<div className='tab__content'>
											<p className='lead'>
												A reverse mortgage loan is made
												by a lender to a homeowner and
												is generally not paid back
												during the time the borrower(s)
												live in the home. With a
												standard traditional mortgage a
												borrower will use their income
												to pay down the debt of the
												loan, but with a reverse
												mortgage the owners of the home
												will receive payments until the
												last borrower moves out or
												decides to sell the home. This
												allows homeowners to cash in on
												the equity that they have in
												their home without having to
												sell it. This loan is ideal for
												people who may not have a job,
												are retired, or would like to
												take out a loan that does not
												require immediate payback.
											</p>
										</div>
									</li>
									<li>
										<div className='tab__content'>
											<p className='lead'>
												If you are not eligible or
												interested in any of the
												standard loan options, Positive
												Lending can still work for you.
												That’s because we have numerous
												innovative programs that can
												help you meet your mortgage
												needs. Additionally, because
												these are special loan programs,
												we have the flexibility needed
												to combine more than one loan
												offer. We offer a Keys on Time
												guarantee where we will work
												with you to get full
												underwriting loan approval to
												ensure your loan will close
												lightning fast, even if you have
												not yet identified the property.
											</p>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Home

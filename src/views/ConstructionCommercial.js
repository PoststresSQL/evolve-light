import React from 'react'
import { Link } from 'react-router-dom'

function ConstructionCommercial(props) {
	return (
		<div className='main-container'>
			<section className='text-center imagebg' data-overlay='4'>
				<div className='background-image-holder'>
					<img
						alt='background'
						src='https://placehold.it/1920x1080'
					/>
				</div>
				<div className='container'>
					<div className='row'>
						<div className='col-sm-10 col-md-8'>
							<h1>Commercial Construction</h1>
							<p className='lead'>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Reiciendis ratione, esse
								recusandae laboriosam, eum quisquam vero, quo
								qui velit ex aut quasi laborum quibusdam
								voluptas illo. Veritatis eos tempore aspernatur?
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className='text-center'>
				<div className='container'>
					<div className='row'>
						<div className='col-sm-12 col-md-12'>
							<div className='cta'>
								<p className='lead'>
									Lorem ipsum dolor, sit amet consectetur
									adipisicing elit. Ex officia quas sequi,
									sint inventore obcaecati incidunt velit
									dolorem deserunt iusto iure itaque non
									aliquid reiciendis hic eaque cupiditate
									quaerat at. In error distinctio amet
									assumenda dignissimos praesentium eligendi
									reprehenderit! Rerum, nulla rem saepe
									quaerat corporis minima doloribus deleniti
									sed vero.
									<br />
								</p>
								<a
									className='btn btn--primary type--uppercase'
									href='/get-a-quote'>
									<span className='btn__text'>
										Get a Quote
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id='internal-loan-options'>
				<div class='container'>
					<div class='row text-center'>
						<div class='col-12'>
							<h2 class='big-title'>Types of Loan Options:</h2>
						</div>
						<div class='col-sm-4'>
							<div class='feature'>
								<h4>Government Loans</h4>
								<p>
									These loans, insured by the Department of
									Veterans Affairs, are intended for active
									duty military members, veterans, and
									surviving spouses.
								</p>
								<Link to='/' className='button colored'>
									<span className='btn__text'>
										Learn More
									</span>
								</Link>
							</div>
						</div>
						<div class='col-sm-4'>
							<div class='feature'>
								<h4>Conventional Loans</h4>
								<p>
									FHA loans are backed by the U.S. Federal
									Housing Administration and are specifically
									designed for first-time home buyers.{' '}
								</p>
								<Link to='/' className='button colored'>
									<span className='btn__text'>
										Learn More
									</span>
								</Link>
							</div>
						</div>
						<div class='col-sm-4'>
							<div class='feature'>
								<h4>Construction Loans</h4>
								<p>
									There are many perks available for first
									time home buyers, such as
									government-sponsored down payment
									assistance.{' '}
								</p>
								<Link to='/' className='button colored'>
									<span className='btn__text'>
										Learn More
									</span>
								</Link>
							</div>
						</div>
						<div class='col-sm-4'>
							<div class='feature'>
								<h4>Hard Money Loans</h4>
								<p>
									If you need a bigger home, you may want to
									look into a jumbo loan, which exceeds the
									conforming loan limit of $417,000.{' '}
								</p>
								<Link to='/' className='button colored'>
									<span className='btn__text'>
										Learn More
									</span>
								</Link>
							</div>
						</div>
						<div class='col-sm-4'>
							<div class='feature'>
								<h4>Down Payment Assistance</h4>
								<p>
									Interested in moving to a rural property
									outside of a metropolitan area? This loan
									may be for you.
								</p>
								<Link to='/' className='button colored'>
									<span className='btn__text'>
										Learn More
									</span>
								</Link>
							</div>
						</div>
						<div class='col-sm-4'>
							{/* <div class='feature'>
							<h4>Specialty Loan Programs</h4>
							<p>
								If you are not satisfied with your loan,
								Positive Lending offers multiple
								specialty loan programs that could be
								more appealing.
							</p>
							<a href='/loan-options/specialty-loan-programs'>
								Learn More
							</a>
						</div> */}
						</div>
					</div>
				</div>
			</section>

			<section>
				<div class='container'>
					<div
						class='row'
						style={{ padding: '50px', borderRadius: '8px' }}>
						<div class='col-12 text-center'>
							<h2>How It Works</h2>
						</div>
						<div class='row process-2'>
							<div class='col-sm-4'>
								<div class='process__item'>
									<h5>Free Consultation</h5>
									<p>
										If you’re looking to move in the
										Sacramento, CA area, begin by contacting
										us for a free consultation. We’ll review
										your specific wants and needs to gain a
										better understanding of what you’re
										looking for in your new home.
									</p>
								</div>
							</div>
							<div class='col-sm-4'>
								<div class='process__item'>
									<h5>Get Pre-Approved</h5>
									<p>
										After the free initial consultation,
										we’ll help you complete a loan
										application that best fits your needs.
										Then, you’ll receive a pre-approval
										letter that allows you to begin shopping
										for and make offers on a new home.
									</p>
								</div>
							</div>
							<div class='col-sm-4'>
								<div class='process__item'>
									<h5>Find Your New Home</h5>
									<p>
										Using your pre-approval letter, you’ll
										work with your real estate agent to find
										your dream home. As this is going on,
										we’ll work to secure final approval on
										your loan. Once approved, you can sign
										the closing documents for your new home.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default ConstructionCommercial

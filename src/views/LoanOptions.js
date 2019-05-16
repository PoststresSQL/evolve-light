import React from 'react'
import { Link } from 'react-router-dom'

function LoanOptions() {
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
							<h1>Loan Options</h1>
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

			<section id='internal-loan-options'>
				<div className='container'>
					<div className='row text-center'>
						<div className='col-12'>
							<h2 className='big-title'>
								Types of Loan Options:
							</h2>
						</div>
						<div className='col-sm-4'>
							<Link
								to='/loan-options/government-loans'
								className='card'>
								<div className='card-body'>
									<h4 className='card-title'>
										Government Loans
									</h4>
									<p className='card-text'>
										Lorem ipsum, dolor sit amet consectetur
										adipisicing elit. Quidem illum corrupti
										quasi excepturi maxime labore placeat
										magnam laboriosam eum praesentium.
									</p>
									<span>Learn More</span>
								</div>
							</Link>
						</div>
						<div className='col-sm-4'>
							<Link
								to='/loan-options/conventional-loans'
								className='card'>
								<div className='card-body'>
									<h4 className='card-title'>
										Conventional Loans
									</h4>
									<p className='card-text'>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Culpa incidunt laborum
										sapiente alias ratione aperiam rem, enim
										iste consectetur odit!
									</p>
									<span>Learn More</span>
								</div>
							</Link>
						</div>
						<div className='col-sm-4'>
							<Link
								to='/loan-options/construction-loans'
								className='card'>
								<div className='card-body'>
									<h4 className='card-title'>
										Construction Loans
									</h4>
									<p className='card-text'>
										Lorem ipsum, dolor sit amet consectetur
										adipisicing elit. Eius cum recusandae
										iure assumenda, provident inventore
										facilis veritatis quisquam mollitia
										perspiciatis?
									</p>
									<span>Learn More</span>
								</div>
							</Link>
						</div>
						<div className='col-sm-4'>
							<Link
								to='/loan-options/hard-money-loans'
								className='card'>
								<div className='card-body'>
									<h4 className='card-title'>
										Hard Money Loans
									</h4>
									<p className='card-text'>
										If you need a bigger home, you may want
										to look into a jumbo loan, which exceeds
										the conforming loan limit of $417,000.{' '}
									</p>
									<span>Learn More</span>
								</div>
							</Link>
						</div>
						<div className='col-sm-4'>
							<Link
								to='/loan-options/down-payment-assistance'
								className='card'>
								<div className='card-body'>
									<h4 className='card-title'>
										Down Payment Assistance
									</h4>
									<p className='card-text'>
										Interested in moving to a rural property
										outside of a metropolitan area? This
										loan may be for you.
									</p>
									<span>Learn More</span>
								</div>
							</Link>
						</div>
						<div className='col-sm-4'>
							{/* <Link to='/loan-options/down-payment-assistance' className='card'>
								<div className='card-body'>
									<h4 className='card-title'>
										Down Payment Assistance
									</h4>
									<p className='card-text'>
										Interested in moving to a rural property
										outside of a metropolitan area? This
										loan may be for you.
									</p>
									<span>
										Learn More
									</span>
								</div>
							</Link> */}
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default LoanOptions

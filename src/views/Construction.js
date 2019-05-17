import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon as FAI } from '@fortawesome/react-fontawesome'

function Construction() {
	return (
		<div className='main-container'>
			<section className='imagebg' data-overlay='4'>
				<div className='background-image-holder'>
					<img
						alt='background'
						src='https://placehold.it/1920x1080'
					/>
				</div>
				<div className='container'>
					<div className='row'>
						<div className='col-sm-10 col-md-8'>
							<h1>Building Your Home</h1>
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
									href='/get-a-quote/construction-calculator'>
									<span className='btn__text'>
										Get a Quote
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='bg--primary'>
				<div className='container'>
					<div className='row text-center'>
						<div className='col-sm-12'>
							<h2 className='big-title'>Why Go with Us?</h2>
						</div>
						<div className='col-sm-6 col-md-3'>
							<div className='feature feature-6'>
								<FAI icon='heart' size='4x' />
								<h4>First Time Buyer</h4>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipisicing elit. Labore vero perferendis
									corporis dicta, minima provident illum
									facilis dolores dignissimos architecto
									molestias maxime, totam cupiditate harum
									impedit nisi rem, dolore nesciunt!
								</p>
							</div>
						</div>
						<div className='col-sm-6 col-md-3'>
							<div className='feature feature-6'>
								<FAI icon='heart' size='4x' />
								<h4>Moving/Buying A New Home</h4>
								<p>
									Lorem, ipsum dolor sit amet consectetur
									adipisicing elit. Eaque minus assumenda
									quae, dicta magni sequi neque inventore ut!
									Maxime reiciendis facilis iusto quisquam
									placeat voluptate accusamus ipsam laborum
									quia perspiciatis?
								</p>
							</div>
						</div>
						<div className='col-sm-6 col-md-3'>
							<div className='feature feature-6'>
								<FAI icon='heart' size='4x' />
								<h4>Vacation Home</h4>
								<p>
									Lorem ipsum dolor, sit amet consectetur
									adipisicing elit. Aspernatur quisquam autem
									nesciunt delectus officia explicabo quos
									dolores ullam eius, error incidunt quae
									fugiat. Nostrum ea perspiciatis sit quam
									voluptates ipsam?
								</p>
							</div>
						</div>
						<div className='col-sm-6 col-md-3'>
							<div className='feature feature-6'>
								<FAI icon='heart' size='4x' />
								<h4>Investment Property</h4>
								<p>
									Lorem ipsum dolor sit amet consectetur,
									adipisicing elit. Possimus et, laborum
									repudiandae, sunt sapiente dignissimos harum
									eveniet, dolorum vero quas accusamus
									aspernatur laboriosam consequuntur amet at
									atque rerum architecto maiores.
								</p>
							</div>
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

			<section className='bg--secondary'>
				<div class='container'>
					<div class='row'>
						<div class='col-12 text-center'>
							<h2>How It Works</h2>
						</div>
						<div class='row process-2'>
							<div class='col-sm-4'>
								<div class='process__item'>
									<h4>Free Consultation</h4>
									<p>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Natus amet est libero
										dolor voluptates eius modi et cupiditate
										exercitationem sunt, optio, autem
										dolorum necessitatibus itaque voluptas
										corrupti qui in hic?
									</p>
								</div>
							</div>
							<div class='col-sm-4'>
								<div class='process__item'>
									<h4>Get Approved</h4>
									<p>
										Lorem, ipsum dolor sit amet consectetur
										adipisicing elit. Excepturi eveniet
										voluptatibus, sed repudiandae eligendi
										dolores magnam, aut sequi sunt alias
										quibusdam? Est quas animi repellat nobis
										blanditiis quidem, quo in!
									</p>
								</div>
							</div>
							<div class='col-sm-4'>
								<div class='process__item'>
									<h4>Start Building Your Dream Home</h4>
									<p>
										Lorem ipsum, dolor sit amet consectetur
										adipisicing elit. Earum sint aperiam
										odit exercitationem illo dolorem, autem
										perferendis sequi velit deleniti rerum
										quo nemo quam nobis repudiandae iusto
										sunt sit ratione.
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

export default Construction

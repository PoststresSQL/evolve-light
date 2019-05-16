import React from 'react'
import { Link } from 'react-router-dom'
import TestimonialsSlider from './TestimonialsSlider'
import { FontAwesomeIcon as FAI } from '@fortawesome/react-fontawesome'

function Footer() {
	return (
		<div>
			<TestimonialsSlider />
			<footer className='space--sm footer-2 bg--dark'>
				<div className='container'>
					<div className='row'>
						<div className='col-sm-6 col-md-3 col-xs-6'>
							<h6 className='type--uppercase'>Company</h6>
							<ul className='list--hover'>
								<li>
									<Link to='#'>About Company</Link>
								</li>
								<li>
									<Link to='#'>Our Team</Link>
								</li>
								<li>
									<Link to='#'>Locations</Link>
								</li>
								<li>
									<Link to='#'>History</Link>
								</li>
								<li>
									<Link to='#'>Work With Us</Link>
								</li>
							</ul>
						</div>
						<div className='col-sm-6 col-md-3 col-xs-6'>
							<h6 className='type--uppercase'>Contact Us</h6>
							<ul className='list--hover'>
								<li>
									<h5>((company))</h5>
								</li>
								<li>
									((address))
									<br />
									((citycommastate)) ((zipcode))
								</li>
								<li>
									<a href='tel:((phone))'>((phone))</a>
								</li>
								<li>
									<a href='mailto:((email))'>((email))</a>
								</li>
							</ul>
						</div>
						<div className='col-sm-12 col-md-6 col-xs-12'>
							{/* Google Maps Embed Here */}
						</div>
					</div>
					<div className='row'>
						<div className='col-sm-6'>
							<span className='type--fine-print'>
								© <span className='update-year' /> ((company))
							</span>
							<Link className='type--fine-print' href='#'>
								Privacy Policy
							</Link>
							<Link className='type--fine-print' href='#'>
								Legal
							</Link>
						</div>
						<div className='col-sm-6 text-right text-left-xs'>
							<ul className='social-list list-inline list--hover'>
								<li>
									<a
										href='https://twitter.com'
										target='_blank'
										rel='noopener noreferrer'>
										<FAI
											icon={['fab', 'twitter']}
											size='xl'
										/>
									</a>
								</li>
								<li>
									<a
										href='https://facebook.com'
										target='_blank'
										rel='noopener noreferrer'>
										<FAI
											icon={['fab', 'facebook']}
											size='xl'
										/>
									</a>
								</li>
								<li>
									<a
										href='https://instagram.com'
										target='_blank'
										rel='noopener noreferrer'>
										<FAI
											icon={['fab', 'instagram']}
											size='xl'
										/>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default Footer

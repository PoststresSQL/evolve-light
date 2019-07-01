import React from 'react'
import { Link } from 'react-router-dom'
import Section from '../components/Section'
import TestimonialsSlider from './TestimonialsSlider'
import { FontAwesomeIcon as FAI } from '@fortawesome/react-fontawesome'

function Footer() {
	return (
		<div>
			<TestimonialsSlider>
				<li>
					<div className='testimonial'>
						<blockquote>
							“Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Accusamus laudantium non repudiandae? Laborum
							sunt assumenda, autem eveniet accusantium sit nemo
							in iusto soluta consequuntur, rem natus? Dignissimos
							vero ipsam voluptates?”
						</blockquote>
						<h5>John Doe</h5>
						<span>San Francisco, CA</span>
					</div>
				</li>
				<li>
					<div className='testimonial'>
						<blockquote>
							“Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Modi, suscipit eaque! Aspernatur sint
							inventore suscipit iusto quis placeat perspiciatis
							libero at sunt necessitatibus beatae temporibus
							consequatur consectetur, sapiente quos dolorem.”
						</blockquote>
						<h5>Jane Doe</h5>
						<span>Los Angeles, CA</span>
					</div>
				</li>
				<li>
					<div className='testimonial'>
						<blockquote>
							“Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Doloribus cum, delectus mollitia assumenda id
							quasi beatae dolorum inventore accusantium quisquam
							consequatur iure nemo earum! Officiis fuga nulla
							natus molestias praesentium!”
						</blockquote>
						<h5>Maguerite Holland</h5>
						<span>San Diego, CA</span>
					</div>
				</li>
			</TestimonialsSlider>

			<Section id='footer-cta' className='text-center bg--secondary'>
				<div class='col-12'>
					<h2 class='big bold'>
						<span id='cycle-1'>Look Better. </span>
						<span id='cycle-2' style={{ display: 'none' }}>
							Feel Younger.
						</span>
						<span id='cycle-3' style={{ display: 'none' }}>
							Be Confident.
						</span>
					</h2>
					<a class='btn btn--primary border--round' href='/contact'>
						<span class='btn__text'>
							schedule your consultation
						</span>
					</a>
				</div>
			</Section>

			<footer className='space--sm footer-2 bg--primary'>
				<div className='container'>
					<div className='row'>
						<div className='col-sm-6 col-md-3 col-xs-6'>
							<h4 className='semi-bold type--uppercase'>
								Company
							</h4>
							<ul className=''>
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
							<h4 className='semi-bold type--uppercase'>
								Contact Us
							</h4>
							<ul className=''>
								<li>
									<p>((company))</p>
								</li>
								<li>
									<a href='/'>
										((address))
										<br />
										((citycommastate)) ((zipcode))
									</a>
								</li>
								<li>
									<a href='tel:((phone))'>((phone))</a>
								</li>
								<li>
									<a href='mailto:email@email.com'>
										email@email.com
									</a>
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
								© <span className='update-year' />
								((company))
							</span>
							<Link to='/' className='type--fine-print' href='#'>
								Privacy Policy
							</Link>
							<Link to='/' className='type--fine-print' href='#'>
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
											icon={['fab', 'twitter-square']}
											size='lg'
										/>
									</a>
								</li>
								<li>
									<a
										href='https://facebook.com'
										target='_blank'
										rel='noopener noreferrer'>
										<FAI
											icon={['fab', 'facebook-square']}
											size='lg'
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
											size='lg'
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

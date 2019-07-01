import React from 'react'
import Section from '../components/Section'
import { FontAwesomeIcon as FAI } from '@fortawesome/react-fontawesome'

function Template() {
	return (
		<div className='main-container'>
			<Section className='height-auto'>
				<div className='container'>
					<div className='row'>
						<div className='col-sm-8 col-md-7'>
							<h1 className='big extra-bold'>Get In Touch</h1>
							<hr />
						</div>
					</div>
				</div>
			</Section>

			<Section id='form__section'>
				<div className='col-12 text-center'>
					<h2 className='big extra-bold'>Schedule a Consulation</h2>
					<h4 className='bold'>
						Excited to get natural long lasting lashes? We're
						excited to help you get them!
					</h4>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Consequuntur eos quaerat optio totam mollitia,
						quisquam accusantium vitae sint odio officiis cumque
						modi, laboriosam minus deleniti voluptate dolores
						cupiditate delectus ut.
					</p>
				</div>
				<div className='col-8 offset-2'>
					<form>
						<div class='form-group'>
							<label for='fullname'>Full Name</label>
							<input
								type='text'
								class='form-control'
								id='fullname'
								placeholder='Danielle Reeds'
							/>
						</div>
						<div class='form-group'>
							<label for='phone'>Phone Number</label>
							<input
								type='tel'
								class='form-control'
								pattern='([0-9]{3})[0-9]{3}-[0-9]{4}'
								id='phone'
								placeholder='(123)456-7890'
							/>
						</div>
						<div class='form-group'>
							<label for='email'>Email address</label>
							<input
								type='email'
								class='form-control'
								id='email'
								placeholder='danielle.reeds@gmail.com'
							/>
						</div>
						<div class='form-group'>
							<label for='message'>Message</label>
							<textarea
								class='form-control'
								id='message'
								rows='3'
								placeholder='What services are you interested in?'
							/>
						</div>
						<div className='form-group'>
							<button
								type='submit'
								class='btn btn--primary box-shadow btn--lg border--round'>
								<span className='btn__text'>Submit</span>
							</button>
						</div>
					</form>
				</div>
			</Section>

			<Section id='contact__section'>
				<div className='col-md-4 align-self-center'>
					<h4 className='bold'>Contact Info</h4>
					<ul>
						<li>
							<p>
								Phone: <a href='((phone))'>((phone))</a>
							</p>
						</li>
						<li>
							<p>
								Email:
								<a href='mailto:evolvelashandbrow@gmail.com'>
									evolvelashandbrow@gmail.com
								</a>
							</p>
						</li>
						<li>
							<p>
								Address:
								<a href='https://goo.gl/maps/YPZyfgpfUcG95Ym3A'>
									((address))
									<br />
									((citycommastate)), ((zip))
								</a>
							</p>
						</li>
						<li>
							<ul className='social-list list-inline'>
								<li>
									<a
										href='https://twitter.com'
										target='_blank'
										rel='noopener noreferrer'>
										<FAI
											icon={['fab', 'twitter-square']}
											size='2x'
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
											size='2x'
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
											size='2x'
										/>
									</a>
								</li>
							</ul>
						</li>
					</ul>
					<h4 className='bold'>Cancellation Policy</h4>
					<p>
						We ask that you give us 48 hours notice if you need to
						cancel your microblading appointment.
					</p>
					<h4 className='bold'>Hours</h4>
					<p>By Appointment Only</p>
				</div>
				<div className='col-md-8'>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2648.2293683451458!2d-122.3395819839328!3d48.41374067924648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54856f65c8cdd697%3A0x850bc0aa6e06a612!2sEvolve+Lash+and+Brow!5e0!3m2!1sen!2sus!4v1561993669997!5m2!1sen!2sus'
						width='100%'
						height='450'
						frameborder='0'
						style={{ border: 'none' }}
						allowfullscreen
						title='Evolve Lash and Brow map'
					/>
				</div>
			</Section>
		</div>
	)
}

export default Template

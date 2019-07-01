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
							<h1 className='big extra-bold'>Microblading</h1>
							<hr />
							<p className=''>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Maxime dolorum suscipit
								asperiores placeat accusantium rerum animi
								consequuntur sed optio inventore!
							</p>
						</div>
					</div>
				</div>
			</Section>

			<Section id='preface__section'>
				<div className='col-lg-8 col-md-10 offset-lg-2 offset-md-1 offset-sm-0 text-center'>
					<h2 className='extra-bold'>Before We Get Started</h2>
					<p className=''>
						You must consult with Terra prior to booking
						microblading if you have any previous permanent makeup,
						any medical condition(s) or are currently on any
						medication(s). We cannot perform services on anyone
						pregnant or nursing.
					</p>
				</div>
			</Section>

			<Section
				id='microblading__section'
				className='feature-large switchable switchable--switch'>
				<div className='col-md-6 align-self-center'>
					<img
						src='https://placehold.it/600x400'
						alt='placeholder'
						className='border--round box-shadow-wide'
					/>
				</div>
				<div className='col-lg-1' />
				<div className='col-md-6 col-lg-5 align-self-center'>
					<h2 className='big extra-bold text--action'>
						What's Included?
					</h2>
					<hr />
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Recusandae doloremque vitae minus, magnam
						veritatis dolores et rerum officia modi eveniet illum
						voluptatem voluptas reprehenderit quibusdam ullam
						pariatur iusto dolorum cupiditate magni voluptatum odit!
						Nam natus dolorem quo. Esse, aliquam suscipit!
					</p>
				</div>
			</Section>

			<Section id='uvp__section'>
				<div className='col-12'>
					<h2 className='big extra-bold text-center'>Benefits</h2>
					<hr className='center' />
				</div>
				<div className='col-md-4'>
					<div className='card box-shadow border--round'>
						<div className='card-body text-center'>
							<FAI icon='history' size='5x' />
							<h4 className='card-title bold'>
								Save Time Getting Ready
							</h4>
							<p>
								Lorem ipsum, dolor sit amet consectetur
								adipisicing elit. Nisi iusto similique
								laudantium, molestiae voluptatum ratione tempora
								at repudiandae hic ut nulla illum, neque culpa
								eaque! Necessitatibus eum doloribus dolore
								architecto!
							</p>
						</div>
					</div>
				</div>
				<div className='col-md-4'>
					<div className='card box-shadow border--round'>
						<div className='card-body text-center'>
							<FAI icon='leaf' size='5x' />
							<h4 className='card-title bold'>
								Natural Looking Brows
							</h4>
							<p>
								Lorem ipsum, dolor sit amet consectetur
								adipisicing elit. Nisi iusto similique
								laudantium, molestiae voluptatum ratione tempora
								at repudiandae hic ut nulla illum, neque culpa
								eaque! Necessitatibus eum doloribus dolore
								architecto!
							</p>
						</div>
					</div>
				</div>
				<div className='col-md-4'>
					<div className='card box-shadow border--round'>
						<div className='card-body text-center'>
							<FAI icon='running' size='5x' />
							<h4 className='card-title bold'>No Smudging!</h4>
							<p>
								No smudging no matter how hard you hit the gym!
								adipisicing elit. Nisi iusto similique
								laudantium, molestiae voluptatum ratione tempora
								at repudiandae hic ut nulla illum, neque culpa
								eaque! Necessitatibus eum doloribus dolore
								architecto!
							</p>
						</div>
					</div>
				</div>
				<div className='col-md-4'>
					<div className='card box-shadow border--round'>
						<div className='card-body text-center'>
							<FAI icon='stopwatch' size='5x' />
							<h4 className='card-title bold'>
								Long Lasting Results
							</h4>
							<p>
								Lorem ipsum, dolor sit amet consectetur
								adipisicing elit. Nisi iusto similique
								laudantium, molestiae voluptatum ratione tempora
								at repudiandae hic ut nulla illum, neque culpa
								eaque! Necessitatibus eum doloribus dolore
								architecto!
							</p>
						</div>
					</div>
				</div>
				<div className='col-md-4'>
					<div className='card box-shadow border--round'>
						<div className='card-body text-center'>
							<FAI icon='heart' size='5x' />
							<h4 className='card-title bold'>
								Painless, Safe, &amp; Effective
							</h4>
							<p>
								Lorem ipsum, dolor sit amet consectetur
								adipisicing elit. Nisi iusto similique
								laudantium, molestiae voluptatum ratione tempora
								at repudiandae hic ut nulla illum, neque culpa
								eaque! Necessitatibus eum doloribus dolore
								architecto!
							</p>
						</div>
					</div>
				</div>
				<div className='col-md-4'>
					<div className='card box-shadow border--round'>
						<div className='card-body text-center'>
							<FAI icon='paint-brush' size='5x' />
							<h4 className='card-title bold'>
								Hassle-Free/No Maintenance
							</h4>
							<p>
								Lorem ipsum, dolor sit amet consectetur
								adipisicing elit. Nisi iusto similique
								laudantium, molestiae voluptatum ratione tempora
								at repudiandae hic ut nulla illum, neque culpa
								eaque! Necessitatibus eum doloribus dolore
								architecto!
							</p>
						</div>
					</div>
				</div>
			</Section>
		</div>
	)
}

export default Template

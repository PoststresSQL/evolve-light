import React from 'react'

function About() {
	return (
		<div className='main-container'>
			<section className='cover imagebg height-auto' data-overlay='4'>
				<div className='background-image-holder'>
					<img
						alt='background'
						src='https://placehold.it/1920x1080'
					/>
				</div>
				<div className='container pos-vertical-center'>
					<div className='row'>
						<div className='col-sm-10 col-md-8'>
							<h1>About View</h1>

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
		</div>
	)
}

export default About

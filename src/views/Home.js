import React from 'react'

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
						src='https://placehold.it/1920x1080'
					/>
				</div>
				<div className='container pos-vertical-center'>
					<div className='row'>
						<div className='col-sm-10 col-md-8'>
							<h1>Home View</h1>
							<p className='lead'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptatum sequi distinctio magnam temporibus laborum facilis itaque possimus assumenda aliquam!
							</p>
							<a
								className='btn btn--primary type--uppercase'
								href='/purchase'>
								<span className='btn__text'>Button Primary</span>
							</a>
							<a
								className='btn type--uppercase'
								href='/refinance'>
								<span className='btn__text'>Button</span>
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Home

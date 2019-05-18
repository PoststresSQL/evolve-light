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
		</div>
	)
}

export default Home

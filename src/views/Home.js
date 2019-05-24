import React from 'react'
import Button from '../components/Atoms/Button'

function Home(props) {
	return (
		<div className='main-container'>
			<section
				id='home-hero'
				className='cover imagebg height-80'
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
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Nam voluptatum sequi
								distinctio magnam temporibus laborum facilis
								itaque possimus assumenda aliquam!
							</p>
							<Button pathName='/' primary>
								Primary Button
							</Button>
							<Button pathName='/'>Button</Button>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Home

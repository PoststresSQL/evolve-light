import React from 'react'
import { Link } from 'react-router-dom'

function Template() {
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
							<h1>Template</h1>
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

export default Template

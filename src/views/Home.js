import React from 'react'
import Button from '../components/Atoms/Button'
import Section from '../components/Section'

function Home() {
	return (
		<div className='main-container'>
			<Section id='home-hero' className='height-60 align-self-center'>
				<div className='col-sm-10 col-md-8'>
					<h1>Home View</h1>
					<p className=''>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Nam voluptatum sequi distinctio magnam temporibus
						laborum facilis itaque possimus assumenda aliquam!
					</p>
					<Button
						pathName='#'
						className='btn btn--primary box-shadow'>
						Primary Button
					</Button>
					<Button pathName='#' className='btn box-shadow'>
						Button
					</Button>
				</div>
			</Section>
		</div>
	)
}

export default Home

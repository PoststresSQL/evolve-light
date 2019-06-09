import React from 'react'
import Button from '../components/Atoms/Button'
import Section from '../components/Section'

function Home() {
	return (
		<div className='main-container'>
			<Section id='home-hero' className='height-80'>
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
			</Section>
		</div>
	)
}

export default Home

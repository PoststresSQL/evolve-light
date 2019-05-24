import React from 'react'

function AccordionImage1BG({ switched, opacity, bgImage, image, children }) {
	return (
		<section
			className={
				switched
					? 'switchable switchable--switch imagebg'
					: 'switchable imagebg'
			}
			data-overlay={opacity}>
			<div className='background-image-holder'>
				<img alt='background' src={bgImage} />
			</div>
			<div className='container'>
				<div className='row'>
					<div className='col-sm-6 switchable__text'>
						<ul className='accordion accordion-1'>{children}</ul>
					</div>
					<div className='col-md-5 col-sm-6'>
						<img
							alt='placeholder'
							className='border--round box-shadow-wide'
							src={image}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AccordionImage1BG

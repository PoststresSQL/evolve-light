import React from 'react'
import Slider from '../Atoms/Slider'

function AccordionSlider2BG({ images, bgImage, opacity, switched, children }) {
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
						<ul className='accordion accordion-2'>{children}</ul>
					</div>
					<div className='col-md-6 col-sm-6'>
						<Slider images={images} />
					</div>
				</div>
			</div>
		</section>
	)
}

export default AccordionSlider2BG

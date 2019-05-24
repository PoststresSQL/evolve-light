import React from 'react'

function AccordionImage1({ image, switched, children }) {
	return (
		<section
			className={
				switched ? 'switchable switchable--switch' : 'switchable'
			}>
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

export default AccordionImage1

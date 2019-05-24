import React from 'react'

function AccordionVideo2BG({ bgImage, opacity, video, switched, children }) {
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
						<div class='video-cover border--round box-shadow'>
							<div class='background-image-holder'>
								<img alt='placeholder' src={bgImage} />
							</div>
							<div class='video-play-icon' />
							<iframe
								title='video'
								data-src={video}
								allowfullscreen='allowfullscreen'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AccordionVideo2BG

import React from 'react'

function Testimonials(props) {
	return (
		<div className='main-container'>
			<section className='cover imagebg height-auto' data-overlay='4'>
				<div className='background-image-holder'>
					<img
						alt='background'
						src='https://placehold.it/1920x1080'
					/>
				</div>
				<div className='container pos-vertical-center'>
					<div className='row'>
						<div className='col-sm-8 col-md-7'>
							<h1>Testimonials</h1>
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

			<section className='testimonials'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-4 col-sm-12'>
							<div className='card'>
								<div className='card-body'>
									<p className='card-text'>
										Lorem ipsum dolor sit, amet consectetur
										adipisicing elit. Non, optio adipisci
										eos enim esse inventore consectetur
										repudiandae ipsam et amet rem sapiente
										iste aspernatur dicta quae. Nesciunt
										obcaecati aspernatur quia!
									</p>
									<h5 className='card-title'>Jane Doe</h5>
								</div>
							</div>
						</div>
						<div className='col-md-4 col-sm-12'>
							<div className='card'>
								<div className='card-body'>
									<p className='card-text'>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Veritatis veniam ut
										fugit itaque voluptatibus officia sint!
										Excepturi ratione nobis fugit suscipit
										expedita non id vel ea consequatur.
										Ullam tempore itaque deleniti, aut dicta
										eveniet provident labore error. In ipsum
										quis tenetur ducimus molestias deserunt
										ullam.
									</p>
									<h5 className='card-title'>John Doe</h5>
								</div>
							</div>
						</div>
						<div className='col-md-4 col-sm-12'>
							<div className='card'>
								<div className='card-body'>
									<p className='card-text'>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Excepturi nostrum sunt
										at, nulla deleniti doloribus dolorum
										laboriosam laudantium optio recusandae.
									</p>
									<h5 className='card-title'>Jason Doe</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Testimonials

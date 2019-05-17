import React from 'react'

function TestimonialsSlider() {
	return (
		<section className='text-center'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-8 col-sm-10'>
						<div className='slider' data-paging='true'>
							<ul className='slides'>
								<li>
									<div className='testimonial'>
										<blockquote>
											“Lorem ipsum dolor sit amet
											consectetur adipisicing elit.
											Accusamus laudantium non
											repudiandae? Laborum sunt assumenda,
											autem eveniet accusantium sit nemo
											in iusto soluta consequuntur, rem
											natus? Dignissimos vero ipsam
											voluptates?”
										</blockquote>
										<h5>John Doe</h5>
										<span>San Francisco, CA</span>
									</div>
								</li>
								<li>
									<div className='testimonial'>
										<blockquote>
											“Lorem, ipsum dolor sit amet
											consectetur adipisicing elit. Modi,
											suscipit eaque! Aspernatur sint
											inventore suscipit iusto quis
											placeat perspiciatis libero at sunt
											necessitatibus beatae temporibus
											consequatur consectetur, sapiente
											quos dolorem.”
										</blockquote>
										<h5>Jane Doe</h5>
										<span>Los Angeles, CA</span>
									</div>
								</li>
								<li>
									<div className='testimonial'>
										<blockquote>
											“Lorem ipsum dolor sit amet,
											consectetur adipisicing elit.
											Doloribus cum, delectus mollitia
											assumenda id quasi beatae dolorum
											inventore accusantium quisquam
											consequatur iure nemo earum!
											Officiis fuga nulla natus molestias
											praesentium!”
										</blockquote>
										<h5>Maguerite Holland</h5>
										<span>San Diego, CA</span>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default TestimonialsSlider

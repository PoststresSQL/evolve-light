import React from 'react'
import Button from '../components/Atoms/Button'
import Section from '../components/Section'
import Eye from '../assets/images/eye-diagram.png'
import Slider from '../components/Atoms/Slider'
import SliderItem from '../components/Atoms/SliderItem'

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

			<Section id='interactive__section' className='bg--secondary'>
				<div className='col-md-7 align-self-center'>
					<h2 className='bold big'>
						They're your lashes.
						<br />
						<span className='color--primary'>
							Make Them Your Own.
						</span>
					</h2>
					<div id='tab-1' className='tab-content'>
						<h4 className='bold type--uppercase'>
							Get Fuller, Thicker Lashes
						</h4>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Ut velit aspernatur nostrum fuga, eveniet sint
							asperiores accusantium eos repudiandae iste, sunt
							deserunt impedit, exercitationem ex. Accusantium
							eveniet illum iste quae, aperiam a neque possimus
							cupiditate, facilis doloribus ut nobis omnis?
						</p>
					</div>
					<div id='tab-2' className='tab-content active'>
						<h4 className='bold type--uppercase'>
							Shape Your Brows
						</h4>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Ut velit aspernatur nostrum fuga, eveniet sint
							asperiores accusantium eos repudiandae iste, sunt
							deserunt impedit, exercitationem ex. Accusantium
							eveniet illum iste quae, aperiam a neque possimus
							cupiditate, facilis doloribus ut nobis omnis?
						</p>
					</div>
					<div id='tab-3' className='tab-content'>
						<h4 className='bold type--uppercase'>
							Get More Length
						</h4>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Ut velit aspernatur nostrum fuga, eveniet sint
							asperiores accusantium eos repudiandae iste, sunt
							deserunt impedit, exercitationem ex. Accusantium
							eveniet illum iste quae, aperiam a neque possimus
							cupiditate, facilis doloribus ut nobis omnis?
						</p>
					</div>
					<div id='tab-4' className='tab-content'>
						<h4 className='bold type--uppercase'>
							Want More of an Arch?
						</h4>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Ut velit aspernatur nostrum fuga, eveniet sint
							asperiores accusantium eos repudiandae iste, sunt
							deserunt impedit, exercitationem ex. Accusantium
							eveniet illum iste quae, aperiam a neque possimus
							cupiditate, facilis doloribus ut nobis omnis?
						</p>
					</div>
				</div>
				<div className='col-md-5 interactive__image'>
					<img src={Eye} alt='diagram of eye' />
					<ul className='marker-tabs'>
						<li id='marker-1' className='tab-link' data-tab='tab-1'>
							<span className='tab-inner' />
						</li>

						<li
							id='marker-2'
							className='tab-link active'
							data-tab='tab-2'>
							<span className='tab-inner' />
						</li>

						<li id='marker-3' className='tab-link' data-tab='tab-3'>
							<span className='tab-inner' />
						</li>

						<li id='marker-4' className='tab-link' data-tab='tab-4'>
							<span className='tab-inner' />
						</li>
					</ul>
				</div>
			</Section>

			<Section
				id='microblading__section'
				className='switchable feature-large switchable--switch'>
				<div className='col-md-6 align-self-center'>
					<img
						src='https://placehold.it/600x400'
						alt='placeholder'
						className='border--round'
					/>
				</div>
				<div className='col-lg-1' />
				<div className='col-lg-5 col-md-6 align-self-center'>
					<h4>lorem ipsum</h4>
					<h2 className='big bold'>Microblading</h2>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Cum, ut in dolore molestiae rem magnam blanditiis
						aperiam laboriosam sit non aspernatur officia cumque
						veniam maiores architecto soluta! Nam, odio laboriosam!
					</p>
					<Button
						pathName='/microblading-services/microblading'
						className='btn box-shadow border--round'>
						Learn More
					</Button>
				</div>
			</Section>

			<Section id='shading__section' className='switchable feature-large'>
				<div className='col-md-6 align-self-center'>
					<img
						src='https://placehold.it/600x400'
						alt='placeholder'
						className='border--round'
					/>
				</div>
				<div className='col-lg-1' />
				<div className='col-lg-5 col-md-6 align-self-center'>
					<h4>lorem ipsum</h4>
					<h2 className='big bold'>
						Microblading
						<br />
						&amp; Shading
					</h2>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Cum, ut in dolore molestiae rem magnam blanditiis
						aperiam laboriosam sit non aspernatur officia cumque
						veniam maiores architecto soluta! Nam, odio laboriosam!
					</p>
					<Button
						pathName='/microblading-services/microblading-and-shading'
						className='btn box-shadow border--round'>
						Learn More
					</Button>
				</div>
			</Section>

			<Section
				id='touchup__section'
				className='switchable feature-large switchable--switch'>
				<div className='col-md-6 align-self-center'>
					<img
						src='https://placehold.it/600x400'
						alt='placeholder'
						className='border--round'
					/>
				</div>
				<div className='col-lg-1' />
				<div className='col-lg-5 col-md-6 align-self-center '>
					<h4>lorem ipsum</h4>
					<h2 className='big bold'>
						4-6 Week <br />
						Touch-Up
					</h2>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Cum, ut in dolore molestiae rem magnam blanditiis
						aperiam laboriosam sit non aspernatur officia cumque
						veniam maiores architecto soluta! Nam, odio laboriosam!
					</p>
					<Button
						pathName='/microblading-services/microblading-touch-ups'
						className='btn box-shadow border--round'>
						Learn More
					</Button>
				</div>
			</Section>

			<Section
				id='annual__section'
				className='switchable feature-large align-self-center'>
				<div className='col-md-6'>
					<img
						src='https://placehold.it/600x400'
						alt='placeholder'
						className='border--round'
					/>
				</div>
				<div className='col-lg-1' />
				<div className='col-lg-5 col-md-6 align-self-center'>
					<h4>lorem ipsum</h4>
					<h2 className='big bold'>
						Annual
						<br />
						Touch-Up
					</h2>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Cum, ut in dolore molestiae rem magnam blanditiis
						aperiam laboriosam sit non aspernatur officia cumque
						veniam maiores architecto soluta! Nam, odio laboriosam!
					</p>
					<Button
						pathName='/microblading-services/annual-touch-ups'
						className='btn box-shadow border--round'>
						Learn More
					</Button>
				</div>
			</Section>

			<Section id='terra__section' className='bg--secondary'>
				<div className='col-md-8 align-self-center text-center'>
					<h2 className='watermark-text extra-bold'>
						<span className='color--primary'>Terra Forkner</span>
					</h2>
					<h4 className='thin'>Your Doctor</h4>
					<h2 className='big bold'>Terra Forkner</h2>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Facere praesentium similique beatae sit et
						deleniti sapiente aperiam, fugiat facilis excepturi
						dolorem deserunt distinctio libero eligendi dicta
						laboriosam, unde autem. Consequuntur perspiciatis quia
						repudiandae minus, ab optio necessitatibus est deleniti
						blanditiis, neque architecto nulla reiciendis sit.
						Maxime voluptatum esse quasi quod?
					</p>
					<a
						className='btn border--round box-shadow'
						href='/our-company/about-terra'>
						<span className='btn__text'>learn more</span>
					</a>
				</div>
				<div className='col-sm-4 text-center'>
					<img
						alt='placeholder'
						className='border--round box-shadow'
						src='https://placehold.it/300x400'
					/>
				</div>
			</Section>

			<section
				className='text-center testimonial testimonial-1 imagebg'
				data-overlay='6'>
				<div
					className='background-image-holder'
					style={{
						backgroundColor: 'rgba(0, 0, 0, 0)',
						backgroundPosition: 'initial',
						backgroundRepeat: 'no-repeat',
						backgroundAttachment: 'scroll',
						backgroundImage: `url("https://seedlogix.com/users/u147/147577/background-05.jpg")`,
						backgroundSize: 'auto',
						backgroundOrigin: 'padding-box',
						backgroundClip: 'border-box',
						opacity: '1'
					}}>
					<img
						alt='background'
						src='https://seedlogix.com/users/u147/147577/background-05.jpg'
					/>
				</div>
				<div className='container'>
					<div className='row'>
						<div className='col-12 col-lg-8'>
							<div className=''>
								<blockquote>
									Lorem ipsum dolor sit amet consectetur,
									adipisicing elit. Temporibus iste dicta
									aliquid repudiandae obcaecati veritatis amet
									quae assumenda voluptatibus tempore fuga
									provident ipsum omnis harum perferendis,
									placeat sint perspiciatis odio.
								</blockquote>
								<h4 className='semi-bold'>Cameron</h4>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Section id='gallery__section'>
				<div className='col-12'>
					<h2 className='big bold text-center'>Evolutions</h2>
					<Slider>
						<SliderItem>
							<img
								src='https://placehold.it/600x400'
								alt='pladholer'
							/>
						</SliderItem>
						<SliderItem>
							<img
								src='https://placehold.it/600x400'
								alt='pladholer'
							/>
						</SliderItem>
						<SliderItem>
							<img
								src='https://placehold.it/600x400'
								alt='pladholer'
							/>
						</SliderItem>
						<SliderItem>
							<img
								src='https://placehold.it/600x400'
								alt='pladholer'
							/>
						</SliderItem>
					</Slider>
				</div>
			</Section>

			<Section
				id='process__section'
				className='text-center bg--secondary'>
				<div className='col-12'>
					<h4>How It Works</h4>
					<h2 className='big bold'>Have Confidence at Every Step</h2>
				</div>
				<div className='col-md-4'>
					<h4 className='number semi-bold'>1</h4>
					<h3>Consultation</h3>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Accusantium neque impedit eveniet, est cumque
						quidem quod amet, reprehenderit rem voluptas sapiente,
						autem quaerat ratione. Illo, quaerat consequatur! Neque,
						excepturi ad.
					</p>
				</div>

				<div className='col-md-4'>
					<h4 className='number semi-bold'>2</h4>
					<h3>Microblading Procedure</h3>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Ab odio facere dolorem reprehenderit odit expedita
						assumenda illo similique quibusdam ratione non, nulla
						exercitationem laborum molestias eos itaque. Error, ut
						molestiae.
					</p>
				</div>

				<div className='col-md-4'>
					<h4 className='number semi-bold'>3</h4>
					<h3>Follow Up &amp; Touch Ups</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Ipsam quae inventore sit esse enim fuga quam qui modi
						quos vitae sint, incidunt quas nostrum corporis aliquid
						nisi voluptas rem reprehenderit?
					</p>
				</div>
			</Section>

			<section>
				<div className='container'>
					<div className='row'>
						<div className='col-12 col-md-5'>
							<h2 className='big bold'>
								Frequently Asked Questions
							</h2>
						</div>

						<div className='col-12 col-md-7'>
							<ul
								className='accordion accordion-1'
								style={{ minHeight: '54rem' }}>
								<li>
									<div className='accordion__title'>
										<span className='h5'>
											<p>How long does it take?</p>
										</span>
									</div>
									<div className='accordion__content'>
										<p>
											For the first Microblading session,
											the entire procedure should take
											about 2.5-3 hours. During this
											session, the brow technician will
											shape and style the client’s brows
											for client approval. We then follow
											with pigment color selection. Once
											the client is satisfied with the
											choices, we begin the procedure.The
											client is to come in for a follow up
											visit in order to have any minor
											necessary touch ups. The second
											Microblading session takes place
											after 4-6 weeks after the initial
											session. This session will take
											approximately 1.5-2 hours to
											complete.
										</p>
									</div>
								</li>

								<li>
									<div className='accordion__title'>
										<span className='h5'>
											<p>
												How long does it take to heal?
											</p>
										</span>
									</div>
									<div className='accordion__content'>
										<p>
											The eyebrow area will be slightly
											red after the procedure and color
											will appear very dark. This is
											normal for the procedure and part of
											the healing process. The color will
											fade by up to 40% as it heals. In
											the following days, the eyebrows
											will continue to be dark and you
											will notice slight scabbing. Do not
											pick at the scabs as this may damage
											the skin and the outcome of the
											microbladed area. The eyebrows will
											lighten up in color as it heals. No
											down time is required after
											microblading procedure. It takes
											approximately 7-14 days for the
											brows to heal over, and about 1
											month for the color to fully set in.
											You'll notice the color is very
											light right after the two weeks
											after healing; the skin will have an
											opaque milky looking quality to it.
											This is known as the milk skin and
											is common in tattooing. This is due
											to the the tissue still healing from
											the inside out even though the
											surface of the skin is healed. True
											color will reveal itself once
											healed.
										</p>
									</div>
								</li>

								<li>
									<div className='accordion__title'>
										<span className='h5'>
											<p>How long does it last?</p>
										</span>
									</div>
									<div className='accordion__content'>
										<p>
											Since microblading pigments are not
											implanted into the skin as deep as
											traditional tattoos, the area will
											naturally fade overtime.
											Microblading typically lasts 1-3
											years, depending on skin type
											(normal, oily, dry), age
											(youthful/mature). Skincare routine
											will also affect the lasting effect
											of the pigment: patients who tan,
											uses products with AHA or Glycolic
											Acid with fade faster as your skin
											will resurface faster. Each
											individual's color retention within
											the skin will vary. To maintain the
											brows looking fresh, a touch up is
											suggested every 12-18 months.
											Clients can let the microbladed area
											fade over time, but please note a
											slight shadow may remain.
										</p>
									</div>
								</li>

								<li>
									<div className='accordion__title'>
										<span className='h5'>
											<p>What if I don't like it?</p>
										</span>
									</div>
									<div className='accordion__content'>
										<p>
											As with all cosmetic procedures,
											individuals should not make their
											choices lightly. We always recommend
											clients do their research,
											understand the procedure and compare
											different artists' work and
											portfolio when making their
											decisions. Our brow technicians will
											do their utmost to shape and style
											the eyebrows to the clients
											satisfaction prior to the procedure.
											Every effort will be made to achieve
											an even appearance, but please
											realize our faces are never
											perfectly symmetrical. Uneven
											appearance can be fixed during the
											touch up session. Pigment
											discoloration and color correction
											can also be fixed during the the
											touch up session. Microbladed brows
											will eventually fade away if no
											additional touch ups are done.
										</p>
									</div>
								</li>

								<li>
									<div className='accordion__title'>
										<span className='h5'>
											<p>
												What are cancellation or missed
												appointment policies?
											</p>
										</span>
									</div>
									<div className='accordion__content'>
										<p>
											Clients are able to cancel or
											reschedule appointments at anytime
											with a minimum of 48 hours notice
											prior to the appointment time. To
											book an appointment, a
											non-refundable deposit of $50 is
											required. For a more detailed list
											of policies and associated fees. To
											cancel or reschedule, please email
											or call us. We reserve the right to
											refuse service to clients who have
											cancellations or rescheduling of
											appointments 2 times in a row.
										</p>
									</div>
								</li>

								<li>
									<div className='accordion__title'>
										<span className='h5'>
											<p>
												Why Should I Choose The Youth
												Fountain For Hair Recovery?
											</p>
										</span>
									</div>
									<div className='accordion__content'>
										<p>
											The Youth Fountain is the premiere
											hair restoration center in the
											Freehold, NJ region. Dr. Shakov is
											highly-trained in the most modern
											hair transplantation methods to
											ensure that when the surgery is
											complete, you not only have a
											natural head of hair, but no one
											will ever be able to tell you had
											the surgery.
										</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Home

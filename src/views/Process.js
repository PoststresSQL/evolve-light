import React from 'react'
import Section from '../components/Section'
import Button from '../components/Atoms/Button'

function Template() {
	return (
		<div className='main-container'>
			<Section className='height-auto'>
				<div className='container'>
					<div className='row'>
						<div className='col-sm-8 col-md-7'>
							<h1 className='big extra-bold'>
								The Microblading Process
							</h1>
						</div>
					</div>
				</div>
			</Section>

			<Section id='pre-process__section' className=''>
				<div className='col-md-8'>
					<h2 className='big extra-bold'>Pre-Care</h2>
					<hr />
					<p>
						It's simple! Here are some things to remember not to do:
					</p>
					<ul className='care__list'>
						<li className='care__list-item'>
							<p>
								We prefer that you do not have newly plucked or
								waxed brows at your microblading appointment, so
								that we can see where your natural brows grow.
								That way we can shape your brows from scratch.
								So, the fuller your brows are at your
								microblading appointment, the better, as we'll
								have more to work with.
							</p>
						</li>
						<li className='care__list-item'>
							<p>
								Do not consume alcohol or caffeine 24 hours
								prior to your microblading procedure (these are
								natural blood thinners and will make you bleed
								excessively during the procedure)
							</p>
						</li>
						<li className='care__list-item'>
							<p>
								Do not take Aspirin, Niacin, Vitamin E or
								Advil/Ibuprofen 48 hours before your procedure -
								Tylenol is OK.
							</p>
						</li>
						<li className='care__list-item'>
							<p>
								Do not use Botox in the forehead and eye area 3
								weeks before your microblading procedure
							</p>
						</li>
						<li className='care__list-item'>
							<p>
								Do not take Fish Oil or Vitamin E supplements 1
								week prior (natural blood thinners)
							</p>
						</li>
						<li className='care__list-item'>
							<p>
								Discontinue Vitamin A/Retinol products 2 weeks
								prior to treatment
							</p>
						</li>
						<li className='care__list-item'>
							<p>
								Discontinue prescription Retin-A products 3
								weeks prior to your procedure - always avoid
								application onto the brow area
							</p>
						</li>
						<li className='care__list-item'>
							<p>Do not work out the day of the procedure</p>
						</li>
						<li className='care__list-item'>
							<p>Do not tan 2 weeks prior</p>
						</li>
						<li className='care__list-item'>
							<p>
								Do not have any type of facial/peel or
								electrolysis 1 week prior to treatment
							</p>
						</li>
						<li className='care__list-item'>
							<p>
								Avoid Nutritional Shakes, "Hair, Skin, Nail"
								supplements 48 hours prior to procedure
							</p>
						</li>
						<li className='care__list-item'>
							<p>
								Avoid use of any Alpha Hydroxy Acid (AHA)
								products close to the eyebrow area 2 weeks prior
								to and 2 weeks after your procedure
							</p>
						</li>
						<li className='care__list-item'>
							<p>
								Avoid Chemical Peels, Microdermabrasion or other
								invasive facials 3 weeks prior to procedure
							</p>
						</li>
						<li className='care__list-item'>
							<p>
								Please note; Your skin will be more sensitive
								during your menstrual cycle.
							</p>
						</li>
					</ul>
					<p>
						Please take in account that this procedure will take
						about 2 1/5 hours depending on your brows and their
						existing condition. Due to the nature of this service we
						kindly ask that you arrive unaccompanied to your
						scheduled appointment. Please leave friends,
						boyfriends/husbands, children and pets at home.
					</p>
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
					<div className='row justify-content-center'>
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
						<div className='col-12 col-lg-8'>
							<Button
								pathName='/contact'
								className='btn btn--primary border--round'>
								Setup A Consultation
							</Button>
						</div>
					</div>
				</div>
			</section>

			<Section id='post-process__section'>
				<div>
					<h2 className='big extra-bold'>Post-Care</h2>
					<hr />
					<p>
						Post-care steps are straightforward and simple. Your
						microblading technician will provide you a free After
						Care Kit and go over all the details of your after care
						at your appointment time. It is absolutely crucial that
						you follow precise Post-Care instructions to achieve the
						full results of the Microblading procedure. If
						directions are not followed there is a risk that your
						procedure results won't last as intended. Your regular
						brow maintenance of tweezing, threading, waxing and/or
						tinting may continue as normal once your new brows have
						healed (after 2 weeks).
					</p>
					<h4 className='semi-bold text--uppercase'>
						Day 1 - Day of your microblading procedure
					</h4>
					<ul className='care__list'>
						<li className='care__list-item'>
							<p>
								Wash your microbladed brows every 2-3 hours with
								the cleanser provided to you in your After-Care
								Kit. Wash your hands with soap before touching
								the brow area, apply cleanser on to your brows,
								rinse with water.
							</p>
						</li>
						<li className='care__list-item'>
							<p>
								Either air dry or dab the brow area after
								washing. Use a clean tissue and pat dry - do not
								use a towel on the brow area.
							</p>
						</li>
						<li className='care__list-item'>
							<p>
								Apply ointment with a Q-Tip on to your brows
								in-between the washing (allow eyebrows to
								completely dry before applying ointment)
							</p>
						</li>
						<li className='care__list-item'>
							<p>Apply ointment once more before bedtime</p>
						</li>
						<li className='care__list-item'>
							<p>
								Continue to apply ointment with a Q-tip onto
								your brows 3 times per day (apply every morning,
								mid-day and night ) for the next 7 days (10 days
								if your brows feel dry).
							</p>
						</li>
					</ul>
					<h4 className='semi-bold text--uppercase'>Day 2-10</h4>
					<ul className='care__list'>
						<li className='care__list-item'>
							<p>
								DO NOT rub, pick or scratch the treated area.
								Let any scabbing or dry skin naturally exfoliate
								off. Picking can cause scarring and pigment
								loss!
							</p>
						</li>
						<li className='care__list-item'>
							<p>
								NO makeup or skincare products is to be used on
								your brow area for 2 weeks.
							</p>
						</li>
						<li className='care__list-item'>
							<p>
								Avoid heavy sweating for 1 week - hot yoga,
								spinning class, running etc. (pigment can be
								expelled through your pores when sweating and
								compromise the healed result)
							</p>
						</li>
						<li className='care__list-item'>
							<p>
								No submerging your face for 2 weeks - No
								Swimming! Plan your vacations accordingly
							</p>
						</li>
						<li className='care__list-item'>
							<p>
								No hot showers, pool, sauna, steam rooms and/or
								hot baths for 3 weeks.
							</p>
						</li>
						<li className='care__list-item'>
							<p>
								NO facials, chemical treatments and
								microdermabrasion for 4 weeks.
							</p>
						</li>
						<li className='care__list-item'>
							<p>
								Eyebrow tinting should not be undertaken for 2
								weeks after your procedure.
							</p>
						</li>
						<li className='care__list-item'>
							<p>
								Avoid direct sun exposure and tanning beds for a
								minimum of 4 weeks after your procedure. Direct
								sunlight can cause the pigment to change color
								while it is healing and can also cause hyper
								pigmentation and scarring. After 10 days, once
								the area has healed completely, use SPF/sunblock
								when going out in the sun to avoid fading of the
								pigment.
							</p>
						</li>
						<li className='care__list-item'>
							<p>
								Keep your bangs and hair pulled back from your
								face for the first 10 days.
							</p>
						</li>
						<li className='care__list-item'>
							<p>
								Avoid Retin-A, Chemical Peels and Microderms
								around the brow area once healed.
							</p>
						</li>
						<li className='care__list-item'>
							<p>
								Try avoiding sleeping on your face/brows for the
								first 7 days.
							</p>
						</li>
					</ul>
					<h5>
						<em>
							During healing (first 2 weeks) your eyebrows will
							appear darker and bolder due to natural scabbing and
							healing. This is very common for all permanent
							cosmetic procedures.
						</em>
					</h5>
				</div>
			</Section>

			<Section className=''>
				<div className='col-12'>
					<h2 className='big extra-bold'>What's Next?</h2>
					<hr />
				</div>
				<div className='col-md-8'>
					<h3 className='bold'>
						What to expect after your microblading procedure
					</h3>
					<p>
						After your Microblading procedure your brows go through
						several stages of healing. It is crucial that you follow
						all steps and recommendations provided to you. Right
						after your treatment your brows will appear bolder and
						darker than your final healed result. The intensity of
						the pigment will settle within a few days and after the
						6th-9th day you will see what your brows will end up
						looking like. Be patient - great things come to those
						who wait.
					</p>
					<h3 className='bold'>Touch Up Appointment</h3>
					<p>
						A touch-up appointment is necessary for you to receive
						the full benefits of this procedure. This touch-up
						appointment is complimentary and should be scheduled to
						be performed between 4-6 weeks after your initial visit.
						Important! The touch-up appointment is crucial to
						achieve optimal results - do not skip this step!
					</p>
					<h3 className='bold'>Your new eyebrows</h3>
					<p>
						Healed results will vary with each individual client
						depending on skin type and other factors. But most
						importantly - your results depend on how well you cared
						for your new brows during the initial two weeks of
						healing. Detailed post care instructions and how to best
						care for your new brows will be provided to you after
						your visit at Evolve Lash and Brow.
					</p>
					<h5>
						<em>
							*We advise new clients to book their Microblading
							appointments 1 month in advance of vacations,
							weddings, and other special occasions (remember,
							there's also a Touch up appointment). This allows
							adequate time for healing of both your initial
							Microblading procedure as well as the Touch-Up
							appointment.
						</em>
					</h5>
				</div>
				<div className='col-md-4'>
					<h4 className='semi-bold'>
						* Permanent makeup is NOT recommended for any clients
						who are or have:
					</h4>
					<ul className='care__list'>
						<li className='care__list-item'>
							<p>Pregnant or Nursing</p>
						</li>
						<li className='care__list-item'>
							<p>Allergic to anesthetic (Lidocaine)</p>
						</li>
						<li className='care__list-item'>
							<p>Had Botox in the past 3 weeks</p>
						</li>
						<li className='care__list-item'>
							<p>Used Accutane in the past year</p>
						</li>
						<li className='care__list-item'>
							<p>Tendency towards keloids</p>
						</li>
						<li className='care__list-item'>
							<p>Diabetic</p>
						</li>
						<li className='care__list-item'>
							<p>Viral infections and/or diseases</p>
						</li>
						<li className='care__list-item'>
							<p>Epilepsy</p>
						</li>
						<li className='care__list-item'>
							<p>A Pacemaker or major heart problems</p>
						</li>
						<li className='care__list-item'>
							<p>Had an Organ transplant</p>
						</li>
						<li className='care__list-item'>
							<p>Seborrheic dermatitis</p>
						</li>
						<li className='care__list-item'>
							<p>
								Skin irritations or Psoriasis near the treated
								area (rashes, sunburn, acne, etc.)
							</p>
						</li>
						<li className='care__list-item'>
							<p>
								Sick (cold, flu, viral infection outbreak etc.)
							</p>
						</li>
						<li className='care__list-item'>
							<p>Extremely Oily or Problematic Skin</p>
						</li>
					</ul>
				</div>
			</Section>
		</div>
	)
}

export default Template

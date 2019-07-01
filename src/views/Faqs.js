import React from 'react'
import Section from '../components/Section'
import AccordionItem from '../components/Atoms/AccordionItem'
import { Link } from 'react-router-dom'

function Template() {
	return (
		<div className='main-container'>
			<Section className='height-auto'>
				<div className='container'>
					<div className='row'>
						<div className='col-sm-8 col-md-7'>
							<h1 className='big extra-bold'>
								Frequently Asked Questions
							</h1>
							<hr />
						</div>
					</div>
				</div>
			</Section>

			<Section id='faqs__section' className=''>
				<div className='col-sm-6'>
					<ul className='accordion accordion-2'>
						<AccordionItem title='What is Microblading?' active>
							<p>
								Microblading, also known as eyebrow embroidery
								or 3D brows, is a relatively new manual method
								for enhancing eyebrows. It is considered to be
								permanent makeup, as compared to the traditional
								hair stroke technique done by machine. It is
								done using a very fine blade to deposit pigment
								into the epidermis. Because the color is closer
								to the surface, the strokes appear crisp and
								very fine. There is no spilling under the skin.
							</p>
							<p>
								The difference with this and ordinary permanent
								makeup is that microblading is not done by a
								machine. The pigment is manually placed into the
								skin. The microblading manual pen is equipped
								with sterile packaged blades. The blade glides
								with gentle pressure over the skin and causes
								fine cuts, as fine as a paper cut, leaving a
								trace that can hardly be distinguished from real
								hair. Depending on the drawing technique – of
								which we are experts – it creates an individual
								look perfect for your face and the style you are
								trying to achieve. Above all 3D, or HD, eyebrows
								absolutely do not appear as a tattoo.
							</p>
							<p>
								Microblading is ideal for anyone wanting to
								enhance the look of their eyebrows. The results
								are natural looking hair-like strokes,
								regardless of the amount of the hair you
								currently have. People suffering from alopecia,
								trigonometrical or any other condition that
								causes hair loss benefit greatly from
								microblading, as well as people who simply
								aren’t happy with their eyebrows.
							</p>
						</AccordionItem>
						<AccordionItem title='How long does it take to heal?'>
							<p>
								The eyebrow area will be slightly red after the
								procedure and color will appear very dark. This
								is normal for the procedure and part of the
								healing process. The color will fade by up to
								40% as it heals. In the following days, the
								eyebrows will continue to be dark and you will
								notice slight scabbing. Do not pick at the scabs
								as this may damage the skin and the outcome of
								the microbladed area. The eyebrows will lighten
								up in color as it heals. No down time is
								required after microblading procedure. It takes
								approximately 7-14 days for the brows to heal
								over, and about 1 month for the color to fully
								set in. You'll notice the color is very light
								right after the two weeks after healing; the
								skin will have an opaque milky looking quality
								to it. This is known as the milk skin and is
								common in tattooing. This is due to the the
								tissue still healing from the inside out even
								though the surface of the skin is healed. True
								color will reveal itself once healed.
							</p>
						</AccordionItem>
						<AccordionItem title='Can I get my touch up session sooner than  weeks?'>
							<p>
								Touch up sessions should not be done earlier
								than 4 weeks after initial microblading session
								as pigment color has not fully settled into the
								skin. Most importantly, this is to prevent scar
								damage as the tissue requires time to completely
								heal.IS IT PAINFUL?The pain level for the
								procedure is considered mild to none. Prior to
								the procedure your brow technician will apply a
								topical anesthetic to numb the area, and also
								reapplied during the procedure. Everyone
								responds differently to anesthetic; depending on
								the client, the feeling of the procedure has
								been described as light cat scratches to not
								feeling anything. Topical anesthetics used may
								contain lidocaine, prilocaine, benzocaine,
								tetracaine and epinephrine. After the procedure,
								redness and slight swelling in the area is
								normal. Clients describe the area feeling
								similar to a light sunburn. Clients can take
								Tylenol but not aspirin or ibuprofen.
							</p>
						</AccordionItem>
						<AccordionItem title='Who is NOT suitable for the procedure?'>
							<p>
								Microblading is not suitable for the following
								candidates:· Using Accutane· Have heart
								conditions or using heart medications· Have
								diabetes (will require a physician's note)· Have
								skin disease or irritations · Have had Botox in
								the last 2 weeks· Have gotten a deep tan or
								chemical peels in the last 2 weeks· Allergic to
								lidocaine, prilocaine, benzocaine, tetracaine or
								epinephrine· Anyone who has any serious medical
								conditions may require a physician's note. ·
								Pregnant or nursing clients who want to
								microblade can be done at your own discretion.
								We suggest discussing with your doctor first.
								Microblading is still considered a tattoo, and
								just like with wine or sushi consumption, it is
								a personal choice to do so during this period.
							</p>
							<h5>
								<em>
									* We reserve the right to refuse service to
									anyone who we deem not suitable for this
									procedure or for any other reason. Our brow
									technicians make the decision to microblade
									an individual based on their own discretion.
								</em>
							</h5>
						</AccordionItem>
						<AccordionItem title="What if I don't like it?">
							<p>
								As with all cosmetic procedures, individuals
								should not make their choices lightly. We always
								recommend clients do their research, understand
								the procedure and compare different artists'
								work and portfolio when making their decisions.
								Our brow technicians will do their utmost to
								shape and style the eyebrows to the clients
								satisfaction prior to the procedure. Every
								effort will be made to achieve an even
								appearance, but please realize our faces are
								never perfectly symmetrical. Uneven appearance
								can be fixed during the touch up session.
								Pigment discoloration and color correction can
								also be fixed during the the touch up session.
								Microbladed brows will eventually fade away if
								no additional touch ups are done.
							</p>
						</AccordionItem>
						<AccordionItem title='What are your cancellation/missed appointment policies?'>
							<p>
								Clients are able to cancel or reschedule
								appointments at anytime with a minimum of 48
								hours notice prior to the appointment time. To
								book an appointment, a non-refundable deposit of
								$50 is required. For a more detailed list of
								policies and associated fees. To cancel or
								reschedule, please email or call us. We reserve
								the right to refuse service to clients who have
								cancellations or rescheduling of appointments 2
								times in a row.
							</p>
						</AccordionItem>
					</ul>
				</div>
				<div className='col-sm-6'>
					<ul className='accordion accordion-2'>
						<AccordionItem title='How long does it take?'>
							<p>
								For the first Microblading session, the entire
								procedure should take about 2.5-3 hours. During
								this session, the brow technician will shape and
								style the client’s brows for client approval. We
								then follow with pigment color selection. Once
								the client is satisfied with the choices, we
								begin the procedure.The client is to come in for
								a follow up visit in order to have any minor
								necessary touch ups. The second Microblading
								session takes place after 4-6 weeks after the
								initial session. This session will take
								approximately 1.5-2 hours to complete.
							</p>
						</AccordionItem>
						<AccordionItem title='Is the Touch Up session necessary?'>
							<p>
								Yes! A touch up session after 4-6 weeks is
								necessary as everyone heals differently and
								outcome will vary. Certain areas may not pick up
								during first session and will need to be
								refilled. Pigment color may need to be adjusted,
								brow thickness and more strokes can be added.
								Individuals with oily skin often require a
								deeper shade during the touch up session as the
								oils tend to lighten the pigment. Most
								importantly, your touch up session is when we
								refine your brows to ensure it looks perfect and
								retains the color for the whole year!
							</p>
						</AccordionItem>
						<AccordionItem title='How long does it last?'>
							<p>
								Since microblading pigments are not implanted
								into the skin as deep as traditional tattoos,
								the area will naturally fade overtime.
								Microblading typically lasts 1-3 years,
								depending on skin type (normal, oily, dry), age
								(youthful/mature). Skincare routine will also
								affect the lasting effect of the pigment:
								patients who tan, uses products with AHA or
								Glycolic Acid with fade faster as your skin will
								resurface faster. Each individual's color
								retention within the skin will vary. To maintain
								the brows looking fresh, a touch up is suggested
								every 12-18 months. Clients can let the
								microbladed area fade over time, but please note
								a slight shadow may remain.
							</p>
						</AccordionItem>
						<AccordionItem title='What are the Pre-Care and Post-Care procedures?'>
							<p>
								In order to achieve the best results, it is best
								to follow the Pre and Post-Care instructions.
								See <Link to='/process'>How It Works</Link>
							</p>
						</AccordionItem>
						<AccordionItem title='What are the Risks and Complications?'>
							<p>
								We take all proper precautions for a safe
								session by using sterilized equipment, new
								needles and in a sanitized environment. Should
								clients follow our pre and post care
								instructions, there should be minimal risks or
								complications . Although allergic reactions to
								the pigments are rare, it could be possible for
								certain individuals. We suggest a pigment patch
								test for individuals who have high skin
								sensitivities or are sensitive to:· Topical
								makeup products· Gold, silver and nickel· Hair
								dyesPatch tests should be performed 5-7 days
								prior.
							</p>
						</AccordionItem>
					</ul>
				</div>
				<div className='col-12'>
					<p>
						<em>
							Should you still have more questions or inquiries,
							feel free to give us a call at{' '}
							<a href='tel:((phone))'>(360) 386-BROW</a>
							(2769) or email us at&ensp;
							<a href='mailto:evolvelashandbrow@gmail.com'>
								evolvelashandbrow@gmail.com
							</a>
						</em>
					</p>
				</div>
			</Section>
		</div>
	)
}

export default Template

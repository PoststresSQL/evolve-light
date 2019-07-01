import React from 'react'
import Section from '../components/Section'
import TerraF from '../assets/images/terra-forkner.jpg'

function About() {
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
						<div className='col-sm-10 col-md-8'>
							<h1>About ((company))</h1>
						</div>
					</div>
				</div>
			</section>

			<Section id='terra__section' className='switchable feature-large'>
				<div className='col-md-4'>
					<img
						src={TerraF}
						alt='Terra Forkner, ((company)) microblade artist in ((citycommastate))'
						className='border--round box-shadow-wide'
					/>
				</div>
				<div className='col-md-8'>
					<h2 className='big extra-bold text--action'>Meet Terra</h2>
					<hr />
					<p>
						Terra Forkner is a Microblading Artist with
						certification from Phibrows, the top academy in the
						world for Microblading. Terra is known for her gentle
						touch, attention to detail and 100% dedication to safety
						and sanitary standards.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Minus asperiores beatae consequatur illum aut, voluptas
						recusandae voluptatem adipisci, error nesciunt sint
						sequi vitae eligendi cum magnam, nulla numquam
						distinctio placeat modi tempore esse ducimus
						necessitatibus itaque? Facilis, atque suscipit autem
						sunt nihil soluta vero accusamus? Rem accusantium natus
						sint recusandae?
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Id unde necessitatibus aliquam labore natus sapiente
						atque illo voluptatibus ea quod. Distinctio soluta,
						recusandae voluptates fuga praesentium corrupti quasi
						officia repellendus.
					</p>
				</div>
			</Section>

			<Section
				id='wccu__section'
				className='bg--secondary switchable switchable--switch feature-large'>
				<div className='col-md-4'>
					<img
						src='https://placehold.it/400x600'
						alt='placeholder'
						className='border--round box-shadow-wide'
					/>
				</div>
				<div className='col-md-8'>
					<h2 className='big extra-bold'>
						Why Choose a PhiBrow Microblading Artist?
					</h2>
					<hr />
					<p>
						Phibrows artists produce great work because they follow
						a very specific method that is taught to them through a
						rigorous 6 month microblading training course. This
						course requires the artist to pass 11 levels of mastery
						to ensure that their methods and their work maintain a
						very high standard… the Phibrows standard
					</p>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Laudantium dicta temporibus ducimus possimus
						tempore quos praesentium repellendus aliquid fugiat
						doloremque, ratione fuga qui doloribus cum accusantium
						veniam architecto dolor sunt, quis, voluptas nihil? Eum
						et voluptatem corporis omnis sint eos adipisci
						repudiandae, neque sed quis nobis ipsam iste. Error,
						autem.
					</p>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Ipsam magnam, nihil, hic obcaecati voluptates
						deserunt voluptatum libero itaque sit aut adipisci iure
						a aliquam dolorum. Quidem magni quae ipsum aut.
					</p>
				</div>
			</Section>

			<Section
				id='brow-symmetry__section'
				className='feature-large switchable'>
				<div className='col-md-4'>
					<img
						src='https://placehold.it/400x600'
						alt='placeholder'
						className='border--round box-shadow-wide'
					/>
				</div>
				<div className='col-md-8'>
					<h2 className='big extra-bold text--action'>
						Brow Symmetry
					</h2>
					<hr />
					<p>
						The Brow Symmetry App is used in every session to create
						the most beautiful and symmetrical microbladed eyebrows.
						The Phibrows method and tools have been meticulously
						designed and redesigned to aid their trained artists in
						producing very precise hairstrokes, perfect symmetry,
						and a beautiful eyebrow shape that goes with the natural
						shape of their client’s face and bone structure.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Error amet sapiente hic saepe accusantium rem ut
						id veniam maiores eius reiciendis non quas, explicabo
						laudantium dolor quae ullam, cum autem earum nemo eum
						exercitationem modi in! Velit at fugiat aut odio unde,
						laudantium, omnis eligendi dignissimos, distinctio
						magnam sapiente illum!
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Nihil voluptates ipsum amet dignissimos culpa officiis,
						totam quis repudiandae eligendi eaque a commodi
						asperiores obcaecati aperiam repellat libero. Eum,
						magnam suscipit.
					</p>
				</div>
			</Section>
		</div>
	)
}

export default About

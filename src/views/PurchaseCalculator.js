import React from 'react'
import { Link } from 'react-router-dom'

class PurchaseCalculator extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			currentTab: 0,
			progress: 25
		}
	}

	nextPrev = n => {
		const progressBar = document.getElementById('progress-bar')
		const tabsArr = Array.from(document.getElementsByClassName('tab'))
		tabsArr.forEach(tab => {
			if (tab.classList.contains('active')) {
				tab.classList.remove('active')
			}
		})

		if (
			this.state.currentTab + n < tabsArr.length &&
			this.state.currentTab + n != 0
		) {
			document.getElementById('prevBtn').style.display = 'inline'
			this.setState(
				{
					currentTab: this.state.currentTab + n,
					progress: this.state.progress + 25
				},
				() => {
					tabsArr[this.state.currentTab].classList.add('active')
					if (this.state.currentTab == 3) {
						document.getElementById('nextBtn').textContent =
							'Submit'
					}
				}
			)
		} else if (this.state.currentTab + n <= 0) {
			this.setState(
				{
					currentTab: 0
				},
				() => {
					tabsArr[this.state.currentTab].classList.add('active')
					document.getElementById('prevBtn').style.display = 'none'
				}
			)
		} else if (this.state.currentTab + n >= 3) {
			this.setState(
				{
					currentTab: tabsArr.length - 1
				},
				() => {
					tabsArr[this.state.currentTab].classList.add('active')
				}
			)
		}
	}

	componentDidMount() {
		document.getElementById('prevBtn').style.display = 'none'
	}

	render() {
		return (
			<div className='main-container'>
				{/* <section className='cover imagebg height-auto' data-overlay='4'>
					<div className='background-image-holder'>
						<img
							alt='background'
							src='/users/u143/143632/background-01-smr.jpg'
						/>
					</div>
					<div className='container pos-vertical-center'>
						<div className='row'>
							<div className='col-sm-8 col-md-7'>
								<h1>Purchase Calculator</h1>
								<p className='lead'>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Maxime dolorum suscipit
									asperiores placeat accusantium rerum animi
									consequuntur sed optio inventore!
								</p>
							</div>
						</div>
					</div>
				</section> */}

				<section>
					<div className='container'>
						<div className='row'>
							<div className='col-md-4'>
								<h1>Purchase</h1>
								<h4>
									Congratulations on taking the first step to
									buying your new home!
								</h4>
								<p>
									Fill out the form on this page to let us
									know what you're looking for, and we will
									put together a quote for you and give you a
									call to schedule a consultation. We're
									looking forward to helping you find the home
									of your dreams!
								</p>
								<p className='call-cta'>
									<a href='tel:855-440-5626'>
										<i className='fas fa-phone' />
										Call 855-440-5626 to speak with a loan
										agent now!
									</a>
								</p>
							</div>
							<div className='col-md-8'>
								<div className='form-wrapper'>
									<div id='multistep-form'>
										<form
											action='#'
											id='regForm'
											name='regForm'>
											{/* Circles which indicates the steps of the form: */}
											<div
												className='progress'
												style={{
													height: '20px',
													borderRadius: '10px'
												}}>
												<div
													id='progress-bar'
													className='progress-bar'
													role='progressbar'
													style={{
														width: `${
															this.state.progress
														}%`
													}}
													aria-valuenow={
														this.state.progress
													}
													aria-valuemin='0'
													aria-valuemax='100'
												/>
											</div>

											{/* One "tab" for each step in the form: */}
											<div className='tab active'>
												<h2 className='cfLabel'>
													Home Information
												</h2>
												<ul>
													<li
														className='required-field'
														id='field-0'>
														<label>
															What type of
															property are you
															planning to
															purchase?
														</label>
														<select
															name='2404'
															className='required'>
															<option value='Single Family Home'>
																Single Family
																Home
															</option>
															<option value='Townhouse'>
																Townhouse
															</option>
															<option value='Condo'>
																Condo
															</option>
															<option value='Multi-Family'>
																Multi-Family
															</option>
															<option value='Manufactured/Mobile'>
																Manufactured/Mobile
															</option>
															<option value='Not Sure'>
																Not Sure
															</option>
														</select>
													</li>

													<li
														className='required-field'
														id='field-1'>
														<label>
															How will the
															property be used?
														</label>
														<select
															className='required'
															name='2405'>
															<option value='Primary Owner Occupied'>
																Primary Owner
																Occupied
															</option>
															<option value='Second Home'>
																Second Home
															</option>
															<option value='Investment/Rental'>
																Investment/Rental
															</option>
														</select>
													</li>

													<li
														className='required-field'
														id='field-2'>
														<label>
															What will the
															approximate purchase
															price be?
														</label>
														<select
															className='required'
															name='2406'>
															<option value='$50,000 - $100,000'>
																$50,000 -
																$100,000
															</option>
															<option value='$100,000 - $150,000'>
																$100,000 -
																$150,000
															</option>
															<option value='$150,000 - $200,000'>
																$150,000 -
																$200,000
															</option>
															<option value='$200,000 - $250,000'>
																$200,000 -
																$250,000
															</option>
															<option value='$250,000 - $300,000'>
																$250,000 -
																$300,000
															</option>
															<option value='$300,000 - $350,000'>
																$300,000 -
																$350,000
															</option>
															<option value='$350,000 - $400,000'>
																$350,000 -
																$400,000
															</option>
															<option value='$400,000 - $450,000'>
																$400,000 -
																$450,000
															</option>
															<option value='$450,000 - $500,000'>
																$450,000 -
																$500,000
															</option>
															<option value='$500,000 - $550,000'>
																$500,000 -
																$550,000
															</option>
															<option value='$550,000 - $600,000'>
																$550,000 -
																$600,000
															</option>
															<option value='$600,000 - $650,000'>
																$600,000 -
																$650,000
															</option>
															<option value='$650,000 - $700,000'>
																$650,000 -
																$700,000
															</option>
															<option value='$700,000 - $750,000'>
																$700,000 -
																$750,000
															</option>
															<option value='$750,000 - $800,000'>
																$750,000 -
																$800,000
															</option>
															<option value='$800,000 - $850,000'>
																$800,000 -
																$850,000
															</option>
															<option value='$850,000 - $900,000'>
																$850,000 -
																$900,000
															</option>
															<option value='$900,000 - $950,000'>
																$900,000 -
																$950,000
															</option>
															<option value='$950,000 - $1,000,000'>
																$950,000 -
																$1,000,000
															</option>
															<option value='$1,000,000+'>
																$1,000,000+
															</option>
														</select>
													</li>

													<li
														className='required-field'
														id='field-3'>
														<label>
															When are you looking
															to purchase?
														</label>
														<select
															className='required'
															name='2407'>
															<option value='0-3 Months'>
																0-3 Months
															</option>
															<option value='3-6 Months'>
																3-6 Months
															</option>
															<option value='6-9 Months'>
																6-9 Months
															</option>
															<option value='9+ Months'>
																9+ Months
															</option>
														</select>
													</li>
												</ul>
											</div>

											{/* Page 2 */}
											<div className='tab'>
												<h2 className='cfLabel'>
													Credit History
												</h2>
												<ul>
													<li
														className='required-field'
														id='field-4'>
														<label>
															Approximate Credit
															Score
														</label>
														<select
															className='required'
															name='2408'>
															<option value='Excellent'>
																Excellent
															</option>
															<option value='Pretty Good'>
																Pretty Good
															</option>
															<option value='Not Bad'>
																Not Bad
															</option>
															<option value='Need Help Rebuilding'>
																Need Help
																Rebuilding
															</option>
															<option value='Not Sure'>
																Not Sure
															</option>
														</select>
													</li>

													<li
														className='required-field'
														id='field-5'>
														<label>
															I've owned a home in
															the last 3 years.
														</label>
														<select
															className='required'
															name='2405'>
															<option value='No'>
																No
															</option>
															<option value='Yes'>
																Yes
															</option>
														</select>
													</li>

													<li
														className='required-field'
														id='field-6'>
														<label>
															I've had a
															foreclosure or
															bankruptcy in the
															last 7 years.
														</label>
														<select
															className='required'
															name='2405'>
															<option value='No'>
																No
															</option>
															<option value='Yes'>
																Yes
															</option>
														</select>
													</li>

													<li
														className='required-field'
														id='field-7'>
														<label>
															I or my spouse has
															served in the
															military.
														</label>
														<select
															className='required'
															name='2405'>
															<option value='No'>
																No
															</option>
															<option value='Yes'>
																Yes
															</option>
														</select>
													</li>
												</ul>
											</div>

											{/* Page 3 */}
											<div className='tab'>
												<h2 className='cfLabel'>
													Your Information
												</h2>
												<ul>
													<li
														className='required-field'
														id='field-8'>
														<label>
															What is your
															approximate annual
															income?
														</label>
														<select
															name='2416'
															className='required'>
															<option value='<$30,000'>
																&lt;$30,000
															</option>
															<option value='$30,000 - $40,000'>
																$30,000 -
																$40,000
															</option>
															<option value='$40,000 - $50,000'>
																$40,000 -
																$50,000
															</option>
															<option value='$50,000 - $60,000'>
																$50,000 -
																$60,000
															</option>
															<option value='$60,000 - $70,000'>
																$60,000 -
																$70,000
															</option>
															<option value='$70,000 - $80,000'>
																$70,000 -
																$80,000
															</option>
															<option value='$80,000 - $90,000'>
																$80,000 -
																$90,000
															</option>
															<option value='$90,000 - $100,000'>
																$90,000 -
																$100,000
															</option>
															<option value='$100,000 - $120,000'>
																$100,000 -
																$120,000
															</option>
															<option value='$120,000 - $140,000'>
																$120,000 -
																$140,000
															</option>
															<option value='$140,000 - $160,000'>
																$140,000 -
																$160,000
															</option>
															<option value='$160,000 - $180,000'>
																$160,000 -
																$180,000
															</option>
															<option value='$180,000 - $200,000'>
																$180,000 -
																$200,000
															</option>
															<option value='>$200,000'>
																&gt;$200,000
															</option>
														</select>
													</li>

													<li
														className='required-field'
														id='field-9'>
														<label>
															I'm interested in
															getting down payment
															assistance.
														</label>
														<select
															className='required'
															name='2405'>
															<option value='No'>
																No
															</option>
															<option value='Yes'>
																Yes
															</option>
														</select>
													</li>

													<li
														className='required-field'
														id='field-10'>
														<label>
															I'm currently
															working with a real
															estate agent.
														</label>
														<select
															className='required'
															name='2405'>
															<option value='No'>
																No
															</option>
															<option value='Yes'>
																Yes
															</option>
														</select>
													</li>
												</ul>
											</div>

											{/* Page 4 */}
											<div className='tab'>
												<h2 className='cfLabel'>
													How can we contact you?
												</h2>
												<ul>
													<li
														className='required-field'
														id='field-11'>
														<label>
															First Name
														</label>
														<input
															type='text'
															name='2419'
															className='required text'
															placeholder=''
														/>
													</li>

													<li
														className='required-field'
														id='field-12'>
														<label>Last Name</label>
														<input
															type='text'
															name='2420'
															className='required text'
															placeholder=''
														/>
													</li>

													<li
														className='required-field'
														id='field-13'>
														<label>Email</label>
														<input
															type='text'
															name='2421'
															className='required email'
															placeholder=''
														/>
													</li>

													<li
														className='required-field'
														id='field-14'>
														<label>Phone</label>
														<input
															type='text'
															name='2422'
															className='required text'
															placeholder=''
														/>
													</li>
												</ul>
											</div>
											<div
												style={{
													overflow: 'auto'
												}}>
												<div
													style={{
														float: 'right'
													}}>
													<button
														id='prevBtn'
														onClick={() => {
															this.nextPrev(-1)
														}}
														type='button'>
														Previous
													</button>{' '}
													<button
														id='nextBtn'
														onClick={() => {
															this.nextPrev(1)
														}}
														type='button'>
														Next
													</button>
												</div>
											</div>
										</form>
									</div>
									<p className='form-disclaimer'>
										<img src='/users/u143/143632/privacy-65px.png' />
										Your loan officer is the only person who
										will see and use this data. All data is
										secured and we will never share or sell
										your information with anyone.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		)
	}
}

export default PurchaseCalculator

import React from 'react'
import { Link } from 'react-router-dom'

function DropdownNavLink() {
	return (
		<li className='dropdown'>
			<span className='dropdown__trigger'>{/* title goes here */}</span>
			<div className='dropdown__container'>
				<div className='container'>
					<div className='row'>
						<div className='dropdown__content col-md-2'>
							<ul className='menu-vertical'>
								{/* map through subroutes and return li > Link */}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</li>
	)
}

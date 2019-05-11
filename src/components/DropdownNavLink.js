import React from 'react'
import { Link } from 'react-router-dom'

function DropdownNavLink({ title, subroutes }) {
	return (
		<li className='dropdown'>
			<span className='dropdown__trigger'>{title}</span>
			<div className='dropdown__container'>
				<div className='container'>
					<div className='row'>
						<div className='dropdown__content col-md-2'>
							<ul className='menu-vertical'>
								{subroutes.map((subroute, i) => {
									return (
										<li key={i}>
											<Link
												to={subroute.path}
												title={subroute.title}>
												{subroute.title}
											</Link>
										</li>
									)
								})}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</li>
	)
}

export default DropdownNavLink

import React from 'react'
import { Link } from 'react-router-dom'
import NavLink from './NavLink'
import DropdownNavLink from './DropdownNavLink'

class NavBar extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			routes: props.routes
		}
	}

	toggleMenu = () => {
		let mobileNav = document.querySelector('.mobi-nav-container')
		mobileNav.classList.add('show')
	}

	render() {
		return (
			<div className='nav-container'>
				<div className='bar bar--sm visible-xs'>
					<div className='container'>
						<div className='row'>
							<div className='col-xs-3 col-sm-2'>
								<a href='/'>
									<img
										className='logo logo-dark'
										alt='logo'
										src='img/logo-dark.png'
									/>
									<img
										className='logo logo-light'
										alt='logo'
										src='img/logo-light.png'
									/>
								</a>
							</div>
							<div className='col-xs-9 col-sm-10 text-right'>
								<span
									className='hamburger-toggle'
									data-toggle-class='#menu1;hidden-xs hidden-sm'
									onClick={this.toggleMenu}>
									<i className='icon icon--sm stack-interface stack-menu' />
								</span>
							</div>
						</div>
					</div>
				</div>
				<nav id='menu1' className='bar bar-1 hidden-xs'>
					<div className='container'>
						<div className='row'>
							<div className='col-md-2 col-sm-3 hidden-xs'>
								<div className='bar__module'>
									<Link to='/'>
										<img
											src='https://placehold.it/150x80'
											alt='logo'
											className='logo logo-dark'
										/>
										<img
											src='https://placehold.it/150x80'
											alt='logo'
											className='logo logo-light'
										/>
									</Link>
								</div>
							</div>

							<div className='col-md-10 col-sm-9 text-right text-left-sm text-left xs'>
								<div className='bar__module'>
									<ul className='menu-horizontal text-left'>
										{this.state.routes.map((route, i) => {
											if (route.subroutes) {
												return (
													<DropdownNavLink
														key={i}
														{...route}
													/>
												)
											} else {
												return (
													<NavLink
														key={i}
														{...route}
													/>
												)
											}
										})}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</div>
		)
	}
}

export default NavBar

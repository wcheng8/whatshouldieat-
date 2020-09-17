import React from "react";

const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-warning">
				<a className="pl-2 navbar-brand h2" href="/home">
					WhatShouldIEat?
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse " id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<a className="nav-link" href="add">
								Add Recipe <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="random">
								Suprise Me!
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="random">
								Browse
							</a>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								User
							</a>
							<div
								className="dropdown-menu dropdown-menu-right"
								aria-labelledby="navbarDropdown"
							>
								<a className="dropdown-item" href="#">
									Logout
								</a>
								<a className="dropdown-item" href="#">
									Edit Profile
								</a>
								<div className="dropdown-divider"></div>
								<a className="dropdown-item" href="#">
									Something New!
								</a>
							</div>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;

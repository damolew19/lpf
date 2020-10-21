import React from "react";

const ServicesNavigation = (props) => {
	return (
	<nav className='services-page__nav'>
		<ul className='services-page__nav-list' onClick={props.handleServiceSelection} onKeyPress={props.handleServiceSelection}>
			<li id='Photos' className='services-page__nav-item link' data-content='Photos'>
				Photos
			</li>
			<li id='Prints' className='services-page__nav-item link' data-content='Prints'>
				Prints
			</li>
			<li id='Canvas' className='services-page__nav-item link' data-content='Canvas'>
				Canvas
			</li>
			<li id='Certificates' className='services-page__nav-item link' data-content='Certificates'>
				Certificates
			</li>
			<li id='Memorabilia' className='services-page__nav-item link' data-content='Memorabilia'>
				Memorabilia
			</li>
			<li id='Shadow Frame' className='services-page__nav-item link' data-content='Shadow Frame'>
				Shadow Frame
			</li>
		</ul>
    </nav>
	);
};

export default ServicesNavigation;

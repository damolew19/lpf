import React from "react";

const ServicesNavigation = (props) => {
	return (
	<button className='services-page__nav' onClick={props.handleServiceSelection} onKeyPress={props.handleServiceSelection} style={{border: "none"}}>
			<ul className='services-page__nav-list' >
				<li id='Photos' className='services-page__nav-item link' data-content='Photos'>
					Photos
				</li>
				<li id='Prints' className='services-page__nav-item link' data-content='Prints'>
					Prints
				</li>
				<li id='Canvas' className='services-page__nav-item link' data-content='Canvas'>
					Canvas
				</li>
				<li id='Memorabilia' className='services-page__nav-item link' data-content='Memorabilia'>
					Memorabilia
				</li>
				<li id='Shadow Frame' className='services-page__nav-item link' data-content='Shadow Frame'>
					Shadow Frame
				</li>
			</ul>
	</button>
	);
};

export default ServicesNavigation;

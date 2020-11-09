import React from 'react';
import {Link } from 'react-router-dom';
import useLaunches from '../hook/useLaunches';

import Main from '../main/Main'
import Preloader from '../preloader/Preloader';
import './calendar.css';

const Calendar = ({launchInfo}) => {

const {data} = useLaunches();	
data.forEach(item=> console.log(item))
if(!data){
	return <Preloader />
}

	return (
		<>
		<Main name='SpaceX calendar'/>
		<section className="calendar">
			<div className="container">
				<ul className="calendar-list">
					{
						data.map((item) => (
													
							<li key={item.id} className="calendar-item">
								<article className="launches">
									<div className="launches-image">
										<img src={item.links.patch.small} alt="" />
									</div>
									<div className="launches-content">
										<h2 className="launches-title">{item.name}</h2>
										<Link 
										onClick={()=>{launchInfo(item)}}
										to={`/details/${item.id}`}
										className="button launches-details">
										Подробнее</Link>
									</div>
								</article>
							</li>
						))
					}

				</ul>
			</div>
		</section>
		</>
	)
}

export default Calendar;
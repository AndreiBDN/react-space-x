import React from 'react';
import {useHistory} from "react-router-dom";
import Main from '../main/Main';
import './details.css';

const Details = ({launch: {name, links, details}}) => {
	
	const history = useHistory().goBack;
	if(!name){
		return null
	}

	return(
		<>
		<Main name={name}/>
			<main className="details">
			<div className="container">
				<div className="details-row">
					<div className="details-image">
						<img src="https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png" alt="" />
					</div>
					<div className="details-content">
						<p className="details-description">{details}</p>
					</div>
				</div>
				<div>
					<iframe title="video" className="details-youtube" width="560" height="315" src={`https://www.youtube.com/embed/${links.youtube_id}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				</div>
			</div>
			<a onClick={history} className="button button-back">go back</a>
		</main>
		</>
	)
}

export default Details;
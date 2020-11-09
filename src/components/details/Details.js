import React, {useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";
import Main from '../main/Main';
import useLaunches from '../hook/useLaunches';
import YouTube from 'react-youtube';
import './details.css';
import Preloader from '../preloader/Preloader';

const Details = (props) => {

	const [launch, setLaunch] = useState(null);
	const { getLaunch } = useLaunches();

	useEffect(()=> {
		setLaunch(getLaunch(props.match.params.id));
	}, [getLaunch, props.match.params.id] )

	const history = useHistory().goBack;
	if(!launch){
		return <Preloader />
	}


	return(
		<>
		<Main name={launch.name}/>
			<main className="details">
			<div className="container">
				<div className="details-row">
					<div className="details-image">
						<img src={launch.links.patch.small} alt="" />
					</div>
					<div className="details-content">
						<p className="details-description">{launch.details}</p>
					</div>
				</div>
				<div>
					<YouTube className='details-youtube' videoId={launch.links.youtube_id} />
				</div>
			</div>
			<span onClick={history} className="button button-back">go back</span>
		</main>
		</>
	)
}

export default Details;
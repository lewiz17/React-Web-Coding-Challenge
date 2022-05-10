import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Bike, getBikeById } from "../api";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MapBox from "../components/MapBox";

const BikeDetail = styled.section`
    display: flex;
    flex-wrap: wrap;
    max-width: 90%;
    margin: 2em auto;
    gap: 10px;

    .info-top{
        display: flex;
        flex-flow: column;
        width: 100%;
        gap: 10px;

        h2{
            color: #0096bb;
        }
        
        >a{
            color: #ccc;
            &:hover{
                text-decoration: underline;
            }
        }
    }
    
    .info-hold{
        width: 100%
        display: flex;
    }

    .map-hold{
        margin: .5rem 0;
        width: 100%;
        display: flex;
    }
`;


const BikeDetailPage = () => {
	const [bike, setBike] = useState<Bike>();

	const { caseID } = useParams();

	useEffect(() => {
		if (caseID === undefined) return
		getBikeById(caseID).then(setBike);
	}, [])

	return (
		<>
			<BikeDetail>
				{
					bike === undefined ? <p>Loading...</p> :
						(
							<>
								<div className="info-top">
									<Link to="/">&#8592; Back</Link>
									<h2>Stolen {bike.title}</h2>
									<p>Stolen {new Date(parseInt(bike.date_stolen) * 1000).toDateString()} {bike.stolen_location}</p>
								</div>
								<div className="map-hold">
									<MapBox lat={bike.stolen_coordinates[0]} long={bike.stolen_coordinates[1]} />
								</div>
								{
									bike.description &&
									<div className="info-hold">
										<h3>Description on Incident</h3>
										<p>{bike.description}</p>
									</div>
								}
							</>
						)
				}
			</BikeDetail>
		</>
	)

}


export default BikeDetailPage
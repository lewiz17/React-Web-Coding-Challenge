import React from 'react';
import { Link } from 'react-router-dom';
import { Bike } from '../api';
import styled from 'styled-components';
import BikeHolder from '../assets/bike.png';


const CardWrapper = styled.div`
  width: 100%;
  padding: 0;
  min-height: 150px;
  height: auto;
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  border: .5px solid #ccc;
  border-radius: 5px;

  &:hover{
    background: #f4f4f4;
  }  

  @media screen and (max-width: 425px){
    flex-flow: column;
  }
`

const CardCaption = styled.div`
  display: flex;
  width: 200px;
  height: 100%;

  img{
    object-fit: cover;
    object-position: 50% 100%;
    background-color: #f4f4f4;
    padding: 10px;
    width: 200px;
    border-radius: 5px;
  }

  @media screen and (max-width: 425px){
    width: 100%;

    img{
      width: 100%;
      max-height: 200px;
      object-fit: contain;
    }
  }
`
const CardContent = styled.div`
  display: flex;
  height: auto;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px 0;

  a{
    color: #0096bb;

    &:hover{
      text-decoration: underline;
    }
  }
`

const Card = ({ bike }: { bike: Bike }): JSX.Element => {
	return (
		<CardWrapper>
			<CardCaption>
				<img src={bike.large_img || BikeHolder} alt={bike.description} width="20em" />
			</CardCaption>
			<CardContent>
				<Link to={`./case/${bike.id}`}><h3> Stolen {bike.title}</h3></Link>
				<p>{bike.description}</p>
				<p>{bike.year} {bike.stolen_location}</p>
			</CardContent>
		</CardWrapper>
	)
}

export default Card
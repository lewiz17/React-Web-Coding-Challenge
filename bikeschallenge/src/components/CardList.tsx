import { Bike } from '../api'
import Card from '../components/Card'
import styled from 'styled-components';

const SectionBikes = styled.section`
  display: flex;
  width: 100%;

  .bikes-wrapper{
    margin: 0;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
`

const CardList = ({ bikes }: { bikes: Bike[] }): JSX.Element => {
	return (
		<>
			<SectionBikes>
				{
					bikes === undefined ?
						<div className="bikes-wrapper">
							<p>Loading...</p>
						</div>
						:
						<div className="bikes-wrapper">
							{bikes.map((item, i) => (
								<Card bike={item} key={i} />
							))}
						</div>
				}
			</SectionBikes>

		</>
	)
}

export default CardList
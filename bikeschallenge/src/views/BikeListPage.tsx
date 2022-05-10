import React, { useState, useEffect } from 'react';
import { Bike, getBikes } from '../api';
import PaginateCases from '../components/PaginateCases';
import SearchForm from '../components/SearchForm';
import styled from 'styled-components';

const ListWrapper = styled.div`
  display: flex;
  flex-wrap:wrap;
  max-width: 90%;
  margin: 0 auto;
  gap: 10px;
`;
const ItemsCount = styled.span`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`
const BikeListPage = (): JSX.Element => {

	const [search, setSearch] = useState<string>('');
	const [fromDate, setFromDate] = useState<Date>();
	const [toDate, setToDate] = useState<Date>();
	const [bikes, setBikes] = useState<Array<Bike>>([]);
	const [counItems, setCounItems] = useState(0);

	useEffect(() => {
		const handleBikes = async () => {
			const bikeList = await getBikes();
			setCounItems(bikeList.length);
			if (search === null) setBikes(bikeList);
			else setBikes(bikeList.filter(bike => {
				return bike.description ? bike.description.includes(search) : bike
			}))
		}
		handleBikes();
	}, [search])

	return (
		<>
			{
				bikes === undefined ?
					(
						<ListWrapper>
							<SearchForm setSearch={setSearch} setToDate={setToDate} setFromDate={setFromDate} />
							<p>Loading...</p>
						</ListWrapper>
					) : (
						<ListWrapper>
							<SearchForm setSearch={setSearch} setToDate={setToDate} setFromDate={setFromDate} />
							<ItemsCount>Total: <strong>{counItems}</strong></ItemsCount>
							<PaginateCases items={10} bikes={bikes} />
						</ListWrapper>
					)
			}
		</>
	)
}

export default BikeListPage
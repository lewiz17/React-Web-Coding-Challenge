import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Bike } from '../api';
import CardList from '../components/CardList';

const PaginateCases = ({
	items,
	bikes,
}: {
	items: number,
	bikes: Bike[],
}) => {
	const [currentItems, setCurrentItems] = useState<Array<Bike>>([]);
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0);

	useEffect(() => {
		const endOffset = itemOffset + items;
		setCurrentItems(bikes.slice(itemOffset, endOffset));
		setPageCount(Math.ceil(bikes.length / items));
	}, [itemOffset, items, bikes]);

	const handlePageClick = (event: { selected: number; }) => {
		const newOffset = (event.selected * items) % bikes.length;
		setItemOffset(newOffset);
		window.scrollTo(0, 0);
	};

	return (
		<>
			<CardList bikes={currentItems} />
			<ReactPaginate
				className="hold-paginate"
				breakLabel="..."
				nextLabel="Next >"
				onPageChange={handlePageClick}
				pageRangeDisplayed={5}
				pageCount={pageCount}
				previousLabel="< Prev"
			/>
		</>
	);
}

export default PaginateCases
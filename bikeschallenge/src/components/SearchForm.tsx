import React, { useState } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 2em;
`
const SearchFilter = styled.form`
  display: flex;
  font-size: 20px;
  gap: 10px;

  label{
    font-size: 16px;
    font-weight: 300;
    line-height: 35px;
  }

  input{
    width: 200px;
    height: 35px;
    border: 1px solid #bdbdbd;
    padding: 0 .5rem;
    border-radius: 5px;
    color: #999;

    &[type=date]{
      width: 160px;
    }
  }
  button{
    border: 0;
    padding: 0 1rem;
    border-radius: 5px;
    background: #0096bb;
    color: #fff;
    cursor: pointer;

    &:hover{
      opacity: .8;
    }

    &::disabled{
      background: #ccc;
    }
  }

  @media screen and (max-width: 768px){
    flex-flow: column;
    gap: 0;
    width: 60%;

    input, button{
      width: 100%;

      &[type=date]{
        width: 100%;
      }
    }

    button{
      margin-top: 2rem;
      padding: 1rem;
    }
  }
`

const SearchForm = ({
	setSearch,
	setFromDate,
	setToDate
}: {
	setSearch: React.Dispatch<React.SetStateAction<string>>,
	setFromDate: React.Dispatch<React.SetStateAction<Date | undefined>>,
	setToDate: React.Dispatch<React.SetStateAction<Date | undefined>>
}) => {

	const [loading, setLoading] = useState<boolean>(false);

	const handleSearch = (e: React.SyntheticEvent) => {
		e.preventDefault();
		setLoading(true);

		const target = e.target as typeof e.target & {
			description: { value: string };
			toDate: { value: Date };
			fromDate: { value: Date };
		};

		const description = target.description.value.toLowerCase();
		const toDate = target.toDate.value;
		const fromDate = target.fromDate.value;

		setSearch(description);
		setFromDate(fromDate);
		setToDate(toDate);
		setLoading(false);
	}


	return (
		<FormWrapper>
			<SearchFilter onSubmit={handleSearch}>
				<input type="text" name="" id="description" placeholder='Search case descriptions' />
				<label htmlFor="from">From:</label>
				<input type="date" name="from" id="fromDate" />
				<label htmlFor="to">To:</label>
				<input type="date" name="to" id="toDate" />
				<button disabled={loading} type="submit">Find Cases</button>
			</SearchFilter>
		</FormWrapper>
	)
}

export default SearchForm
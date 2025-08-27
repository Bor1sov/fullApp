import styled from "styled-components";
import { Button } from "../../../../components";
import PropTypes from "prop-types";

const PaginationContainer = ({className,page,lastPage,setPage}) => {
	return(
		<div className={className}>
			<Button disabled={page === 1} onClick={()=> setPage(1)}>В начало</Button>
			<Button disabled={page === 1} onClick={()=> setPage(page - 1)}>Предыдущая</Button>
			<div className="current-page">Страница: {page}</div>
			<Button disabled={page === lastPage} onClick={()=> setPage(page + 1)}>Следующая</Button>
			<Button disabled={page === lastPage} onClick={()=> setPage(1)}>В конец</Button>
		</div>
	)
};

export const Pagination = styled(PaginationContainer)`
	display:flex;
	justify-content:center;
	position:absolute
	margin:0 0 20px ;
	padding:0 35px;
	width:100%;

	& button {
		margin:0 5px;
		width:100%;
	}

	& .current-page {
		width:100%;
		height:45px;
		font-size:18px;
		font-weight:500;
		text-align:center;
		border:1px solid black;
		line-height:30px;
	}
`;

Pagination.propTypes = {
	page:PropTypes.number.isRequired,
	lastPage:PropTypes.number.isRequired,
	setPage:PropTypes.func.isRequired
}

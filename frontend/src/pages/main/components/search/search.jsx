import styled from 'styled-components';
import { Icon, Input } from '../../../../components';
import PropTypes from "prop-types";

const SearchContainer = ({ className ,searchPhrase,onChange}) => {
	return (
		<div className={className}>
			<Input placeholder="Поиск по заголовкам..." value={searchPhrase} onChange={onChange} />
			<Icon
				id="fa-search"
				size="21px"
				margin="0 10px 0 0 "
				onClick={() => navigate(`/post/${id}/edit`)}
			/>
		</div>
	);
};
export const Search = styled(SearchContainer)`
	display:flex;
	width:340px;
	height:40px;
	margin:50px auto 0;
	border:1px solid black;
	border-radius:20px;
	padding:10px;
	& input{
		outline:none;
		border:none;
		width:100%;
	}
`;
Search.propTypes = {
	searchPhrase:PropTypes.string.isRequired,
	onChange:PropTypes.func.isRequired
}

import styled from "styled-components";
import PropTypes from 'prop-types';

const TableRowContainer = ({className, children}) =>(
	<div className={className}>
		{children}
	</div>
);

export const TableRow = styled(TableRowContainer)`
		display:flex;
		align-items:center;
		border:${({border}) => border ? ' 2px solid #000' : 'none'};
		height:50px;
		& > div {
			padding: 0 10px;
			display:flex;

		}
		& .login-column {
			width:172px;
		}
		& .registred-at-column{
			width:213px;
		}
		& .role-column{
			width:auto;
		}
		& select{
			font-size:16px;
			padding:6px;
		}
`;
TableRow.propTypes = {
	children:PropTypes.node.isRequired
}

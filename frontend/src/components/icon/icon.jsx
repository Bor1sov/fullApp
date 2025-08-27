import PropTypes from "prop-types";
import styled from "styled-components";

const IconContainer = ({ className, id, onClick, disabled }) => (
	<i
		className={`fa ${id} ${className}`}
		aria-hidden="true"
		onClick={!disabled ? onClick : undefined}
	/>
);
export const Icon = styled(IconContainer)`
	font-size:${({size = '24px'})=> size};
	margin:${({margin = '0'})=> margin};
	cursor:pointer;
	color:${({disabled})=>  disabled ? '#ccc' : '#000'};
`;

Icon.propTypes = {
	id:PropTypes.string.isRequired,
}

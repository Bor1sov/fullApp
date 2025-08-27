import styled from "styled-components"
import PropTypes from "prop-types";

const InputContainer = ({className, ...props}) => {
	return(
		<input className={className} {...props} />
	)

}
export const Input = styled(InputContainer)`
	width:${({width = '100%'}) => width}
	height:40px;
	padding:10px;
	border:1px solid black;
	margin-bottom:10px;
	font-size:18px;
`;

Input.propTypes = {
	width: PropTypes.string,
}

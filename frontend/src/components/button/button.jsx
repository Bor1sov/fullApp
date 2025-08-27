import PropTypes from "prop-types";
import styled from "styled-components"

const ButtonContainer = ({ children, className, width, ...props }) => {
	return (
		<button className={className} {...props}>
			{children}
		</button>
	)
}
export const Button = styled(ButtonContainer)`
	display: flex;
    justify-content: center;
    font-size: 18px;
	width:${({width = '100%'}) => width}
    height: 32px;
    border: 1px solid black;
    padding-top: 5px;
    background-color: #eee;
	cursor:${({disabled}) => disabled ? 'auto' : 'pointer'};
`;

Button.propTypes = {
	children: PropTypes.node.isRequired,
	width:PropTypes.string,
}

import styled from 'styled-components';
import { H2 } from '../h2/h2';
import { PROP_TYPE } from '../../constants';


const ErrorContainer = ({ className ,error}) => {
	return (
		error && <div className={className}>
				<H2>Ошибка</H2>
				<div>{error}</div>
		</div>
	);
};
export const Error = styled(ErrorContainer)`
	display:flex;
	align-items:center;
	flex-direction:column;
	font-family:sans-serif;
`;

Error.propTypes = {
	error:PROP_TYPE.ERROR
}

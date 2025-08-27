import { Link } from "react-router-dom";
import styled from 'styled-components';
import { Icon } from '../../../icon/icon';

const LargeText = styled.div`
	font-size:48px;
	font-weight:600;
	font-family:sans-serif;
	line-height:48px;

`;
const SmallText = styled.div`
	font-size:18px;
	font-weight:600;
	font-family:sans-serif;
`;
const LogoContainer = ({ className }) => (
	<Link className={className} to="/">
		<Icon id="fa-code" size="70px" margin="0 10px 0 0"/>
		<div>
			<LargeText>Блог</LargeText>
			<SmallText>веб-разработчика</SmallText>
		</div>
	</Link>
)
export const Logo = styled(LogoContainer)`
	display:flex;
	margin-top:2px;
`;

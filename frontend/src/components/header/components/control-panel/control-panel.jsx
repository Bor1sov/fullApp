import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '../../../icon/icon';
import { Button } from '../../../button/button';
import { Link, useNavigate } from 'react-router-dom';
import { ROLE } from '../../../../constants';
import {
	selectUserRole,
	selectUserLogin,
} from '../../../../selectors';
import { logout } from '../../../../actions/logout';
import { checkAccess } from '../../../../utils';

const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
`;
const LogoutWindow = styled.div`
	display: flex;
	align-items: center;
`;
const UserName = styled.div`
	font-family: sans-serif;
	font-weight: bold;
	font-size: 18px;
`;

const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();
	const roleId = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);
	const dispatch = useDispatch();

	const onLogout = () => {
		dispatch(logout());
		sessionStorage.removeItem('userData');
	};

	const isAdmin = checkAccess([ROLE.ADMIN], roleId);

	return (
		<div className={className}>
			<RightAligned>
				{roleId === ROLE.GUEST || roleId === undefined ? (
					<Button>
						<Link to="/login">Войти</Link>
					</Button>
				) : (
					<LogoutWindow>
						<UserName>{login}</UserName>
						<Link onClick={onLogout}>
							<Icon id="fa-sign-out" size="24px" margin="0 0 0 15px" />
						</Link>
					</LogoutWindow>
				)}
			</RightAligned>
			<RightAligned>
				<div onClick={() => navigate(-1)}>
					<Icon id="fa-backward" size="24" margin="10px 0 0 0" />
				</div>
				{isAdmin && (
					<>
						<Link to="/post">
							<Icon id="fa-file-text-o" size="24" margin="10px 0 0 15px" />
						</Link>
						<Link to="/users">
							<Icon id="fa-users" size="24" margin="10px 0 0 15px" />
						</Link>
					</>
				)}
			</RightAligned>
		</div>
	);
};
export const ControlPanel = styled(ControlPanelContainer)`
	border: 1 px solid red;
`;

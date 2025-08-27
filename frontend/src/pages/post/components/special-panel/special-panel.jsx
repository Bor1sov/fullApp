import { Icon } from '../../../../components';
import { useDispatch, useSelector } from 'react-redux';
import { openModal, CLOSE_MODAL, removePostAsync } from '../../../../actions';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { checkAccess } from '../../../../utils';
import { ROLE } from '../../../../constants';
import { selectUserRole } from '../../../../selectors';
import PropTypes from 'prop-types';
const SpecialPanelContainer = ({ className, id, publishedAt, editButton }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const userRole = useSelector(selectUserRole);

	const onPostRemove = (id) => {
		dispatch(
			openModal({
				text: 'Удалить статью',
				onConfirm: () => {
					dispatch(removePostAsync(id)).then(() => {
						navigate('/');
					});
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	const isAdmin = checkAccess([ROLE.ADMIN], userRole);
	return (
		<div className={className}>
			<div className="published-at">
				{publishedAt && (
					<Icon
						className="calendar"
						size="18px"
						id="fa-calendar-o"
						margin="0 10px 0 0 "
						onClick={() => {}}
					/>
				)}
				{publishedAt}
			</div>
			{isAdmin && (
				<div className="buttons">
					{editButton}
					{publishedAt && (
						<Icon
							id="fa-trash-o"
							margin="0  0 0 10px"
							onClick={() => onPostRemove(id)}
						/>
					)}
				</div>
			)}
		</div>
	);
};
export const SpecialPanel = styled(SpecialPanelContainer)`
	display: flex;
	justify-content: space-between;
	margin: ${({ margin }) => margin};
	font-size: 18px;
	& .buttons {
		display: flex;
	}
	& i {
		position: relative;
		top: -1px;
	}
	& .published-at {
		display: flex;
		font-size: 18px;
	}
	& .calendar {
		cursor: auto;
	}
`;
SpecialPanel.propTypes = {
	id: PropTypes.string.isRequired,
	publishedAt: PropTypes.string.isRequired,
	editButton: PropTypes.node.isRequired,
};

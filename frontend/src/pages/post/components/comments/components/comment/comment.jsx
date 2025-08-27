import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '../../../../../../components';
import { openModal, CLOSE_MODAL, removeCommentAsync } from '../../../../../../actions';
import styled from 'styled-components';
import { selectUserRole } from '../../../../../../selectors';
import { ROLE } from '../../../../../../constants';
import PropTypes from 'prop-types';

const CommentContainer = ({ className, id, postId, author, publishedAt, content }) => {
	const dispatch = useDispatch();
	const userRole = useSelector(selectUserRole);
	const onCommentRemove = (id) => {
		dispatch(
			openModal({
				text: 'Удалить комментарий',
				onConfirm: () => {
					dispatch(removeCommentAsync(postId, id));
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	const isArdminOrModerator = [ROLE.ADMIN, ROLE.MODERATOR].includes();
	return (
		<div className={className}>
			<div className="comment">
				<div className="information-panel">
					<div className="author">
						{' '}
						<Icon
							size="18px"
							id="fa-user-circle-o"
							margin="0 10px 0 0 "
							onClick={() => {}}
						/>
						{author}
					</div>
					<div className="published-at">
						{' '}
						<Icon
							size="18px"
							id="fa-calendar-o"
							margin="0  10px 0  0 "
							onClick={() => {}}
						/>
						{publishedAt}
					</div>
				</div>
				<div className="comment-text">{content}</div>
			</div>
			{isArdminOrModerator && (
				<Icon
					size="18px"
					id="fa-trash-o"
					margin="0 0 0 10px"
					onClick={() => onCommentRemove(id)}
				/>
			)}
		</div>
	);
};

export const Comment = styled(CommentContainer)`
	display: flex;
	margin-top: 10px;
	width: 100%;

	& .comment {
		width: 550px;
		padding: 5px 10px;
		border: 1px solid #000;
	}
	& .information-panel {
		display: flex;
		justify-content: space-between;
	}
	& .author {
		display: flex;
	}
	& .published-at {
		display: flex;
	}
`;
Comment.propTypes = {
	id: PropTypes.number.isRequired,
	postId: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	publishedAt: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
};

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Comment } from './components';
import { addCommentAsync } from '../../../../actions';
import { selectUserRole } from '../../../../selectors';
import { Icon } from '../../../../components';
import { PROP_TYPE, ROLE } from '../../../../constants';
import PropTypes from "prop-types";

const CommentsContainer = ({ className, comments,postId }) => {
	const [newComment, setNewComment] = useState('');
	const dispatch = useDispatch();
	const userRole = useSelector(selectUserRole);

	const onNewCommentAdd = (postId,content) => {
		dispatch(addCommentAsync(postId,content));
		setNewComment('');
	};
	const isGuest =	userRole === ROLE.GUEST || userRole === undefined;
	return (
		<div className={className}>
			{!isGuest && (<div className="new-comment">
				<textarea
					name="comment"
					value={newComment}
					placeholder="Комментарий...."
					onChange={({ target }) => setNewComment(target.value)}
				></textarea>
				<Icon
					size="18px"
					id="fa-paper-plane-o"
					margin="0  0 0 10px"
					onClick={() => onNewCommentAdd(postId,newComment)}
				/>
			</div>)}
			<div className="comments">
				{comments.map(({ id, author, content, publishedAt }) => (
					<Comment
						key={id}
						id={id}
						postId = {postId}
						author={author}
						content={content}
						publishedAt={publishedAt}
					/>
				))}
			</div>
		</div>
	);
};
export const Comments = styled(CommentsContainer)`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	width: 550px;

	& .new-comment {
		display: flex;
		width: 100%;
		margin: 20px 0 0;
	}

	& .new-comment textarea {
		width: 100%;
		height:120px;
		resize: none;
		font-size:18px;
	}
`;
Comments.propTypes = {
	comments:PropTypes.arrayOf(PROP_TYPE.COMMENT),
	postId:PropTypes.string.isRequired,
}

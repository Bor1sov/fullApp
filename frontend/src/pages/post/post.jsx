import { useEffect, useLayoutEffect, useState } from 'react';
import { useMatch, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PostContent, Comments, PostForm } from './components';
import { loadPostAsync, RESET_POST_DATA } from '../../actions';
import { selectPost, selectUserRole } from '../../selectors';
import { Error, PrivateContent } from '../../components';
import styled from 'styled-components';
import { ROLE } from '../../constants';

const PostContainer = ({ className }) => {
	const dispatch = useDispatch();
	const [error, setError] = useState(null);
	const params = useParams();
	const isCreating = !!useMatch('/post');
	const isEditing = !!useMatch('/post/:postId/edit');
	const post = useSelector(selectPost);
	const [isLoading, setIsLoading] = useState(true);

	useLayoutEffect(() => {
		dispatch(RESET_POST_DATA);
	}, [dispatch, isCreating]);

	useEffect(() => {
		if (isCreating) {
			setIsLoading(false);
			return;
		}
		dispatch(loadPostAsync( params.postId)).then((postData) => {
			setError(postData.error);
			setIsLoading(false);
		});
	}, [params.postId, dispatch, isCreating]);

	if (isLoading) {
		return null;
	}

	return error ? (
		<Error error={error} />
	) : isCreating || isEditing ? (
		<PrivateContent access={[ROLE.ADMIN]} serverError={error}>
			<div className={className}>
				<PostForm post={post} />
			</div>
		</PrivateContent>
	) : (
		<div className={className}>
			<PostContent post={post} />
		 	<Comments comments={post.comments} postId={post.id} />
		</div>
	);
};
export const Post = styled(PostContainer)`
	margin: 40px 0;
	padding: 40px 80px;
`;

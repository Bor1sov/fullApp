import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from '../../../../components';
import PropTypes from "prop-types";

const PostCardContainer = ({
	className,
	id,
	title,
	imageUrl,
	publishedAt,
	commentsCount,
}) => {
	return (
		<div className={className}>
			<Link to={`/post/${id}`}>
				<img src={imageUrl} alt={title} />
				<div className="post-card-footer">
					<h3>{title}</h3>
					<div className="post-card-info">
						<div className="published-at">
							<Icon
								className="calendar"
								size="18px"
								id="fa-calendar-o"
								margin="0 10px 0 0 "
								onClick={() => {}}
							/>
							{publishedAt}
						</div>
						<div className="comments-count">
							<Icon
								className="calendar"
								size="18px"
								id="fa-comment-o"
								margin="0 10px 0 0 "
								onClick={() => {}}
							/>
							{commentsCount}
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};
export const PostCard = styled(PostCardContainer)`
	width:280px;
	display:flex;
	flex-direction:column;
	margin:20px;
	border:1px solid black;
	padding:10px;
	border-radius:20px;
	box-shadow: 10px 5px 5px #95A69B;


	& img {
		display: block;
		width:100%;
	}
	& .post-card-footer{
		padding:5px;
		border-top:1px solid black;
	}
	& .post-card-info{
		width:100%;
		display:flex;
		justify-content:space-between;
		margin-top:5px;
	}
	& .calendar{
		cursor:auto;
	}
`;
PostCard.propTypes = {
	id:PropTypes.string.isRequired,
	title:PropTypes.string.isRequired,
	imageUrl:PropTypes.string.isRequired,
	publishedAt:PropTypes.string.isRequired,
	commentsCount:PropTypes.number.isRequired,
}

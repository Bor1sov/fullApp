import { useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Icon, Input } from '../../../../components';
import { SpecialPanel } from '../special-panel/special-panel';
import { useDispatch } from 'react-redux';
import { sanitizeContent } from './utils';
import { useNavigate } from 'react-router-dom';
import { savePostAsync } from '../../../../actions';
import { PROP_TYPE } from '../../../../constants';

const PostFormContainer = ({
	className,
	post: { id, title, imageUrl, content, publishedAt },
}) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [imageUrlValue, setImageUrlValue] = useState(imageUrl);
	const [titlelValue, setTitleValue] = useState(title);

	const contentRef = useRef(null);

	useLayoutEffect(()=>{
		setImageUrlValue(imageUrl);
		setTitleValue(title);
	},[imageUrl,title]);

	const onSave = () => {
		const newContent = sanitizeContent(contentRef.current.innerHTML);
		dispatch(
			savePostAsync(id,{
				imageUrl: imageUrlValue,
				title: titlelValue,
				content: newContent,
			}),
		).then(({id}) => navigate(`/post/${id}`));
	};
	const onImageChenge = ({target}) => setImageUrlValue(target.value);
	const onTitleChenge = ({target}) => setTitleValue(target.value);
	return (
		<div className={className}>
			<Input value={imageUrlValue} placeholder="Изображение..." onChange={onImageChenge}/>
			<Input value={titlelValue} placeholder="Заголовок..." onChange={onTitleChenge}/>
			<SpecialPanel
				id={id}
				publishedAt={publishedAt}
				margin="20px 0"
				editButton={<Icon id="fa-floppy-o" size="21px" onClick={onSave} />}
			/>
			<div
				ref={contentRef}
				contentEditable={true}
				suppressContentEditableWarning={true}
				className="post-text"
			>
				{content}
			</div>
		</div>
	);
};
export const PostForm = styled(PostFormContainer)`
	& img {
		float: left;
		margin: 0 20px 8px 0;
	}

	& .post-text {
		min-height: 80px;
		border: 1px solid black;
		font-size: 18px;
	}
`;
PostForm.propTypes = {
	post:PROP_TYPE.POST.isRequired
}

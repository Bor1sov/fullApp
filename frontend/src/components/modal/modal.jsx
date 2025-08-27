import styled from 'styled-components';
import { Button } from '../button/button';
import {
	selectModalIsOpen,
	selectModalOnCancel,
	selectModalOnConfirm,
	selectModalText,
} from '../../selectors';
import { useSelector } from 'react-redux';

const ModalContainer = ({ className }) => {
	const text = useSelector(selectModalText);
	const isOpen = useSelector(selectModalIsOpen);
	const onConfirm = useSelector(selectModalOnConfirm);
	const onCancel = useSelector(selectModalOnCancel);
	if(!isOpen){
		return null;
	}
	return (
		<div className={className}>
			<div className="overlay"></div>
			<div className="box">
				<h3>{text}</h3>
				<div className="buttons">
					<Button className="button_yes"  onClick={onConfirm}>
						Да
					</Button>
					<Button className="button_cancel" width="120px" onClick={onCancel}>
						Отмена
					</Button>
				</div>
			</div>
		</div>
	);
};

export const Modal = styled(ModalContainer)`
	position:fixed;
	z-index:20;
	top:0;
	right:0;
	left:0;
	bottom:0;

	& .overlay{
		background-color:rgba(0,0,0,0.7);
		width:100%;
		height:100%;
		position:absolute;
	}
	& .box{
		width:300px;
		background-color:white;
		z-index:40;
		position:relative;
		display:flex;
		flex-direction:column;
		margin: auto;
		top:50%;
		transform:translate(0,-50%);
		border:1px solid black;
		padding:0 20px 20px;
		align-items:center;
	}
	& .buttons{
		display:flex;
		width:100%;
		justify-content:center;

	}

	& .button_cancel{
		background-color:red;
		margin-left:25px;
		width:125px;
	}
	& .button_yes{
		width:125px;
	}
`;

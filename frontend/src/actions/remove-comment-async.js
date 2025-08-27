import { request } from "../utils/request";
import { removeComment } from "./remove-comment copy";


export const removeCommentAsync = (postId,id) => (dispatch) => {

	request(`/posts/${postId}/comments/${id}`,'DELETE').then(()=>{
			dispatch(removeComment(id));
		});
};

import { useState } from "react";

const CommentsList = () => {
	const [comments, setComments] = useState([
		{ id: 1, text: "Это первый комментарий" },
		{ id: 2, text: "Это второй комментарий" },
		{ id: 3, text: "Это третий комментарий" },
	]);

	const listUpdate = (itemId) => {
		setComments(comments.filter((item) => item.id !== itemId));
	};

	console.log(comments);

	return comments.map((item) => (
		<div key={item.id}>
			<p>{item.text}</p>
			<button onClick={() => listUpdate(item.id)}>Удалить</button>
		</div>
	));
};

export default CommentsList;


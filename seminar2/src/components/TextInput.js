import { useRef, useState } from "react";

function TextInput() {
	let [textInput, setText] = useState();

	const textUpdate = () => {
		return setText((textInput = inputRef.current.value));
	};

	const inputRef = useRef(null);

	return (
		<>
			<input typeof="text" ref={inputRef} onKeyUp={textUpdate} />
			<p className="realTimeText">{textInput}</p>
		</>
	);
}

export default TextInput;

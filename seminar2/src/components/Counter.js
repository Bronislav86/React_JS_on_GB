import { useState } from "react";

function Counter() {
	const [count, setCount] = useState(0);

	const countIncrement = () => {
		return setCount(count + 1);
	};

	return (
		<>
			<span>{count}</span>
			<br />
			<button onClick={countIncrement}>count +1</button>
		</>
	);
}

export default Counter;

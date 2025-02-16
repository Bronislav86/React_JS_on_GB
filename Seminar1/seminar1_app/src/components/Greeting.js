function Greeting() {
	const currentTime = new Date().getHours();

	if ((currentTime >= 4) & (currentTime <= 10)) {
		return <h1>Доброе утро!</h1>;
	} else if ((currentTime > 10) & (currentTime < 17)) {
		return <h1>Добрый день!</h1>;
	} else if ((currentTime >= 17) & (currentTime <= 22)) {
		return <h1>Добрый вечер!</h1>;
	} else {
		return <h1>Доброй ночи!</h1>;
	}
}

export default Greeting;

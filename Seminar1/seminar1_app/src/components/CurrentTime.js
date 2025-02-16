function CurrentTime() {
	const currentDate = new Date();
	let currentTime = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
	return (
		<div>
			<h2 className="TimeHeading">Текущее время: </h2>
			<p className="TimeText">{currentTime.toLocaleString("en-US", { timeZone: "Europe/Moscow" })}</p>
		</div>
	);
}

export default CurrentTime;

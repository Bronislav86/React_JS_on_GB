function EventCard({ name, date, place }) {
	return (
		<div>
			<h3>У вас запланировано {name}</h3>
			<p>В следующую дату: {date}</p>
			<p>Место проведения {place}</p>
		</div>
	);
}

export default EventCard;

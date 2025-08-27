import { useEffect, useState } from "react";
import styled from "styled-components";

const FooterContainer = ({ className }) => {
	const [city, setCity] = useState('');
	const [temperature, setTemperature] = useState('');
	const [weather, setWeather] = useState('');
	useEffect(() => {
		fetch('https://api.openweathermap.org/data/2.5/weather?q=Voronezh&appid=6aae9e11caebabc50a9e1d2eb8413e15&units=metric')
			.then((res) => res.json())
			.then(({ name, main, weather }) => {
				setCity(name);
				setTemperature(Math.round(main.temp));
				setWeather(weather[0].description);
			})
	}, []);
	return (
		<div className={className}>
			<div>
				<div>Блог веб-разработчика</div>
				<div>nd.5nd@yandex.ru</div>
			</div>
			<div>
				<div>
					{city}{' '}
					{new Date().toLocaleString('ru', { day: 'numeric', month: 'long' })}
				</div>
				<div>
					{temperature} градусов, {weather}
				</div>
			</div>
		</div>
	)
}
export const Footer = styled(FooterContainer)`
	display:flex;
	justify-content:space-between;
	align-items:center;
	bottom:0;
	width:1000px;
	height:120px;
	padding:20px 40px;
	box-shadow: 0 2px 17px #ADADAD;
	font-weight:bold;
	font-family:sans-serif;
	background-color:#fff;
`;

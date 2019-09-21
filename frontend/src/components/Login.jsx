import React from 'react';
import '../CSS/login.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			usuario: '',
			password: ''
		};
	}
	handleChange = (event) => {
		const value = event.target.value;
		this.setState({ [event.target.name]: value });
	};
	handleSubmit = (event) => {
		event.preventDefault();
		const { usuario, password } = this.state;
		console.log( { usuario, password });
		
	};
	render() {
		return (
			<div>
				<header>
					<div>
						<div className="menuCabecera">
							<div className="contenedorLogo">
								<Link to="/">
									<img src="/images/iconoweb.png" alt="Logo" />
								</Link>
								<p>GeeksHubs</p>
								<p>Travel</p>
							</div>
							<ul>
								<li>Destinos</li>
								<li>Quiénes somos</li>
								<li>Dónde estamos</li>
							</ul>
							<div className="iconosRedes">
								<img src="/images/fb-ico.png" alt="Logo Facebook" />
								<img src="/images/tt-ico.png" alt="Logo twitter" />
								<img src="/images/linkedin.png" alt="Logo linkedin" />
								<img src="/images/instagram.png" alt="Logo de instagram" />
								<img src="/images/Google.png" alt="Logo de google" />
							</div>
						</div>
					</div>
				</header>
				<section id="sectionLogin">
					<div className="fondoBlanco">
						<div className="contenedorFormulario">
							<form onSubmit={this.handleSubmit}>
								<h1>LOGIN</h1>
								<div className="contenedorInput">
									<input
										type="text"
										name="usuario"
										placeholder="Usuario"
										value={this.state.usuario}
										onChange={this.handleChange}
										autoFocus
									/>
									<input
										type="password"
										name="password"
										placeholder="Contraseña"
										value={this.state.password}
										onChange={this.handleChange}
									/>
								</div>
								 <button type="submit" className="submit" value="Submit">Enviar</button>
								{/* <p>¿No recuerdas tu contraseña?</p> */}
							</form>
						</div>
					</div>
				</section>

				<footer>
					<div className="containerFooter">
						<div className="footerAyuda">
							<h3>¿NECESITAS AYUDA?</h3>
							<p>0264 123 4567</p>
							<p>enquiry@geekshubstravels.com</p>
							<p>Lun-Vie. 9:30-19:00 Sab: 10:00-14:00</p>
						</div>
						<div className="footerInformacion">
							<h3>INFORMACIÓN</h3>
							<ul>
								<li>Quiénes somos</li>
								<li>Preguntas frecuentes</li>
								<li>Política de privacidad</li>
								<li>Condiciones generales</li>
								<li>Aviso legal</li>
								<li>Contacto</li>
								<li>Programa de puntos</li>
							</ul>
						</div>
						<div className="footerSuscribirse">
							<h3>SUSCRÍBETE AL NEWSLETTER</h3>
							<input type="text" name="mail" id="" size="30" placeholder="Correo electrónico" />
							<br />
							<button>SUSCRÍBETE</button>
						</div>
					</div>
					<div className="derechos">
						<p>GeeksHubs Travels 2019 Todos los derechos reservados.</p>
					</div>
				</footer>
			</div>
		);
	}
}

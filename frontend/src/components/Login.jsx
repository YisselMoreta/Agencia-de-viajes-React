import '../CSS/login.scss';
import { Link } from 'react-router-dom';

import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import React, { Component } from 'react';
import firebaseConfig from '../Auth/firebase';

const firebaseApp = firebase.initializeApp(firebaseConfig);
class Login extends Component {
	constructor(props) {
		super(props);
	}

	handleClick = (event) => {
		firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((res) => console.log(res));
		firebase.auth().onAuthStateChanged(function(currentUser) {
			if (currentUser) {
				window.location = 'userLog';
			}
		});
	};
	render() {
		const { user, signOut, singWithGoogle } = this.props;
		return (
			<div>
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
									<li>
										<Link to="/#SeccionDestinos">Destinos</Link>
									</li>
									<li>
										<Link to="/#nosotros">Quiénes somos</Link>
									</li>
									<li>
										<Link to="/#ubicacion">Dónde estamos</Link>
									</li>
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
							{user ? (
								<p>Hola, {user.displayName}</p>
							) : (
								<p/>
							)}

							{user ? (
								<button onClick={signOut}>Sign Out</button>
							) : (
								<button onClick={this.handleClick}>Sign In with Google</button>
							)}
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
			</div>
		);
	}
}

const firebaseAppAuth = firebaseApp.auth();
const providers = {
	googleProvider: new firebase.auth.GoogleAuthProvider()
};
providers.googleProvider.addScope('profile');
export default withFirebaseAuth({
	providers,
	firebaseAppAuth
})(Login);

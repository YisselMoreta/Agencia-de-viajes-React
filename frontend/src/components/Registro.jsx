import React from 'react';
import  '../CSS/registro.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class Registro extends React.Component{
  	constructor(props) {
      		super(props);
		this.state = {
            usuario: '',
            email: '',
            password: '',
            passwordConfirm: '',
            terms: false,
        }
	}
	handleChange = (event) => {
		const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        this.setState({ [event.target.name]: value })
	}
	handleSubmit = (event) => {
		event.preventDefault();
        const { usuario, email, password } = this.state
        if (this.state.password === this.state.passwordConfirm && this.state.terms) {
            axios.post('http://localhost:3001/user/signup', { usuario, email, password })
                .then(res=>{
                    console.log(res.data)
                   
                })
                .catch(console.log)
        }
    }


    render() {
        return(
             <div>
           <header>
        <div>
            <div className="menuCabecera">
                <div className="contenedorLogo">
                    <Link to="/"><img src="/images/iconoweb.png" alt="Logo"/></Link>
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
                    <h1>REGISTRO</h1>
                    {/* <p>¿Ya estás registrado?</p> */}
                    <div className="contenedorInput">
                        <input type="text" name="usuario" placeholder="Usuario" id="nombre"  onChange={this.handleChange} value={this.state.usuario}/>
                        <input type="text" name="email" placeholder="Correo electrónico" id="email" onChange={this.handleChange} value={this.state.email}/>
                        <input type="password" name="password" placeholder="Contraseña" id="password"  onChange={this.handleChange} value={this.state.password}/>
                        <input type="password" name="confirmarClave" placeholder="Confirmar contraseña" id="confirmarPassword" onChange={this.handleChange} value={this.state.confirmarClave}/>
                    </div>
                    <div>
                        <input type="checkbox" name="terminos" value="terminos" className="terminos" onChange={this.handleChange} value={this.state.terminos}/>
                        <span className="terminos">Acepta los términos y condiciones, así como la políticas de privacidad.</span>
                    </div>
                    <button type="submit" className="submit" value="Submit">Enviar</button>
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
                    <input type="text" name="mail" id="" size="30" placeholder="Correo electrónico"/><br/>
                    <button>SUSCRÍBETE</button>
                </div>
            </div>
            <div className="derechos">
                <p>GeeksHubs Travels 2019 Todos los derechos reservados.</p>
            </div>
        </footer>
       </div>

        )
    } 
 }
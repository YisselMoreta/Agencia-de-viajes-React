import React from 'react';
import  '../CSS/index.css';
import { Link } from 'react-router-dom';

export default class Index extends React.Component{
   


    render(){
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
                      <li><Link to="/#SeccionDestinos">Destinos</Link></li>
                      <li><Link to="/#nosotros">Quiénes somos</Link></li>
                      <li><Link to="/#ubicacion">Dónde estamos</Link></li>
                </ul>
                <div className="iconosRedes">
                    <img src="/images/fb-ico.png" alt="Logo Facebook"/>
                    <img src="/images/tt-ico.png" alt="Logo twitter"/>
                    <img src="/images/linkedin.png" alt="Logo linkedin"/>
                    <img src="/images/instagram.png" alt="Logo de instagram"/>
                    <img src="/images/Google.png" alt="Logo de google"/>
                </div>
            </div>
        </div>
    </header>

           <div className="fondoPrincipal">
            </div>

        <div className="fondoBlanco">
        <div className="contenedorBotones">
        <h1>Bienvenidos a</h1>
        <img className="logoCentro" src="/images/iconoweb.png" alt="logo"/>
        <p>GeeksHubs</p> 
        <p>Travel</p>
        <div className="botones">
            <Link to="/login">Login</Link>
            {/* <Link to="/registro">Registro</Link> */}
        </div>
        </div>
        </div>
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

import React from 'react';
import '../CSS/paginaPrincipal.css';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link'; 



export default class PaginaPrincipal extends React.Component{
    
    

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
                    <li><Link to="#SeccionDestinos">Destinos</Link></li>
                    <li><Link to="#nosotros">Quiénes somos</Link></li>
                    <li><Link to="#ubicacion">Dónde estamos</Link></li>
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
        <div id="home">
            <div>
                    <h1><pre>     Viaja! </pre></h1>
                <h3><pre>Descubre lugares maravillosos!</pre></h3>
            </div>
            <div className="contenedorBotonDestinos">
                <Link to="#SeccionDestinos" className="botonDestinos">Ver destinos</Link>
            </div>
        </div>
    </header>


    <section id="SeccionDestinos">
        <div id="sdestinos">
            <div id="primeraFilaDestinos">
                <div>
                    <img src="/images/beijing.jpg" alt="Ciudad Beijing"/>
                    <h2>Beijing</h2>
                    <div className="descuento">
                        Ahorra 90€ 
                    </div>
                    <div className="precio">
                        <div>
                            359€
                        </div>
                    </div>
                </div>
                <div>
                    <img src="/images/buenos_aires.jpg" alt="Buenos Aires"/>
                    <h2>Buenos Aires</h2>
                    <div className="descuento">
                        Ahorra 75€ 
                    </div>
                    <div className="precio">
                        <div>
                            729€
                        </div>
                    </div>
                </div>
                <div>
                    <img src="/images/ciudad_mexico.jpg" alt="Ciudad de méxico"/>
                    <h2>México</h2>
                    <div className="descuento">
                        Ahorra 35€ 
                    </div>
                    <div className="precio">
                        <div>
                            519€
                        </div>
                    </div>
                </div>
            </div>
            <div id="segundaFilaDestinos">
                <div>
                    <img src="/images/madrid.jpg" alt="Madrid"/>
                    <h2>Madrid</h2>
                    <div className="descuento">
                        Ahorra 65€ 
                    </div>
                    <div className="precio">
                        <div>
                            329€
                        </div>
                    </div>
                </div>
                <div>
                    <img src="/images/new_york.jpg" alt="New York"/>
                    <h2>New York</h2>
                    <div className="descuento">
                        Ahorra 95€ 
                    </div>
                    <div className="precio">
                        <div>
                            199€
                        </div>
                    </div>
                </div>
                <div>
                    <img src="/images/tokyo.jpg" alt="Tokio"/>
                    <h2>Tokio</h2>
                    <div className="descuento">
                        Ahorra 50€ 
                    </div>
                    <div className="precio">
                        <div>
                            659€
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    

    <section id="nosotros">
        <div>
            <div>
                <h1>QUIÉNES SOMOS</h1>
            </div>
            <p>GeeksHubs Travels es una agencia de viajes online creada en 2009
                por un equipo de viajeros entusiastas que deciden hacer de su pasión por conoccer el mundo un modo de
                vida. desde nuestros inicios hemos diseñado mas de 500 viajes organizados a diferentes destinos de
                Europa, Norteamérica y Asia. Nuestro objetivo ahora es ir ampliando horizontes poco a poco
            </p>
            <div className="contenedorBotonDiscubrir">
                <Link to="/index">DESCUBRIR</Link>
            </div>
        </div>
    </section>

    <section id="ubicacion">
        <div className="contenedorMapa">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d956.6630991176203!2d-3.7037322178409378!3d40.42621995026423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42286264887f17%3A0x78848aa7adfdb15f!2sCalle%20de%20San%20Andr%C3%A9s%2C%208%2C%2028004%20Madrid!5e0!3m2!1ses!2ses!4v1567937320242!5m2!1ses!2ses"
                width="440" height="500" frameBorder="0"  allowFullScreen=""title="frame"  ></iframe>
        </div>
        <div className="contenedorContacto">
            <div>
            <p>Para cualquier consulta póngase en contacto con nosotros:</p>
                <p>0264 123 4567</p>
                
                <p>enquiry@artiotravel.com</p>
                   
                <p>Lun-Vie. 9:30-19:00 Sab: 10:00-14:00</p>
                
            </div>
            <div>
                <form action="">
                    <div className="formulario">
                        <div className="contenedorInputs">
                            <input type="text" name="" size="45" placeholder="Nombre*" className="edit"/>
                            <input type="text" name="" size="45" placeholder="Email*" className="edit"/>
                        </div>
                        <div className="contenedorInputs">
                            <input type="text" name="" size="45" placeholder="Teléfono" className="edit"/>
                            <input type="text" name="" size="45" placeholder="Ciudad" className="edit"/>
                        </div>
                        <div className="contenedorTextarea">
                            <textarea name="" id="" cols="98" rows="6" placeholder="Mensaje"></textarea>
                        </div>
                        <p>*Por favor, completa los campos correctamente.</p>
                        <div className="contenedorBotonEnviarMensaje">
                            <Link to="http://google.com" className="botonEnviarMensaje">Enviar mensaje</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>

    <footer>
        <div className="containerFooter">
            <div className="footerAyuda">
                <h3>¿NECESITAS AYUDA?</h3>
                <p>0264 123 4567 </p>
                 <p> enquiry@geekshubstravels.com</p>
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
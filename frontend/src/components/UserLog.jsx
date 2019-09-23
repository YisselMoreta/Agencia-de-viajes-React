import React from 'react';
import '../CSS/userlog.css';
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
      <div className="contenedorBotonDestinos">
                <Link to="#SeccionDestinos" className="botonDestinos">Bienvenid@</Link>
            </div>


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
                    <h2>Ciudad de méxico</h2>
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
        <section id="SeccionDestinos">
        <div id="sdestinos">
        <div id="terceraFilaDestinos">
                <div>
                    <img src="/images/singapore-190900_960_720.jpg" alt="Singapur"/>
                    <h2>Singapur</h2>
                    <div className="descuento">
                        Ahorra 90€ 
                    </div>
                    <div className="precio">
                        <div>
                            389€
                        </div>
                    </div>
                </div>
                <div>
                    <img src="/images/Ohio.jpg" alt="Ohio"/>
                    <h2>Ohio</h2>
                    <div className="descuento">
                        Ahorra 75€ 
                    </div>
                    <div className="precio">
                        <div>
                            719€
                        </div>
                    </div>
                </div>
                <div>
                    <img src="/images/Valencia.jpg" alt="Valencia"/>
                    <h2>Valencia</h2>
                    <div className="descuento">
                        Ahorra 35€ 
                    </div>
                    <div className="precio">
                        <div>
                            589€
                        </div>
                    </div>
                </div>
            </div>
            <div id="cuartaFilaDestinos">
                <div>
                    <img src="/images/LasVegas.jpg" alt="Las Vegas"/>
                    <h2>Las Vegas</h2>
                    <div className="descuento">
                        Ahorra 65€ 
                    </div>
                    <div className="precio">
                        <div>
                            369€
                        </div>
                    </div>
                </div>
                <div>
                    <img src="/images/Vietnam.jpg" alt="Vietnam"/>
                    <h2>Vietnam</h2>
                    <div className="descuento">
                        Ahorra 100€ 
                    </div>
                    <div className="precio">
                        <div>
                            299€
                        </div>
                    </div>
                </div>
                <div>
                    <img src="/images/LaHabana.jpg" alt="La Habana"/>
                    <h2>La Habana</h2>
                    <div className="descuento">
                        Ahorra 80€ 
                    </div>
                    <div className="precio">
                        <div>
                            689€
                        </div>
                    </div>
                </div>
            </div>
        </div>

    


    </section>


    
        
        </div>
    

    
    
        )
    }
}
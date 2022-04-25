import '../styles/style.blue.css';
import TopBar from './TopBar';
import NavBar from './NavBar';
import Footer from './Footer';
import Carousel from './Carousel'
import Anac from '../resources/LogoANACcolor.png';

function ManteHabilit() {
    return(
        <>
            <TopBar/>
            <NavBar/>
            <Carousel/>
            <section className='py-5 bg-fixed bg-gray-300'>
                <div className='container py-4'>
                    <header className='mb-5'>
                        <h2 className='text-uppercase lined mb-4'>MANTENIMIENTO Y HABILITACIONES</h2><br/>
                        <p className='lead'>En Cielo S.A. contamos con todas las habilitaciones otorgadas por ANAC (Administración Nacional de Aviación Civil Argentina) para trabajar con aeronaves, cumpliendo con todas las normas y regulaciones emitidas por la dirección de aeronavegabilidad relativas a talleres aeronáuticos.</p>
                    </header><hr/><br/>
                    <h4 className='text-uppercase mb-4 text-center'>Habilitaciones vigentes para República Argentina - Habilitación ANAC 1B-30</h4><br/>
                    <ul>
                        <li><strong>AEROSTAR:</strong> Modelos PA60-600, PA60-601, PA60-601P.</li>
                        <li><strong>BEECHCRAFT:</strong> Todas las series de las aeronaves BARON y BONANZA.</li>
                        <li><strong>BOMBARDIER:</strong> Global 5000.</li>
                        <li><strong>BOMBARDIER CHALLENGER:</strong> Modelos 300, 600, 601 y 604.</li>
                        <li><strong>CARAVAN (Cessna):</strong> 208 y 208B.</li>
                        <li><strong>CESSNA:</strong> Todas las series de los modelos 182, 205, 206, 207, 210, 303, 310, 320, 335, 336, 337, 340, 401, 402, 411, 414 y 421.</li>
                        <li><strong>CIRRUS:</strong> SR20, SR22, SR22T.</li>
                        <li><strong>CITATION (Cessna):</strong> Modelos Citation 500, Citation I 500, Citation I SP 500, Citation II 550, Citation II SP 550, Citation II 550 BRAVO, Citation III 650, Citation V 560, Citation V 560 Encore, Citation Excel 560XL, Citation VI 650, Citation VII 650 y Citation Sovereign 680</li>
                        <li><strong>COMMANDER:</strong> Aero Commander 500, Twin Commander 680 y 690A/B</li>
                        <li><strong>KING AIR:</strong> (Beechcraft) King Air 90 Series, King Air 200, King Air B200, King Air 300, King Air 300LW, King Air 350</li>
                        <li><strong>LEARJET:</strong> Modelos 31 y 60</li>
                        <li><strong>GULFSTREAM AEROSPACE:</strong> GIV</li>
                        <li><strong>PIPER:</strong> Navajo PA31-300, Navajo PA31-310, Navajo PA31-325, Navajo PA31-350 Chieftain, Navajo PA31P-350 Mojave, Seneca II PA-34-200/T, Seneca III PA34-220T, Cheyenne I PA31-T-500, Cheyenne II PA31-T-620, Cheyenne III PA42-720, CheyennePA42-1000.</li>
                        <li><strong>BRITTEN NORMAN:</strong> BN-2B.</li><br/><br/><br/>
                        <div className='d-flex justify-content-evenly'>
                            <a href='https://www.anac.gov.ar/anac/web/'><img className='img img-fluid' src={Anac} alt='ANAC Logo'></img></a>
                        </div>
                    </ul>
                </div>
            </section>
            <Footer/>
        </>
    );
}

export default ManteHabilit;
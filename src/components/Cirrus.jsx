import TopBar from './TopBar';
import NavBar from './NavBar';
import Footer from './Footer';
import Carousel from './Carousel';
import LogoCirrus from '../resources/Cirrus_Aircraft_logo.png';


function Cirrus() {
    return(
        <>
            <TopBar/>
            <NavBar/>
            <Carousel/>
            <section className="py-5 bg-fixed bg-gray-300">
                <div className="container py-4">
                    <header className="mb-5">
                        <h2 className="text-uppercase lined mb-4">CIRRUS AIRCRAFT</h2><br></br>
                        <p className="lead">Somos representantes de Cirrus para Argentina, Bolivia, Paraguay y Uruguay. Visite el sitio de Cirrus Aircraft para mas detalles de la empresa y sus aeronaves.</p><br></br>
                        <div className='text-center'>
                        <a href='http://www.cirrusaircraft.com'><img src={LogoCirrus} alt='logo cirrus' style={{width: '25vw', height: '50%'}}></img></a>
                        </div>
                    </header><hr></hr>
                </div>
            </section>
            <Footer/>
        </>
    );
}

export default Cirrus;
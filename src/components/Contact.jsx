import TopBar from './TopBar';
import NavBar from './NavBar';
import Carousel from './Carousel';
import Footer from './Footer';
import map from '../resources/plano-cielo.jpg';

function About() {

    return(
        <>
        <TopBar/>
        <NavBar/>
        <Carousel/>
        <section className='py-5 bg-fixed bg-gray-300'>
        <div className='container py-4'>
          <header className='mb-5'>
            <h2 className='text-uppercase lined mb-4'>CONTACTO</h2><br/>
            <div className='text-center'>
            <h3 className='mb-5'>Cielo S.A.</h3>
            <p className='lead mb-4'>Ruta 202 y Balcarce,
                                Aeropuerto Internacional de San Fernando
                                San fernando, Buenos Aires (1646)
                                República Argentina.
                                </p><br/><br/>
            <h3 className='mb-5'>Mails de Contacto</h3>
            <a href='mailto:administracion@cielosa.com.ar'><h4>administracion@cielosa.com.ar</h4></a>
            <a href='mailto:marcelopaviotti@cielosa.com.ar'><h4>marcelopaviotti@cielosa.com.ar</h4></a>
            <a href='mailto:secretaria@cielosa.com.ar'><h4>secretaria@cielosa.com.ar</h4></a><br/><br/>
            <h3 className='mb-5'>Telefono</h3>
            <h4>11 4714 2002</h4>
            <h4>Fax: 11 4714 2224</h4>
            <br/><br/>
            <h3 className='mb-5'>Como Llegar</h3>
            <img src={map} alt='map'></img>
            </div>
          </header>
        </div>
        </section>
        <Footer/>
        </>
    );
}


export default About;
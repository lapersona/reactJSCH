import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion, faPlaneDeparture, faPlane } from '@fortawesome/free-solid-svg-icons';
import '../styles/style.blue.css';
import { Link } from 'react-router-dom';

function ServiceSection() {
    return (
        <section className='py-5 bg-fixed bg-pentagon'>
        <div className='container py-4'>
          <div className='row gy-4'>
            <div className='col-lg-4 col-md-6 block-icon-hover text-center'>
              <div className='icon icon-outlined icon-outlined-primary icon-thin mx-auto mb-3'><Link to='/mantyhabilit'><FontAwesomeIcon icon={faPlane}/></Link></div>
              <h4 className='text-uppercase mb-4'>MANTENIMIENTO Y HABILITACIONES</h4>
              <p className='text-gray-800 text-sm'>En Cielo S.A. contamos con todas las habilitaciones otorgadas por ANAC (Administración Nacional de Aviación Civil Argentina) para trabajar con aeronaves, cumpliendo con todas las normas y regulaciones emitidas por la dirección de aeronavegabilidad relativas a talleres aeronáuticos.</p>
            </div>
            <div className='col-lg-4 col-md-6 block-icon-hover text-center'>
              <div className='icon icon-outlined icon-outlined-primary icon-thin mx-auto mb-3'><Link to='/mantyhabilit'><FontAwesomeIcon icon={faQuestion}/></Link></div>
              <h4 className='text-uppercase mb-4'>QUIENES SOMOS</h4>
              <p className='text-gray-800 text-sm'>Con mas de 40 años en el mercado aeronautico local, CIELO S.A. es hoy uno de los mayores talleres de mantenimiento de la Argentina.</p>
            </div>
            <div className='col-lg-4 col-md-6 block-icon-hover text-center'>
              <div className='icon icon-outlined icon-outlined-primary icon-thin mx-auto mb-3'><Link to='/ventas'><FontAwesomeIcon icon={faPlaneDeparture}/></Link></div>
              <h4 className='text-uppercase mb-4'>VENTAS</h4>
              <p className='text-gray-800 text-sm'>Para ventas, complete el formulario y en breve nos contactaremos para asesorarlo o acceda a nuestro e-shop.</p>
            </div>
          </div>
        </div>
      </section>
    );
}

export default ServiceSection;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPassport, faPlaneDeparture, faPlane } from '@fortawesome/free-solid-svg-icons';
import '../styles/style.blue.css';
import { Link } from 'react-router-dom';

function ServiceSection() {
    return (
        <section className="py-5 bg-fixed bg-pentagon">
        <div className="container py-4">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6 block-icon-hover text-center">
              <div className="icon icon-outlined icon-outlined-primary icon-thin mx-auto mb-3"><Link to="/mantyhabilit"><FontAwesomeIcon icon={faPlane}/></Link></div>
              <h4 className="text-uppercase mb-3">MANTENIMIENTO</h4>
              <p className="text-gray-600 text-sm">Fifth abundantly made Give sixth hath. Cattle creature i be don't them behold green moved fowl Moved life us beast good yielding. Have bring.</p>
            </div>
            <div className="col-lg-4 col-md-6 block-icon-hover text-center">
              <div className="icon icon-outlined icon-outlined-primary icon-thin mx-auto mb-3"><Link to="/mantyhabilit"><FontAwesomeIcon icon={faPassport}/></Link></div>
              <h4 className="text-uppercase mb-3">HABILITACIONES</h4>
              <p className="text-gray-600 text-sm">Advantage old had otherwise sincerity dependent additions. It in adapted natural hastily is justice. Six draw you him full not mean evil. Prepare garrets it expense windows shewing do an.</p>
            </div>
            <div className="col-lg-4 col-md-6 block-icon-hover text-center">
              <div className="icon icon-outlined icon-outlined-primary icon-thin mx-auto mb-3"><Link to="/ventas"><FontAwesomeIcon icon={faPlaneDeparture}/></Link></div>
              <h4 className="text-uppercase mb-3">VENTAS</h4>
              <p className="text-gray-600 text-sm">Am terminated it excellence invitation projection as. She graceful shy believed distance use nay. Lively is people so basket ladies window expect.</p>
            </div>
          </div>
        </div>
      </section>
    );
}

export default ServiceSection;
import '../styles/style.blue.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CartWidget from './CartWidget';
import { faEnvelope , faPhone } from '@fortawesome/free-solid-svg-icons';

function TopBar() {
    return (
    <div className="top-bar py-2 bg-color" id="topBar">
        <div className="container px-lg-0 text-light py-1">
          <div className="row d-flex">
            <div className="col-md-6 d-md-block">
              <p className="mb-0 text-sm">Cielo S.A. San Fernando - Buenos Aires - Argentina</p>
            </div>
            <div className="col-sm-6 d-flex justify-content-end">
                <FontAwesomeIcon icon={faEnvelope} style={{marginRight: '8px'}}/>
                <FontAwesomeIcon icon={faPhone} style={{marginRight: '8px'}}/>
                <CartWidget/>
            </div>
          </div>
          
        </div>
    </div>
    );
}

export default TopBar;
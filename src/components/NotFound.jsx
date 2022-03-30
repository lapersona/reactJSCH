import { Link} from 'react-router-dom';
import '../styles/style.blue.css';

function NotFound() {
    return(
        <>
        <div className="container py-4">
          <div className="col-md-7 mx-auto text-center py-4">
            <div className="py-5">
              <h1 className="text-xl mb-0 text-uppercase">404 - Not found</h1>
              <p className="lead text-muted mb-4">We are sorry - this page is not here anymore</p>
              <Link to="/">
              <a className="btn btn-outline-primary" href=" "><i className="fas fa-home"></i>Homepage</a>
              </Link>
            </div>
          </div>
        </div>
        </>
    );
}

export default NotFound;

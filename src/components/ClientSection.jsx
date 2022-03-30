import '../styles/style.blue.css';
import client1 from '../resources/bombardier.png';
import client2 from '../resources/gulf.png';
import client3 from '../resources/piper.png';
import client4 from '../resources/beechcraft.png';
import client5 from '../resources/cirrus.png';
import client6 from '../resources/cessna.png';

function ClientSection() {
    return (
        <section className="py-5">
        <div className="container py-4">
          <header className="mb-5">
            <h2 className="text-uppercase lined lined-center mb-4">Nuestros Clientes</h2>
          </header>
          <div className="swiper-container customers-slider">
            <div className="d-flex justify-content-evenly">
              <div className="swiper-slide h-auto"><img className="img-fluid img-grayscale d-block mx-auto" src={client1} alt="..." width="140"></img></div>
              <div className="swiper-slide h-auto"><img className="img-fluid img-grayscale d-block mx-auto" src={client2} alt="..." width="140"></img></div>
              <div className="swiper-slide h-auto"><img className="img-fluid img-grayscale d-block mx-auto" src={client3} alt="..." width="140"></img></div>
              <div className="swiper-slide h-auto"><img className="img-fluid img-grayscale d-block mx-auto" src={client4} alt="..." width="140"></img></div>
              <div className="swiper-slide h-auto"><img className="img-fluid img-grayscale d-block mx-auto" src={client5} alt="..." width="140"></img></div>
              <div className="swiper-slide h-auto"><img className="img-fluid img-grayscale d-block mx-auto" src={client6} alt="..." width="90"></img></div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default ClientSection;
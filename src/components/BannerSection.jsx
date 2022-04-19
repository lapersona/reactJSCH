import '../styles/style.blue.css';

function BannerSection() {

    return(
        <section className='py-5 dark-overlay-xl banner-back'>
        <div className='overlay-content'>
          <div className='container py-4 text-white text-center'>
            <h2 className='text-uppercase mb-3'>Cirrus Aircraft</h2>
            <h6 className='lead mb-4'>Somos representantes oficiales de Cirrus Aircraft para Argentina, Bolivia, Paraguay y Uruguay.</h6>
            <a className='btn btn-outline-light btn-lg' href='http://www.cirrusaircraft.com'>Visite el sitio de Cirrus Aircraft</a>
          </div>
        </div>
      </section>
    )
}

export default BannerSection;
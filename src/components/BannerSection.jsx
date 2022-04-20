import '../styles/style.blue.css';

function BannerSection() {

    return(
        <section className='py-5 dark-overlay-lg banner-back'>
        <div className='overlay-content'>
          <div className='container py-3 text-white text-center'>
            <h1 className='text-uppercase mb-3'>Cirrus Aircraft</h1>
            <h5 className='lead mb-4'>Somos representantes oficiales de Cirrus Aircraft para Argentina, Bolivia, Paraguay y Uruguay.</h5>
            <a className='btn btn-outline-light' href='http://www.cirrusaircraft.com'>Visite el sitio de Cirrus Aircraft</a>
          </div>
        </div>
      </section>
    )
}

export default BannerSection;
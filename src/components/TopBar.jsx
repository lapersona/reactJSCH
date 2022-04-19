import '../styles/style.blue.css';

function TopBar() {
    return (
      <div className='top-bar bg-color' id='topBar'>
          <div className='container px-lg-0 text-light py-1'>
            <div className='row'>
              <div className='col'>
                <p className='mb-0 text-sm'>Cielo Aviones S.A. San Fernando - Buenos Aires - Argentina</p>
              </div>
            </div>
          </div>
      </div>
    );
}

export default TopBar;
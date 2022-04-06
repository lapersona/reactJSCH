import TopBar from './TopBar';
import NavBar from './NavBar';
import Footer from './Footer';
import ItemListContainer from './ItemListContainer';

function Ventas() {
    return(
        <>
          <TopBar/>
          <NavBar/>
          <section className="py-5 dark-overlay-xl ventas-back">
          <br/><br/><br/><br/><br/>
          </section>
          <ItemListContainer></ItemListContainer>
          <Footer/>
        </>
    );
}

export default Ventas;
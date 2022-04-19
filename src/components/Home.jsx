import TopBar from './TopBar';
import NavBar from './NavBar';
import Carousel from './Carousel';
import ServiceSection from './ServiceSection';
import BannerSection from './BannerSection';
import ClientSection from './ClientSection';
import Footer from './Footer';

function Home() {
    return (
        <>
            <TopBar/>
            <NavBar/>
            <Carousel/>
            <ServiceSection/>
            <BannerSection/>
            <ClientSection/>
            <Footer/>
        </>
    );
}

export default Home;

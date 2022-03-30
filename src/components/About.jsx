import TopBar from './TopBar';
import NavBar from './NavBar';
import Footer from './Footer';

function About() {

    return(
        <div>
        <TopBar/>
        <NavBar/>
        <section className="py-5 bg-fixed bg-gray-300">
        <div className="container py-4">
          <header className="mb-5">
            <h2 className="text-uppercase lined mb-4">QUIENES SOMOS</h2><br></br>
            <h3 className="mb-4 text-center">Una familia "Aeronáutica"</h3>
            <p className="lead">Atilio Paviotti, mecánico aeronáutico y padre del fundador de Cielo S.A., llega a la Argentina, luego de haber participado en la primera guerra mundial, como tantos otros italianos, para comenzar una nueva vida. Dada su profesión se presenta en la Base Aérea de El Palomar, por entonces bajo mando del Ejército, donde después de una entrevista con el propio Gral. Mosconi queda incorporado como mecánico. Luego de una larga trayectoria en la fuerza, solicita el retiro, continuando su carrera en el campo civil.</p><br></br><br></br>
            <h3 className="mb-4 text-center">El fundador, <strong>Bruno Paviotti.</strong></h3>
            <p className="lead">Hereda de su padre la pasión por la aviación, haciendo la carrera de piloto en el "Aeroclub Argentino", donde obtiene su primera licencia a los 17 años. Comienza de inmediato a trabajar, y con mucho esfuerzo, realiza también el curso de mecánico aeronáutico. Desempeña su trabajo en diversas empresas volando todo tipo de aeronaves, hasta su retiro como piloto a los 43 años, luego de haber acumulado más de 16,000 horas de vuelo.</p><br></br><br></br>
            <h3 className="mb-4 text-center">Los comienzos.</h3>
            <p className="lead">Como "Bruno Paviotti Aviación" se establece en el "Aeropuerto de Don Torcuato" en el año 1972, y allí Don Bruno continua con otra de sus pasiones, la mecánica, y desde allí construye las bases de lo que, a partir de 1985 seria CIELO S.A. Además, debido a su profundo conocimiento de la actividad aeronáutica, comienza también a comercializar aeronaves, obteniendo diversas representaciones entre las que se destacan la del avión "Aerostar", las aeronaves civiles de"Embraer" y "Astra Jet Corp." </p><br></br><br></br>
            <h3 className="mb-4 text-center">La continuidad.</h3>
            <p className="lead">En 1994 Silvina y Marcelo Paviotti, suceden a su padre en la dirección de la empresa, dedicándose a ampliar las instalaciones del Hangar de Don Torcuato y a obtener habilitaciones para realizar tareas de mantenimiento en nuevas aeronaves debido a las necesidades de su creciente cartera de clientes.</p><br></br><br></br>
            <h3 className="mb-4 text-center">El presente.</h3>
            <p className="lead">Dado el cierre del Aeropuerto de Don Torcuato, en el año 2005, la empresa traslada sus instalaciones al "Aeropuerto Internacional de San Fernando" donde construye un nuevo hangar, además de talleres y oficinas administrativas. Con mas de 40 años en el mercado aeronáutico local CIELO S.A. es hoy uno de los mayores talleres de
              mantenimiento de la Argentina pudiendo prestar servicio a una amplia gama de aeronaves desde un monomotor a pistón hasta modernos Jets ejecutivos.</p><br></br>
          </header>
        </div>
        </section>
        <Footer/>
        </div>
    );
}


export default About;
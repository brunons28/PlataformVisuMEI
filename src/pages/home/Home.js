import './Home.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Funcionalidades from './components/Funcionalidades/Funcionalidades';
import ComoFunciona from './components/ComoFunciona/ComoFunciona';
import Informacoes from './components/Informações/Informacoes';
import Classificacoes from './components/Classificações/Classificacoes';
import Favoritos from './components/Favoritos/Favoritos';
import Proximidades from './components/Proximidades/Proximidades';
import Porque from './components/PorqueVisuMEI/Porque';

function Home(props) {

    const goTo = props.goTo;

    return(
        <div className='home'>

            <div className='header-home'>
                <Header goTo={goTo} />
            </div>

            <div className='main-home'>

                <Funcionalidades />
                <ComoFunciona />
                <Informacoes />
                <Classificacoes />
                <Favoritos />
                <Proximidades />
                <Porque />

            </div>

            <div className='footer-home'>
                <Footer />
            </div>

        </div>
    );
}

export default Home;
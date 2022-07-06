import './Funcionalidades.css';
import geolocal from '../../../../images/home/geolocal-img.svg';
import servicos from '../../../../images/home/servicos-img.svg';
import produtos from '../../../../images/home/produtos-img.svg';
import paramei from '../../../../images/home/paramei-img.svg';

function Funcionalidades() {
    return(
        <div className='home-funcionalidades'>

            <div className='home-funcionalidades-container'>

                <div className='home-funcionalidades-container-geo'>
                    <img src={geolocal} alt="" />
                    <p className='funcionalidades-titulo'>Geolocalização</p>
                    <p className='funcionalidades-descri'>Os MEIS mais próximos de você</p>
                    <button className='funcionalidades-vermais'>Ver mais</button>
                </div>

                <div className='home-funcionalidades-container-servicos'>
                    <img src={servicos} alt="" />
                    <p className='funcionalidades-titulo'>Serviços</p>
                    <p className='funcionalidades-descri'>Diversos serviços disponíveis</p>
                    <button className='funcionalidades-vermais'>Ver mais</button>
                </div>

                <div className='home-funcionalidades-container-produtos'>
                    <img src={produtos} alt="" />
                    <p className='funcionalidades-titulo'>Produtos</p>
                    <p className='funcionalidades-descri'>Diversos produtos disponíveis</p>
                    <button className='funcionalidades-vermais'>Ver mais</button>
                </div>

                <div className='home-funcionalidades-container-paramei'>
                    <img src={paramei} alt="" />
                    <p className='funcionalidades-titulo'>Para quem é MEI</p>
                    <p className='funcionalidades-descri'>Venha divulgar o seu trabalho aqui</p>
                    <button className='funcionalidades-vermais'>Ver mais</button>
                </div>

            </div>

        </div>
    );
}

export default Funcionalidades;
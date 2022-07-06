import './Proximidades.css';
import proximidades_img from '../../../../images/home/proximidades-img.svg';

function Proximidades() {
    return(
        <div className='home-proximidades'>

            <div className='home-proximidades-img'>
                <img src={proximidades_img} alt='imagem proximidades' />
            </div>

            <div className='home-proximidades-conteudo'>
                <p className='home-proximidades-conteudo-titulo'>Proximidades</p>
                <p className='home-proximidades-conteudo-descri'>Utilizando a sua localização atual, mostraremos os microempreendedores mais próximos de você, em um raio de até 5 Km.</p>
            </div>

        </div>
    );
}

export default Proximidades;
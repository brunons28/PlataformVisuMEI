import './Objetivos.css';
import objetivo_img from '../../../../images/homeMEI/objetivo-img.svg';

function Objetivos() {
    return(
        <div className='homeMEI-objetivos'>

            <div className='homeMEI-objetivos-img'>
                <img src={objetivo_img} alt='homem segurando um troféu e uma maleta no topo' />
            </div>

            <div className='homeMEI-objetivos-textos'>
                <p className='homeMEI-objetivos-textos-titulo'>Alcance os seus objetivos</p>
                <p className='homeMEI-objetivos-textos-descri'>Agora você conseguirá alavancar seu negócio, tendo mais visibilidade ao seus produtos ou serviços e sem custos algum.</p>
            </div>

        </div>
    );
}

export default Objetivos;
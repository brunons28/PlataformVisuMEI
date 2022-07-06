import './Porque.css';
import celular from '../../../../images/homeMEI/celular.svg';
import escada from '../../../../images/homeMEI/escada.svg';
import seta from '../../../../images/homeMEI/seta-subindo.svg';

function Porque() {
    return(
        <div className='homeMEI-porque'>

            <div className='homeMEI-porque-img'>
                <img src={celular} alt='celular acessando a visuMEI' />
            </div>

            <div className='homeMEI-porque-conteudo'>

                <p className='homeMEI-porque-conteudo-titulo'>Por que a VisuMEI é a melhor?</p>
                <div className='homeMEI-porque-conteudo-parte1'>
                    <img src={escada} alt='escada representando uma subida ou alavancamento' />
                    <p>Aqui você, microempreendedor, terá uma alta divulgação do seu negócio, o que te tratá mais clientes.</p>
                </div>
                <div className='homeMEI-porque-conteudo-parte2'>
                    <p>Economizará seu tempo já que a nossa plataforma cuidará de sua visibilidade para melhorar o seu percentual de vendas.</p>
                    <img src={seta} alt='seta representando uma subida ou alavancamento' />
                </div>

            </div>

        </div>
    );
}

export default Porque;
import './Infos.css';
import infos_img from '../../../../Images/CNPJ/infos-img.svg';

function Infos() {
    return (
        <div className='cnpj-infos'>

            <div className='cnpj-infos-textos'>
                <p className='cnpj-infos-textos-titulo'>Tirar o CNPJ é rápido e gratuito!</p>
                <p className='cnpj-infos-textos-descri'>Dentro da legalidade, um MEI tem que ter um CNPJ, e por questões de segurança, aqui na VisuMEI é necessário CNPJ para se cadastrar.</p>
            </div>

            <div className='cnpj-infos-img'>
                <img src={infos_img} alt='homem com documentos em dia e fazendo sinal de positividade' />
            </div>

        </div>
    );
}

export default Infos;
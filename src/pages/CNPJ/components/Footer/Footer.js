import './Footer.css';
import facebook from '../../../../Images/CNPJ/facebook.svg';
import instagram from '../../../../Images/CNPJ/instagram.svg';
import linkedin from '../../../../Images/CNPJ/linkedin.svg';

function Footer() {
    return (
        <div className='cnpj-footer'>

            <div className='cnpj-footer-conteudo'>
                <div className='cnpj-footer-conteudo-redes'>
                    <img src={facebook} alt='facebook' />
                    <img src={instagram} alt='instagram' />
                    <img src={linkedin} alt='linkedin' />
                </div>

                <div className='cnpj-footer-conteudo-infos'>
                    <p>VisuMEI © 2022 &nbsp; | &nbsp; Política de Privacidade &nbsp; | &nbsp; Quem Somos</p>
                </div>
            </div>

        </div>
    );
}

export default Footer;
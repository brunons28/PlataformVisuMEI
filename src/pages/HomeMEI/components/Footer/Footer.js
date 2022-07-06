import './Footer.css';
import facebook from '../../../../images/homeMEI/facebook.svg';
import instagram from '../../../../images/homeMEI/instagram.svg';
import linkedin from '../../../../images/homeMEI/linkedin.svg';

function Footer() {
    return(
        <div className='homeMEI-footer'>

            <div className='homeMEI-footer-conteudo'>
                <div className='homeMEI-footer-conteudo-redes'>
                    <img src={facebook} alt='facebook' />
                    <img src={instagram} alt='instagram' />
                    <img src={linkedin} alt='linkedin' />
                </div>

                <div className='homeMEI-footer-conteudo-infos'>
                    <p>VisuMEI © 2022 &nbsp; | &nbsp; Política de Privacidade &nbsp; | &nbsp; Quem Somos</p>
                </div>
            </div>

        </div>
    );
}

export default Footer;
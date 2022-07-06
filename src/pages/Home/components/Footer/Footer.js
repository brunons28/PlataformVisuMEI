import './Footer.css';
import facebook from '../../../../images/home/facebook.svg';
import instagram from '../../../../images/home/instagram.svg';
import linkedin from '../../../../images/home/linkedin.svg';

function Footer() {
    return(
        <div className='home-footer'>

            <div className='home-footer-conteudo'>
                <div className='home-footer-conteudo-redes'>
                    <img src={facebook} alt='facebook' />
                    <img src={instagram} alt='instagram' />
                    <img src={linkedin} alt='linkedin' />
                </div>

                <div className='home-footer-conteudo-infos'>
                    <p>VisuMEI © 2022 &nbsp; | &nbsp; Política de Privacidade &nbsp; | &nbsp; Quem Somos</p>
                </div>
            </div>

        </div>
    );
}

export default Footer;
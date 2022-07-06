import './Header.css';
import logo from '../../../../images/homeMEI/logo.svg';
import img_header from '../../../../images/homeMEI/img-header.svg';

function Header(props) {

    const goTo = props.goTo; 

    return(
        <div className='homeMEI-header'>

            <div className='homeMEI-header-menu'>

                <div className='homeMEI-header-menu-logo'>
                    <img src={logo} alt='logo visumei' onClick={() => goTo('home')} />
                </div>

                <div className='homeMEI-header-menu-links'>
                    <nav className='homeMEI-header-menu-links-nav'>
                        <p className='header-links-normal' onClick={() => goTo('servicos')}>Serviços</p>
                        <p className='header-links-normal'>Produtos</p>
                        <p className='header-links-normal'>Como Funciona</p>
                        <p className='header-links-atual'>Para MEI</p>
                        <p className='header-links-login'>Log-in</p>
                    </nav>
                </div>

            </div>

            <div className='homeMEI-header-conteudo'>

                <div className='homeMEI-header-conteudo-img'>
                    <img src={img_header} alt='imagem header' />
                </div>

                <div className='homeMEI-header-conteudo-textos'>
                    <div className='homeMEI-header-conteudo-textos-cima'>
                        <p className='homeMEI-header-conteudo-textos-cima-titulo'>Baixa visibilidade?</p>
                        <p className='homeMEI-header-conteudo-textos-cima-descri'>Tenha aqui o reconhecimento que o seu negócio merece para alavancar suas vendas.</p>
                    </div>

                    <div className='homeMEI-header-conteudo-textos-baixo'>
                        <p className='homeMEI-header-conteudo-textos-baixo-txt1'>Estou em busca de um produto ou serviço</p>
                        <p className='homeMEI-header-conteudo-textos-baixo-txt2'>Quero divulgar meu produto ou serviço</p>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Header;
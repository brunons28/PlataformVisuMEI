import './Header.css';
import logo from '../../../../Images/homeMEI/logo.svg';
import img_header from '../../../../Images/homeMEI/img-header.svg';

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
                        <a className='header-links-normal' href='servicos'>Serviços</a>          
                        <a className='header-links-normal' href='produtos'>Produtos</a>          
                        <a className='header-links-normal' href='como-funciona'>Como Funciona</a>
                        <a className='header-links-atual' href='para-mei'>Para MEI</a>          
                        <a className='header-links-login' href='login'>Log-in</a>               
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
import './Header.css';

function Header() {
    return(
        <div className='homeMEI-header'>

            <div className='homeMEI-header-menu'>

                <div className='homeMEI-header-menu-logo'>
                    <img src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/dcd8cd37a6b00667c0118e6c14ca477b0693843f/homeMEI/logo.svg" alt='logo visumei' />
                </div>

                <div className='homeMEI-header-menu-links'>
                    <nav className='homeMEI-header-menu-links-nav'>
                        <p className='header-links-normal'>Serviços</p>
                        <p className='header-links-normal'>Produtos</p>
                        <p className='header-links-normal'>Como Funciona</p>
                        <p className='header-links-atual'>Para MEI</p>
                        <p className='header-links-login'>Log-in</p>
                    </nav>
                </div>

            </div>

            <div className='homeMEI-header-conteudo'>

                <div className='homeMEI-header-conteudo-img'>
                    <img src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/dcd8cd37a6b00667c0118e6c14ca477b0693843f/homeMEI/img-header.svg" alt='imagem header' />
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
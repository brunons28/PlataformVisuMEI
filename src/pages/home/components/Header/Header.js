import './Header.css';

function Header() {
    return(
        <div className='home-header'>

            <div className='home-header-topo'>

                <div className='home-header-topo-logo'>
                    <img src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/dcd8cd37a6b00667c0118e6c14ca477b0693843f/home/logo.svg" alt='logo visumei' />
                </div>

                <div className='home-header-topo-links'>
                    <nav className='home-header-topo-links-nav'>
                        <p className='header-links-normal'>Serviços</p>
                        <p className='header-links-normal'>Produtos</p>
                        <p className='header-links-normal'>Como Funciona</p>
                        <p className='header-links-normal' >Para MEI</p>
                        <p className='header-links-login'>Log-in</p>
                    </nav>
                </div>

            </div>

            <div className='home-header-conteudo'>

                <div className='home-header-conteudo-textos'>
                    <div className='home-header-conteudo-textos-cima'>
                        <p className='home-header-conteudo-textos-cima-titulo'>Aqui você encontra trabalhos de diversos microempreendedores e ainda consegue saber os que estão mais próximos.</p>
                    </div>
                    
                    <div className='home-header-conteudo-textos-baixo'>
                        <p className='home-header-conteudo-textos-baixo-txt1'>Preciso de um produto ou serviço</p>
                        <p className='home-header-conteudo-textos-baixo-txt2'>Quero anunciar meu produto ou serviço</p>
                    </div>
                </div>

                <div className='home-header-conteudo-img'>
                    <img src="https://raw.githubusercontent.com/EduardoOliveiraDev/ImagesVisuMEI/dcd8cd37a6b00667c0118e6c14ca477b0693843f/home/img-header.svg" alt='imagem header' />
                </div>

            </div>

        </div>
    );
}

export default Header;
import './Header.css';
import logo from '../../../../Images/CNPJ/logo.svg';

function Header(props) {

    const goTo = props.goTo;

    return (
        <div className='cnpj-header'>

            <div className='cnpj-header-logo'>
                <img
                    src="https://raw.githubusercontent.com/ImElevan/ImagesVisuMEI/efcb8bfdefc03d0fb5005edd5b15e47c196faecd/Header_ProdutosServi%C3%A7os/LogoVisu.svg"
                    alt='logo visumei' />
            </div>

            <div className='cnpj-header-links'>
                <nav className='cnpj-header-links-nav'>
                    <a className='cnpj-header-links-normal' href='servicos'>Serviços</a>
                    <a className='cnpj-header-links-normal' href='produtos'>Produtos</a>
                    <a className='cnpj-header-links-normal' href='como-funciona'>Como Funciona</a>
                    <a className='cnpj-header-links-normal' href='para-mei'>Para MEI</a>
                    <a className='cnpj-header-links-login'  href='login'>Log-in</a>
                </nav>
            </div>

        </div>
    );
}

export default Header;
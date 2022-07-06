import './Favoritos.css';
import favoritos_img from '../../../../Images/home/favoritos-img.svg';

function Favoritos() {
    return(
        <div className='home-favoritos'>

            <div className='home-favoritos-conteudo'>
                <p className='home-favoritos-conteudo-titulo'>Os seus favoritos!</p>
                <p className='home-favoritos-conteudo-descri'>Adicione a sua lista de favoritos, localizada no seu perfil, o produto ou serviço que gostar.</p>
                <button className='home-favoritos-conteudo-cadastre'>Cadastre-se</button>
            </div>

            <div className='home-favoritos-img'>
                <img src={favoritos_img} alt='imagem favoritos' />
            </div>

        </div>
    );
}

export default Favoritos;
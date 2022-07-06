import {useEffect, useState, useRef} from 'react';

import './Classificacoes.css';
import classificacoes_img from '../../../../Images/home/classificacoes-img.svg';
import seta from '../../../../Images/home/seta.png';

function Classificacoes() {
    
    const [data, setData] = useState([]);
    const carrossel = useRef(null);

    function handleLeft(event) {
        event.preventDefault();
        carrossel.current.scrollLeft -= carrossel.current.offsetWidth;
    }

    function handleRight(event) {
        event.preventDefault();
        carrossel.current.scrollLeft += carrossel.current.offsetWidth;
    }

    useEffect(() => {
        fetch('http://localhost:3000/static/home.json')
        .then((response) => response.json())
        .then(setData);
    }, []);

    if (!data || !data.length) return null;

    return(
        <div className='home-classificacoes'>

            <div className='home-classificacoes-conteudo'>
                <p className='home-classificacoes-conteudo-titulo'>Veja os microempreendedores com as melhores classificações</p>
                <div className='home-classificacoes-conteudo-carrossel'>

                    <div className='home-classificacoes-conteudo-carrossel-esquerda'>
                        <img onClick={handleLeft} src={seta} alt='seta para a esquerda' />
                    </div>

                    <div className='home-classificacoes-conteudo-carrossel-container' ref={carrossel}>

                        {data.map((item) => {
                            const {id, img, nome, emprego, classi, descri} = item;
                        
                        return (
                        <div className='home-classificacoes-conteudo-carrossel-container-estrutura' key={id}>

                            <div className='home-carrossel-estrutura-topo'>
                                <img src={img} alt='imagem do perfil' />
                                <div>
                                    <p className='home-carrossel-estrutura-topo-nome'>{nome}</p>
                                    <p className='home-carrossel-estrutura-topo-trabalho'>{emprego}</p>
                                </div>
                            </div>

                            <div className='home-carrossel-estrutura-baixo'>
                                <div className='home-carrossel-estrutura-baixo-classificacao'>
                                    <p>Classificação:</p>
                                    <img src={classi} alt='5 estrelas' />
                                </div>

                                <div className='home-carrossel-estrutura-baixo-descricao'>
                                    <p className='home-carrossel-estrutura-baixo-descricao-titulo'>Descrição:</p>
                                    <p className='home-carrossel-estrutura-baixo-descricao-mensagem'>{descri}</p>
                                </div>
                            </div>

                        </div>
                        );
                        })}
                    </div>

                    <div className='home-classificacoes-conteudo-carrossel-direita'>
                        <img onClick={handleRight} src={seta} alt='seta para a direita' />
                    </div>

                </div>
            </div>

            <div className='home-classificacoes-img'>
                <img src={classificacoes_img} alt='mulher utilizando o computador e no fundo uma abade classificações' />
            </div>

        </div>
    );
}

export default Classificacoes;
import React, { useState, useEffect, useRef } from 'react';
import './index.css';
import { useParams } from 'react-router-dom';
import Loading from '../Loading';
import Footer from '../Footer';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

function Feed() {
  const { id } = useParams();

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [jogoResponse, torneioResponse] = await Promise.all([
          fetch('https://web-production-8ce4.up.railway.app/api/jogo'),
          fetch('https://web-production-8ce4.up.railway.app/api/torneio'),
        ]);
        const [jogoData, torneioData] = await Promise.all([
          jogoResponse.json(),
          torneioResponse.json(),
        ]);
        setData({ jogo: jogoData.data, torneio: torneioData.data });
        setIsLoading(false);
      } catch (e) {
        setError(e);
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  const carousel = useRef(null);
  const [cooldown, setCooldown] = useState('');

  const handleLeftClick = (e) => {
    setCooldown('disabled');
    e.preventDefault();

    carousel.current.scrollLeft -= carousel.current.offsetWidth - 14;
    setTimeout(() => {
      setCooldown('');
    }, 550);
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    setCooldown('disabled');

    carousel.current.scrollLeft += carousel.current.offsetWidth - 14;
    setTimeout(() => {
      setCooldown('');
    }, 550);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Ocorreu um erro ao carregar os dados: {error.message}</div>;
  }

    if(id === undefined){
        return (
            <div className="divMainContainerD">
              <div className="paddingLeft divMainFeedContainer">
                {data.jogo.map((jogo) => (
                  <div className="divGamesonFeedContainer">
                    <h1 className="TitlePrediletos">
                      <img
                        className="logoImgFeedGlobal"
                        src={jogo.logo}
                        alt={jogo.nome}
                      />{' '}
                      {jogo.nome}
                    </h1>
                    <div className="torneioSetasMainContainer">
                    <div className="torneioContainer" ref={carousel}>
                  {data.torneio.map((findTorneio) => {
                    if (jogo.id === findTorneio.gameId) {
                      return (
                        <a
                          key={findTorneio.id}
                          href={`../t/${findTorneio.id}`}
                          className="Torneio"
                          style={{
                            backgroundImage: `url(${findTorneio.thumbnail})`,
                          }}
                        >
                          <h5 className="TorneioH1">{findTorneio.nome}</h5>
                        </a>
                      );
                    }
                  })}
                </div>
                <div className="containerTorneioSetas">
                  <button
                    className="buttonSeta"
                    onClick={handleLeftClick}
                    disabled={cooldown}
                  >
                    <AiOutlineArrowLeft />
                  </button>
                  <button
                    className="buttonSeta"
                    onClick={handleRightClick}
                    disabled={cooldown}
                  >
                    <AiOutlineArrowRight />
                  </button>
                </div>
              </div>
            </div>
          ))}
          <Footer />
        </div>
      </div>
    )
    }else{
        return (
            <div className="divMainContainerD">
                {/* <Loading/>
                <div className='pagewrap'>
                    <div className='containerThisGame paddingLeft'>
                        {
                            jogo.map( (findJogo) => {
                                if(parseInt(id) === parseInt(findJogo.id)){
                                    return <div className='divContainerThisGame'><h1><div className='gameDivLogo' style={{backgroundImage: `url(${findJogo.logo})`}}/>{findJogo.nome}</h1></div>

                                }      
                            })
                        } 
                    </div>
                    <div className='organizeList'>

                        <div className='containerSpecificGame paddingLeft'>
                            {
                                torneio.map( (findTorneio) => {
                                    if(parseInt(id) === parseInt(findTorneio.gameId)){
                                        return <div onClick={() => {window.location.href = `../t/${findTorneio.id}`}} key={findTorneio.id} style={{backgroundImage: `url(${findTorneio.thumbnail})`}} className='tourneamentHighlightedFeed bigTourneamentHiglightOne'>
            

                                        <label><img src={findTorneio.logo} alt='img'/>{findTorneio.nome}</label>
                                    </div>

                                    }      
                                })
                            }
                        </div>
                    </div>
                </div>
                <Footer/> */}
            </div>
        )
    }
}

export default Feed

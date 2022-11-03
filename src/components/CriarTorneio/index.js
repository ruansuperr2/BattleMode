import React from "react";
import './index.css'
import NavBar from '../Navbar'
import Footer from '../Footer'
import Select from 'react-select'

function CriarTorneio (){

    const chaves = [
        { value: 'classificatoria', label: 'Classificatoria' },
        { value: 'eliminatoria', label: 'Eliminatoria' },
        { value: 'grupo', label: 'Grupo' },
        { value: 'swiss', label: 'Swiss' }
      ]
    
    const jogos = [
        { value: 'valorant', label: 'Valorant' },
        { value: 'formula1', label: 'Formula 1' },
        { value: 'leagueoflegends', label: 'League of Legends' },
        { value: 'fifa22', label: 'Fifa 22' }
      ]
    
    
    return(
        <div className="DivCriarTorneio">
            {/* <NavBar page = 'usuario'/> */}

            <div className="divMainCriarTorneio paddingLeft">
                <div className="divSubCriarTorneio">
                    <div className="divDivisorCriarTorneio">

                        <div className="addthumb">
                            <div className="imgthumb">

                            </div>

                            <button className="funçaoThumb">Adicionar thumb</button>
                        </div>

                        <div className="addlogo">
                            <div className="imglogo">

                            </div>

                            <button className="funçaoLogo">Adicionar thumb</button>
                        </div>

                        <div className="addfundo">
                            <div className="imgfundo">

                            </div>

                            <button className="funçaologo">Adicionar thumb</button>
                        </div>

                    </div>

                    <div className="divInfoCriarTorneio">
                        <input placeholder="Digite o nome do seu torneio aqui..."></input>
                        <textarea placeholder="Digite as informações do seu torneio aqui..."></textarea>
                    </div>
                </div>

                <div className="divMoreinfoCriarTorneios">
                    <Select options={chaves} className="select" placeholder='Chaves' />
                    <Select options={jogos} className="select"  placeholder='Jogos'/>
                    <input className="totalJogadores" placeholder="Quantos jogadores vão jogar?"></input>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default CriarTorneio
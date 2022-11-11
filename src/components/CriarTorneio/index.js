import React from "react";
import './index.css'
import NavBar from '../Navbar'
import Footer from '../Footer'
import Select from 'react-select'
import { AiOutlineCheck, AiOutlinePlus } from 'react-icons/ai'

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
                                <label>Thumb</label>
                            </div>

                            <button className="funçaoThumb"><AiOutlinePlus style={{fontSize: '20px', color: '#fc6b03', backgroundColor: 'transparent'}}/></button>
                        </div>

                        <div className="addlogo">
                            <div className="imglogo">
                                <label>Logo</label>
                            </div>

                            <button className="funçaoLogo"><AiOutlinePlus style={{fontSize: '20px', color: '#fc6b03', backgroundColor: 'transparent'}}/></button>
                        </div>

                        <div className="addfundo">
                            <div className="imgfundo">
                                <label>Fundo</label>
                            </div>

                            <button className="funçaologo"><AiOutlinePlus style={{fontSize: '20px', color: '#fc6b03', backgroundColor: 'transparent'}}/></button>
                        </div>

                    </div>

                    <div className="divInfoCriarTorneio">
                        <h1>Adicione aqui as informações do seu torneio</h1>
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
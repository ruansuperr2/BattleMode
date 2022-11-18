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

            <div className="divMainCriarTorneio paddingLeft">
                <div className="divSubCriarTorneio">
                    <div className="divDivisorCriarTorneio">

                        <div className="addthumb">
                            <div className="imgthumb">
                                <label>Capa</label>
                            </div>

                            <button className="funçaoThumb addButtonTorneio"><AiOutlinePlus style={{fontSize: '20px', color: '#fc6b03', backgroundColor: 'transparent'}}/></button>
                        </div>

                        <div className="addlogo">
                            <div className="imglogo">
                                <label>Logo</label>
                            </div>

                            <button className="funçaoLogo addButtonTorneio"><AiOutlinePlus style={{fontSize: '20px', color: '#fc6b03', backgroundColor: 'transparent'}}/></button>
                        </div>

                        <div className="addfundo">
                            <div className="imgfundo">
                                <label>Fundo</label>
                            </div>

                            <button className="funçaologo addButtonTorneio"><AiOutlinePlus style={{fontSize: '20px', color: '#fc6b03', backgroundColor: 'transparent'}}/></button>
                        </div>

                    </div>

                    <div className="divInfoCriarTorneio">
                        <input className="torneioInput" placeholder="Nome seu do torneio..."></input>
                        <textarea className="textAreaTorneio" placeholder="Informações do seu torneio..."></textarea>
                    </div>
                </div>

                <div className="divMoreinfoCriarTorneios">
                    <Select options={chaves} className="select" placeholder='Chaves' />
                    <Select options={jogos} className="select"  placeholder='Jogos'/>
                    <input className="torneioInput2" type='number' placeholder="Quantidade de jogadores..."></input>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default CriarTorneio
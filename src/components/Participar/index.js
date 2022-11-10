import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import ModalCustom from '../Modal';
import { showModal, closeModal} from "../Modal";
import TorneioHeader from "./components/TorneioHeader";
import Chaves from "./components/Chaves";
import './index.css';

function Participar() {
    const [page, setPage] = useState('geral')

    const callModal = () => {
        setPage('torneio')
        showModal('spin', 'Deseja participar do Torneio?', 'Participar')
        // setTimeout(() => {
        //     closeModal('success', 'deu certo', 'Participar')
        // }, 2000);
    }

    useEffect(() => {
        switch(page){
            case 'geral':
                document.querySelector('.divCampoGeral').style.display = 'flex'
                document.querySelector('.divCampoEquipe').style.display = 'none'
                document.querySelector('.divCampoParticipar').style.display = 'none'

                document.querySelector('.geral').classList.add('perfilAtivo')
                document.querySelector('.equipe').classList.remove('perfilAtivo')
                document.querySelector('.torneio').classList.remove('perfilAtivo')
                break
            case 'equipe':
                document.querySelector('.divCampoGeral').style.display = 'none'
                document.querySelector('.divCampoEquipe').style.display = 'flex'
                document.querySelector('.divCampoParticipar').style.display = 'none'

                document.querySelector('.geral').classList.remove('perfilAtivo')
                document.querySelector('.equipe').classList.add('perfilAtivo')
                document.querySelector('.torneio').classList.remove('perfilAtivo')
                break
            case 'torneio':
                document.querySelector('.geral').classList.remove('perfilAtivo')
                document.querySelector('.equipe').classList.remove('perfilAtivo')
                break
        }
    })

    return (
        <div className='divParticiparMainContainer'>
            {/* <Navbar page={'usuario'} /> */}
            <ModalCustom/>
            <div className="divMainTorneio" />

            <div>
                <div className='perfilNavegacao'>
                    <div onClick={() => setPage('geral')} className='perfilConfiguracao geral'><div className='imgVisaoGearEditing gearEditing'/>Visão Geral</div>
                    <div onClick={() => setPage('equipe')} className='perfilConfiguracao equipe'><div className='imgEquipeGearEditing gearEditing'/>Equipes</div>
                    <div onClick={() => callModal()} className='perfilConfiguracao torneio'><div className='imgParticiparGearEditing gearEditing'/>Participar</div>
                    {/* <div onClick={() => setPage('config')} className='perfilConfig config'><div className='imgUsuarioGearEditing'/>Configurar Perfil</div> */}
                </div>
                <div className='divCampoGeral campos' >
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <TorneioHeader/>
                        <TorneioHeader/>
                    </div>
                    <div className="divDesc">
                        <p className="descricao">Esse texto é um ilustrativo da descrição de um torneio</p>
                    </div>
                </div>
                <div className='divCampoEquipe campos' >
                    <h1 className="TeamsOnProfile"><div className='divImgFundoMainContainer'/>2</h1>
                </div>
                <div className='divCampoParticipar campos' >
                    <h1 className="UserNameOnProfile"><div className='divImgFundoMainContainer'/>3</h1>
                
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Participar
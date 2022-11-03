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

                document.querySelector('.geral').classList.add('perfilActive')
                document.querySelector('.equipe').classList.remove('perfilActive')
                document.querySelector('.torneio').classList.remove('perfilActive')
                break
            case 'equipe':
                document.querySelector('.divCampoGeral').style.display = 'none'
                document.querySelector('.divCampoEquipe').style.display = 'flex'
                document.querySelector('.divCampoParticipar').style.display = 'none'

                document.querySelector('.geral').classList.remove('perfilActive')
                document.querySelector('.equipe').classList.add('perfilActive')
                document.querySelector('.torneio').classList.remove('perfilActive')
                break
            case 'torneio':
                document.querySelector('.divCampoGeral').style.display = 'none'
                document.querySelector('.divCampoEquipe').style.display = 'none'
                document.querySelector('.divCampoParticipar').style.display = 'flex'

                document.querySelector('.geral').classList.remove('perfilActive')
                document.querySelector('.equipe').classList.remove('perfilActive')
                document.querySelector('.torneio').classList.add('perfilActive')
                break
        }
    })

    return (
        <div className='divParticiparMainContainer'>
            {/* <Navbar page={'usuario'} /> */}
            <ModalCustom/>
            <div className="divMainTorneio" />

            <div>
                <div className='perfilNavigation'>
                    <div onClick={() => setPage('geral')} className='perfilConfig geral'><div className='imgVisaoGearEditing'/>Visão Geral</div>
                    <div onClick={() => setPage('equipe')} className='perfilConfig equipe'><div className='imgEquipeGearEditing'/>Equipes</div>
                    <div onClick={() => callModal()} className='perfilConfig torneio'><div className='imgParticiparGearEditing'/>Participar</div>
                    {/* <div onClick={() => setPage('config')} className='perfilConfig config'><div className='imgUsuarioGearEditing'/>Configurar Perfil</div> */}
                </div>
                <div className='divCampoGeral campos' >
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <TorneioHeader/>
                        <TorneioHeader/>
                    </div>
                    <div className="divDesc">
                        <p className="descricao">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
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
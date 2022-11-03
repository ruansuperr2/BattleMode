import React, { useState, useEffect } from 'react'
import './index.css'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { useParams } from 'react-router-dom';


function Times() {

    
    
    const callSubPage = (page) => {
        switch(page){
            case 'geral':
                document.querySelector('.divUsuarioSubMainContainerCompo').style.display = 'flex'
                document.querySelector('.divEquipesSubMainContainerCompo').style.display = 'none'
                document.querySelector('.divTorneiosSubMainContainerCompo').style.display = 'none'
                document.querySelector('.divConfigSubMainContainerCompo').style.display = 'none'

                document.querySelector('.geral').classList.add('perfilActive')
                document.querySelector('.equipe').classList.remove('perfilActive')
                document.querySelector('.torneio').classList.remove('perfilActive')
                document.querySelector('.config').classList.remove('perfilActive')
                break
            case 'equipe':
                document.querySelector('.divUsuarioSubMainContainerCompo').style.display = 'none'
                document.querySelector('.divEquipesSubMainContainerCompo').style.display = 'flex'
                document.querySelector('.divTorneiosSubMainContainerCompo').style.display = 'none'
                document.querySelector('.divConfigSubMainContainerCompo').style.display = 'none'

                document.querySelector('.geral').classList.remove('perfilActive')
                document.querySelector('.equipe').classList.add('perfilActive')
                document.querySelector('.torneio').classList.remove('perfilActive')
                document.querySelector('.config').classList.remove('perfilActive')
                break
            case 'torneio':
                document.querySelector('.divUsuarioSubMainContainerCompo').style.display = 'none'
                document.querySelector('.divEquipesSubMainContainerCompo').style.display = 'none'
                document.querySelector('.divTorneiosSubMainContainerCompo').style.display = 'flex'
                document.querySelector('.divConfigSubMainContainerCompo').style.display = 'none'

                document.querySelector('.geral').classList.remove('perfilActive')
                document.querySelector('.equipe').classList.remove('perfilActive')
                document.querySelector('.torneio').classList.add('perfilActive')
                document.querySelector('.config').classList.remove('perfilActive')
                break
            case 'config':
                document.querySelector('.divUsuarioSubMainContainerCompo').style.display = 'none'
                document.querySelector('.divEquipesSubMainContainerCompo').style.display = 'none'
                document.querySelector('.divTorneiosSubMainContainerCompo').style.display = 'none'
                document.querySelector('.divConfigSubMainContainerCompo').style.display = 'flex'

                document.querySelector('.geral').classList.remove('perfilActive')
                document.querySelector('.equipe').classList.remove('perfilActive')
                document.querySelector('.torneio').classList.remove('perfilActive')
                document.querySelector('.config').classList.add('perfilActive')
                break
        }
    }

    return(
        <div style={{background : '#121212'}}>
            {/* <Navbar></Navbar> */}
            <div className='DivMainContainerTimes'>
                <div className='DivSecondMainContainerTimes'>
                    <div className='DivInfoTimes'>
                        <div className='ImgDivInfo'></div>
                        <p>Nome do time</p>
                    </div>

                    <div className='DivGeraisTimes'>
                    
                    <div onClick={() => callSubPage('geral')} className='perfilConfig geral'><div className='imgUsuarioGearEditing'/>Visão Geral</div>
                        <div onClick={() => callSubPage('equipe')} className='perfilConfig1 equipe'><div className='imgUsuarioGearEditing'/>Equipes</div>
                        <div onClick={() => callSubPage('torneio')} className='perfilConfig2 torneio'><div className='imgUsuarioGearEditing'/>Torneios</div>
                        <div onClick={() => callSubPage('config')} className='perfilConfig3 config'><div className='imgUsuarioGearEditing'/>Configurar Perfil</div>


                    </div>
                        <div className='InfoVisaoGeral'>
                            <div className='divUsuarioSubMainContainerCompo' >
                                <h1 className="UserNameOnProfile"><div className='divImgFundoMainContainer' /></h1>
                            
                            </div>
                            <div className='divEquipesSubMainContainerCompo' >
                                <h1 className="UserNameOnProfile"><div className='divImgFundoMainContainer2'/></h1>
                            
                            </div>
                            <div className='divTorneiosSubMainContainerCompo' >
                                <h1 className="UserNameOnProfile"><div className='divImgFundoMainContainer2'/></h1>
                            
                            </div>
                            <div className='divConfigSubMainContainerCompo' >
                                <h1 className="UserNameOnProfile"><div className='divImgFundoMainContainer2'/></h1>
                            
                            </div>
                        </div>


                </div>
            </div>
             <Footer></Footer>
        </div>

    )
}

export default Times
import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import ModalCustom from '../Modal';
import { showModal, closeModal} from "../Modal";
import './index.css';
import { useParams } from 'react-router-dom'
import MDEditor from '@uiw/react-md-editor'

let callTeamFunction = 0
function Times() {
    const { id } = useParams();
    const [value, setValue] = useState('')
    const [page, setPage] = useState('geral')
    const [jogadores, setJogadores] = useState([])
    const [loggedUser, setLoggedUser] = useState({})
    
    const callModal = () => {
        setPage('torneio')
        showModal('spin', 'Deseja participar do Torneio?', 'Participar')
        // setTimeout(() => {
        //     closeModal('success', 'deu certo', 'Participar')
        // }, 2000);
    }
    const [time, setTime] = useState({})
    const callTime = async () => {
        try{
            const responseUser = await fetch('https://web-production-8ce4.up.railway.app/api/time/')
            const dataTime = responseUser.json()

            dataTime.then(
                (val) => {
                    setTime(val.data.find((time) => {return time.nome === id}))
                }
            )   
            setValue(time.descricao)
        }catch(error){
        }
    }

    const getUsers = async () => {
        try{
            const responseUser = await fetch('https://web-production-8ce4.up.railway.app/api/user/' + JSON.parse(localStorage.getItem('dasiBoard')))
            const dataUser = responseUser.json()

            dataUser.then(
                (val) => {
                    setLoggedUser(val.data)
                }
            )   
        }catch(error){
        }
    }

    if(callTeamFunction < 3){
        callTeamFunction++
        callTime()
        getUsers()
    }

    console.log(time)
    useEffect(() => {

    
        switch(page){
            case 'geral':
                // document.querySelector('.divUsuarioSubMainContainerCompo').style.display = 'flex'
                // document.querySelector('.divEquipesSubMainContainerCompo').style.display = 'none'
                // document.querySelector('.divTorneiosSubMainContainerCompo').style.display = 'none'
                // document.querySelector('.divConfigSubMainContainerCompo').style.display = 'none'

                document.querySelector('.geral').classList.add('perfilActive')
                document.querySelector('.equipe').classList.remove('perfilActive')
                document.querySelector('.config').classList.remove('perfilActive')
                break
            case 'equipe':
                // document.querySelector('.divUsuarioSubMainContainerCompo').style.display = 'none'
                // document.querySelector('.divEquipesSubMainContainerCompo').style.display = 'flex'
                // document.querySelector('.divTorneiosSubMainContainerCompo').style.display = 'none'
                // document.querySelector('.divConfigSubMainContainerCompo').style.display = 'none'

                document.querySelector('.geral').classList.remove('perfilActive')
                document.querySelector('.equipe').classList.add('perfilActive')
                document.querySelector('.config').classList.remove('perfilActive')
                break
            case 'torneio':
                // document.querySelector('.divUsuarioSubMainContainerCompo').style.display = 'none'
                // document.querySelector('.divEquipesSubMainContainerCompo').style.display = 'none'
                // document.querySelector('.divTorneiosSubMainContainerCompo').style.display = 'flex'
                // document.querySelector('.divConfigSubMainContainerCompo').style.display = 'none'

                document.querySelector('.geral').classList.remove('perfilActive')
                document.querySelector('.equipe').classList.remove('perfilActive')
                document.querySelector('.config').classList.remove('perfilActive')
                break
            case 'config':
                // document.querySelector('.divUsuarioSubMainContainerCompo').style.display = 'none'
                // document.querySelector('.divEquipesSubMainContainerCompo').style.display = 'none'
                // document.querySelector('.divTorneiosSubMainContainerCompo').style.display = 'none'
                // document.querySelector('.divConfigSubMainContainerCompo').style.display = 'flex'

                document.querySelector('.geral').classList.remove('perfilActive')
                document.querySelector('.equipe').classList.remove('perfilActive')
                document.querySelector('.config').classList.add('perfilActive')
                break
        }
    })



    return(
        <div className='divParticiparMainContainer'>
            {/* <Navbar page={'usuario'} /> */}
            <ModalCustom/>
            {/* <div className="divMainTorneio" /> */}

            <div className='divFundoMainContainer' style={{backgroundImage: `url(${time.imgFundo})`, backgroundSize: 'cover', backgroundPosition: 'center',}}>
                <div className='divContainerFundoMainContainer'/>
            </div>
            <div className='divUsuarioSubMainContainerD paddingLeft '>
                <div className='divUsuarioComplexContainer' >
                    <div className='divRightMainComplexoContainerCompo' style={{}} >
                        <div className='divRightUserInfoCompo'  style={{backgroundImage: `url(${time.imgFundo2}`, backgroundSize: 'cover',}}>
                            <div className='imgUserprofileIcon' style={{backgroundImage: `url(${time.logo})`}}></div>
                            <h2>{time.nome}</h2>
                            <h4>{time.tag}</h4>
                            
                        </div>
                        <div className='divRightSubMainContainerCompo' style={{}} >
              
                      
                                 {/* time.map( (t) => { */}
                                
                                     {/* for(let i = 0; i < 5;i++){ */}

                                        {/* // if(JSON.parse(t.equipeAtiva)[i] === loggedUser.id){ */}
                                        {/* // return  <div key={JSON.parse(t.equipeAtiva)[i]} className='divTeamsOnUserSubContainer' id={JSON.parse(t.equipeAtiva)[i]}> */}
                                                    {/* // <div className='divTeamsOnUserContainer'> */}
                                                        {/* <img className='divTeamsOnUserImg' src={time.logo}/> */}
                                                        {/* // <div> */}
                                                            {/* // <h5>{JSON.parse(t.equipeAtiva)[i]}</h5> */}
                                                        {/* // </div> */}
                                                    {/* // </div> */}
                                                {/* // </div> */}

                                    {/* // } */}
                                {/* // } */}
                            {/* // }) */}
             
                        </div>
                    </div>
                    <div className='divUsuarioSubMainContainerGeneral'  style={{}}>
                        <div className='perfilNavigation' style={{}}>
                            <div onClick={() => setPage('geral')} className='perfilConfig geral'><div className='imgUsuarioGearEditing visaoImg'/>Visão Geral</div>
                            <div onClick={() => setPage('equipe')} className='perfilConfig equipe'><div className='imgUsuarioGearEditing equipesImg'/>Jogadores</div>
                            <div onClick={() => setPage('config')} className='perfilConfig config'><div className='imgUsuarioGearEditing'/>Configurar Equipe</div>
                        </div>
                        <div className='divAllContainersUser' style={{}} >
                            <div className='divUsuarioSubMainContainerCompo'  style={{}} >
                                <div className='divContainerUsuarioContent' style={{}} >
                                    {/* <div className='divmdEditor' style={{}}>
                                        <MDEditor
                                            className='wrapper'
                                            style={{boxShadow: '0px 1px 0px 0px '}} 
                                            visibleDragbar={false}
                                            height={'52.4vh'}
                                            fullscreen={false}
                                            value={value}
                                            onChange={setValue}
                                            preview={'edit'}
                                            
                                        />
                                         <div className='editMarkdownButton exitMarkdown' onClick={() => callEditMarkdownEditor('exit')}><p>Editar</p></div>
                                    </div> */}
                                    <div className='divmdViewer' style={{}}>
                                        <MDEditor.Markdown className='markdownShower'  source={value} style={{ whiteSpace: 'pre-wrap'}} />
                                        {/* <div className='editMarkdownButton enterMarkdown' onClick={() => callEditMarkdownEditor('enter')} ><p>Editar</p></div> */}
                                    </div>
                                </div>
                                {/* <div className='divConquistaEfavoritos'>
                                    <div className='containerFavoriteListOfUser'>
                                        <h2>Jogos Favoritados</h2>
                                        <div className='favoriteListOfUser'>
                                            { jogo.map( (jogo) => {
                                                for(let i = 0; i < 5;i++){
                                                    if(jogo.id === favoritados[i+1]){
                                                        return  <div key={jogo.id} className='divJogosSubContainer' id={jogo.id}>
                                                                    <div className='divJogosContainer'style={{borderColor: viewingUser.corP}}>
                                                                        <img className='divJogosImg' src={jogo.imgFundo}/>
                                                                        <div>
                                                                            <h5>{jogo.nome}</h5>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                    }
                                                }
                                            }) }
                                        </div>
                                    </div>

                                    <div className='containerFavoriteListOfUser'>
                                        <h2>Conquistas</h2>
                                        { torneio.map( (torneio) => 
                                            <div key={torneio.id} className='divJogosSubContainer' id={torneio.id}>
                                                <div className='divJogosContainer' style={{borderColor: viewingUser.corP}}>
                                                    <img className='divJogosImg' src={torneio.thumbnail}/>
                                                    <div>
                                                        <h5>{torneio.nome}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        ) }
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div> 
                </div>
                        
                <Footer/>
        </div>
        // <div style={{background : '#121212'}}>
        //     {/* <Navbar></Navbar> */}
        //     <div className='DivMainContainerTimes'>
        //         <div className='DivSecondMainContainerTimes'>
        //             <div className='DivInfoTimes'>
        //                 <div className='ImgDivInfo'></div>
        //                 <p>Nome do time</p>
        //             </div>

        //             <div className='DivGeraisTimes'>
                    
        //             <div onClick={() => callSubPage('geral')} className='perfilConfig geral'><div className='imgUsuarioGearEditing'/>Visão Geral</div>
        //                 <div onClick={() => callSubPage('equipe')} className='perfilConfig1 equipe'><div className='imgUsuarioGearEditing'/>Equipes</div>
        //                 <div onClick={() => callSubPage('torneio')} className='perfilConfig2 torneio'><div className='imgUsuarioGearEditing'/>Torneios</div>
        //                 <div onClick={() => callSubPage('config')} className='perfilConfig3 config'><div className='imgUsuarioGearEditing'/>Configurar Perfil</div>


        //             </div>
        //                 <div className='InfoVisaoGeral'>
        //                     <div className='divUsuarioSubMainContainerCompo' >
        //                         <h1 className="UserNameOnProfile"><div className='divImgFundoMainContainer' /></h1>
                            
        //                     </div>
        //                     <div className='divEquipesSubMainContainerCompo' >
        //                         <h1 className="UserNameOnProfile"><div className='divImgFundoMainContainer2'/></h1>
                            
        //                     </div>
        //                     <div className='divTorneiosSubMainContainerCompo' >
        //                         <h1 className="UserNameOnProfile"><div className='divImgFundoMainContainer2'/></h1>
                            
        //                     </div>
        //                     <div className='divConfigSubMainContainerCompo' >
        //                         <h1 className="UserNameOnProfile"><div className='divImgFundoMainContainer2'/></h1>
                            
        //                     </div>
        //                 </div>


        //         </div>
        //     </div>
        //      <Footer></Footer>
        // </div>

    )
}

export default Times
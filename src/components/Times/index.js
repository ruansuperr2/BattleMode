import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import ModalCustom from '../Modal';
import { showModal, closeModal} from "../Modal";
import './index.css';
import { useParams } from 'react-router-dom'
import MDEditor from '@uiw/react-md-editor'
import Loading from '../Loading'
let callTeamFunction = 0
let deadOrAlive = false
function Times() {
    const { id } = useParams();
    const [page, setPage] = useState('geral')
    const [jogadores, setJogadores] = useState([])
    const [loggedUser, setLoggedUser] = useState({})
    const [users, setUsers] = useState([])
    const [time, setTime] = useState({})
    const [value, setValue] = useState(time.descricao)
    const [jogo, setJogo] = useState([])
    const callModal = () => {
        setPage('torneio')
        showModal('spin', 'Deseja participar do Torneio?', 'Participar')
        // setTimeout(() => {
            //     closeModal('success', 'deu certo', 'Participar')
            // }, 2000);
    }

    const callTime = async () => {
        try{
            const responseUser = await fetch('https://web-production-8ce4.up.railway.app/api/time/')
            const dataTime = responseUser.json()

            dataTime.then(
                (val) => {
                    setTime(val.data.find((time) => {return time.nome === id}))
                }
                )   
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

            const responseUser2 = await fetch('https://web-production-8ce4.up.railway.app/api/user/')
            const dataUser2 = responseUser2.json()

            dataUser2.then(
                (val) => {
                    setUsers(val.data)
                }
            )   
        }catch(error){
        }
    }

    const callGames = async() => {
        try{
            const response = await fetch('https://web-production-8ce4.up.railway.app/api/jogo')
            const data = response.json()
            data.then(
                (val) => {setJogo(val.data)})
        }catch(error){
            
        }
    }

    if(callTeamFunction < 3){
        callTeamFunction++
        callTime()
        getUsers()
        callGames()
    }

    console.log(time)
    useEffect(() => {

    
        switch(page){
            case 'geral':
                document.querySelector('.divUsuarioSubMainContainerCompo').style.display = 'flex'
                document.querySelector('.divEquipesSubMainContainerCompo').style.display = 'none'
                // document.querySelector('.divTorneiosSubMainContainerCompo').style.display = 'none'
                // document.querySelector('.divConfigSubMainContainerCompo').style.display = 'none'

                document.querySelector('.geral').classList.add('perfilActive')
                document.querySelector('.equipe').classList.remove('perfilActive')
                document.querySelector('.config').classList.remove('perfilActive')
                break
            case 'equipe':
                document.querySelector('.divUsuarioSubMainContainerCompo').style.display = 'none'
                document.querySelector('.divEquipesSubMainContainerCompo').style.display = 'flex'
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

    const makeEverythingWork = () => {
        setValue(time.descricao)
        deadOrAlive = true
    }  
    if(deadOrAlive === false){
        setTimeout(() => {
            makeEverythingWork()
        }, 1600);
    }

    return(
        <div className='divParticiparMainContainer'>
            {/* <Navbar page={'usuario'} /> */}
            <ModalCustom/>
            <Loading/>
            {/* <div className="divMainTorneio" /> */}

            <div className='divFundoMainContainer' style={{backgroundImage: `url(${time.imgFundo})`, backgroundSize: 'cover', backgroundPosition: 'center',}}>
                <div className='divContainerFundoMainContainer'/>
            </div>
            <div className='divUsuarioSubMainContainerD paddingLeft '>
                <div className='divUsuarioComplexContainer divEquipeComplexContainer' >
                    <div className='divRightMainComplexoContainerCompo' style={{}} >
                        <div className='divRightUserInfoCompo'  style={{backgroundImage: `url(${time.imgFundo2}`, backgroundSize: 'cover',}}>
                            <div className='imgUserprofileIcon' style={{backgroundImage: `url(${time.logo})`}}></div>
                            <h2>{time.nome}</h2>
                            <h4>{time.tag}</h4>
                            
                        </div>
                        <div>
                            <div className='divRightSubMainContainerCompo' >
                                <h2>Jogo Principal</h2>
                                {
                                    jogo.map((jogo) => {
                                        if(jogo.id === parseInt(time.jogoPrincipal)){
                                            return <label style={{textAlign: 'center', display: 'flex', alignItems: 'center'}}><img style={{marginRight: '10px'}} width={50} height={50} src={jogo.logo}/>{jogo.nome}</label>

                                        }
                                    })
                                }
                                
                                
                            </div>
                            <div className='divRightSubMainContainerCompo' >
                                <h3>Criado por:</h3>
                                {
                                    users.map((user) => {
                                        if(user.username === time.donoCriacao){
                                            return <div>
                                                        <label onClick={() => window.location.href = '/u/' + user.username} style={{textAlign: 'center', display: 'flex', alignItems: 'center', flexWrap: 'wrap-reverse'}}>
                                                            <label>{user.username}</label>
                                                            <img style={{marginRight: '10px', borderRadius: 50, border: '1px solid' + user.corP}} width={50} height={50} src={user.icon}/>
                                                        </label>
                                                        <label>
                                                            <label>Data de Criação: </label>
                                                            {time.dataCriacao}
                                                        </label>
                                                    </div>

                                        }
                                    })
                                }
                                
                                
                            </div>
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
                            <div className='divEquipesSubMainContainerCompo' >
                                <div className='divContainerTeamsOnUserTab' style={{width: '95%'}}>
                                    <div style={{width: '100%'}}>
                                        <h3>Equipe Ativa</h3>

                                        { 
                      
                                            users.map( (user) => {
                                                                    
                                                for(let i = 0; i < 5;i++){

                                                    if(JSON.parse(time.equipeAtiva)[i] === user.id){
                                                        return  <div key={user.id} className='divUsersOnTeamSubContainer' style={{borderColor: user.corP}} id={user.id}>
                                                                    <div onClick={() => {window.location.href = '/u/' + user.username}} className='divUserOnTeamContainer'>
                                                                        <img className='divUserOnTeamImg' src={user.icon} style={{borderColor: user.corP, boxShadow: `0px 0px 11px 0px ${user.corP}`}}/>
                                                                        <div>
                                                                            <h4>{user.username}</h4>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                    }
                                                }
                                            }
                                            ) 
                                        }
                                    </div>
                                    <div style={{width: '100%'}}>
                                        <h3>Equipe Reserva</h3>

                                        { 
                      
                                            users.map( (user) => {
                                                                    
                                                for(let i = 0; i < 5;i++){

                                                    if(JSON.parse(time.reserva)[i] === user.id){
                                                        return  <div key={user.id} className='divUsersOnTeamSubContainer' style={{borderColor: user.corP}} id={user.id}>
                                                                    <div onClick={() => {window.location.href = '/u/' + user.username}} className='divUserOnTeamContainer'>
                                                                        <img className='divUserOnTeamImg' src={user.icon} style={{borderColor: user.corP, boxShadow: `0px 0px 11px 0px ${user.corP}`}}/>
                                                                        <div>
                                                                            <h4>{user.username}</h4>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                    }
                                                }
                                            }
                                            ) 
                                        }
                                    </div>
                                    <div style={{width: '100%'}}>
                                        <h3>Equipe Técnica</h3>

                                        { 
                      
                                            users.map( (user) => {
                                                                    
                                                for(let i = 0; i < 5;i++){

                                                    if(JSON.parse(time.comissaoTecnica)[i] === user.id){
                                                        return  <div key={user.id} className='divUsersOnTeamSubContainer' style={{borderColor: user.corP}} id={user.id}>
                                                                    <div onClick={() => {window.location.href = '/u/' + user.username}} className='divUserOnTeamContainer'>
                                                                        <img className='divUserOnTeamImg' src={user.icon} style={{borderColor: user.corP, boxShadow: `0px 0px 11px 0px ${user.corP}`}}/>
                                                                        <div>
                                                                            <h4>{user.username}</h4>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                    }
                                                }
                                            }
                                            ) 
                                        }
                                    </div>
                                    <div className="SeparatorFromGround"></div>
                                </div>
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
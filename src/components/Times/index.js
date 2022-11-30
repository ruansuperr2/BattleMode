import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import ModalCustom from '../Modal';
import { showModal, closeModal} from "../Modal";
import './index.css';
import { useParams } from 'react-router-dom'
import MDEditor from '@uiw/react-md-editor'
import Loading from '../Loading'
import DoDisturbIcon from '@mui/icons-material/DoDisturb';

import $ from 'jquery'

import { storage } from '../FireBase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage"; 
let fed = false

let callTeamFunction = 0
let deadOrAlive = false

let respira
let detectPositionActive = -1
let detectPositionReserve = 0
let detectPositionCT = 0

function Times() {
    const { id } = useParams();
    const [page, setPage] = useState('geral')
    const [jogadores, setJogadores] = useState([])
    const [loggedUser, setLoggedUser] = useState({})
    const [users, setUsers] = useState([])
    const [time, setTime] = useState({})
    const [value, setValue] = useState(time.descricao)
    const [jogo, setJogo] = useState([])
    const [tag, setTag] = useState('')

    const [username, setUsername] = useState([])

    const [imgUrl, setImgUrl] = useState(null);
    const [imgUrl2, setImgUrl2] = useState(null);
    const [imgUrl3, setImgUrl3] = useState(null);
    const [progresspercent, setProgresspercent] = useState(0);
    const [progresspercent2, setProgresspercent2] = useState(0);
    const [progresspercent3, setProgresspercent3] = useState(0);

    const handleSubmit = (e) => {
      const file = e.target.files[0]
      if (!file) return;
      const storageRef = ref(storage, `PefilIcon/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
  
      uploadTask.on("state_changed",
        (snapshot) => {
          const progress =
            Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setProgresspercent(progress);
        },
        (error) => {
          alert(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImgUrl(downloadURL)
          })
        }
      )
    }
    
    const handleSubmitImgFundo = (e) => {
        const file = e.target.files[0]
        if (!file) return;
        const storageRef = ref(storage, `ImgFundo/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
    
        uploadTask.on("state_changed",
          (snapshot) => {
            const progress =
              Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setProgresspercent2(progress);
          },
          (error) => {
            alert(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setImgUrl2(downloadURL)
            })
          }
        )
      }

      const handleSubmitImgFundoDois = (e) => {
        const file = e.target.files[0]
        if (!file) return;
        const storageRef = ref(storage, `ImgFundoDois/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
    
        uploadTask.on("state_changed",
          (snapshot) => {
            const progress =
              Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setProgresspercent3(progress);
          },
          (error) => {
            alert(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setImgUrl3(downloadURL)
            })
          }
        )
      }


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

    const callMudançasPerfil = async(status) => {
        switch(status){
            case 'IG':
                showModal('loading','Atualizando o Banco','barLoading')
                    
                try{
                    const requestOptions = {
                        method: 'PUT',
                        headers: {'Content-type': 'application/json'},
                        body: JSON.stringify({
                            nome: username,
                            tag: tag,
                            logo: imgUrl,
                            imgFundo: time.imgFundo,
                            equipeAtiva: time.equipeAtiva,
                            reserva: time.reserva,
                            comissaoTecnica: time.comissaoTecnica,
                            jogoPrincipal: time.jogoPrincipal,
                            conquistas: time.conquistas,
                            descricao: time.descricao,
                            imgFundo2: time.imgFundo2,
                            dataCriacao: time.dataCriacao,
                            donoCriacao: time.donoCriacao,
                            capitao: time.capitao
                        })
                        
                    }
                    closeModal('success', 'atualizado!',null)
                    await fetch('https://web-production-8ce4.up.railway.app/api/time/' + time.id,  requestOptions)
                    window.location.href = '/e/' + username
                    }catch(e){
                    }
                break
                        case 'PP':
                            showModal('loading','Atualizando o Banco','barLoading')
                                
                            try{
                                const requestOptions = {
                                    method: 'PUT',
                                    headers: {'Content-type': 'application/json'},
                                    body: JSON.stringify({
                                        nome: time.nome,
                                        tag: time.tag,
                                        logo: time.logo,
                                        imgFundo: imgUrl2,
                                        equipeAtiva: time.equipeAtiva,
                                        reserva: time.reserva,
                                        comissaoTecnica: time.comissaoTecnica,
                                        jogoPrincipal: time.jogoPrincipal,
                                        conquistas: time.conquistas,
                                        descricao: time.descricao,
                                        imgFundo2: imgUrl3,
                                        dataCriacao: time.dataCriacao,
                                        donoCriacao: time.donoCriacao,
                                        capitao: time.capitao
                                    })
                                    
                                }
                                closeModal('success', 'atualizado!',null)
                                await fetch('https://web-production-8ce4.up.railway.app/api/time/' + time.id,  requestOptions)
                                window.location.href = '/e/' + time.nome
                                }catch(e){
                                    
                                }
                            break
        }
    }

    console.log(time)
    useEffect(() => {

    
        switch(page){
            case 'geral':
                document.querySelector('.divUsuarioSubMainContainerCompo').style.display = 'flex'
                document.querySelector('.divEquipesSubMainContainerCompo').style.display = 'none'
                // document.querySelector('.divTorneiosSubMainContainerCompo').style.display = 'none'
                document.querySelector('.divConfigSubMainContainerCompo').style.display = 'none'

                document.querySelector('.geral').classList.add('perfilActive')
                document.querySelector('.equipe').classList.remove('perfilActive')
                document.querySelector('.config').classList.remove('perfilActive')
                break
            case 'equipe':
                document.querySelector('.divUsuarioSubMainContainerCompo').style.display = 'none'
                document.querySelector('.divEquipesSubMainContainerCompo').style.display = 'flex'
                // document.querySelector('.divTorneiosSubMainContainerCompo').style.display = 'none'
                document.querySelector('.divConfigSubMainContainerCompo').style.display = 'none'

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
                document.querySelector('.divUsuarioSubMainContainerCompo').style.display = 'none'
                document.querySelector('.divEquipesSubMainContainerCompo').style.display = 'none'
                // document.querySelector('.divTorneiosSubMainContainerCompo').style.display = 'none'
                document.querySelector('.divConfigSubMainContainerCompo').style.display = 'flex'

                document.querySelector('.geral').classList.remove('perfilActive')
                document.querySelector('.equipe').classList.remove('perfilActive')
                document.querySelector('.config').classList.add('perfilActive')
                break
        }
    })

    const makeEverythingWork = () => {
        setValue(time.descricao)
        setImgUrl(time.logo)
        setImgUrl2(time.imgFundo)
        setImgUrl3(time.imgFundo2)
        console.log(loggedUser.username)
        if(fed === false){
            fed = true
            console.log(JSON.parse(time.equipeAtiva).length)
                if (JSON.parse(time.equipeAtiva).length < 5) {
                    $('.divAppendAP').append(
                        `
                            <div class='usersOnActive divUsersOnTeamSubContainer' style="borderColor: #fc6b03" id="selectById+user.id">
                                <div  class='divUserOnTeamContainer'>
                                    <img class='divUserOnTeamImg' src="url('https://raw.githubusercontent.com/MonoDryad/BattleMode/main/Source/userDefault.png')" style="borderColor: #fc6b03, boxShadow: '0px 0px 11px 0px #fc6b03'"/>
                                    <div style="cursor: 'pointer'">
                                        <h4>Adicionar Jogador</h4>
                                    </div>
                                </div>
                            </div>
                        `
                    )
                }
        }
        if(loggedUser.username === time.donoCriacao || loggedUser.username === time.capitao){
            document.querySelector('.config').style.display = 'flex'

            let list = document.querySelectorAll(`.doDisturbIcon`)

            for(let i = 0; i < 5; i++){
                list[i].style.display = 'block'
            }
        }else{
            document.querySelector('.config').style.display = 'none'
        
            let list = document.querySelectorAll(`.doDisturbIcon`)

            for(let i = 0; i < 5; i++){
                list[i].style.display = 'none'
            }
            
            
        }
        deadOrAlive = true
    }  
    if(deadOrAlive === false){
        setTimeout(() => {
            makeEverythingWork()
        }, 2400);
    }

    const deleteTCUser = async(user,pos) => {
        showModal('loading','Atualizando o Banco','barLoading')
        console.log('log', user)
        let timeA = JSON.parse(time.comissaoTecnica)


        let indexOf = JSON.parse(time.comissaoTecnica).indexOf(user)
        timeA.splice(indexOf,1)
        time.comissaoTecnica = timeA
        document.querySelector('#selectById3'+user).style.display = 'none'
        try{
            const requestOptions = {
                method: 'PUT',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({
                    nome: time.nome,
                    tag: time.tag,
                    logo: time.logo,
                    imgFundo: time.imgFundo,
                    equipeAtiva: time.equipeAtiva,
                    reserva: time.reserva,
                    comissaoTecnica: JSON.stringify(timeA),
                    jogoPrincipal: time.jogoPrincipal,
                    conquistas: time.conquistas,
                    descricao: time.descricao,
                    imgFundo2: time.imgFundo2,
                    dataCriacao: time.dataCriacao,
                    donoCriacao: time.donoCriacao,
                    capitao: time.capitao
                })
                
            }
            closeModal('success', 'atualizado!',null)
            await fetch(`https://web-production-8ce4.up.railway.app/api/time/${time.id}`,  requestOptions)
            // window.location.href = '/e/' + time.nome
            }catch(e){
                
            }
    }

    const deleteReserveUser = async(user,pos) => {
        showModal('loading','Atualizando o Banco','barLoading')
        console.log('log', user)
        let timeA = JSON.parse(time.reserva)


        let indexOf = JSON.parse(time.reserva).indexOf(user)
        timeA.splice(indexOf,1)
        time.reserva = timeA
        document.querySelector('#selectById2'+user).style.display = 'none'
        try{
            const requestOptions = {
                method: 'PUT',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({
                    nome: time.nome,
                    tag: time.tag,
                    logo: time.logo,
                    imgFundo: time.imgFundo,
                    equipeAtiva: time.equipeAtiva,
                    reserva: JSON.stringify(timeA),
                    comissaoTecnica: time.comissaoTecnica,
                    jogoPrincipal: time.jogoPrincipal,
                    conquistas: time.conquistas,
                    descricao: time.descricao,
                    imgFundo2: time.imgFundo2,
                    dataCriacao: time.dataCriacao,
                    donoCriacao: time.donoCriacao,
                    capitao: time.capitao
                })
                
            }
            closeModal('success', 'atualizado!',null)
            await fetch(`https://web-production-8ce4.up.railway.app/api/time/${time.id}`,  requestOptions)
            // window.location.href = '/e/' + time.nome
            }catch(e){
                
            }
    }

    const deleteActiveUser = async(user,pos) => {
        showModal('loading','Atualizando o Banco','barLoading')
        console.log('log', user)
        let timeA = JSON.parse(time.equipeAtiva)


        let indexOf = JSON.parse(time.equipeAtiva).indexOf(user)
        timeA.splice(indexOf,1)
        time.equipeAtiva = timeA
        document.querySelector('#selectById'+user).style.display = 'none'
        try{
            const requestOptions = {
                method: 'PUT',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({
                    nome: time.nome,
                    tag: time.tag,
                    logo: time.logo,
                    imgFundo: time.imgFundo,
                    equipeAtiva: JSON.stringify(timeA),
                    reserva: time.reserva,
                    comissaoTecnica: time.comissaoTecnica,
                    jogoPrincipal: time.jogoPrincipal,
                    conquistas: time.conquistas,
                    descricao: time.descricao,
                    imgFundo2: time.imgFundo2,
                    dataCriacao: time.dataCriacao,
                    donoCriacao: time.donoCriacao,
                    capitao: time.capitao
                })
                
            }
            closeModal('success', 'atualizado!',null)
            await fetch(`https://web-production-8ce4.up.railway.app/api/time/${time.id}`,  requestOptions)
            // window.location.href = '/e/' + time.nome
            }catch(e){
                
            }
    }

    return(
        <div className='divParticiparMainContainer'>
            <ModalCustom/>
            <Loading/>
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
                                                        <label className='criador' onClick={() => window.location.href = '/u/' + user.username} style={{textAlign: 'center', display: 'flex', alignItems: 'center', flexWrap: 'wrap-reverse'}}>
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
                                    </div>
                                </div>
                            </div>
                            <div className='divEquipesSubMainContainerCompo' >
                                <div className='divContainerTeamsOnUserTab' style={{width: '95%'}}>
                                    <div style={{width: '100%'}}>
                                        <h3>Equipe Ativa</h3>

                                        { 
                      
                                            users.map( (user) => {
                                                    if(JSON.parse(time.equipeAtiva).find((ac) => {return ac === user.id})){
                                                        return  <div key={user.id} className='usersOnActive divUsersOnTeamSubContainer' style={{borderColor: user.corP}} id={'selectById'+user.id}>
                                                                    <div  className='divUserOnTeamContainer'>
                                                                        <img className='divUserOnTeamImg' src={user.icon} style={{borderColor: user.corP, boxShadow: `0px 0px 11px 0px ${user.corP}`}}/>
                                                                        <div style={{cursor: 'pointer'}} onClick={() => {window.location.href = '/u/' + user.username}}>
                                                                            <h4>{user.username}</h4>
                                                                        </div>
                                                                        <DoDisturbIcon onClick={() => {deleteActiveUser(user.id)}} className='doDisturbIcon' id={user.id} sx={{fontSize: "4vh", color: "#fc6b03"}}/>
                                                                    </div>
                                                                </div>

                                                    }
                                                
                                                    
                                                }
                                            ) 
                                        }
                                        <div className='divAppendAP'></div>
                                    </div>
                                    <div style={{width: '100%'}}>
                                        <h3>Equipe Reserva</h3>

                                        { 
                      
                                            users.map( (user) => {
                                                                    
                                                for(let i = 0; i < 5;i++){

                                                    if(JSON.parse(time.reserva)[i] === user.id){
                                                        return  <div key={user.id} className='divUsersOnTeamSubContainer' style={{borderColor: user.corP}} id={'selectById2'+user.id}>
                                                                    <div className='divUserOnTeamContainer'>
                                                                        <img className='divUserOnTeamImg' src={user.icon} style={{borderColor: user.corP, boxShadow: `0px 0px 11px 0px ${user.corP}`}}/>
                                                                        <div onClick={() => {window.location.href = '/u/' + user.username}}>
                                                                            <h4>{user.username}</h4>
                                                                        </div>
                                                                        <DoDisturbIcon onClick={() => {deleteReserveUser(user.id)}} className='doDisturbIcon' id={user.id} sx={{fontSize: "4vh", color: "#fc6b03"}}/>

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
                                                        return  <div key={user.id} className='divUsersOnTeamSubContainer' style={{borderColor: user.corP}} id={'selectById3'+user.id}>
                                                                    <div className='divUserOnTeamContainer'>
                                                                        <img className='divUserOnTeamImg' src={user.icon} style={{borderColor: user.corP, boxShadow: `0px 0px 11px 0px ${user.corP}`}}/>
                                                                        <div onClick={() => {window.location.href = '/u/' + user.username}}>
                                                                            <h4>{user.username}</h4>
                                                                        </div>
                                                                        <DoDisturbIcon onClick={() => {deleteTCUser(user.id)}} className='doDisturbIcon' id={user.id} sx={{fontSize: "4vh", color: "#fc6b03"}}/>

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
                            <div className='divConfigSubMainContainerCompo' style={{borderColor: '#fc6b03'}}>        
                                <div className='divConfigSubMainContainer' style={{borderColor: '#fc6b03'}}>
                                    <div className='divConfigConfigsContainer' style={{borderColor: '#fc6b03'}}>
                                        <div className='divConfigConfigsSubContainer' style={{borderColor: '#fc6b03'}}>
                                            <h1>Configurar Perfil</h1>
                                            <h2>Informações Gerais</h2>

                                            <div className='divOmgConfigs'>
                                                <div className='divContainerConfigSub4' style={{borderColor: '#fc6b03'}}>
                                                    <label className='premiumConfigs' style={{borderColor: '#fc6b03'}}>Icone:
                                                        <div className='divContainerNewImage'>
                                                            <img className='gearSelectImage' src={require('./components/assets/selecionar100x100.png')}/>
                                                            {
                                                                !imgUrl &&
                                                                <div className='outerbar'>
                                                                <div className='innerbar' style={{ width: `${progresspercent}%` }}>{progresspercent}%</div>
                                                                </div>
                                                            }
                                                            {
                                                                imgUrl &&
                                                                
                                                                <img src={imgUrl} alt='uploaded file' className='imgUploaded' style={{borderColor: '#fc6b03'}} />
                                                            }
                                                            
                                                            <form className='form' >
                                                                <input style={{display: 'none'}} onChange={(event) => {handleSubmit(event); 
                                                                    }} className='inputTypeFile' type='file' accept=".png,.jpeg"/> 
                                                            </form>
                                                        </div>
                                                    </label>
                                                    <label>Nome da Equipe: <input value={username} onChange={(event) => setUsername(event.target.value)} placeholder={time.nome}/></label>
                                                    <label>Tag da Equipe: <input value={tag} onChange={(event) => setTag(event.target.value)} placeholder={time.tag}/></label>

                                                </div>

                                                <div className='divContainerConfigSub'>


                                                    
                                                </div>
                                            </div>
                            

                                        <div>
                                            <button onClick={() => callMudançasPerfil('IG')} id='buttonChangeSettingsAccount buttonChangeSettingsAccount1'>Confirmar Mudanças - Informações Gerais</button>
                                        </div>
                                        <div className='divConfigConfigsSubContainer premiumConfigs2'>
                                            <h3>Personalização</h3>
                                                <div className='divOmgConfigs'>  
                                                        <div className='divContainerConfigSub2'>
                                                            <label>Imagem atrás do nome: 
                                                                <div className='divContainerNewImage' style={{borderColor: '#fc6b03'}}>
                                                                    <img className='gearSelectImage2' src={require('./components/assets/selecionar450x250.png')}/>

                                                                    {
                                                                        !imgUrl3 &&
                                                                        <div className='outerbar'>
                                                                        <div className='innerbar' style={{ width: `${progresspercent3}%` }}>{progresspercent3}%</div>
                                                                        </div>
                                                                    }
                                                                    {
                                                                        imgUrl3 &&
                                                                        <img src={imgUrl3} alt='uploaded file' className='imgUploaded2'  style={{borderColor: '#fc6b03'}}/>
                                                                    }
                                                                    <form className='form'>
                                                                        <input style={{display: 'none'}} onChange={(event) => {handleSubmitImgFundoDois(event); 
                                                                        }} className='inputTypeFile' type='file' accept=".png,.jpeg"/> 
                                                                    </form>
                                                                </div>
                                                            </label>
                                                            <label>Imagem atrás da página: 
                                                                                                                            
                                                                <div className='divContainerNewImage' style={{borderColor: '#fc6b03'}}>
                                                                    <img className='gearSelectImage3' src={require('./components/assets/selecionar1600x250.png')}/>
                                                                    {
                                                                        !imgUrl2 &&
                                                                        <div className='outerbar'>
                                                                        <div className='innerbar' style={{ width: `${progresspercent2}%` }}>{progresspercent2}%</div>
                                                                        </div>
                                                                    }
                                                                    {
                                                                        imgUrl2 &&
                                                                        <img src={imgUrl2} alt='uploaded file' className='imgUploaded3'   style={{borderColor: '#fc6b03'}}/>
                                                                    }
                                                                    <form className='form' >
                                                                        <input style={{display: 'none'}} onChange={(event) => {handleSubmitImgFundo(event); 
                                                                            }} className='inputTypeFile' type='file' accept=".png,.jpeg, .jpg"/> 
                                                                    </form>
                                                                </div>
                                                            </label>
                                                        </div>
                                                </div>
                                            
                                        </div>
                                        <div id="premiumConfigs2">
                                            <button onClick={() => callMudançasPerfil('PP')} id='buttonChangeSettingsAccount buttonChangeSettingsAccount4 '>Confirmar Mudanças - Personalização</button>
                                        </div>
                                    </div>

                                </div>            
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
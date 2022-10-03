import React, { useState } from 'react'
import './index.css'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { useParams } from 'react-router-dom';

let oneResponseONLY = 0
function Usuario(){
    const { id } = useParams();
    console.log(id)

    const [loggedUser, setLoggedUser] = useState({}) 
    const [users, setUsers] = useState([])
    const getUsers = async () => {
        try{
          const response = await fetch('http://localhost:3000/api/user')
          const data = response.json()
          console.log(data)
          if(oneResponseONLY === 0){
            data.then(
                (val) => {
                  setUsers(val.data)
                  setLoggedUser(val.data.find((account) => {return account.username === id }))
                  document.querySelector('.divEquipesSubMainContainerCompo').style.display = 'none'
                  document.querySelector('.divTorneiosSubMainContainerCompo').style.display = 'none'
                  document.querySelector('.divConfigSubMainContainerCompo').style.display = 'none'
                  document.querySelector('.geral').classList.add('perfilActive')
                  oneResponseONLY = 1
                }
                  
            )
            
          }

          console.log(data, data.val)
        }catch(error){
          console.log(error)
        }
    }
    getUsers()
    
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
        
        <div className="divUsuarioDMainContainer">
            <Navbar page={'usuario'}/>

                <div className='divUsuarioSubMainContainer paddingLeft '>

                    <div className='divFundoMainContainer'>
                        <div className='divContainerFundoMainContainer'/>
                    </div>
                    <div className='perfilNavigation'>
                        <div onClick={() => callSubPage('geral')} className='perfilConfig geral'><div className='imgUsuarioGearEditing'/>Visão Geral</div>
                        <div onClick={() => callSubPage('equipe')} className='perfilConfig equipe'><div className='imgUsuarioGearEditing'/>Equipes</div>
                        <div onClick={() => callSubPage('torneio')} className='perfilConfig torneio'><div className='imgUsuarioGearEditing'/>Torneios</div>
                        <div onClick={() => callSubPage('config')} className='perfilConfig config'><div className='imgUsuarioGearEditing'/>Configurar Perfil</div>
                    </div>
                    <div className='divUsuarioSubMainContainerCompo' >
                        <h1 className="UserNameOnProfile"><div className='divImgFundoMainContainer' style={{backgroundImage: `url(${loggedUser.icon}`}}/>{loggedUser.username}</h1>
                    
                    </div>
                    <div className='divEquipesSubMainContainerCompo' >
                        <h1 className="UserNameOnProfile"><div className='divImgFundoMainContainer' style={{backgroundImage: `url(${loggedUser.icon})`}}/>{loggedUser.username}2</h1>
                    
                    </div>
                    <div className='divTorneiosSubMainContainerCompo' >
                        <h1 className="UserNameOnProfile"><div className='divImgFundoMainContainer' style={{backgroundImage: `url(${loggedUser.icon})`}}/>{loggedUser.username}3</h1>
                    
                    </div>
                    <div className='divConfigSubMainContainerCompo' >
                        <h1 className="UserNameOnProfile"><div className='divImgFundoMainContainer' style={{backgroundImage: `url(${loggedUser.icon})`}}/>{loggedUser.username}4</h1>
                    
                    </div>
                </div>

            <Footer/>
        </div>
    )
}


export default Usuario
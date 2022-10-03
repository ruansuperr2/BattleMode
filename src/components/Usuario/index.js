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
    
    console.log(loggedUser,'logged user')


    return(
        
        <div className="divUsuarioDMainContainer">
            <Navbar page={'usuario'}/>

                <div className='divUsuarioSubMainContainer paddingLeft '>

                    <div className='divFundoMainContainer'>
                        <div className='divContainerFundoMainContainer'/>
                    </div>
                        <div className='perfilConfigGear'><div className='imgUsuarioGearEditing'/>Configurar Perfil</div>
                    <div className='divUsuarioSubMainContainerCompo' >
                    <h1 className="UserNameOnProfile"><div className='divImgFundoMainContainer' style={{backgroundImage: `url(${loggedUser.icon})`}}/>{loggedUser.username}</h1>
                    
                    </div>
                </div>

            <Footer/>
        </div>
    )
}


export default Usuario
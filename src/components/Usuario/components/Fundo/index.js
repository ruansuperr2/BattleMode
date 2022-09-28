import React, { useState } from 'react'
import '../../index.css'

let oneResponseONLY = 0
let loggedUser = {}
const Fundo = (props) => {
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
                  let userContent = val.data.find((account) => {return account.id === parseInt(props.id) })
                  loggedUser = userContent
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
        <div className='divFundoMainContainer'>
          <div className='divContainerFundoMainContainer'>
            <div className='divImgFundoMainContainer' style={{backgroundImage: `url(${loggedUser.icon})`}}/>
            <h1>{loggedUser.username}<div className='divFundoImg'/></h1>
          </div>
        </div>
    )
}


export default Fundo
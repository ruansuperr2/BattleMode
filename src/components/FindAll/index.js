import React, { useState} from 'react'
import Footer from '../Footer'
import './index.css'

let getUsersTry = 0


export default function FindAll() {

    const [users, setUsers] = useState([])

    const getUsers = async () => {
        try{
            const responseUsers = await fetch('https://web-production-8ce4.up.railway.app/api/user/')
            const dataUsers = responseUsers.json()
            dataUsers.then(
                (val) => {
                    setUsers(val.data)
                }
            )   
        }catch(error){
            console.log(error)
        }
    }
    
    if(getUsersTry < 3){
        getUsersTry++
        getUsers()
    }


    return (
        <div className="divContainerFindAll">
            <div className='organizeList'>
                <div className='containerSpecificUser paddingLeft'>
                    {
                        users.map( (users) => {
                                return <div onClick={() => {window.location.href = `/u/${users.username}`}} key={users.id} style={{backgroundImage: `url(${users.imgFundo})`, borderColor: users.corP}} className='userHighlightedFeed bigTourneamentHiglightOne'>
                                <label><img src={users.icon} alt='img' style={{borderColor: users.corP}}/>{users.username}</label>
                            </div>
                        })
                    }
                </div>
            </div>
            <Footer/>
        </div>
    )
}
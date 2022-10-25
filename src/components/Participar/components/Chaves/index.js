import react from 'react'
import Navbar from '../../../Navbar'
import Footer from '../../../Footer'
import Swiss from './Components/Swiss'

import './index.css'

function Chaves(){
    return(
        <div className='divChaves'>
            <Navbar/>
                <div className='divSubChaves'>
                    <div className='divSubChavesDois'>
                        <h1>Gaia Cup</h1>
                        <Swiss/>
                    </div>
                </div>
        </div>
    )
}

export default Chaves
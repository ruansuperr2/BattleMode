import react from 'react'
import Navbar from '../../../Navbar'
import Footer from '../../../Footer'
import Eliminatoria from './Components/Eliminatoria'
import Classificatoria from './Components/Classificatoria'

import './index.css'

function Chaves(){
    return(
        <div className='divChaves'>
            <Navbar/>
                <div className='divSubChaves'>
                    <div className='divSubChavesDois'>
                        <h1>Gaia Cup</h1>
                            <Eliminatoria/>
                            {/* <Classificatoria/> */}
                    </div>

                    <div className='divDescriçãoChaves'>
                        <div className='JogoDescriçãoChaves'>
                            <img src={require("./assets/vava.jpg")}/>
                        </div>

                        <div className='JogoDescriçãoChaves2'>
                            <h1>Gaia Cup</h1>
                            <p>O texto informativo é um texto em que o escritor expõe brevemente um tema, fato ou circunstância ao leitor. expõe brevemente um tema, fato ou circunstância ao leitor.
                            expõe brevemente um tema, fato ou circunstância ao leitor.
                            expõe brevemente um tema, fato ou circunstância ao leitor.
                            </p>
                        </div>


                    </div>
                    
                </div>
            <Footer/>
        </div>
    )
}

export default Chaves
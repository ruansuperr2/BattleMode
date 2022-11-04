import react from 'react'
import './index.css';
import Navbar from '../Navbar'
import Footer from '../Footer'
import Integrante from './components/Integrante';
import { AiOutlineCheck, AiOutlinePlus } from 'react-icons/ai'

function CriarEquipe() {
    
    return (
        <div className='mainContainerCriarEquipe'>
            <div className='divCriarEquipe paddingLeft'>

                <div className='subDivCriarEquipe'>
                    <div className='divDemoCriarEquipe'>
                        <div className='divFlex'>
                            <div className='divImgThumb divImgDemo'>
                                <label className='labelImgCriarEquipe'>Thumb</label>
                            </div>
                            <button className='addThumb addButtonCriarEquipe'><AiOutlinePlus style={{fontSize: '20px', color: '#fc6b03', backgroundColor: 'transparent'}}/></button>
                        </div>

                        <div className='divFlexLogo'>
                            <div className='divImgLogo divImgDemo'>
                                <label className='labelImgCriarEquipeLogo'>Logo</label>
                            </div>
                            <button className='addLogo addButtonCriarEquipe'><AiOutlinePlus style={{fontSize: '20px', color: '#fc6b03', backgroundColor: 'transparent'}}/></button>
                        </div>

                        <div className='divFlex'>
                            <div className='divImgFundo divImgDemo'>
                                <label className='labelImgCriarEquipe'>Fundo</label>
                            </div>
                            <button className='addFundo addButtonCriarEquipe'><AiOutlinePlus style={{fontSize: '20px', color: '#fc6b03', backgroundColor: 'transparent'}}/></button>
                        </div>
                    </div>

                    <div className='infoContainer'>
                        <div className='divDescCriarEquipe'>
                            <input className='inputProcurarJogador' placeholder='Nome da equipe...'/>
                            <textarea className='textareaEquipeDescricao' placeholder='Descrição da equipe...'/>
                            <button className='buttonConfirmarCriarEquipe'>Confirmar <AiOutlineCheck style={{fontSize: '25px', marginLeft: '.5rem', color: '#fc6b03', backgroundColor: 'transparent'}}/></button>
                        </div>

                        <div className='divInfoCriarEquipe'>
                            <Integrante/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default CriarEquipe
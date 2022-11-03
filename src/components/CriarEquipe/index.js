import react from 'react'
import './index.css';
import Integrante from './components/Integrante'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { AiOutlinePlus } from 'react-icons/ai'

function CriarEquipe() {
    
    return (
        <div className='mainContainerCriarEquipe'>
            {/* <Navbar page='usuario'/> */}
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

                    <div className='divInfoCriarEquipe'>
                        <div className='inputButtonFlex'>
                            <input className='inputProcurarJogador' placeholder='Adicionar jogador...'/>
                            <button className='addJogador addButtonCriarEquipe'><AiOutlinePlus style={{fontSize: '20px', color: '#fc6b03', backgroundColor: 'transparent'}}/></button>
                        </div>
                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    )
}
export default CriarEquipe
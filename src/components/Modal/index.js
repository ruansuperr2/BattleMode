import './index.css'
import React, {useState} from 'react';
import { IoIosClose } from 'react-icons/io';
import { display, fontSize } from '@mui/system';
import { alignProperty } from '@mui/material/styles/cssUtils';

export const closeModal = (titulo, corpo, funcao) => {
    // Adição dos Textos inseridos pelos props.
    document.querySelector('.modalTitulo').textContent = titulo
    document.querySelector('.modalCorpo').textContent = corpo


    // Adicionar icones no titulo
    if(titulo === 'spin'){
        document.querySelector('.modalTitulo').classList.remove('spin-gif')
    }else if(titulo === 'erro'){
        document.querySelector('.modalTitulo').textContent = ''
        document.querySelector('.modalTitulo').classList.add('erro-png')
        console.log('barloading')

    }else if(titulo === 'success'){
        document.querySelector('.modalTitulo').textContent = ''
        document.querySelector('.modalTitulo').classList.add('check-png')
    }
    

    // Verificar se o Modal terá função OU não.
    if(funcao === false || funcao === null || funcao === 'barLoading'){

        document.querySelector('.modalButton').style.display = 'none'
    }else{
        document.querySelector('.modalButton').style.display = 'block'
        document.querySelector('.modalButton').textContent = funcao
    }

    // Animação da barra de fechamento
    if(funcao === 'barLoading'){
        document.querySelector('.barProgressionClosingI').classList.add('Anwidth')
        
    }

    // Finalização
    setTimeout(() => {
        document.querySelector('.divModalContainer').classList.add('opacityReverse')
        setTimeout(() => {
            document.querySelector('.divModalContainer').style.display = 'none'
            document.querySelector('.divModalContainer').classList.remove('opacityReverse')
            document.querySelector('.barProgressionClosingI').classList.remove('Anwidth')
        },460)
    },1000)
}

const fecharImm = () => {
    document.querySelector('.divModalContainer').classList.add('opacityReverse')
        setTimeout(() => {
            document.querySelector('.divModalContainer').style.display = 'none'
            document.querySelector('.divModalContainer').classList.remove('opacityReverse')
            document.querySelector('.barProgressionClosingI').classList.remove('Anwidth')
        },460)
}

let getUsersTry = 0

export const showModal = (titulo, corpo, funcao) => {


    // Adição dos Textos inseridos pelos props.
    document.querySelector('.modalTitulo').textContent = titulo
    document.querySelector('.modalCorpo').textContent = corpo


    // Adicionar icones no titulo
    if(titulo === 'spin'){
        document.querySelector('.modalTitulo').classList.remove('erro-png')
        document.querySelector('.modalTitulo').classList.remove('check-png')
        document.querySelector('.modalTitulo').textContent = ''
        document.querySelector('.modalTitulo').classList.add('spin-gif')
    }else if(titulo === 'erro'){
        document.querySelector('.modalTitulo').textContent = ''
        document.querySelector('.modalTitulo').classList.remove('spin-gif')
        document.querySelector('.modalTitulo').classList.remove('check-png')
        document.querySelector('.modalTitulo').classList.add('erro-png')
    }else if(titulo === 'success'){
        document.querySelector('.modalTitulo').textContent = ''
        document.querySelector('.modalTitulo').classList.remove('check-png')
        document.querySelector('.modalTitulo').classList.remove('erro-png')
        document.querySelector('.modalTitulo').classList.add('check-png')
    }


    // Verificar se o Modal terá função OU não.
    if(funcao === false || funcao === null || funcao === 'barLoading'){
        document.querySelector('.modalButton').style.display = 'none'
    }else{
        document.querySelector('.modalButton').style.display = 'block'
        document.querySelector('.modalButton').textContent = funcao
    }

    if(funcao === 'barLoading'){
        document.querySelector('.barProgressionClosingI').classList.add('Anwidth')

        // Finalização com a Barra de Loading
        setTimeout(() => {
            document.querySelector('.divModalContainer').classList.add('opacityReverse')
            setTimeout(() => {
                document.querySelector('.divModalContainer').style.display = 'none'
                document.querySelector('.divModalContainer').classList.remove('opacityReverse')
                document.querySelector('.barProgressionClosingI').classList.remove('Anwidth')
            },460)
        },1000)
    }
    

    // Animação de aparição
    document.querySelector('.divModalContainer').style.display = 'flex'
    document.querySelector('.divModalContainer').classList.add('opacity')
    setTimeout(() => {
        document.querySelector('.divModalContainer').classList.remove('opacity')
    },500)
}

function ModalCustom(props){

    return(
        <div className="divModalContainer" style={{borderColor: props.cor}}>
            <div className="divModalContent" style={{borderColor: props.cor}}>
                <div className='divCloseButton' style={{borderColor: props.cor + ' !important'}}>
                    <button className='closeButton' onClick={fecharImm} style={{borderColor: props.cor}}>
                        <IoIosClose style={{
                            color: props.cor, 
                            fontSize: '50px', 
                            display: 'flex',
                            alignSelf: 'flex-end',
                            float: 'right'
                            }}/>
                    </button>
                </div>
                <label className='modalTitulo' style={{borderColor: props.cor }}/>
                <h5 className='modalCorpo' style={{borderColor: props.cor }}></h5>
                <div style={{borderColor: props.cor}}>
                    <button className='modalButton' onClick={() => closeModal('success', 'Você está participando do torneio', null)}></button>
                </div>
                <div className='barProgressionClosing'>
                    <div className='barProgressionClosingI' style={{backgroundColor: props.cor }}/>
                </div>
            </div>
        </div>
    )
}


export default ModalCustom
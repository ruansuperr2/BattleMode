import react, { useState } from 'react'
import './index.css'
let titulos, corpos, funcaos

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

        // Animação da barra de fechamento
        let timing = 0
        for(let i = 0;timing > 99;i++){
            if(i == 32){
                timing++
                console.log(timing)
                document.querySelector('.barProgressionClosing div').style.width = `${timing}%` 
                console.log(document.querySelector('.barProgressionClosing div').style.width)
            }
        }

    }

    // Verificar se o Modal terá função OU não.
    if(funcao === false || funcao === null){

        document.querySelector('.modalButton').style.display = 'none'
    }else{
        document.querySelector('.modalButton').style.display = 'block'
        document.querySelector('.modalButton').textContent = funcao
    }







    // Animação
    document.querySelector('.divModalContainer').style.display = 'flex'
    setTimeout(() => {
        document.querySelector('.divModalContainer').classList.add('opacityReverse')
        setTimeout(() => {
            document.querySelector('.divModalContainer').style.display = 'none'
            document.querySelector('.divModalContainer').classList.remove('opacityReverse')
        },250)
        
    },2000)    
}

export const showModal = (titulo, corpo, funcao) => {
    // Adição dos Textos inseridos pelos props.
    document.querySelector('.modalTitulo').textContent = titulo
    document.querySelector('.modalCorpo').textContent = corpo



    // Adicionar icones no titulo
    if(titulo === 'spin'){
        document.querySelector('.modalTitulo').textContent = ''
        document.querySelector('.modalTitulo').classList.remove('erro-png')
        document.querySelector('.modalTitulo').classList.add('spin-gif')
    }


    // Verificar se o Modal terá função OU não.
    if(funcao === false || funcao === null){

        document.querySelector('.modalButton').style.display = 'none'
    }else{
        document.querySelector('.modalButton').style.display = 'block'
        document.querySelector('.modalButton').textContent = funcao
    }
    

    // Animação
    document.querySelector('.divModalContainer').style.display = 'flex'
    document.querySelector('.divModalContainer').classList.add('opacity')
    setTimeout(() => {
        document.querySelector('.divModalContainer').classList.remove('opacity')
    },200)
}

function ModalCustom(props){

    return(
        <div className="divModalContainer">
            <div className="divModalContent">
                <label className='modalTitulo'/>
                <h5 className='modalCorpo'></h5>
                <div>
                    <h5 className='modalButton'></h5>
                </div>
                <div className='barProgressionClosing'>
                    <div/>
                </div>
            </div>
        </div>
    )
}


export default ModalCustom
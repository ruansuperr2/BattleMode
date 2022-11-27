import React, {useEffect, useState, version} from 'react'
import './index.css'
import text from '../../version.json'

let isLoading = false
let barValue = 0
let textValue = 'Olá'
function Loading(prop) {


    


    function func(){
        window.scrollTo(0,0)
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            window.scrollTo(0,0)
            barValue = 12
            textValue = 'Pensando'
        }, 400)
        setTimeout(() => {
            window.scrollTo(0,0)
            barValue = 35
            textValue = 'Fazendo a lógica'
            
        }, 1500)
        setTimeout(() => {
            window.scrollTo(0,0)
            barValue = 66
            textValue = 'Esperando resposta do servidor'
        }, 2600)
        setTimeout(() => {
            barValue = 100
            textValue = 'Resposta recebida, finalizando'
        }, 4000);
        setTimeout(() => {
            
            document.querySelector('.loadingMainDiv').classList.add('desaparecer')
            window.scrollTo(0,0)
            // document.body.style.overflow = 'visible';
            
            // document.querySelector('.loadingMainDiv').classList.remove('desaparecer')
            // document.querySelector('.loadingMainDiv').style.display = 'none'
        
        },4800)
        setTimeout(() => {
            barValue = 101
            window.scrollTo(0,0)
            document.body.style.overflow = 'visible';
            
            document.querySelector('.loadingMainDiv').classList.remove('desaparecer')
            document.querySelector('.loadingMainDiv').style.display = 'none'
        
        },5000)
    }

    
    if(isLoading === false){
        isLoading = true
        func()
    }
    useEffect(() => {
        if(barValue === 101){
            document.querySelector('.loadingMainDiv').style.display = 'none'
        }
    })
    return (
        <div className='paddingLeft loadingMainDiv'>
            <div className='LoadingPageMainContainer'>
                <img src={require('./logo.png')}></img>
                <label>{textValue}</label>
                <div className='barLoadingFull'>
                    <div className='barInsideGenerating' style={{backgroundColor: prop.cor, width: `${barValue}%`}}></div>
                </div>
                <label>{text.version}</label>
                <p>Erros podem & irão ocorrer</p>
            </div>
        </div>
        )
}

export default Loading
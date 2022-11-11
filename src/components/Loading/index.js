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
            barValue = 12
            textValue = 'Pensando'
            setTimeout(() => {
                barValue = 75
                textValue = 'Fazendo a lógica'
                
                setTimeout(() => {
                    barValue = 87
                    textValue = 'Pensando'
                    setTimeout(() => {
                        document.querySelector('.loadingMainDiv').classList.add('desaparecer')
                        barValue = 100
                        textValue = 'Até a próxima, amigo'
                    }, 200);
                    setTimeout(() => {
                        document.body.style.overflow = 'visible';
                        
                        document.querySelector('.loadingMainDiv').classList.remove('desaparecer')
                        document.querySelector('.loadingMainDiv').style.display = 'none'
                    
                    },700)
                }, 1000)
            }, 600)
        }, 400)
    }

    
    useEffect(() => {
        console.log(barValue)
        if(isLoading === false){
            isLoading = true
            func()
        }
        if(barValue === 100){
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
            </div>
        </div>
        )
}

export default Loading
import React, { useState, useEffect } from "react";
import "./index.css";
import text from "../../version.json";

function Loading(props) {
    const [barValue, setBarValue] = useState(0);
    const [textValue, setTextValue] = useState("Olá");
    const [isLoading, setIsLoading] = useState(false);

    function func() {
        window.scrollTo(0, 0);
        document.body.style.overflow = "hidden";
        setTimeout(() => {
            window.scrollTo(0, 0);
            setBarValue(12);
            setTextValue("Pensando");
        }, 400);
        setTimeout(() => {
            window.scrollTo(0, 0);
            setBarValue(35);
            setTextValue("Fazendo a lógica");
        }, 1500);
        setTimeout(() => {
            window.scrollTo(0, 0);
            setBarValue(66);
            setTextValue("Esperando resposta do servidor");
        }, 2600);
        setTimeout(() => {
            setBarValue(100);
            setTextValue("Resposta recebida, finalizando");
        }, 4000);
        setTimeout(() => {
            document.querySelector(".loadingMainDiv").classList.add("desaparecer");
            window.scrollTo(0, 0);
        }, 4800);
        setTimeout(() => {
            setBarValue(101);
            window.scrollTo(0, 0);
            document.body.style.overflow = "visible";
            document
                .querySelector(".loadingMainDiv")
                .classList.remove("desaparecer");
            document.querySelector(".loadingMainDiv").style.display = "none";
        }, 5000);
    }

    useEffect(() => {
        if (!isLoading) {
            setIsLoading(true);
            func();
        }
    });

    useEffect(() => {
        if (barValue === 101) {
            document.querySelector(".loadingMainDiv").style.display = "none";
        }
    });

    return (
        <div className="paddingLeft loadingMainDiv">
            <div className="LoadingPageMainContainer">
                <img src={require("./logo.png")}></img>
                <label>{textValue}</label>
                <div className="barLoadingFull">
                    <div
                        className="barInsideGenerating"
                        style={{ backgroundColor: props.cor, width: `${barValue}%` }}></div>
                </div>
                <label>{text.version}</label>
                <p>Erros podem & irão ocorrer</p>
            </div>
        </div >
);
}

export default Loading;
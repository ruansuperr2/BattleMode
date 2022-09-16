import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import TorneioHeader from "./components/TorneioHeader";
import './index.css';

function Participar() {
    return (
        <div className='divParticiparMainContainer'>
            <Navbar/>
                <div className="divMainTorneio">
                    <div className="divHeader">
                        <TorneioHeader/>
                    </div>
                    <div className="divTorneioDesc">
                        <div className="divButtonParticipar">
                            <button className="buttonParticipar">Participar</button>
                        </div>
                        <div className="divDesc">
                            <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                        </div>
                    </div>
                    <Footer/>
                </div>
        </div>
    )
}

export default Participar
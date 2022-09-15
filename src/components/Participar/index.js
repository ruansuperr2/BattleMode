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
                    <TorneioHeader/>
                    <div className="divTorneioDesc">
                        <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                        <button>

                        </button>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}

export default Participar
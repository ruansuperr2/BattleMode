import React, { useState, useEffect } from 'react';
import Footer from '../Footer';
import './index.css';
import ModalCustom, { showModal, closeModal } from '../Modal';

const gamesAdded = [];
let getGamesTry = 0;
function Jogos() {    
    const DEFAULT_COLOR = '#fc6b03'

    const [loggedUser, setLoggedUser] = useState({});
    const [jogo, setJogo] = useState([]);

    // Chamada à API para obter informações do usuário logado
    useEffect(() => {
        // Chamada à API para obter a lista de jogos
        const callGames = async () => {
            try {
                const response = await fetch(
                    'https://web-production-8ce4.up.railway.app/api/jogo',
                );
                const data = response.json();
                data.then(val => {
                    setJogo(val.data);
                });
            } catch (error) { }
        };
        const getUsers = async () => {
            if (JSON.parse(localStorage.getItem('dasiBoard') !== null)) {
                const responseUser = await fetch(
                    'https://web-production-8ce4.up.railway.app/api/user/' +
                    JSON.parse(localStorage.getItem('dasiBoard')),
                );
                const dataUser = responseUser.json();
                dataUser.then(val => {
                    setLoggedUser(val.data);
                });
            }
        }
        getUsers()
        callGames()
    }, [jogo]);



    return (
        <div>
            <ModalCustom></ModalCustom>
            <div className="paddingLeft divMainJogos">
                <h3 className="titleGames">Biblíoteca de jogos</h3>
                <div className="divJogosMainContainer">
                    {jogo.map((jogo) =>
                        <div key={jogo.id} className='divJogosSubContainer'  id={jogo.id}>
                            <div className='divJogosContainer' style={{borderColor: loggedUser ? loggedUser.corP : DEFAULT_COLOR}}>
                                <img className='divJogosImg' src={jogo.imgFundo} />
                                <div className='nomeDescricao'>
                                    {/* <div className="addButton" id={'add' + jogo.id} onClick={(e) => callAddNewGame(jogo.id)}/> */}
                                    <h5>{jogo.nome}</h5>
                                    <p>{jogo.descricaoLonga}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Jogos
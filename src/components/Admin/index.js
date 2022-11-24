import React, {useState} from 'react'
import './index.css'
import ModalCustom ,{ showModal, closeModal } from '../Modal';
import { storage } from '../FireBase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

function Admin () {
    const [access, setAccess] = useState(null)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [descricaoLonga, setDescricaoLonga] = useState('')


    const entrar = async() => {
        console.log(process.env.REACT_APP_ADMINACCESSU, process.env.REACT_APP_ADMINACCESSP)
        showModal('spin','Aguarde',false)
        if(username === process.env.REACT_APP_ADMINACCESSU){
            if(password === process.env.REACT_APP_ADMINACCESSP){
                    closeModal('success','Credenciais corretas, tenha uma boa administração.','barLoading')
                    setAccess(true)
            }else{
                closeModal('erro','Credenciais incorretas','barLoading')
            }
        }else{
            closeModal('erro','Credenciais incorretas','barLoading')
        }
    }

    const [imgUrl, setImgUrl] = useState(null);
    const [imgUrl2, setImgUrl2] = useState(null);
    const [progresspercent, setProgresspercent] = useState(0);
    const [progresspercent2, setProgresspercent2] = useState(0);

    const handleSubmit = (e) => {
        showModal('spin', `Carregando sua Imagem, aguarde`,false)
        const file = e.target.files[0]
        if (!file) return;
        const storageRef = ref(storage, `logo/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
    
        uploadTask.on("state_changed",
            (snapshot) => {
            const progress =
                Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setProgresspercent(progress);
            },
            (error) => {
            alert(error);
            },
            () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setImgUrl(downloadURL)
                closeModal('success', 'Imagem foi enviada com sucesso!', 'barLoading')
            })
            }
        )
    }
    
    const handleSubmitImgFundo = (e) => {
        showModal('spin', `Carregando sua Imagem, aguarde`,false)
        const file = e.target.files[0]
        if (!file) return;
        const storageRef = ref(storage, `ImgFundo/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
    
        uploadTask.on("state_changed",
          (snapshot) => {
            const progress =
              Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setProgresspercent2(progress);
          },
          (error) => {
            alert(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setImgUrl2(downloadURL)
              closeModal('success', 'Imagem foi enviada com sucesso!', 'barLoading')
            })
          }
        )
      }


    return (
        <div className='divMainAdminContainer'>
            <div className="divAdminContainer paddingLeft">
                <ModalCustom/>
                {
                    access &&
                    <div style={{color: 'white'}}>
                        <h1>Adicionar novo jogo</h1>
                        <div className='AdicionarAdminGame'>
                            <div>
                                <h4>Imagem do Jogo</h4>
                                <label>
                                    {
                                        !imgUrl2 &&
                                        <div className='outerbar'>
                                        <div className='innerbar' style={{ width: `100%` }}>Logo {progresspercent2}%</div>
                                        </div>
                                    }
                                    {
                                        imgUrl2 &&
                                        
                                        <img src={imgUrl2} alt='uploaded file' className='imgUploadedFundoAdmin' />
                                    }
                                    
                                    <form className='form' style={{}}>
                                        <input style={{display: 'none'}} onChange={(event) => {handleSubmitImgFundo(event); 
                                            }} className='inputTypeFile' type='file' accept=".png,.jpeg,.jpg"/> 
                                    </form>
                                </label>
                            </div>
                            <div className='AdicionarAdminGame2'>
                                <div>
                                    <h4>Logo do Jogo</h4>
                                    <label>
                                        {
                                            !imgUrl &&
                                            <div className='outerbar'>
                                            <div className='innerbar' style={{ width: `100%` }}>Logo {progresspercent}%</div>
                                            </div>
                                        }
                                        {
                                            imgUrl &&
                                            
                                            <img src={imgUrl} alt='uploaded file' className='imgUploadedLogoAdmin' />
                                        }
                                        
                                        <form className='form' style={{}}>
                                            <input style={{display: 'none'}} onChange={(event) => {handleSubmit(event); 
                                                }} className='inputTypeFile' type='file' accept=".png,.jpeg,.jpg"/> 
                                        </form>
                                    </label>
                                </div>

                                <div>
                                    <h4>Nome do Jogo</h4>
                                    <input value={nome} onChange={event => {setNome(event.target.value)}}/>
                                </div>
                                <div>
                                    <h4>Descrição curta do Jogo</h4>
                                    <input value={descricao} onChange={event => {setDescricao(event.target.value)}}/>
                                </div>
                                <div>
                                    <h4>Descrição longa do Jogo</h4>
                                    <input value={descricaoLonga} onChange={event => {setDescricaoLonga(event.target.value)}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {
                    !access &&
                    <div className="divAdminSubContainer">
                        <div className='divAdminContentContainer'>
                            <h1>Acesso Administrador</h1>

                            <input value={username} onChange={event => {setUsername(event.target.value)}} placeholder='Usuário'></input>
                            <input value={password} onChange={event => {setPassword(event.target.value)}} placeholder='Senha'></input>
                            <button onClick={() => entrar()}>Entrar</button>


                        </div>
                    </div>    
                }
            </div>
        </div>
        )
}

export default Admin

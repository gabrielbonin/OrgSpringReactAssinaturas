import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import * as S from './styles'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TypeIcons from '../../utils/TypeIcons';
import AbxService from '../../services/novoAbaixoAssinadoService';
import AssinaturaService from '../../services/AssinaturaService';

function AbaixoAssinado(){
    
    const history = useHistory();
    const[assinar, setAssinar] = useState(false);
    const[nome, setNome] = useState("");
    const[rg, setRg] = useState("");

    const[abx, setAbx] = useState({
        id: '',
        tipo: '',
        titulo: '',
        descricao: '',
        destinatario: '',
        assinaturas: 0,
        usuario: ''
    
    })

   

    async function loadAbaixoDetails(){
       
       const pathname = history.location.pathname.split("/");
       const abxId = pathname[pathname.length-1];

       const response = await AbxService.getById(abxId);
       console.log(response);
       const {id, tipo,titulo, descricao,destinatario, assinaturas, usuario} = response.data;
       setAbx({
        id, tipo, titulo, descricao, destinatario, assinaturas, usuario: usuario.nome
       })
    }

    useEffect(() =>{
        loadAbaixoDetails();

    }, []);

    
    async function Save(){  
        if(assinar){
            if(nome.length === 0){
                alert("preencha o nome")
            }else if(rg.length < 9){
                alert("preencha o rg corretamente")
            }else{
                let assinatura = {nome, rg, abaixo_assinado:{id: abx.id}}
                console.log(nome, rg, abx.id);
               
                AssinaturaService.setAssinatura(assinatura)
                setAssinar(false);
                alert("assinatura");
            }
            
        }else{
            setAssinar(true);
            
        }
    }

    return (
        <S.Container>
            <Header/>
                <S.Form>
                    {/* <S.TypeIcons>
                    {
                        TypeIcons.map((icon, index) =>(
                            index > 0 &&
                            <button type="button" onClick = {() =>setTipo(index)}>
                            <img src={icon} alt="Tipo da Petição" 
                            className = {tipo && tipo != index  && 'inative'}/>
                            </button>
                        ))
                    }
                </S.TypeIcons> */}

                <S.Input>
                    <span>Titulo</span>
                    <span>{abx.titulo}</span>
                </S.Input>
                <S.Input>
                    <span>Destinatario</span>
                    <span>{abx.destinatario}</span>
                </S.Input>
                <S.TextArea>
                    <span>Descrição</span>
                    <span>{abx.descricao}</span>
        
                </S.TextArea>
                <S.Input>
                    <span>Autor</span>
                    <span>{abx.usuario}</span>
                </S.Input>
                {
                    assinar ? ( 
                    <div>
                        <S.Input>
                            <span>Seu nome:</span>
                            <input type="text" placeholder="Digite seu codigo"
                            onChange={e => setNome(e.target.value)} value={nome} />
                        </S.Input>
                            <S.Input>
                            <span>Seu RG:</span>
                            <input type="text" placeholder="Digite seu codigo"
                            onChange={e => setRg(e.target.value)} value={rg} />
                        </S.Input>
                    </div>
                    ) : null
                }
                <S.Save>
                    <button type="button" onClick={Save}>ASSINAR</button>
                </S.Save>
            </S.Form>
            <Footer/>
        </S.Container>
    )
                }   
export default AbaixoAssinado;
   
    


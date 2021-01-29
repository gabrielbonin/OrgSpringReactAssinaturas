import React, {useState, useEffect} from 'react';
import {Redirect, useHistory} from 'react-router-dom';
import * as S from './styles'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TypeIcons from '../../utils/TypeIcons';
import AbxService from '../../services/novoAbaixoAssinadoService';

function NovoAbaixoAssinado(){
    const[tipo, setTipo] = useState();
    const[titulo, setTitulo] = useState();
    const[descricao, setDescricao] = useState();
    const[destinatario, setDestinatario] = useState();
    const[assinaturas, setAssinaturas] = useState();
    const[usuario, setUsuario] = useState();
    const history = useHistory();

    async function Save(){

        if(!titulo)
        return alert("Você precisa informar o titulo da petição")
        else if(!descricao)
        return alert("Você precisa informar a descrição do problema")
        else if(!tipo)
        return alert("Você precisa informar o tipo do problema")

        let newabx = {tipo, titulo, descricao, destinatario, usuario: {id:usuario}};
        console.log(newabx);


        AbxService.setAbx(newabx).then(res=>{
            alert("Abaixo assinado publicado com sucesso!")
            history.goBack('/');
        })    
        
    }

    return (
        <S.Container>
            <Header/>
                <S.Form>
                    <S.TypeIcons>
                    {
                        TypeIcons.map((icon, index) =>(
                            index > 0 &&
                            <button type="button" onClick = {() =>setTipo(index)}>
                            <img src={icon} alt="Tipo da Petição" 
                            className = {tipo && tipo != index  && 'inative'}/>
                            </button>
                        ))
                    }
                </S.TypeIcons>

                <S.Input>
                    <span>Titulo</span>
                    <input type="text" placeholder="Digite o titulo"
                    onChange={e => setTitulo(e.target.value)} value={titulo} />
                </S.Input>
                <S.Input>
                    <span>Destinatario</span>
                    <input type="text" placeholder="Digite destinatario"
                    onChange={e => setDestinatario(e.target.value)} value={destinatario} />
                </S.Input>
                <S.TextArea>
                    <span>Descrição</span>
                    <textarea rows={5} placeholder="Detalhes"  
                    onChange={e => setDescricao(e.target.value)} value={descricao} />
        
                </S.TextArea>
                <S.Input>
                    <span>Autor</span>
                    <input type="text" placeholder="Digite seu codigo"
                     onChange={e => setUsuario(e.target.value)} value={usuario} />
                </S.Input>
                <S.Save>
                    <button type="button" onClick={Save}>CRIAR</button>
                </S.Save>
            </S.Form>
            <Footer/>
        </S.Container>
    )
                }   
export default NovoAbaixoAssinado;
   
    


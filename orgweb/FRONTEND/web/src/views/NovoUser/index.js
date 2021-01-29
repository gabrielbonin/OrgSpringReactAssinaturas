import React, {useState, useEffect} from 'react';
import {Redirect, useHistory} from 'react-router-dom';
import * as S from './style'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TypeIcons from '../../utils/TypeIcons';
import UserService from '../../services/novoUser';

function NovoUser(){
    const[email, setEmail] = useState();
    const[nome, setNome] = useState();
    const[senha, setSenha] = useState();
    const[sobrenome, setSobrenome] = useState();

    const history = useHistory();

    async function Save(){

        if(!email)
        return alert("Você precisa informar o titulo da petição")
        else if(!nome)
        return alert("Você precisa informar a descrição do problema")
        else if(!senha)
        return alert("Você precisa informar o tipo do problema")
        else if(!sobrenome)
        return alert("Você precisa informar sobrenome")

        let newabx = {email, nome, sobrenome, senha};
        console.log(newabx);


        UserService.setAbx(newabx).then(res=>{
            alert("usuario  publicado com sucesso!")
            history.goBack('/');
        })    
        
    }

    return (
        <S.Container>
            <Header/>
                <S.Form>
                <S.Input>
                    <span>Nome</span>
                    <input type="text" placeholder="Digite o nome"
                    onChange={e => setNome(e.target.value)} value={nome} />
                </S.Input>
                <S.Input>
                    <span>Sobrenome</span>
                    <input type="text" placeholder="Digite sobrenome"
                    onChange={e => setSobrenome(e.target.value)} value={sobrenome} />
                </S.Input>
                <S.Input>
                    <span>Email</span>
                    <input placeholder="email"  
                    onChange={e => setEmail(e.target.value)} value={email} />
                </S.Input>
                <S.Input>
                    <span>Senha</span>
                    <input type="text" placeholder="Digite sua senha"
                     onChange={e => setSenha(e.target.value)} value={senha} />
                </S.Input>
                <S.Save>
                    <button type="button" onClick={Save}>CRIAR</button>
                </S.Save>
            </S.Form>
            <Footer/>
        </S.Container>
    )
                }   
export default NovoUser;
   
    


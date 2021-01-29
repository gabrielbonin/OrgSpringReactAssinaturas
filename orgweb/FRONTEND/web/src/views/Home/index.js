import React from 'react';
import * as S from './styles';
import {Link} from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AbaixoAssinado from '../../components/AbaixoAssinado';
import {useHistory} from 'react-router-dom';
import Route from '../../routes';
import AbxService from '../../services/novoAbaixoAssinadoService';
import { useEffect, useState } from 'react';

function Home(){

    const [abaixos, setAbaixos] = useState([]);
    const history = useHistory();

    async function loadAbxs(){
        AbxService.getAbx().then((res)=>{
            setAbaixos(res.data);
        })
    }
    useEffect(()=>{
        loadAbxs();
    },[])
    
    return(
        <S.Container>
            <Header/>
            <S.ContainerTop>
            <h2>O SITE ONDE VOCÊ PODE LUTAR POR UM MUNDO MELHOR!</h2>
            <Link to={'/abaixo-assinados/new-abx'}>
            <button type= "button">CRIAR ABAIXO-ASSINADO</button>
            </Link>
            </S.ContainerTop>
            {
                        abaixos.map(t=>(
                        <Link to={`/abaixo-assinados/${t.id}`}>
                        <AbaixoAssinado key={t.id} titulo={t.titulo} descricao ={t.descricao} usuario={t.usuario.nome} tipo={t.tipo} destinatario={t.destinatario} assinaturas={t.assinaturas ?? 0}/>
                        </Link>
                        
                        ))
                    }
            <Footer/>
        </S.Container>
    ) 
}

export default Home;
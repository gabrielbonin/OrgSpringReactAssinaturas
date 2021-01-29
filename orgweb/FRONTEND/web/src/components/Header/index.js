import React from 'react';
import * as S from './styles';
import {Link} from 'react-router-dom';


function Header(){
    return (
        <S.Container>
            <S.Left>
                <h3>ABAIXO-ASSINADOS-DSWL6</h3>
            </S.Left>   
            <S.Right>
                <Link to="/">Home</Link>
                <Link to="/abaixo-assinados/new-abx">Criar</Link>
                <Link to="/users/new-user">Usuários</Link>
            </S.Right>
        </S.Container>
    )
}
export default Header;
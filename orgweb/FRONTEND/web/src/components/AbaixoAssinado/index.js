import React from 'react';
import * as S from './styles';


function AbaixoAssinado({tipo, destinatario, titulo, descricao, usuario, assinaturas}){


    return(
        <S.Container>
            <S.TopPost>
                <S.TopLeft>
                    <S.Type>
                    <h5>{tipo}</h5>
                    </S.Type>
                    <S.Destinatario>
                    <h5>{destinatario}</h5>
                    </S.Destinatario>
                </S.TopLeft>
            </S.TopPost>
            <S.BodyTop>
                <h2>{titulo}</h2>
            </S.BodyTop>
            <S.Body>
                <h4>{descricao}</h4>
            </S.Body>
            <S.FooterPost>
                <span>Autor: {usuario}</span>
                <span style={{color: 'red'}}>apoiadores:{assinaturas}</span>
            </S.FooterPost>
        </S.Container>
    )
}
export default AbaixoAssinado;
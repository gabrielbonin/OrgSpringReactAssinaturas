import styled from 'styled-components';

export const Container = styled.div`
    width:700px;
    box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.73);
    border-radius: 10px;

    &:hover{
    opacity: 0.5;
    }

    transition: all 0.3s ease;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    margin: 20px;
    text-decoration: none !important;
    
` 

export const TopPost = styled.div`
    display: flex;
    flex-direction: column;
   
    h5{
        color: #575353;
        font-size: 14px;
        text-decoration: none !important;
    }

`
export const TopLeft = styled.div`
    display: flex;
    flex-direction: row;
    width: 50%;

`
export const Type = styled.div`
    display: flex;
    width: 80px;
    height: 30px;
    flex-direction: column;
    background-color: #97FEC4;
    border-style: 2px, solid, black;
    justify-content: center;
    align-items: center;

`

export const Destinatario = styled.div`
    display: flex;
    width: 40%;
    height: 30px;
    flex-direction: column;

    border-style: 2px, solid, black;
    justify-content: center;
    align-items: center;
    h5{
        color: #707070;
    }

`

export const BodyTop = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    justify-content: center;
    margin-left: 80px;
`

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    justify-content: center;
    margin-left: 80px;
    border-width: 2px;
    border-style: solid;
    border-color: black;
`

export const BotPost = styled.div`
    display: flex;
    justify-content: left;
    margin-left: 16px;
    margin-top: 10px;
    margin-bottom: 14px;
    text-decoration: none !important;
    span{
      color: #575353;
      font-size: 18px;
      text-decoration: none !important;
    }
`

export const FooterPost = styled.div`
    width: 97%;
    height: 30px;
    position: relative;
    bottom: 0;
    border-radius: 0  0  10px  10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 5px;
    text-decoration: none !important;
    padding-left: 10px;
    margin-top: 20px;
    span{
        color: #707070;
        text-decoration: none !important;
    }
`
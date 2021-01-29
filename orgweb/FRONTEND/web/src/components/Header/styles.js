import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 80px;
    background-color: #A3B1A6;
    display: flex;
    
`

export const Left = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 5px;
`

export const Right = styled.div`
    width: 80%;
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 5px;

    a{
        color: white;
        font-weight: bold;
        text-decoration: none;
        margin: 0 50px;
        display: flex;
        justify-content: space-around;
    }
`
import styled from 'styled-components';

export const Container = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  
    
`
export const ContainerChild = styled.div`
    display: flex;
    flex-direction: row;    
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
   
    
`

export const ContainerTop = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    color: #707070;
    font-size: 20px;
    margin-bottom: 20px;

    button{
    width: 100%;
    background-color: #4FAC49;
    border: none;
    font-size: 20px;
    color: white;
    font-weight: bold;
    padding: 10px;
    border-radius: 30px;
    cursor: pointer;

    &:hover{
      opacity: 0.5;
    }
  }
`
// export const ContainerLeft = styled.div`
//     display: flex;
//     flex-direction: column;
//     width: 70%;
//     height: 100%;
//     background-color: green;

// `

// export const ContainerRight = styled.div`
//     display: flex;
//     flex-direction: column;
//     width: 30%;
//     height: 100%;
//     background-color: yellow;

// `
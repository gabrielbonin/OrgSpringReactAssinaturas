import styled from 'styled-components';

export const Container = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Form = styled.div `
  width: 50%;


`

export const TypeIcons = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;

  .inative{
    opacity: 0.5;
  }

  button{
    background: none;
    border: none;
  }

  img{
    width: 65px;
    height: 65px;
    margin: 10px;
    cursor: pointer;

    &:hover{
      opacity: 0.7;
    }
  }
  
`
export const Input = styled.div `
  width: 100%;
  display: flex;
  flex-direction:column;
  margin: 20px 0px;

  span{
    color: #707070;
    margin-bottom: 5px;
  }

  input{
    font-size: 16px;
    padding: 15px;
    border: none;
    border-bottom: 1px solid #EE6B26;
  }

  


`
export const TextArea = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin: 20px 0px;

span{
  color: #707070;
  margin: 5px 0px; 
}

textarea{
  font-size: 16px;
  border: 1px solid #EE6B26;
}
`
export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  

  button{
    font-weight: bold;
    color: blue;
    border: none;
    background: none;
    font-size: 18px;
    cursor: pointer;

    &:hover{
      opacity: 0.7;
    }
  }

  div{
    display: flex;
    align-items: center;
    color: #EE6B26;
    font-weight: bold;
    font-size: 18px;
  }
`

export const Save = styled.div`
  width: 100%;
  margin-top: 20px;

  button{
    width: 100%;
    background-color: #EE6B26;
    border: none;
    font-size: 20px;
    color: white;
    font-weight: bold;
    padding: 20px;
    border-radius: 30px;
    cursor: pointer;

    &:hover{
      opacity: 0.5;
    }
  }
`
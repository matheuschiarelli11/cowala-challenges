import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #EDEDED;
    width: 1103px;
    height: 420px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.30);
    margin-top: 32px;

    & > div { 
        display: flex;
        flex-direction: column;
        width: 540px;
    }

    input {
        height: 40px;
        border: none;
        font-size: 18px;
        padding: 5px;
    }
`;

export const InputGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    & > div {
        display: flex;
        flex-direction: column;
        flex: 1;
        max-width: 49%;
    }

    label{
        font-weight: bold;
    }
`

export const InputGroupIP = styled.div`
    display: flex;
    flex-direction: row;
    width: 600px;
    height: 100px;
    justify-content: space-between;
    

    label{
        font-weight: bold;
        display: flex;
        flex-direction: row;
    }

    input{
        cursor: pointer;
        background: #BCBCBF;
        width: 325px;
        font-weight: 300; 
        color: black;
        
        &:disabled{
        opacity: unset;
    }
    }

    button{
        background: #00D9D0;
        border: none;
        height: 40px;
        width: 185px;
        font-weight: bold;
        font-size: 15px;
        margin-left: 20px;
    }
    

`

export const InputGroupButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
   
    & > div{
        display: flex;  
        min-width: 230px;
        justify-content: space-between;
    }
    
    button{
        background: #0A1633;
        color: white;
        width: 100px;
        cursor: pointer;
        height: 34px;
        font-size: 17px;
        border: none;
    }
`
import { FormEvent, useEffect, useState } from 'react'
import localStorageService from '../../services/localStorage'
import { api } from '../../services/api';
import InputMask from 'react-input-mask';

import { Form, InputGroup, InputGroupIP, InputGroupButtons, Container} from './styles'

interface IUser  {
    name: string | null
    occupation: string | null
    phone: string | null
    ip: string | null
}

export function Main() {
    const [name, setName] = useState<string | null>(null);
    const [phone, setPhone] = useState<string | null>(null);
    const [occupation, setOccupation] = useState<string | null>(null);
    const [ip, setIp] = useState<string | null>(null);

    function handleCreateNewUser(event: FormEvent) {
        event.preventDefault();

        const data = {
            name,
            occupation,
            phone,
            ip,
        }

        const stringData = JSON.stringify(data)

        localStorageService.saveInfo(stringData);
    }

    async function getAPI(){
        const ipData = await api.get("/ip")
        const myIp = ipData.data;

        setIp(myIp)
    }

    function verifyLocalStorage(){
        const localuser = localStorage.getItem("user");

        if (localuser) {
            const user = JSON.parse(localuser) as IUser;
            setName(user.name);
            setPhone(user.phone);
            setOccupation(user.occupation);
            setIp(user.ip);
        }
    }

    function clearAll(){
        localStorageService.clearInfo()

        setName('');
        setOccupation('');
        setPhone('');
        setIp('');
    }

    useEffect(() => {
        verifyLocalStorage()
    }, [])
    
    return (
        <Container>
            <Form onSubmit={handleCreateNewUser}>
                <div>
                    <h3>Nome</h3>
                    <input  
                    id="name" 
                    type="text" 
                    value={name || ''}
                    autoComplete='off'
                    onChange={event => setName(event.target.value)}
                    />

                    <br/>

                    <InputGroup>
                        <div>
                            <label htmlFor='job'>Profissão</label>
                            <input 
                            id="job" 
                            type="text" 
                            value={occupation || ''}
                            autoComplete='off' 
                            onChange={event => setOccupation(event.target.value)}/>         
                        </div>
                          
                        <div>
                            <label htmlFor='cel'>Celular</label>
                            <InputMask
                            mask="(99) 99999-9999"
                            id ="phone" 
                            type="text"
                            autoComplete='off'
                            value={phone || ''}
                            onChange={(event) => setPhone(event.target.value)}
                            />             
                        </div>

                        </InputGroup>

                            <br/>

                        <InputGroupIP>
                        <div>
                            <label htmlFor='ip'>Meu IP</label> 
                            <InputMask 
                            type="text" 
                            disabled 
                            mask="999.999.999.999"
                            value={ip || ''}
                            onChange={(event) => setIp(event.target.value)}
                            />

                            <button onClick={getAPI}>ENCONTRAR IP</button>
                        </div>

                        </InputGroupIP>

                        <InputGroupButtons>
                            <div>
                                <button type='submit' >Salvar</button> 
                                <button type='button' onClick={clearAll} >Limpar</button>
                            </div>

                        </InputGroupButtons>

                </div>                                
            </Form>
        </Container>
    )
}
import React from 'react';
import { Button } from '../Button';
import logo from '../../assets/logo.png';

import {
    BuscarInputContainer,
    Column,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles';

const Header = () =>{
    return(
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt='logo' width="50px" height="20px"></img>
                    <BuscarInputContainer>
                        <Input placeholder='Buscar...'/>
                    </BuscarInputContainer>  
                    <Menu>Live Code</Menu> 
                    <Menu>Global</Menu>             
                </Row>
                <Row>
                    <MenuRight href='#'>Home</MenuRight>
                    <Button title="Entrar"></Button>
                    <Button title="Cadastrar"></Button>
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header }
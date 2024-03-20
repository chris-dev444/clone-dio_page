import { Link } from 'react-router-dom';

import bannerImage from '../../assets/virtual-banner.jpg'
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';
import { Header } from '../../components/Header';

import {Container,TextContent,Title,TitleHighLight} from  './styles'


const Feed = () => {
    return (<>
        <Header/>
        <Container>
            <Card/>
            <UserInfo percentual={35} nome="Christopher Machado" image="https://avatars.githubusercontent.com/u/153192900?v=4" />
        </Container>
    </>)

}

export { Feed }
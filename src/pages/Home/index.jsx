import { Link } from 'react-router-dom';

import bannerImage from '../../assets/virtual-banner.jpg'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';

import {Container,TextContent,Title,TitleHighLight} from  './styles'

const Home = () => {
    return (<>
        <Header/>
        <Container>
            <div>
                <Title> <br/>
                    <TitleHighLight>
                        Implemente
                    </TitleHighLight>
                    o seu futuro global agora!
                </Title>
                <TextContent>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
                    desafio profissional, evoluindo em comunidade com os melhores experts.
                </TextContent>
                <Button title="Começar agora" variant="secondary" onClick={()=> null}></Button>
            </div>
            <div>
                <img src={bannerImage} alt='Imagem principal' width='580px' height='350px'></img>
            </div>
        </Container>
    </>)

}

export { Home }
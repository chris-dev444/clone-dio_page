import React from "react";
import { FiThumbsUp} from 'react-icons/fi';

 
import { CardContainer, 
        Content, 
        HasInfo, 
        ImageBackground, 
        PostInfo, 
        UserInfo, 
        UserPicture} from './styles';

const Card = () => {
    return(
        <CardContainer>
            <ImageBackground src="https://asimov.academy/wp-content/uploads/2024/02/curso-logica-de-programacao.webp"/>
            <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/u/153192900?v=4"/>
                    <div>
                        <h4>Christopher Machado</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de HTML e CSS</h4>
                    <p>Projeto feito para o curso de html e css no bootcamp dio do Global Avanade ...<strong>Saiba Mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #Javascript</h4>
                    <p>
                        <FiThumbsUp></FiThumbsUp> 10
                    </p>
                </HasInfo>
            </Content> 
        </CardContainer>
    )
}

export { Card }
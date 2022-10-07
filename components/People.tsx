import { ContainerAbout, ContainerItens, ItemPeople } from '../styles/PeopleStyled';
import { CommomSubtitle, CommomTitle } from '../styles/Commom';

import { FaLinkedinIn, FaFacebookF, FaTwitter } from 'react-icons/fa';

import icon from '../public/img-icon.png'

export default function About() {
    return (
        <ContainerAbout id="team">
            <CommomTitle>Equipe</CommomTitle>
            <CommomSubtitle><span>Conheça nossa equipe!</span></CommomSubtitle>
            <ContainerItens>
                <ItemPeople>
                    <img src={icon.src}></img>
                    <h1>Enzo Sylvestrin</h1>
                    <p>Desenvolvedor</p>
                    <div className="icons">
                        <div>
                            <FaLinkedinIn />
                        </div>
                        <div>
                            <FaFacebookF />
                        </div>    
                        <div>
                            <FaTwitter />
                        </div>            
                    </div>
                </ItemPeople>
                <ItemPeople>
                    <img src={icon.src}></img>
                    <h1>Enzo Sylvestrin</h1>
                    <p>Desenvolvedor</p>
                    <div className="icons">
                        <div>
                            <FaLinkedinIn />
                        </div>
                        <div>
                            <FaFacebookF />
                        </div>    
                        <div>
                            <FaTwitter />
                        </div>            
                    </div>
                </ItemPeople>
                <ItemPeople>
                    <img src={icon.src}></img>
                    <h1>Enzo Sylvestrin</h1>
                    <p>Desenvolvedor</p>
                    <div className="icons">
                        <div>
                            <FaLinkedinIn />
                        </div>
                        <div>
                            <FaFacebookF />
                        </div>    
                        <div>
                            <FaTwitter />
                        </div>            
                    </div>
                </ItemPeople>
            </ContainerItens>
        </ContainerAbout>
    );
}
import { ContainerPeople, ContainerItens } from '../styles/PeopleStyled';
import { CommomItem, CommomSubtitle, CommomTitle } from '../styles/Commom';

import { FaLinkedinIn, FaFacebookF, FaTwitter } from 'react-icons/fa';

import icon from '../public/img-icon.png'

import Renan from '../public/renan.jpg';
import Araujo from '../public/araujo.jpg';

export default function People() {
    return (
        <ContainerPeople id="team">
            <CommomTitle>Equipe</CommomTitle>
            <CommomSubtitle><span>Conheça nossa equipe!</span></CommomSubtitle>
            <ContainerItens>
                <CommomItem>
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
                </CommomItem>
                <CommomItem>
                    <img src={Renan.src}></img>
                    <h1>Renan Lopes Cruz</h1>
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
                </CommomItem>
                <CommomItem>
                    <img src={Araujo.src} className="rotate"></img>
                    <h1>Matheus Araujo  </h1>
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
                </CommomItem>
            </ContainerItens>
        </ContainerPeople>
    );
}
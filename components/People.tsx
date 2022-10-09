import { ContainerPeople, ContainerItens } from '../styles/PeopleStyled';
import { CommomItem, CommomSubtitle, CommomTitle } from '../styles/Commom';

import { FaLinkedinIn, FaFacebookF, FaTwitter, FaGithubAlt, FaGithub, FaInstagram } from 'react-icons/fa';

import Enzo from '../public/img-icon.png'

import Renan from '../public/renan.jpg';
import Araujo from '../public/araujo.jpg';
import Heitor from '../public/heitor.jpg';

export default function People() {
    return (
        <ContainerPeople id="team">
            <CommomTitle
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }} //onScroll
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Equipe        
            </CommomTitle>
            <CommomSubtitle
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }} //onScroll
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <span>Conheça nossa equipe!</span>
            </CommomSubtitle>
            <ContainerItens>
                <CommomItem
                    initial={{ scale: 0, rotate: 60 }}
                    whileInView={{ rotate: 0, scale: 1 }} //onScroll
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.3
                    }}
                    viewport={{ once: true }}
                >
                    <img src={Enzo.src}></img>
                    <h1>Enzo Sylvestrin</h1>
                    <p>Desenvolvedor</p>
                    <div className="icons">
                        <a href="https://www.linkedin.com/in/enzo-sylvestrin-336b71221/" rel="noopener noreferrer" target="_blank">
                            <div>
                                <FaLinkedinIn />
                            </div>
                        </a>
                        <a href="https://github.com/EnzoSylvestrin" rel="noopener noreferrer" target="_blank">
                            <div>
                                <FaGithub />
                            </div>
                        </a>   
                    </div>
                </CommomItem>
                <CommomItem
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} //onScroll
                    transition={{ duration: 0.4, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <img src={Renan.src}></img>
                    <h1>Renan Lopes Cruz</h1>
                    <p>Desenvolvedor</p>
                    <div className="icons">
                        <a href="https://www.linkedin.com/in/renan-lopes-400197225/" rel="noopener noreferrer" target="_blank">
                            <div>
                                <FaLinkedinIn />
                            </div>
                        </a>
                        <a href="https://www.instagram.com/_.loopees._/" rel="noopener noreferrer" target="_blank">
                            <div>
                                <FaInstagram />
                            </div>
                        </a>
                        <a href="https://github.com/RenanLopesCruz" rel="noopener noreferrer" target="_blank">
                            <div>
                                <FaGithub />
                            </div>
                        </a>          
                    </div>
                </CommomItem>
                <CommomItem
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} //onScroll
                    transition={{ duration: 0.4, delay: 0.7 }}
                    viewport={{ once: true }}
                >
                    <img src={Araujo.src} className="rotate"></img>
                    <h1>Matheus Araujo  </h1>
                    <p>Desenvolvedor</p>
                    <div className="icons">
                        <a href="https://www.linkedin.com/in/matheus-araújo-ferreira-606671201/" rel="noopener noreferrer" target="_blank">
                            <div>
                                <FaLinkedinIn />
                            </div>
                        </a>
                        <a href="https://www.instagram.com/sz.araujo_/" rel="noopener noreferrer" target="_blank">
                            <div>
                                <FaInstagram />
                            </div>
                        </a>
                        <a href="https://www.instagram.com/_.loopees._/" rel="noopener noreferrer" target="_blank">
                            <div>
                                <FaGithub />
                            </div>
                        </a>         
                    </div>
                </CommomItem>
                <CommomItem
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }} //onScroll
                    transition={{ duration: 0.4, delay: 0.9 }}
                    viewport={{ once: true }}
                >
                    <img src={Heitor.src} className="rotate2"></img>
                    <h1>Heitor Freitas</h1>
                    <p>Desenvolvedor</p>
                    <div className="icons">
                        <a href="#" rel="noopener noreferrer" target="_blank">
                            <div>
                                <FaLinkedinIn />
                            </div>
                        </a>
                        <a href="#" rel="noopener noreferrer" target="_blank">
                            <div>
                                <FaInstagram />
                            </div>  
                        </a>
                        <a href="#" rel="noopener noreferrer" target="_blank">
                            <div>
                                <FaGithub />
                            </div>
                        </a>            
                    </div>
                </CommomItem>
            </ContainerItens>
        </ContainerPeople>
    );
}
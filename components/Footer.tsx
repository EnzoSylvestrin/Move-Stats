import { ContainerFooter } from "../styles/FooterStyled";

import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <ContainerFooter>
            <div className="social"> 
                <a href="https://www.linkedin.com/in/enzo-sylvestrin-336b71221/" rel="noopener noreferrer" target="_blank">
                    <FaLinkedin id="icon-linkedin"/>
                </a>
                <a href="https://github.com/EnzoSylvestrin" rel="noopener noreferrer" target="_blank">
                    <FaGithub id="icon-github" />
                </a>
            </div>
            <div className="copyright">
                <p>Feito por <a href="https://enzosylvestrin.github.io/portifolio/" rel="noopener noreferrer" target="_blank">Enzo Sylvestrin</a></p>
            </div>
        </ContainerFooter>
    );
}
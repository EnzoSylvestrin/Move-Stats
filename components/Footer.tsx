import { ContainerFooter } from "../styles/FooterStyled";

import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <ContainerFooter>
            <div className="social"> 
                <FaLinkedin id="icon-linkedin"/>
                <FaGithub id="icon-github" />
            </div>
            <div className="copyright">
                <p>Feito por <a href="https://enzosylvestrin.github.io/portifolio/" rel="noopener noreferrer" target="_blank">Enzo Sylvestrin</a></p>
            </div>
        </ContainerFooter>
    );
}
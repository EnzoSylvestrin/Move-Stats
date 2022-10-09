import { CommomBtn, CommomContainer, CommomSubtitle, CommomTitle } from '../styles/Commom';
import { FormSubmit } from '../styles/ContactStyled';

export default function Contact() {
    return (
        <CommomContainer id="contact">
            <CommomTitle
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }} //onScroll
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Contato
            </CommomTitle>
            <CommomSubtitle
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }} //onScroll
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <span>Entre em contato conosco!</span>
            </CommomSubtitle>
            <FormSubmit
                initial={{ x: 300, opacity: 0}}
                whileInView={{ x: 0, opacity: 1 }} //onScroll
                transition={{ duration: 0.4, delay: 0.4}}
                viewport={{ once: true }}
                action="https://formsubmit.co/fecfce57d3e403900dad1688f2d9c317" 
                method="POST"
            >
                <input type="hidden" name="_next" value="https://enzosylvestrin.github.io/portifolio/" />
                <input type="hidden" name="_template" value="box" />
                <input type="hidden" name="_autoresponse" value="Recebi sua mensagem, muito obrigado por entrar em contato! Responderei o mais rápido possível..." />            
                <label>Nome:</label>
                <input type="text" name="name" className="form-control" placeholder="Nome" required/>
                <label>Email:</label>
                <input type="email" name="email" className="form-control" placeholder="Email" required/>
                <label>Mensagem:</label>
                <textarea name="message" placeholder="Escreva a mensagem" className="form-control" required></textarea>
                <CommomBtn>
                    <input type="submit" value="Enviar" />
                </CommomBtn>
            </FormSubmit>
        </CommomContainer>
    );
}
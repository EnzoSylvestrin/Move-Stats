import { useEffect, useRef, useState } from 'react';
import { NavMenu, StyledA, Ul, MenuResponsive } from '../styles/HeaderStyled';

import { Sun, Moon } from 'phosphor-react';

export default function Header() {

    var ul = useRef(null);
    var menuResponsive = useRef(null);
    var li1 = useRef(null);
    var li2 = useRef(null);
    var li3 = useRef(null);
    var icon = useRef(null);

    var passou = true;

    const [dark, setDark] = useState(true);

    useEffect(() => {
        if (passou) {
            passou = false;

            navbarShrink();

            var lis = [li1.current, li2.current, li3.current, icon.current];
            var btnMenu = menuResponsive.current;
            var list = ul.current;

            btnMenu.addEventListener('click', () => {
                list.classList.toggle('active');
                btnMenu.classList.toggle('active');
                AnimateLinks(lis);
            });    
        }
    });

    const HandleSwitchTheme = () => {
        const BodyStyle = document.body.style;

        if (!dark) {
            BodyStyle.setProperty('--bgColor', '#2b2828');
            BodyStyle.setProperty('--bgInverse', '#b3adad');
            BodyStyle.setProperty('--textColor', '#fff');
            BodyStyle.setProperty('--placeHolderColor', '#858080');
        }
        else {
            BodyStyle.setProperty('--bgColor', '#ebdddd');
            BodyStyle.setProperty('--bgInverse', '#2b2828');
            BodyStyle.setProperty('--textColor', '#000');
            BodyStyle.setProperty('--placeHolderColor', '#474247');
        }
        setDark(dark => !dark);
    }

    const AnimateLinks = (links) => {
        links.forEach((link, index) => {
            if (link.style.animation && link.style.animation.indexOf('navLinkFadeOut') === -1) {
                link.style.animation = `navLinkFadeOut 0.5s ease`;
            }
            else {
                link.style.animation = `navLinkFadeIn 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    };

    var navbarShrink = () => {
        const navbarCollapsible = document.body.querySelector('.main-bar');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('shrink');
        } else {
            navbarCollapsible.classList.add('shrink');
        }
    };

    return (
        <header>
            <NavMenu className='main-bar'>
                <div></div>
                <MenuResponsive id="menu" ref={menuResponsive}>
                    <div className="line-1"></div>
                    <div className="line-2"></div>
                    <div className="line-3"></div>
                </MenuResponsive>
                <Ul id="nav-list" ref={ul}>
                    <li ref={li1}><StyledA href="#home">Home</StyledA></li>
                    <li ref={li2}><StyledA href="#services">Sobre</StyledA></li>
                    <li ref={li3}><StyledA href="#contact">Contato</StyledA></li>
                    {
                        dark 
                        ?
                        <Sun ref={icon} className='Icon-header' weight="duotone" size={28} color="white" onClick={HandleSwitchTheme}/>
                        :
                        <Moon ref={icon} className='Icon-header' weight="duotone" size={28} color="white" onClick={HandleSwitchTheme}/>
                    }
                </Ul>
            </NavMenu>
        </header>
    );
}
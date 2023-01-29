import styled from 'styled-components'

export const NavMenu = styled.nav`
    width: 100%;
    height: 10vh;
    min-height: 65px;
    color: black;
    background-color: #0f0e0e;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    position: fixed;
    border-bottom: 1px solid var(--red);
    z-index: 999;

    &.shrink {
        background-color: transparent;
    }

    img {
        margin-left: 50px;
        width: 75px;
        height: 75px;
        margin-bottom: 2px;
    }

    @media (max-width: 810px) {
        justify-content: center;

        img {
            margin-left: 10px;
        }   
    }
`

export const MenuResponsive = styled.div`
    display: none;
    transition: all 0.5s ease;
    cursor: pointer;
    position: absolute;
    right: 5%;

    div {
        width: 20px;
        height: 2px;
        background: var(--red);
        margin: 5px;
        transition: all 0.2s ease;
    }

    :hover {
        transform: rotate(180deg) scale(1.15);
    }

    @media (max-width: 810px) {
        display: block;
    }

    &.active .line-1 {
        transform: rotate(-45deg) translate(-5px, 5px);
    }

    &.active .line-2 {
        opacity: 0;
    }

    &.active .line-3 {
        transform: rotate(45deg) translate(-5px, -5px);
    }
`

export const Ul = styled.ul`
    height: 10vh;
    list-style: none;
    display: flex;
    align-items: center;
    margin-right: 50px;

    li {
        letter-spacing: 3px;
        font-size: 19px;
        margin: 0 13px;
        cursor: pointer;
    }
    
    li a:after {
        display:block;
        content: '';
        border-bottom: solid 2px #00ffea;
        margin-right: 2px;
        transform: scaleX(0);
        transition: transform 320ms ease-in-out;
    }

    li:hover a:after {
        transform: scaleX(1);
    }

    .Icon-header {
        cursor: pointer;
        margin-bottom: 3.5px;
    }

    @media (max-width: 810px) {
        position: fixed;
        top: 10vh;
        right: 0;
        width: 0px;
        height: 90vh;
        flex-direction: column;
        background-color: #222222;
        justify-content: space-around;
        transition: all 0.4s ease-in;
        margin-right: 0;
        z-index: 999;

        li {
            width: 0;
            opacity: 0;
            margin: 0;
        }

        #icon {
            font-size: 32px;
        }

        &.active {
            width: 210px;
        }

        .Icon-header {
            opacity: 0;
        }

        .visible {
            opacity: 1;
        }
    }
`

export const StyledA = styled.a`
    color: #fff;
    transition: all 0.4s;
    text-decoration: none;
    font-size: 17px;
    text-transform: uppercase;
    display: inline-block;
`
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    background-color: var(--mint-green);
    display: flex;
    justify-content: center;`;

const FooterLink = styled.a`
    margin: 7px;
    
    img {
        width: 35px;
        transition: transform 0.3s, box-shadow 0.3s;
    }
        
    &:hover img {
        transform: scale(1.1);
        box-shadow: 0 0 10px var(--paynes-gray);`
    ;

function Footer() {

    return (
        <FooterContainer>
            <FooterLink href="https://github.com/ryang2386"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="GitHub"/></FooterLink>
            <FooterLink href="https://www.linkedin.com/in/ryangayle/"><img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="LinkedIn"/></FooterLink>
            <FooterLink href="https://facebook.com/ryan.gbkja"><img src="https://cdn-icons-png.flaticon.com/128/174/174848.png" alt="Facebook"/></FooterLink>
        </FooterContainer>
    )
};

export default Footer;
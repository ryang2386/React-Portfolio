import React from 'react';
import styled from 'styled-components';
import './Project.css';

// creating styling containers for each Project component being passed 
// to Portfolio page
const ProjectContainer = styled.div`
    display: flex,
    flexWrap: wrap,
    justifyContent: space-around,
    backgroundColor: var(--verdigris),
    margin: 10px;
    position: relative;
    width: 500px;
    height: 200px;
`;

const ProjectLink = styled.a`
    display: block;
    width: 100%;
    height: 100%;
    position: relative;

    img {
        width: 500px;
        height: 175px;
        object-fit: cover;
        transition: opacity 0.3s ease-in-out;
        padding: 10px;
    }
    
    &:hover img {
        opacity: 0.8;
    }

    &:hover div {
        opacity: 1;
    }
}
`;

const ProjectText = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--verdigris);
    background-color: var(--paynes-gray);
    font-size: 20px;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    text-align: center;
`;

// creating Project component that takes imageURL, title, and link as props
function Project( { imageURL, title, link }) {
    return (
        // returns Project component to be passed to Portfolio page
        <ProjectContainer>
            <ProjectLink href={link}>
                <img src={imageURL} alt={title} />
                <ProjectText>{title}</ProjectText>
            </ProjectLink>
            </ProjectContainer>
    );
};

export default Project;
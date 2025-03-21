import React from 'react';
import styled from 'styled-components';

const ProjectContainer = styled.div`
    display: flex,
    flexWrap: wrap,
    justifyContent: space-around,
    backgroundColor: var(--verdigris),
`;

const ProjectLink = styled.div`
    img {
        width: 500px;
        transition: opacity 0.3s ease-in-out;
    }
    
    &:hover img {
        opacity: 0.8;
    }

`;

function Project( { imageURL, title }) {
    return (
        <ProjectContainer>
            <ProjectLink>
                <img src={imageURL} alt={title} />
            </ProjectLink>
            </ProjectContainer>
    );
};

export default Project;
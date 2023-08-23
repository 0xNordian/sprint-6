import React, { ReactNode } from 'react'
import styled from 'styled-components'

const StyledList = styled.ul`
    margin-left: 0.5rem;
`;

interface SUlProps {
    children: ReactNode;
}

const StyledUl: React.FC<SUlProps> = ({ children }) => {
    return (
        <StyledList>{ children }</StyledList>
    )
}

export default StyledUl;
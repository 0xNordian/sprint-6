import React, { ReactNode } from 'react'
import styled from 'styled-components'

const StyledList = styled.ul`
    margin: 0rem 12rem;
`;

interface SUlProps {
    className?: string;
    children: ReactNode;
}

const StyledUl: React.FC<SUlProps> = ({ children }) => {
    return (
        <StyledList>{ children }</StyledList>
    )
}

export default StyledUl;
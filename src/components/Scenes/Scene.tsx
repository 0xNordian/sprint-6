import { useState } from 'react'
import styled from 'styled-components'
import StyledUl from '../UI/StyledUl.tsx'
import Button from '../UI/Button.tsx'

interface SceneProps {
    dataScene: string[];
}

const StyledListItem = styled.li<{isActive: boolean}>`
border: 1px solid #000;
line-height: 2rem;
margin: 1rem 1rem;
text-align: center;
border-radius: 1rem;
background-color: ${props => props.isActive ? 'lightgrey' : '#fff'};
`;


const Scene = (props: SceneProps) => {
    const arrLength = props.dataScene.length;
    const [activeIndex, setActiveIndex] = useState(() => 0);

    const indexIncreaseHandler = () => {
        if (activeIndex === arrLength - 1) {
            setActiveIndex(0);
        } else {
            setActiveIndex(prevIndex => ++prevIndex);
        }
    }
    const indexDecreaseHandler = () => {
        if (activeIndex === 0) {
            setActiveIndex(arrLength - 1);
        } else {
            setActiveIndex(prevIndex => --prevIndex);
        }
    }

    return (
        <>
            <div className="w-full flex justify-center gap-4 my-6">
                <Button className="w-[500px]" btnType='btn-primary' msg='Back' onClick={indexDecreaseHandler} />
                <Button className="w-[500px]" btnType='btn-secondary' msg='Next' onClick={indexIncreaseHandler} />
            </div>
            <StyledUl>
                {props.dataScene.map(
                    (item: any, index: number) => (
                        <StyledListItem isActive={index === activeIndex} key={index}>
                            {item}
                        </StyledListItem>
                    )
                )}
            </StyledUl>
        </>
    )
}

export default Scene;
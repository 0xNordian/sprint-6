import { useState } from 'react'
import styled from 'styled-components'
import StyledUl from '../UI/StyledUl.tsx'
import Button from '../UI/Button.tsx'

interface SceneProps {
    className?: string;
    onStarted?: boolean;
    dataScene: any[];
}

const StyledListItem = styled.li<{ isActive: boolean }>`
border: 1px solid #000;
line-height: 2rem;
margin: 1rem 1rem;
text-align: center;
border-radius: 1rem;
background-color: ${props => props.isActive ? '#E45E7B' : '#fff'};
color: ${props => props.isActive ? '#fff' : '#000'};
font-weight: ${props => props.isActive ? 'bold' : 'normal'};
font-size: ${props => props.isActive ? '1.2rem' : '1rem'};
`;


const Scene = (props: SceneProps) => {
    const arrLength = props.dataScene.length;
    const pageVisibility = props.onStarted ? 'visible' : 'hidden';
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

    const BackgroundContainer = styled.div`
    position: relative;
    height: 100vh;
    overflow: hidden;
`;

    const BackgroundImage = styled.div<{ imageUrl: string }>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.imageUrl});
    background-size: cover;
    background-position: center;
    z-index: -1;
    filter: blur(5px)
`;

const imgSrc = props.dataScene[activeIndex].img;

    return (
        <>
            <section className={`${pageVisibility}`}>
                <BackgroundContainer>
                    <BackgroundImage imageUrl={imgSrc} />
                    <div className="w-full flex justify-center gap-4 my-6 z-10">
                        <Button className="w-[500px]" btnType='btn-primary' msg='Back' onClick={indexDecreaseHandler} />
                        <Button className="w-[500px]" btnType='btn-secondary' msg='Next' onClick={indexIncreaseHandler} />
                    </div>
                    <StyledUl>
                        {props.dataScene.map(
                            (item: any, index: number) => (
                                <StyledListItem isActive={index === activeIndex} key={index}>
                                    {item.text}
                                </StyledListItem>
                            )
                        )}
                    </StyledUl>
                </BackgroundContainer>
            </section>
        </>
    )
}

export default Scene;
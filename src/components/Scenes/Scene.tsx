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
background-color: ${props => props.isActive ? '#EE99AB' : '#fff'};
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
    height: 100vh; /* Ensure full viewport height */
    overflow: hidden; /* Hide any overflow from the background image */
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
import React from 'react'

interface SceneProps {
    dataScene: string[];
}

const Scene = (props: SceneProps) => {
    return (
        <>
            <ul>
                {props.dataScene.map((item: any, index: number) => <li key={index}>{item}</li>)}
            </ul>
        </>
    )
}

export default Scene;
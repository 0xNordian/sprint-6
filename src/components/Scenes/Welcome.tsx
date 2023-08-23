import Button from '../UI/Button.tsx'

interface WelcomeProps {
    className?: string;
    onStartedHandler?: void;
    onStarted: boolean;
    onClick?: () => void;
}

const Welcome = (props: WelcomeProps) => {
    const pageVisibility = props.onStarted ? 'hidden' : 'visible';

    return (
        <>
        <section className={`${pageVisibility} flex flex-col justify-center items-center w-full h-[100vh]`}>
            <h1>Welcome to the tutotial 🤓</h1>
            <Button className="w-[500px]" btnType='btn-primary' msg='Start' onClick={props.onClick}/>
        </section>
        </>
    )
}

export default Welcome
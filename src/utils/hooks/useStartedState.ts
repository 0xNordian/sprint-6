// useStartedState.js
import { useState } from 'react';

const useStartedState = () => {
    const [started, setStarted] = useState(false);
    const toggleStarted = () => setStarted(prev => !prev);

    return { started, toggleStarted };
};

export default useStartedState;

import { useState } from 'react';
import Scene from './components/Scenes/Scene'
import Welcome from './components/Scenes/Welcome';
import extractData from './utils/functions/dataExtractor'

export default function App() {
  const data = extractData();
  
  const [started, setStarted] = useState(false);
  const startedHandler = () => setStarted((prev) => !prev);

  return (
    <>
      <Welcome onClick={startedHandler} onStarted={started}/>
      <Scene dataScene={data} onStarted={started}/>
    </>
  )
}
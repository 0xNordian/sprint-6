import Scene from './components/Scenes/Scene'
import Welcome from './components/Scenes/Welcome';
import extractData from './utils/functions/dataExtractor'
import useStartedState from './utils/hooks/useStartedState';

export default function App() {
  const data = extractData();
  const { started, toggleStarted } = useStartedState();

  return (
    <>
      <Welcome onClick={toggleStarted} onStarted={started}/>
      <Scene dataScene={data} onStarted={started}/>
      <img src="/src/assets/images/2.jpg" />
    </>
  )
}
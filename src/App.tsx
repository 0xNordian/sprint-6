import Scene from './components/Scenes/Scene'
import extractData from './utils/functions/dataExtractor'

export default function App() {
  const data = extractData();

  return (
    <>
      <Scene dataScene={data}/>
    </>
  )
}
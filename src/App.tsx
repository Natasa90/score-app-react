import './App.css'
import { TeamImages } from './components/teams' 
import { CounterLakers } from './components/counterLakers'
import { CounterDenver } from './components/counterDenver'

export const App = () => {
  return (
    <>
    <TeamImages />
    <div className="counters">
      <CounterLakers />
      <CounterDenver />
    </div>
    </>
  )
}

export default App 

import './App.css'
import { TeamImages } from './components/Teams' 
import { Counter } from './components/Counter'
import { Layout } from './components/Layout'

export const App = () => {
  return (
    <Layout>
      <TeamImages />
      <Counter />
    </Layout>
  )
}

export default App 

import {Alunos} from './components/Alunos'
import UserProvider from './contexts/user'

function App() {
  return (
    <UserProvider>
      <>
        <h1>Escola DEV</h1>
        <br />
        <hr />
        <Alunos/>
      </>
    </UserProvider>
  )
}

export default App

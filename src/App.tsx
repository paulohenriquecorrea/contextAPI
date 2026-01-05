import UserProvider from './contexts/user'
import {Alunos} from './components/Alunos'
import {Footer} from './components/Footer'

function App() {
  return (
    <UserProvider>
      <>
        <h1>Escola DEV</h1>
        <br />
        <hr />
        <Alunos/>
        <Footer />
      </>
    </UserProvider>
  )
}

export default App

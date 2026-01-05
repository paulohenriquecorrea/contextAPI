import { UserContext } from "../../contexts/user"
import { useContext } from "react"

export function Footer(){
    const {qtdAlunos, addQtdAlunos} = useContext(UserContext);
    return(
        <footer>
            <hr />
            <h3>Footer</h3>
            <h4>Alunos online na plataforma: {qtdAlunos}</h4>
            <br />
            <button onClick={() => addQtdAlunos()}>
                Novo Aluno
            </button>
        </footer>
    )
}
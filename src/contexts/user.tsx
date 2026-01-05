import {createContext, useState, type ReactNode} from 'react';

interface UserProviderProps {
    children: ReactNode;
}

type UserContextData = {
    aluno: string;
    qtdAlunos: number;
    mudaNome: (nome: string) => void;
    addQtdAlunos: () => void;
}
export const UserContext = createContext({} as UserContextData);

function UserProvider({ children} : UserProviderProps){
    const [aluno, setAluno] = useState('Maria');
    const [qtdAlunos, setQtdAlunos] = useState(1);

    function mudaNome(nome: string){
        setAluno(nome);
    }

    function addQtdAlunos() {
        setQtdAlunos(alunos => alunos + 1);
    }

    return (
        <UserContext.Provider value={{aluno, qtdAlunos, mudaNome, addQtdAlunos}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;
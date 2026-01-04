import {createContext, useState, type ReactNode} from 'react';

interface UserProviderProps {
    children: ReactNode;
}

type UserContextData = {
    aluno: string;
    qtdAlunos: number;
    mudaNome: (nome: string) => void;
}
export const UserContext = createContext({} as UserContextData);

function UserProvider({ children} : UserProviderProps){
    const [aluno, setAluno] = useState('Maria');
    const [qtdAlunos, setQtdAlunos] = useState(30);

    function mudaNome(nome: string){
        setAluno(nome);
    }

    return (
        <UserContext.Provider value={{aluno, qtdAlunos, mudaNome}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;
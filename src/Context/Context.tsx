import { createContext, useState, ReactNode } from "react";


interface Ichildren {
    children: ReactNode
}

interface Iuser {
    nome: string | undefined
    message: string | undefined
}

interface Istate {
    userContext: Iuser[] | undefined
    setUserContext: React.Dispatch<React.SetStateAction<Iuser[]>>
}

export const ContextUser = createContext({} as Istate)

export default function Provider({children}: Ichildren) {

    const [userContext, setUserContext] = useState<Iuser[]>([])

    return (
        <ContextUser.Provider value={{userContext, setUserContext}}>
            {children}
        </ContextUser.Provider>
    )
}
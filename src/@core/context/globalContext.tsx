import { createContext, useState, ReactNode } from 'react'
import { IUserLogin } from '../@types/interface'

export type Globals = {
    userLogin: IUserLogin,
}

export type SpecificGlobals = {
    userLogin: IUserLogin,
}

export type GlobalsContextValue = {
    globals: Globals,
    saveGlobals: (updateGlobals: Globals) => void
}

interface GlobalsProviderProps {
    children: ReactNode
    // pageGlobals?: SpecificGlobals | void
  }

const initialGlobals: Globals = {
    userLogin: {} as IUserLogin,
}

export const GlobalsContext = createContext<GlobalsContextValue>({
    saveGlobals: () => null,
    globals: initialGlobals
})

export const GlobalsProvider = ({ children }: GlobalsProviderProps) => {
    const [globals, setGlobals] = useState<Globals>({...initialGlobals})

    const saveGlobals = (updatedGlobals: Globals) => {
        setGlobals(updatedGlobals)
    }

    return <GlobalsContext.Provider value={{ globals, saveGlobals }}>{children}</GlobalsContext.Provider>

}

export const GlobalsConsumer = GlobalsContext.Consumer
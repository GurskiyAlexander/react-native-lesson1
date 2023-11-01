import { createContext, useReducer, useContext } from 'react'
import { initialState, mainReducer } from '../../store'
import { ReactNode } from 'react'
import { action } from '../../store/main-store'

export const Context = createContext({
  state: initialState,
  dispatch: (action: action) => {},
})

type Props = {
  children: ReactNode;
}

export const StoreProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(mainReducer, initialState)

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  )
}

export const useStore = () => useContext(Context)

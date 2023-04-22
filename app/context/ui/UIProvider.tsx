import { FC, useReducer } from 'react';
import { UIContext, UIReducer } from '.'

export interface UIState {
  isMenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
  isMenuOpen: false
}

export const UIProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE)

  const openMenu = () => dispatch({ type: 'UI - Open Sidebar' })
  const closeMenu = () => dispatch({ type: 'UI - Close Sidebar' })

  return (
    <UIContext.Provider value={{
      ...state,

      // Methods
      openMenu,
      closeMenu,
    }}>
      {children}
    </UIContext.Provider>
  )
}

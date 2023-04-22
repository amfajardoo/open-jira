import { createContext } from 'react'

export interface ContextProps {
  isMenuOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
}

export const UIContext = createContext<ContextProps>({} as ContextProps);
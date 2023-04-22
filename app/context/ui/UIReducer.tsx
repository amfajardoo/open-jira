import { UIState } from "./UIProvider";

type UIActionType = { type: 'UI - Open Sidebar' } | { type: 'UI - Close Sidebar' }

export const UIReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case "UI - Open Sidebar":
      return {
        ...state,
        isMenuOpen: true
      }
    case "UI - Close Sidebar":
      return {
        ...state,
        isMenuOpen: false
      }
  
    default:
      return state;
  }
}
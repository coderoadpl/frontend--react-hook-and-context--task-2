import { renderRoot } from './index'

let state

export const useStateCustom = (initialState) => {
  if (state === undefined) state = initialState

  return [
    state,
    (newState) => {
      state = newState
      renderRoot()
    }
  ]
}

export default useStateCustom

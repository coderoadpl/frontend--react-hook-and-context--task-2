import { renderRoot } from './index'

const state = {}

export const useStateCustom = (initialState, componentId) => {
  if (state[componentId] === undefined) state[componentId] = initialState

  return [
    state[componentId],
    (newComponentState) => {
      state[componentId] = newComponentState
      renderRoot()
    }
  ]
}

export default useStateCustom

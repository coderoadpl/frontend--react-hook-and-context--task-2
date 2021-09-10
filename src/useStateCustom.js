export const useStateCustom = (initialState) => {
  return [
    initialState,
    () => {
      console.log('Im fake!')
    }
  ]
}

export default useStateCustom

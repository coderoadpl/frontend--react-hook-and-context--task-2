import React from 'react'

import { useStateCustom } from './useStateCustom'

export const Counter = () => {
  const [number, setNumber] = useStateCustom(15)

  const inc = () => setNumber(number + 1)
  const dec = function () { setNumber(number - 1) }

  return (
    <>
      <h1>
        {number}
      </h1>
      <button
        onClick={inc}
      >
        +
      </button>
      <button
        onClick={dec}
      >
        -
      </button>
    </>
  )
}

export default Counter

import React from 'react'
import PropTypes from 'prop-types'

import { useStateCustom } from './useStateCustom'

export const Counter = (props) => {
  const { componentId } = props

  const [number, setNumber] = useStateCustom(15, componentId)

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

Counter.propTypes = {
  componentId: PropTypes.string
}

export default Counter

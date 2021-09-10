import React from 'react'

import Counter from './Counter'
import CounterClass from './CounterClass'

export const App = () => {
  return (
    <div>
      <h2>
        Hooks
      </h2>
      <Counter componentId={'counter-1'} />
      <Counter componentId={'counter-2'} />
      <h2>
        Class
      </h2>
      <CounterClass />
      <CounterClass />
    </div>
  )
}

export default App

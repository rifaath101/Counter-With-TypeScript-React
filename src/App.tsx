import React from "react"
import { useState } from "react"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const reset = () => {
    setCount(0)
  }
  return (
    <div className="App">
      <main className="counter-card" aria-labelledby="counter-title">
        <h1 id="counter-title" className="counter-card__title">
          Counter
        </h1>
        <p
          className="counter-card__value"
          aria-live="polite"
          aria-atomic="true"
        >
          {count}
        </p>
        <div className="counter-card__actions">
          <button
            type="button"
            className="counter-card__btn counter-card__btn--primary"
            onClick={increment}
          >
            +1
          </button>
          <button
            type="button"
            className="counter-card__btn counter-card__btn--secondary"
            onClick={decrement}
          >
            −1
          </button>
          <button
            type="button"
            className="counter-card__btn counter-card__btn--ghost"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </main>
    </div>
  )
}

export default App

import React from 'react'
import { useGlobalContext } from './context'

const Buttons = () => {
  const { isLoading, page, nbPages, handlePage } = useGlobalContext()

  return (
    <div className="btn-container">
      <button
        disabled={isLoading}
        onClick={() =>
          page - 1 < 0 ? handlePage(nbPages - 1) : handlePage(page - 1)
        }
      >
        prev
      </button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button
        disabled={isLoading}
        onClick={() =>
          page + 1 > nbPages - 1 ? handlePage(0) : handlePage(page + 1)
        }
      >
        next
      </button>
    </div>
  )
}

export default Buttons

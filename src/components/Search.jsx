import React, { useState } from 'react'

const Search = (props) => {
  const { cb } = props
  const [value, setValue] = useState('')

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  const handleSubmit = () => {
    cb(value)
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          type="search"
          id="search"
          placeholder="search"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={value}
        />
        <button
          className="btn"
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
          }}
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
    </div>
  )
}

export default Search

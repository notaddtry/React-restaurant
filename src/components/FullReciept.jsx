import React from 'react'
import { useNavigate } from 'react-router-dom'

const FullReciept = (props) => {
  const { strMeal, strArea, strInstructions, strMealThumb } = props.mealsInfo
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()

    navigate(-1)
  }

  return (
    <>
      <button className="btn" onClick={handleSubmit}>
        Go Back
      </button>
      <div className="card reciept-wrapper">
        <div className="card-image reciept-image">
          <img src={strMealThumb} alt={strMeal} />
        </div>
        <span className="card-title">{strMeal}</span>
        <div className="card-content">
          <p>Instruction: {strInstructions}</p>
          <p>Country: {strArea}</p>
        </div>
      </div>
    </>
  )
}

export default FullReciept

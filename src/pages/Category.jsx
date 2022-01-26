import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getFilteredCategory } from '../api'
import Preloader from '../components/Preloader'
import MealList from '../components/MealList'

const Category = () => {
  const { name } = useParams()
  const navigate = useNavigate()
  const [meals, setMeals] = useState([])

  function handleSubmit(event) {
    event.preventDefault()

    navigate(-1)
  }

  useEffect(() => {
    getFilteredCategory(name).then((data) => setMeals(data.meals))
    console.log()
  }, [name])

  return (
    <>
      <button className="btn" onClick={handleSubmit}>
        {' '}
        Go Back
      </button>
      <div>{!meals.length ? <Preloader /> : <MealList meals={meals} />}</div>
    </>
  )
}

export default Category

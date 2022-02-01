import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import FullReciept from '../components/FullReciept'
import Preloader from '../components/Preloader'
import { getMealById } from '../api'

const Reciept = () => {
  const { id } = useParams()
  const [mealsInfo, setMealsInfo] = useState({})

  useEffect(() => {
    getMealById(id).then((data) => {
      setMealsInfo(data.meals[0])
    })
  }, [id])
  return (
    <div>
      {mealsInfo.idMeal ? <FullReciept mealsInfo={mealsInfo} /> : <Preloader />}
    </div>
  )
}

export default Reciept

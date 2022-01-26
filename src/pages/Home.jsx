import React, { useEffect, useState } from 'react'
import { getAllCategories } from '../api'
import Preloader from '../components/Preloader'
import { CategoriesList } from '../components/CategoriesList'

const Home = () => {
  const [catalogue, setCatalogue] = useState([])

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalogue(data.categories)
    })
  }, [])

  return (
    <div>
      {!catalogue.length ? (
        <Preloader />
      ) : (
        <CategoriesList catalogue={catalogue} />
      )}
    </div>
  )
}

export default Home

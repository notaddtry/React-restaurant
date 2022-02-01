import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getAllCategories } from '../api'
import Preloader from '../components/Preloader'
import { CategoriesList } from '../components/CategoriesList'
import Search from '../components/Search'

const Home = () => {
  const [catalogue, setCatalogue] = useState([])
  const [filteredCatalogue, setFilteredCatalogue] = useState([])

  let { pathname, search } = useLocation()
  const navigate = useNavigate()

  const handleSearch = (string) => {
    setFilteredCatalogue(
      catalogue.filter((item) =>
        item.strCategory.toLowerCase().includes(string.toLowerCase())
      )
    )
    search = `?search=${string}`
    navigate(`${pathname}${search}`)
  }

  const filteredLoad = (arr, search) => {
    return arr.filter((item) =>
      item.strCategory
        .toLowerCase()
        .includes(search.split('=')[1].toLowerCase())
    )
  }

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalogue(data.categories)
      setFilteredCatalogue(
        search ? filteredLoad(data.categories, search) : data.categories
      )
    })
  }, [search])

  return (
    <>
      <Search cb={handleSearch} />
      {!catalogue.length ? (
        <Preloader />
      ) : (
        <CategoriesList catalogue={filteredCatalogue} />
      )}
    </>
  )
}

export default Home

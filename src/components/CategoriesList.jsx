import React from 'react'
import { CategoriesItem } from './CategoriesItem'

export const CategoriesList = ({ catalogue = [] }) => {
  return (
    <div className="list">
      {catalogue.map((el) => (
        <CategoriesItem key={el.idCategory} {...el} />
      ))}
    </div>
  )
}

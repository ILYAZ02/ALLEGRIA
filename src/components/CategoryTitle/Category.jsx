import React,{useContext} from 'react'
import { CustomContext } from '../../utils/Context'
const Category = () => {

    const{category}=useContext(CustomContext)

  return (
    <span>
        <p>
          {category  === 't-short' && 'Футболки'}
          {category === 'sweatshirt' && 'Кофты'}
          {category === 'pants' && 'Штаны'}
          {category === 'shoes' && 'Обувь'}
          </p>
    </span>
  )
}

export default Category
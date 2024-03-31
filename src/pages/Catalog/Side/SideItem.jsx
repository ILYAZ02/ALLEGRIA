import React from 'react'
import { useContext } from 'react'
import { CustomContext } from '../../../utils/Context'
const SideItem = ({ text ,value}) => {
 
const {category,changeCategory}=useContext(CustomContext)

  return (
    <li onClick={()=>changeCategory(value)} className={`s.item active ${category === text ? 'active' : ''}`}>{text}</li>
  )
}

export default SideItem
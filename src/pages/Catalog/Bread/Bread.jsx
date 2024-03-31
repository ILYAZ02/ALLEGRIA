import React from 'react'
import { useContext } from 'react'
import s from './Bread.module.scss'
import { CustomContext } from '../../../utils/Context'
import Category from '../../../components/CategoryTitle/Category'
const Brand = () => {
const {gender} = useContext(CustomContext)

  return (
    <div >
      <ul className={s.bread}>
      
        <li className={s.item}>Главная</li>
        <li className={s.item}>
          {gender === 'women' && "Женщины"}
          {gender === 'men' && "Мужчины"}
        
        </li>
     
        <li className={s.item}>
          <Category/>
        </li>
      </ul>
    </div>
  )
}

export default Brand
import { useContext } from 'react'
import { CustomContext } from '../../../utils/Context'
import React from 'react'
import s from './Side.module.scss'
import SideItem from './SideItem'
const Sidebar = () => {

    const { gender, category, changeGender, changeCategory } = useContext(CustomContext)

    return (
        <aside className={s.sidebar}>
            <div className={s.lang}>
                <p onClick={() => changeGender('women')} className={`s.items active ${gender === 'women' ? 'active' : ''}`}>Женщины</p>
                <p onClick={() => changeGender('men')} className={`s.items active ${gender === 'men' ? 'active' : ''}`}>Мужчины</p>
            </div>
            <ul className={s.menu}>
                <p><SideItem value={'t-short'} text={'Футболки'} /></p>
                <p> <SideItem value={'sweatshirt'} text={'Кофты'} /></p>
                <p> <SideItem value={'pants'} text={'Штаны'} /></p>
                <p>   <SideItem value={'shoes'} text={'Обувь'} /> </p>

            </ul>
        </aside>
    )
}

export default Sidebar
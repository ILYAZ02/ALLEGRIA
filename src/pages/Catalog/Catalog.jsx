import React, { useContext, useEffect } from 'react'
import Bread from './Bread/Bread.jsx'
import s from '../../pages/Catalog/Catalog.module.scss'
import Sidebar from './Side/Sidebar.jsx'
import Category from '../../components/CategoryTitle/Category.jsx'
import Row from './Row/Row.jsx'
import { CustomContext } from '../../utils/Context.js'
const Catalog = () => {

  const { category, getProducts } = useContext(CustomContext)

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <section className={s.catalog}>
      <div className={s.container}>
        <Bread />
        <div className={s.content}>
          <Sidebar />
          <div className={s.right}>
            <h2 className={s.title}>
              <Category />
            </h2>
            <Row />

          </div>
        </div>
      </div>
    </section>
  )
}

export default Catalog
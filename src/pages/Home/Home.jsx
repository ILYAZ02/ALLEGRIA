import React from 'react'
import s from '../Home/Home.module.scss'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation();


  return (
    <div className={s.header}>
      <div className={s.brand}>
        <div>
          <h3>{t("brand.link4")}</h3>
          <h1>{t("brand.link5")}</h1>
          <p>{t("brand.link6")}</p>
        </div>
      </div>
    </div>
  )
}

export default Home
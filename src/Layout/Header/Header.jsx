import React from 'react'
import s from '../Header/Header.module.scss'
import img1 from '../../img/Group 32.svg'
import img2 from '../../img/Vector 26 (Stroke).svg'
import img3 from '../../img/Group 31.svg'
import logo from '../../img/Group.svg'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
const Header = () => {


    const {t, i18n} = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }

    return (
        <header className={s.header}>
            <div className={s.container}>
                <div className={s.header_nav}>
                    <Link to="/">
                        <img className={s.header_title} src={logo} alt="" />
                    </Link>
                    <div className={s.header_menu}>
                        <Link className={s.link} to="/catalog">{t("header.link1")}</Link>
                        <Link className={s.link} to="/catalog">{t("header.link2")}</Link>
                        <label htmlFor="" className={s.search}>
                            <span className={s.text}>{t("header.link3")}</span>
                            <input className={s.field} type="text" />
                        </label>
                    </div>
                    <div className={s.right}>
                            <div><p className={`header__lang-link ${i18n.language === 'ru' ? 'active' : ''}`} onClick={() => changeLanguage('ru')}>RU</p></div>
                            <div><p className={`header__lang-link ${i18n.language === 'en' ? 'active' : ''}`} onClick={() => changeLanguage('en')}>EN</p></div>
                          
                        <div className={s.icons}>
                            <img src={img1} alt="" />
                            <img src={img2} alt="" />
                            <img src={img3} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header
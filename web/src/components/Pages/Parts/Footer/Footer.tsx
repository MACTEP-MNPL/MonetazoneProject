import {Button} from "../../../UI/Buttons/Button/Button.tsx";
import whiteArrow from '@/assets/svgs/white-arrow.svg'
import footerLogo from '@/assets/svgs/footer-logo.svg'

import './footer.scss'
import {NavLink} from "react-router-dom";

export const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="columns">
                    <div className="column">
                        <div className='title'>
                            <h3 className='bold'>Организация</h3>
                            <img src={whiteArrow} alt=""/>
                        </div>
                        <NavLink to='/about'>О нас</NavLink>
                        <NavLink to='/'>Гео нашей работы</NavLink>
                        <NavLink to='/'>Адрес офиса</NavLink>
                        <NavLink to='/'>Отзывы нашей компании</NavLink>
                    </div>

                    <div className="column">
                        <div className='title'>
                            <h3 className='bold'>Онлайн платежи</h3>
                            <img src={whiteArrow} alt=""/>
                        </div>
                        <NavLink to='/swiftsepa'>Swift / Sepa переводы</NavLink>
                        <NavLink to='/fea'>ВЭД</NavLink>
                    </div>

                    <div className="column">
                        <div className='title'>
                            <h3 className='bold'>Наличные</h3>
                            <img src={whiteArrow} alt=""/>
                        </div>
                        <NavLink to='/cash'>Выдача наличных</NavLink>
                        <NavLink to=''>Обмен валюты</NavLink>
                    </div>

                    <div className="column">
                        <div className='title'>
                            <h3 className='bold'>Соц. сети</h3>
                            <img src={whiteArrow} alt=""/>
                        </div>
                        <a href="">Наш Telegram канал</a>
                        <a href="">Наша группа ВЭД</a>
                    </div>
                </div>

                <div className="body">
                    <div className="top">
                        <Button type='white' isWide={true}>
                            <div style={{color:'black'}} className='flex bold'>
                                Связаться с менеджером
                            </div>
                        </Button>
                        <img className='logo' src={footerLogo} alt='Yan Hait and Monetazone'/>
                    </div>

                    <div className="bottom">
                        <div className="copyright">
                            <a href="">Copyright © 2024 Monetazone</a>
                            <a href="">Все права защищены</a>
                        </div>

                        <div className="agreement">
                            <a href="">Пользовательское соглашение<br/></a>
                            <a href="">AML/KYC Политика</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
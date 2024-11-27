import { FC } from "react";
import './mobileFooter.scss'
import { NavLink } from "react-router-dom";
import whiteArrow from '@/assets/svgs/white-arrow.svg'
import footerLogo from '@/assets/svgs/footer-logo.svg'
import blackArrow from '@/assets/svgs/black-arrow.svg'
import { Button } from "@/components/UI/Buttons/Button/Button.tsx";

export const MobileFooter: FC = () => {
  return (
    <footer className="mobileFooter">
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
                    <h3 className='bold'>Соц. сети</h3>
                    <img src={whiteArrow} alt=""/>
                </div>
            <a href="">Наш Telegram канал</a>
            <a href="">Наша группа ВЭД</a>
            </div>
        </div>

        <div className="bottom">
            <div className="top">
                <img className='logo' src={footerLogo} alt="Yan Hait and Monetazone"/>
                
                <Button type='white'>
                    <div style={{color:'black'}} className='bold'>
                        Связаться с менеджером <img src={blackArrow} alt=""/>
                    </div>
                </Button>
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
  );
};

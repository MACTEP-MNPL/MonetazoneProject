import './exchangerPage.scss'
import exchangerLogo from '@/assets/svgs/exchanger-logo.svg'
import {Button} from "../../UI/Buttons/Button/Button.tsx";
import {NavLink} from "react-router-dom";

export const ExchangerPage = () => {
    return (
        <section className='page exchangerPage'>
            <h1>
                Онлайн обменник находится в разработке :)
            </h1>

            <p>
                На данный момент мы проводим<br /> физические обмены по хорошему курсу
            </p>

            <img style={{width: '20rem'}} src={exchangerLogo} alt="Yan Hait and Monetazone"/>

            <NavLink to='/'>
                <Button type='whiteBrd' isWide={true}><NavLink to='/'>Вернуться на главную страницу</NavLink></Button>
            </NavLink>
        </section>)
}
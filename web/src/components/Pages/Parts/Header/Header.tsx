import './header.scss'
import logo from '../../../../assets/svgs/logo.svg'
import {Button} from "../../../UI/Buttons/Button/Button.tsx";
import {NavLink} from "react-router-dom";
import {showAppPopUp} from "@/store/appPopUpSlice.ts";
import {useDispatch} from "react-redux";


export const Header = () => {
    const dispatch = useDispatch()

    const showApplicationPopUp = () => {
        dispatch(showAppPopUp())
    }


    return (
        <>
            <header>
                <NavLink to='/' className="logo">
                    <img src={logo} alt="CoinSwap"/>
                </NavLink>

                <nav>
                    <ul>
                        <li><NavLink to='/about'>O нас</NavLink></li>
                        <li><NavLink to='/fea'>ВЭД</NavLink></li>
                        <li><NavLink to='/swiftsepa' className="flex">Swift<span>&</span>Sepa</NavLink></li>
                        <li><NavLink to='/exchange'>Обмен</NavLink></li>
                        <li><NavLink to='/cash'>Выдача наличных</NavLink></li>
                    </ul>
                </nav>

                <div className="menu">
                    <NavLink to='/exchanger' className="mainColor">Онлайн обменник</NavLink>
                    <Button
                        isWide={false}
                        onClick={showApplicationPopUp}
                    >Создать заявку</Button>
                </div>
            </header>
            <div className="header-padding"></div>
        </>
    );
}
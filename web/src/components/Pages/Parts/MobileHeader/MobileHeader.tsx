import logo from "@/assets/svgs/logo.svg";
import {NavLink} from "react-router-dom";
import './mobileHeader.scss'
import {useEffect, useRef, useState} from "react";
import { Badge } from "@/components/UI/Badges/Badge/Badge";
import {getW} from "@/utils/getW.ts";
import {Button} from "@/components/UI/Buttons/Button/Button.tsx";
import {useAppDispatch} from "@/store/hooks.ts";
import {showAppPopUp} from "@/store/appPopUpSlice.ts";

export const MobileHeader = () => {

    const ref = useRef(null)

    const [isOpen, setIsOpen] = useState(false)

    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
            setIsVisible(false)
        } else {
            setIsVisible(true)
        }
        setLastScrollY(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, [lastScrollY])

    const dispatch = useAppDispatch()

    const showPopUp = () => {
        dispatch(showAppPopUp())
    }

    return (
        <div className={`mobileHeader ${isVisible ? 'visible' : 'hidden'}`}>
            <header ref={ref}>
                <div className="left">
                    <NavLink to='/' className="logo">
                        <img src={logo} alt="CoinSwap"/>
                    </NavLink>

                    {(isOpen || getW() > 1000) && (
                        <div className="badges">
                            <NavLink onClick={() => setIsOpen(false)} data-aos-duration="300" data-aos='fade-right'
                                     to='/about'><Badge>О нас</Badge></NavLink>
                            <NavLink onClick={() => setIsOpen(false)} data-aos-duration="400" data-aos='fade-right'
                                     to='/fea'><Badge>ВЭД</Badge></NavLink>
                            <NavLink onClick={() => setIsOpen(false)} data-aos-duration="500" data-aos='fade-right'
                                     to='/swiftsepa'><Badge>Swift/Sepa</Badge></NavLink>
                            <NavLink onClick={() => setIsOpen(false)} data-aos-duration="600" data-aos='fade-right'
                                     to='/exchange'><Badge>Обмен</Badge></NavLink>
                            <NavLink onClick={() => setIsOpen(false)} data-aos-duration="700" data-aos='fade-right'
                                     to='/cash'><Badge>Наличные</Badge></NavLink>
                        </div>
                    )}
                </div>

                {getW() > 1000 ?
                    (<>
                    <Button style={{borderRadius: '2rem'}} onClick={showPopUp}>Создать заявку</Button>
                    </>)
                    :
                    (<>
                        <div className="right pointer">
                            <div className={`icon ${isOpen && 'open'}`} onClick={() => setIsOpen(!isOpen)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"
                                     fill={isOpen ? '#fff' : '#8D8D8D'}>
                                    <rect width="20" height="3" rx="1.5" fill={isOpen ? '#fff' : '#8D8D8D'}/>
                                    <rect y="14" width="20" height="3" rx="1.5" fill={isOpen ? '#fff' : '#8D8D8D'}/>
                                    <rect x="3" y="7" width="15" height="3" rx="1.5"
                                          fill={isOpen ? '#fff' : '#8D8D8D'}/>
                                </svg>
                            </div>
                        </div>
                    </>)}
            </header>
        </div>
    );
}
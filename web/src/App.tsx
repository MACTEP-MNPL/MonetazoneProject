import {MainPage} from "./components/Pages/MainPage/MainPage.tsx";
import {Footer} from "./components/Pages/Parts/Footer/Footer.tsx";
import {Route, Routes} from "react-router-dom";
import {AboutPage} from "./components/Pages/AboutPage/AboutPage.tsx";
import {SwiftSepaPage} from "./components/Pages/SwiftSepaPage/SwiftSepaPage.tsx";
import {ExchangerPage} from "./components/Pages/ExchangerPage/ExchangerPage.tsx";
import {ScrollToTop} from "@/components/Utils/ScrollToTop.tsx";
import {PopUp} from "./components/UI/PopUps/PopUp.tsx";
import {useAppSelector} from "./store/hooks.ts";
import {WithdrawPage} from "./components/Pages/WithdrawPage/WithdrawPage.tsx";
import {getW} from "@/utils/getW.ts";
import {MobileHeader} from "@/components/Pages/Parts/MobileHeader/MobileHeader.tsx";
import {hideAppPopUp} from "@/store/appPopUpSlice.ts";
import {FeaPage} from "./components/Pages/FeaPage/FeaPage.tsx";
import {ExchangePage} from "./components/Pages/ExchangePage/ExchangePage.tsx";
import { MobileFooter } from "./components/Pages/Parts/MobileFooter/MobileFooter.tsx";
import { MobApplication } from "./components/UI/MobApplication/MobApplication.tsx";


export const App = () => {

    const {appPopUp} = useAppSelector(state => state)

    return (
        <>

            <PopUp type='app' data-aos-duration="1000" data-aos='fade-up' className='mobAppPopUp' isShown={appPopUp.isShown} hidePopUpFunction={hideAppPopUp}>
                <MobApplication />
            </PopUp>    
            
            <div className='app'>

                {(!appPopUp.isShown && <MobileHeader />)}

                <main>
                    <ScrollToTop/>
                    <Routes>
                        <Route path='*' element={<MainPage/>} />
                        <Route path='/about' element={<AboutPage/>} />
                        <Route path='/swiftsepa' element={<SwiftSepaPage/>} />
                        <Route path='/exchanger' element={<ExchangerPage/>} />
                        <Route path='/cash' element={<WithdrawPage />} />
                        <Route path='/fea' element={<FeaPage />} />
                        <Route path='/exchange' element={<ExchangePage />} />
                    </Routes>
                </main>

                {getW() >= 1000 ? <Footer/> : <MobileFooter />}
            </div>
        </>
    )
}

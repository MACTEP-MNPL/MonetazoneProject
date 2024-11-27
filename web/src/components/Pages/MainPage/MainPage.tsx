import './mainPage.scss'
import {MainPageThirdSection} from "./MainPageThirdSection.tsx";
import { Section } from '@/components/UI/Section/Section.tsx';
import main1 from '@/assets/svgs/main-1.svg'
import main2 from '@/assets/svgs/main-2.svg'
import main4 from '@/assets/svgs/main-4.svg'
import main5 from '@/assets/svgs/main-5.svg'
import main6 from '@/assets/svgs/main-6.svg'
import { Button } from '@/components/UI/Buttons/Button/Button.tsx';
import { useDispatch } from 'react-redux';
import { setAppType, showAppPopUp, isCash } from '@/store/appPopUpSlice.ts';
import { goToCountriesSection } from '@/components/Utils/goToCountriesSection.ts';
import { useNavigate } from 'react-router-dom';

export const MainPage = () => {
    const dispatch = useDispatch();

    const showApplicationPopUp = () => {
        dispatch(showAppPopUp());
    }

    const showCashAppPopUp = () => {
        dispatch(setAppType('cash'));
        dispatch(isCash());
        dispatch(showAppPopUp());
    }

    const navigator = useNavigate()

    return (
        <>
            <main className="page">
                <Section
                    type='imgLeft'
                    img={{src: main1, alt: ''}}
                    className='mainPage-first'
                    >

                        <h1>
                            Быстрые и надежные <br/>Swift & Sepa переводы<br/> по всему миру!
                        </h1>

                        <div className="buttons">
                            <Button
                                onClick={showApplicationPopUp}
                                data-aos-duration="1600"
                                data-aos='fade-up'
                                style={{borderBottomRightRadius: 0}}
                                isWide={true}
                                >Создать заявку сейчас</Button>
                            <Button
                                data-aos-duration="2500"
                                data-aos='fade-up'
                                style={{borderTopRightRadius: 0}}
                                isWide={true}
                                type="trans">Ленивая заявка</Button>
                        </div>

                </Section>

                <Section
                    type='imgRight'
                    title='Доверенный брокер в мире логистики финансовых услуг'
                    description={['Проводите успешную внешнеэкономическую деятельность с помощью YanHait x Monetazone']}
                    img={{src: main2, alt: ''}}
                    className='mainPage-second'
                >
                
                </Section>
                <MainPageThirdSection />
                <Section
                    type='imgRight'
                    title='Выдача наличных по всему миру'
                    badges={['Касса', 'Курьер']}
                    img={{src: main4, alt: ''}}
                    className='mainPage-fourth'
                    description={['Выводите наличные по всему ЕС, Азии, СНГ, Северной Америке и других континентах']}
                >
                    <Button
                        onClick={() => goToCountriesSection(navigator)}
                        data-aos-duration="1600"
                        data-aos='fade-right'
                        isWide={true}>Гео выдачи наличных</Button>
                </Section>

                <Section
                    type='imgLeft'
                    title='Перестановки денежных средств в любое время'
                    img={{src: main5, alt: ''}}
                    className='mainPage-fifth'
                    description={['Передавайте деньги в другую страну наличными за 15 минут, быстро и конфеденциально']}
                >
                    <Button     
                        data-aos-duration="1600"
                        data-aos='fade-left' 
                        onClick={showCashAppPopUp}
                        isWide={true}>Совершить перестановку</Button>
                </Section>       
                
                <Section
                    type='imgRight'
                    title='Удобный Telegram бот для создания заявки'
                    description={['Создавайте первую заявку на сайте, после чего используйте наш telegram бот для консультаций, а так-же последующих сделок']}
                    img={{src: main6, alt: ''}}
                    className='mainPage-sixth'
                >
                    <Button
                            onClick={showApplicationPopUp}
                            data-aos-duration="1600" data-aos='zoom-out'
                            isWide={true}
                        >Создать заявку сейчас</Button>
                </Section>
            </main>
        </>
    )
}
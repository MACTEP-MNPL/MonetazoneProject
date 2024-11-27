import {Section} from "@/components/UI/Section/Section";
import exchange1 from '@/assets/svgs/exchange-1.svg'
import exchange3 from '@/assets/svgs/exchange-3.svg'
import exchange4 from '@/assets/svgs/exchange-4.svg'
import exchange5 from '@/assets/svgs/exchange-5.svg'
import { Badge } from "@/components/UI/Badges/Badge/Badge";
import './exchangePage.scss'
import { Button } from "@/components/UI/Buttons/Button/Button";
import { showAppPopUp, setAppType } from "@/store/appPopUpSlice.ts";
import { useDispatch } from "react-redux";


export const ExchangePage = () => {
    const dispatch = useDispatch();

    const openExchangePopUp = () => {
        dispatch(setAppType('cash'));
        dispatch(showAppPopUp());
    }

    return (
        <div className="page exchangePage">
            <Section
                type='imgLeft'
                title='Быстрый и надежный обмен – удобно, выгодно, безопасно!'
                badges={['#Резервы', '#Курсы', '#Обмен']}
                img={{src: exchange1, alt: ''}}
                className='exchangePage-first'
                id='0'
            >
                <div className="guide"
                         data-aos-duration="1400"
                         data-aos='fade-left'>
                        Быстро переходите к интересующему<br/>
                        блоку информационого раздела<br/>
                        нажатием на <Badge style={{display: 'inline'}}>#Кнопку</Badge>
                </div>
            </Section>



            <Section
                type='imgLeft'
                title='Стабильность и уверенность с нашими большими резервами!'
                badges={['#Резервы']}
                description={['Благодаря обширным резервам, мы обеспечиваем надежность и скорость в каждой операции!']}
                img={{src: exchange3, alt: ''}}
                className='exchangePage-third'
                id='1'
            />

            <Section
                type='imgRight'
                title='Выгодные курсы для каждого обмена!'
                badges={['#Курсы']}
                description={['Мы предлагаем выгодные курсы для каждого обмена, чтобы вы могли получить максимальную выгоду!']}
                img={{src: exchange4, alt: ''}}
                className='exchangePage-fourth'
                id='2'
            />

            <Section
                type='imgLeft'
                title='Быстрый обмен – мгновенно и без хлопот!'
                badges={['#Обмен']}
                description={['Мы предлагаем быстрый обмен, чтобы вы могли получить результат в кратчайшие сроки!']}
                img={{src: exchange5, alt: ''}}
                className='exchangePage-fifth'
                id='3'
            >

                <Button
                    type='basic'
                    onClick={openExchangePopUp}
                    isWide
                >
                    Совершить обмен
                </Button>
            </Section>
        </div>
    )
}
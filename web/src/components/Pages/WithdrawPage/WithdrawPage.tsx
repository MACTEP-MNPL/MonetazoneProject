import {FC} from "react";
import './withdrawPage.scss'
import { Section } from "@/components/UI/Section/Section.tsx";
import { Badge } from "@/components/UI/Badges/Badge/Badge.tsx";

import { WPFifthSection } from "./WPFifthSection.tsx";

import w1 from '@/assets/svgs/withdraw-1.svg'
import w2 from '@/assets/svgs/withdraw-2.svg'
import w3 from '@/assets/svgs/withdraw-3.svg'
import w4 from '@/assets/svgs/withdraw-4.svg'

export const WithdrawPage: FC = () => {
    return (
        <div className='withdrawPage page'>
            <Section
                id='0'
                type='imgLeft'
                img={{src: w1, alt: ''}}
                title='Переводите наличные в 40+ странах мира с помощью Yan Hait & Monetazone'
                badges={['#Доставка', '#Резервы', '#Чистота', '#Выдача/Приём']}
                className='WP-first'
                >

                <div
                    data-aos-duration="1600" data-aos='fade-left'
                    className='guide'>Быстро переходите к интересующему<br />
                    блоку информационого раздела<br />
                    нажатием на <Badge style={{display: 'inline'}} >#Кнопку</Badge>
                </div>
                
            </Section>

            <Section
                id='1'
                title='Monetazone дает выбор варианта доставки ваших средств к месту назначения'
                badges={['#Доставка']}
                description={['Клиент может выбрать получение валюты на кассе или доставку курьером в максимально быстрые сроки!']}
                type='imgRight'
                img={{src: w2, alt: ''}}
                className='WP-second'
            >

            </Section>

            <Section
                id='2'
                title='Предоставляем любые обьемы наличных в каждой стране с которой мы работаем'
                badges={['#Резервы']}
                description={['Наши резервы позволяют выполнить любую задачу клиента.', 'Мы выдаем наличные от 20.000$ без лимитов на максимальную сумму совершения сделки.']}
                type='imgLeft'
                img={{src: w3, alt: ''}}
                className='WP-third'
            >

            </Section>

            <Section
                id='3'
                title='Мы всегда работаем прозрачно и без скрытых комиссий'
                badges={['#Чистота']}
                description={['Наша компания не берет скрытых от клиента комиссий и процентов.', 'Мы гарантируем прозрачность в процессе выдачи наличных и избегаем скрытых платежей.', 'Все условия сделки обсуждаются заранее, чтобы вы точно знали, сколько и за что платите.']}
                type='imgRight'
                img={{src: w4, alt: ''}}
                className='WP-fourth'
            >

            </Section>

            <WPFifthSection />
        </div>
    )
}
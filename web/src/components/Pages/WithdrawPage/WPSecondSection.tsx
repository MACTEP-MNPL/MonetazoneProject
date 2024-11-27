import {Badge} from "../../UI/Badges/Badge/Badge.tsx";
import svg from '@/assets/svgs/withdraw-2.svg'

export const WPSecondSection = () => {
    return (
        <>
            <section id='2' className='WP-second'>
                <div className="pageLeft">
                    <h2
                        data-aos-duration="1000" data-aos='fade-right'
                    >Monetazone дает выбор<br/>
                        варианта доставки<br/>
                        ваших средств<br/>
                        к месту назначения </h2>

                    <Badge
                        targetId='0'
                        data-aos-duration="1200" data-aos='fade-right'
                    >#Доставка</Badge>

                    <p
                        data-aos-duration="1400" data-aos='fade-right'
                    >Клиент может выбрать получение валюты на кассе<br/>
                        или доставку курьером в максимально быстрые<br/>
                        сроки!
                    </p>
                </div>

                <img
                    data-aos-duration="1600" data-aos='fade-left'
                    src={svg} alt=""/>
            </section>
        </>
    )
}
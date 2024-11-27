import {Badge} from "@/components/UI/Badges/Badge/Badge.tsx";
import swift6 from '@/assets/svgs/swift-6.svg'

export const SSPSixthSection = () => {
    return (
        <>
            <section id='6' className='SSP-sixth'>
                <div className="pageLeft">
                    <h2
                        data-aos-duration="1000"
                        data-aos='fade-right'
                    >Платежи для учебы <br />
                        и товаров без границ <br />
                        вместе с Monetazone</h2>
                    <Badge
                        data-aos-duration="1200"
                        data-aos='fade-right'
                    >#БезГраниц</Badge>
                    <p
                        data-aos-duration="1300"
                        data-aos='fade-right'
                    >Оплата за обучение, курсы повышения квалификации или покупку товаров теперь проще, чем когда-либо.</p>

                    <p
                        data-aos-duration="1400"
                        data-aos='fade-right'
                    >С помощью Swift <span>&</span> Sepa вы можете оплатить счета за образовательные программы или товары в любой точке мира.</p>

                    <p
                        data-aos-duration="1500"
                        data-aos='fade-right'
                    >Наши решения гарантируют быстрые и надежные переводы, где бы вы ни находились.</p>
                </div>
                <img
                    data-aos-duration="1700"
                    data-aos='fade-left'
                    src={swift6} alt=""/>
            </section>
        </>
    )
}
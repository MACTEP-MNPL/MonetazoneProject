import {Badge} from "@/components/UI/Badges/Badge/Badge.tsx";
import swift2 from '@/assets/svgs/swift-2.svg'

export const SSPSecondSection = () => {
    return (
        <>
            <section id='2' className='SSP-second'>
                <div className="pageLeft">
                    <h2
                        data-aos-duration="1000"
                        data-aos='fade-right'
                    >Swift <span>&</span> Sepa <br />
                        удобные международные <br />
                        платежи с monetazone</h2>
                    <Badge
                        data-aos-duration="1200"
                        data-aos='fade-right'
                    >#Мир</Badge>
                    <p
                        data-aos-duration="1300"
                        data-aos='fade-right'
                    >Платежи за товары и услуги по всему миру теперь стали проще благодаря Swift <span>&</span> Sepa.</p>
                    <p
                        data-aos-duration="1400"
                        data-aos='fade-right'
                    >Наши решения позволяют вам оперативно и безопасно переводить средства за любые продукты и услуги, будь то недвижимость, маркетинг, IT-проекты или товары первой необходимости.</p>
                    <p
                        data-aos-duration="1500"
                       data-aos='fade-right'>Мы заботимся о том, чтобы ваш бизнес мог без проблем взаимодействовать с партнерами и клиентами по всему миру, используя проверенные временем системы международных переводов.</p>
                </div>
                <img
                    data-aos-duration="1700"
                    data-aos='fade-left'
                    src={swift2} alt=""/>
            </section>
        </>
    )
}
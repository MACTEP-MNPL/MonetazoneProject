import {Badge} from "@/components/UI/Badges/Badge/Badge.tsx";
import swift3 from '@/assets/svgs/swift-3.svg'

export const SSPThirdSection = () => {
    return (
        <>
            <section id='3' className='SSP-third'>
                <img data-aos-duration="1000"
                     data-aos='fade-right'
                     src={swift3} alt=""/>

                <div className="pageRight">
                    <h2
                        data-aos-duration="1200"
                        data-aos='fade-left'
                    >Оплата транспортных <br />
                        средств с <br />
                        уверенностью</h2>
                    <Badge
                        data-aos-duration="1400"
                        data-aos='fade-left'
                    >#Aвто</Badge>
                    <p
                        data-aos-duration="1500"
                        data-aos='fade-left'
                    >С нами покупка и оплата легковых автомобилей, грузовиков и специализированной техники — это просто.</p>

                    <p
                        data-aos-duration="1600"
                        data-aos='fade-left'
                    >Мы обеспечиваем полную безопасность транзакций, будь то расчеты с автосалонами или оплата инвойсов за транспортные средства.</p>

                    <p
                        data-aos-duration="1700"
                        data-aos='fade-left'
                    >Каждая операция проходит быстро и надежно, что позволяет вам сосредоточиться на развитии бизнеса, а не на финансовых вопросах.</p>
                </div>
            </section>
        </>
    )
}
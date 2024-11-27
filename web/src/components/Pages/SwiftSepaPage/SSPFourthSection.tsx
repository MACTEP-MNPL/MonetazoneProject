import {Badge} from "@/components/UI/Badges/Badge/Badge.tsx";
import swift4 from '@/assets/svgs/swift-4.svg'
export const SSPFourthSection = () => {
    return (
        <>
            <section id='4' className='SSP-fourth'>
                <div className="pageLeft">
                    <h2
                        data-aos-duration="1000"
                        data-aos='fade-right'
                    >Поддержка различных <br />
                        валют для вашего <br />
                        комфорта
                    </h2>

                    <Badge
                        data-aos-duration="1200"
                        data-aos='fade-right'
                    >#Валюты</Badge>

                    <p
                        data-aos-duration="1300"
                        data-aos='fade-right'
                    >Международная торговля требует гибкости в выборе валют. Мы предлагаем вам широкий спектр возможностей для расчетов:</p>

                    <p
                        data-aos-duration="1400"
                        data-aos='fade-right'
                    >От долларов и евро до экзотических валют, таких как корейская вона и индийская рупия.</p>

                    <p
                        data-aos-duration="1500"
                        data-aos='fade-right'
                    >Наша компания поддерживает удобные и безопасные платежи, обеспечивая оперативные и точные транзакции в нужной вам валюте.</p>
                </div>
                <img data-aos-duration="1700"
                     data-aos='fade-left'
                     src={swift4} alt=""/>
            </section>
        </>
    )
}
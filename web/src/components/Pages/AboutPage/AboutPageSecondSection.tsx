import {Badge} from "../../UI/Badges/Badge/Badge.tsx";
import about2 from '@/assets/svgs/about-2.svg'

export const AboutPageSecondSection = () => {
    return (
        <section id={'2'} className='aboutPage-second'>
            <div className="pageLeft">
                <h2
                    data-aos-duration="1000"
                    data-aos='fade-right'
                >Monetazone обеспечивает<br />
                    гарантию<br />
                    безопасного, а так же<br />
                    эффективного сотрудничества<br />
                    по ВЭД и наличным<br />
                </h2>

                <Badge
                    data-aos-duration="1200"
                    data-aos='fade-right'>#Гарантии</Badge>

                <p
                    data-aos-duration="1400"
                    data-aos='fade-right'>Мы работаем почти во всех странах мира, обеспечивая удобные и быстрые обмены, в том числе и переводы по системам SWIFT <span>&</span> SEPA.</p>
                <p
                    data-aos-duration="1600"
                    data-aos='fade-right'>Мы гарантируем безопасность ваших транзакций, минимизируем риски и ускоряем процесс обмена.                  Наша команда придаёт большое значение безопасности клиентов, применяя строгие меры защиты информации.</p>
                <p
                    data-aos-duration="1800"
                    data-aos='fade-right'>Сотрудничество с нами — это гарантия вашего спокойствия. Мы берем на себя все формальности по оплате счетов и переводу средств, чтобы вы могли сосредоточиться на развитии своего бизнеса.</p>
            </div>

            <img
                data-aos-duration="2000"
                data-aos='fade-left' src={about2} alt=""/>
        </section>
    )
}
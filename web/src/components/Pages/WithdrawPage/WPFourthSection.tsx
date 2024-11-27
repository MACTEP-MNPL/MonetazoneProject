import {Badge} from "../../UI/Badges/Badge/Badge.tsx";
import svg from '@/assets/svgs/withdraw-4.svg'

export const WPFourthSection = () => {
    return (
        <>
            <section id='4' className='WP-fourth'>
                <div className="pageLeft">
                    <h2
                        data-aos-duration="1000" data-aos='fade-right'
                    >Мы всегда работаем <br/>
                        прозрачно и без <br/>
                        скрытых комиссий
                    </h2>

                    <Badge
                        targetId='0'
                        data-aos-duration="1200" data-aos='fade-right'
                    >#Чистота</Badge>

                    <p
                        data-aos-duration="1400" data-aos='fade-right'
                    >Наша компания не берет скрытых <br/>
                        от клиента комиссий и процентов.
                    </p>

                    <p
                        data-aos-duration="1600" data-aos='fade-right'
                    >Мы гарантируем прозрачность в процессе выдачи <br/>
                        наличных и избегаем скрытых платежей. Все <br/>
                        условия сделки обсуждаются заранее, чтобы вы <br/>
                        точно знали, сколько и за что платите, без <br/>
                        неожиданных комиссий.
                    </p>
                </div>

                <img
                    data-aos-duration="1800" data-aos='fade-left'
                    src={svg} alt=""/>
            </section>
        </>
    )
}
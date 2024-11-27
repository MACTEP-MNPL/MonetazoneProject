import blueArrow from '@/assets/svgs/blue-arrow.svg'
import blackArrow from '@/assets/svgs/black-arrow.svg'
import main3 from '@/assets/svgs/main-3.svg'

import { useImageLoader } from '@/hooks/useImageLoader'

export const MainPageThirdSection = () => {
    const main3Src = useImageLoader(main3)
    return (
        <>
            <div className='mainPage-third'>
                <div className="title">
                    <div>
                        <h2
                            data-aos-duration="1000" data-aos='fade-left'>Платежный агент для <br/>юридических лиц РФ</h2>
                        <p
                            data-aos-duration="1300" data-aos='fade-left'>Мы помогаем оплачивать инвойсы<br/> по агентскому договору,<br/>быстрее всех на рынке</p>
                    </div>
                </div>

                <div className="bottom">
                    <div className="steps">
                        <div className='left step one'
                            data-aos-duration="1000" data-aos='flip-up'>
                            <h2>1 этап</h2>
                            <p>Заключаете договор с нашей компанией-нерезидентом с открытым счетом в банке </p>
                        </div>
                        <div className='arrow two'
                            data-aos-duration="1000" data-aos='flip-up'>
                            <img src={blueArrow} alt='arrow to next step' />
                            <div className="right step">
                                <h2>2 этап</h2>
                                <p>Переводите рубли со счета Юр.Лица на счет компании нерезидента по договору</p>
                            </div>
                        </div>

                        <div className='arrow three'
                            data-aos-duration="1000" data-aos='flip-up'>
                            <div className="left step">
                                <h2>3 этап</h2>
                                <p>Конвертируем рубли в валюту обозначенную контрактом и инвойсом</p>
                            </div>
                            <img src={blackArrow} alt='arrow to next step'/>
                        </div>

                        <div className='four'   
                            data-aos-duration="1000" data-aos='flip-up'>
                            <img src={main3Src} alt="bank"/>
                            <div className='right step'>
                                <h2>4 этап</h2>
                                <p>Оплачиваем инвойс за вашу компанию</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
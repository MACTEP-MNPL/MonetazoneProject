import about1 from '@/assets/svgs/about-1.svg'
import {Badge} from "../../UI/Badges/Badge/Badge.tsx";


export const AboutPageFirstSection = () => {

    return (
        <>
            <section className='aboutPage-first'>
                <div className="left"
                     data-aos-duration="1000" data-aos='fade-down-right'>
                        <h2 className="title">O нас</h2>
                        <p>Узнайте информацию о работе<br /> нашей компании, адреса и<br /> контакты менеджеров.</p>
                        <img src={about1} alt=""/>

                </div>

                <div className="pageRight">
                    <h1 data-aos-duration="1200"
                        data-aos='fade-left'
                        className="title">
                        Мы - проверенный <br /> ВЭД брокер<br /> на рынке финансов<br /> Yan Hait <span className='span h1'>&</span> Monetazone
                    </h1>

                    <div className="badges"
                         data-aos-duration="1400" data-aos='fade-left'
                         >
                        <Badge
                            data-aos-duration="1100"
                            data-aos='fade-up'
                            >#О нас</Badge>
                        <Badge
                            targetId={'2'}
                            data-aos-duration="1200"
                            data-aos='fade-up'
                            >#Гарантии</Badge>
                        <Badge
                            targetId={'3'}
                            data-aos-duration="1300"
                            data-aos='fade-up'
                            >#Доверие</Badge>
                        <Badge
                            targetId={'4'}
                            data-aos-duration="1400"
                            data-aos='fade-up'
                            >#ВЭД</Badge>
                        <Badge
                            targetId={'5'}
                            data-aos-duration="1500"
                            data-aos='fade-up'
                            >#Наличные</Badge>
                        <Badge
                            targetId={'6'}
                            data-aos-duration="1600"
                            data-aos='fade-up'
                        >#Адрес</Badge>
                        <Badge
                            targetId={'7'}
                            data-aos-duration="1700"
                            data-aos='fade-up'
                            >#Контакты</Badge>
                        <Badge
                            targetId={'8'}
                            data-aos-duration="1800"
                            data-aos='fade-up'
                        >#Отзывы</Badge>

                    </div>

                    <div className="guide"
                         data-aos-duration="2000"
                         data-aos='fade-left'>
                        Быстро переходите к интересующему<br/>
                        блоку информационого раздела<br/>
                        нажатием на <Badge style={{display: 'inline'}}>#Кнопку</Badge>
                    </div>

                </div>


            </section>
        </>
    )
}
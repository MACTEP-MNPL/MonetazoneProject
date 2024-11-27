import swift1 from "@/assets/svgs/swift-1.svg";
import {Badge} from "../../UI/Badges/Badge/Badge.tsx";
import './swiftSepaPage.scss'

export const SSPFirstSection = () => {
    return (
        <>
            <section id='1' className='SSP-first'>
                <img
                    data-aos-duration="1000"
                    data-aos='fade-right'
                    src={swift1} alt=""/>

                <div className='pageRight'>
                    <h1 data-aos-duration="1200"
                        data-aos='fade-left'
                        className="title">
                        Monetazone - решение<br />
                        ваших задач по<br />
                        Swift <span className='h1'>&</span> Sepa переводам<br />
                        по всему миру!<br />
                    </h1>

                    <div className="badges"
                         data-aos-duration="1400" data-aos='fade-left'
                    >
                        <Badge
                            targetId='2'
                            data-aos-duration="1100"
                            data-aos='fade-up'
                        >#Мир</Badge>
                        <Badge
                            targetId='3'
                            data-aos-duration="1200"
                            data-aos='fade-up'
                        >#Авто</Badge>
                        <Badge
                            targetId='4'
                            data-aos-duration="1300"
                            data-aos='fade-up'
                        >#Валюты</Badge>
                        <Badge
                            targetId='5'
                            data-aos-duration="1400"
                            data-aos='fade-up'
                        >#Бизнес</Badge>
                        <Badge
                            targetId='6'
                            data-aos-duration="1500"
                            data-aos='fade-up'
                        >#БезГраниц</Badge>
                        <Badge
                            targetId='7'
                            data-aos-duration="1600"
                            data-aos='fade-up'
                        >#Заявка</Badge>

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
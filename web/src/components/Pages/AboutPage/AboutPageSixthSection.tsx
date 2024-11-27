import {Badge} from "../../UI/Badges/Badge/Badge.tsx";
import about6 from '@/assets/svgs/about-6.svg'
export const AboutPageSixthSection = () => {
    return (
        <>
            <section id={'6'} className='aboutPage-sixth'>
                <div className="pageLeft">
                    <h2
                        data-aos-duration="1000"
                        data-aos='fade-right'>Добираться к нам удобно<br />
                        с любой точки Москвы</h2>

                    <Badge
                        data-aos-duration="1200"
                        data-aos='fade-right'>#Адрес</Badge>
                    <p
                        data-aos-duration="1400"
                        data-aos='fade-right'>Мы заботимся о времени наших клиентов, <br />
                        именно по этому вы можете добраться к нам <br />
                        быстро с любой части города.</p>

                    <p
                        data-aos-duration="1600"
                        data-aos='fade-right'>Наши офисы находятся по адресу:</p>

                    <div className="aboutBadges">
                        <Badge
                            data-aos-duration="1800"
                            data-aos='fade-right'>Южное Тушино, Строительный проезд 7а</Badge>
                        <Badge
                            data-aos-duration="2000"
                            data-aos='fade-right'>Moscow City, Башня Федерация</Badge>
                    </div>

                </div>

                <img
                    data-aos-duration="2000"
                    data-aos='fade-left'
                    src={about6} alt=""/>
            </section>
        </>
    )
}